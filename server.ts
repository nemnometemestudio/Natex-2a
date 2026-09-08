import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Multer storage for hero video upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 150 * 1024 * 1024 } // 150MB limit
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Google OAuth Credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '485722105286-a4ntohqe41phticib0utcl5ftbf9bfcv.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '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';

// In-Memory state for tokens and synced posts
interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  userEmail: string | null;
  accountName: string | null;
  locationName: string | null;
  lastSync: string | null;
}

const authState: AuthState = {
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  userEmail: null,
  accountName: null,
  locationName: null,
  lastSync: null
};

interface SyncedGooglePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  formattedDate: string;
  author: string;
  readTimeMinutes: number;
  tags: string[];
  isGooglePost: boolean;
  googlePostUrl?: string;
  callToAction?: {
    text: string;
    link: string;
    isExternal?: boolean;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    aeoQuickAnswer?: string;
    keyTakeaways?: string[];
  };
}

let syncedPosts: SyncedGooglePost[] = [];

// Helper to determine redirect URI
function getRedirectUri(req: Request): string {
  const fwdHost = (req.headers['x-forwarded-host'] as string) || '';
  const host = req.get('host') || '';
  const referer = (req.headers.referer as string) || '';

  if (
    host.includes('natexconfeccoes.com.br') ||
    fwdHost.includes('natexconfeccoes.com.br') ||
    referer.includes('natexconfeccoes.com.br')
  ) {
    return 'https://natexconfeccoes.com.br/api/auth/google/callback';
  }

  // Default to the registered dev/preview URL
  return 'https://ais-dev-rswwmqqwravyi2gigs2lxr-189482800751.us-west1.run.app/api/auth/google/callback';
}

function buildGoogleAuthUrl(redirectUri: string): string {
  const scopes = [
    'https://www.googleapis.com/auth/business.manage',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' ');

  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  authUrl.searchParams.set('client_id', GOOGLE_CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', scopes);
  authUrl.searchParams.set('access_type', 'offline');
  authUrl.searchParams.set('prompt', 'consent');

  return authUrl.toString();
}

// ----------------------------------------------------
// 1. OAUTH ENDPOINTS (ADMIN / DIRECT ACCESS)
// ----------------------------------------------------

/**
 * Direct Login Route: Visit directly in browser to authorize Google
 */
app.get('/api/auth/google/login', (req: Request, res: Response) => {
  const redirectUri = getRedirectUri(req);
  const targetUrl = buildGoogleAuthUrl(redirectUri);
  res.redirect(targetUrl);
});

/**
 * Returns the Google OAuth consent authorization URL (JSON)
 */
app.get('/api/auth/google/url', (req: Request, res: Response) => {
  const redirectUri = getRedirectUri(req);
  const authUrl = buildGoogleAuthUrl(redirectUri);

  res.json({
    url: authUrl,
    redirectUri,
    clientId: GOOGLE_CLIENT_ID
  });
});

/**
 * OAuth Callback: Handles the code exchange from Google
 */
app.get('/api/auth/google/callback', async (req: Request, res: Response) => {
  const { code, error } = req.query;

  if (error) {
    console.error('Google OAuth callback error:', error);
    return res.redirect(`/blog?google_error=${encodeURIComponent(String(error))}`);
  }

  if (!code || typeof code !== 'string') {
    return res.redirect('/blog?google_error=no_code_provided');
  }

  try {
    const redirectUri = getRedirectUri(req);

    // Exchange authorization code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Failed to exchange token:', tokenData);
      return res.redirect(`/blog?google_error=${encodeURIComponent(tokenData.error_description || tokenData.error || 'token_exchange_failed')}`);
    }

    // Save tokens in state
    authState.accessToken = tokenData.access_token;
    if (tokenData.refresh_token) {
      authState.refreshToken = tokenData.refresh_token;
    }
    authState.expiresAt = Date.now() + (tokenData.expires_in || 3600) * 1000;

    // Get user info if possible
    try {
      const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${authState.accessToken}` }
      });
      if (userRes.ok) {
        const userData = await userRes.json();
        authState.userEmail = userData.email;
      }
    } catch (e) {
      console.warn('Could not fetch user info:', e);
    }

    // Trigger initial sync of posts in background
    await syncGoogleMyBusinessPosts();

    return res.redirect('/blog?google_connected=success');
  } catch (err: any) {
    console.error('Exception during Google callback:', err);
    return res.redirect(`/blog?google_error=${encodeURIComponent(err.message || 'callback_exception')}`);
  }
});

// ----------------------------------------------------
// 2. GOOGLE MY BUSINESS POSTS SYNC LOGIC
// ----------------------------------------------------

async function refreshAccessTokenIfNeeded(): Promise<string | null> {
  if (!authState.refreshToken) {
    return authState.accessToken;
  }

  // If token is still valid for > 2 minutes
  if (authState.accessToken && authState.expiresAt && authState.expiresAt > Date.now() + 120000) {
    return authState.accessToken;
  }

  try {
    const refreshRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        refresh_token: authState.refreshToken,
        grant_type: 'refresh_token'
      })
    });

    const refreshData = await refreshRes.json();
    if (refreshRes.ok && refreshData.access_token) {
      authState.accessToken = refreshData.access_token;
      authState.expiresAt = Date.now() + (refreshData.expires_in || 3600) * 1000;
      return authState.accessToken;
    }
  } catch (e) {
    console.error('Failed to refresh Google access token:', e);
  }

  return authState.accessToken;
}

async function syncGoogleMyBusinessPosts(): Promise<{ success: boolean; count: number; error?: string }> {
  const token = await refreshAccessTokenIfNeeded();
  if (!token) {
    return { success: false, count: 0, error: 'No active Google authentication token' };
  }

  try {
    // 1. Fetch Accounts
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${token}` }
    });

    const accountsData = await accountsRes.json();
    console.log('Google Accounts response:', accountsData);

    let fetchedPosts: SyncedGooglePost[] = [];

    if (accountsRes.ok && accountsData.accounts && accountsData.accounts.length > 0) {
      const account = accountsData.accounts[0];
      authState.accountName = account.accountName || account.name;

      // 2. Fetch Locations for account
      const locationsRes = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,storefrontAddress`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const locationsData = await locationsRes.json();
      console.log('Google Locations response:', locationsData);

      if (locationsRes.ok && locationsData.locations && locationsData.locations.length > 0) {
        for (const loc of locationsData.locations) {
          authState.locationName = loc.title || loc.name;
          
          // 3. Fetch Local Posts
          try {
            const postsRes = await fetch(
              `https://mybusiness.googleapis.com/v4/${loc.name}/localPosts`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            const postsData = await postsRes.json();
            console.log('Google Local Posts response:', postsData);

            if (postsRes.ok && postsData.localPosts && Array.isArray(postsData.localPosts)) {
              for (const p of postsData.localPosts) {
                const summary = p.summary || p.topicType || 'Atualização da Fábrica Natex';
                const firstLine = summary.split('\n')[0].replace(/[#*]/g, '').trim();
                const title = firstLine.length > 10 ? firstLine : `Novidade Natex: ${summary.slice(0, 50)}...`;
                
                const postSlug = 'google-' + (p.name ? p.name.split('/').pop() : Date.now().toString());
                const mediaUrl = p.media && p.media.length > 0 && p.media[0].googleUrl 
                  ? p.media[0].googleUrl 
                  : 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80';

                const createdTime = p.createTime ? p.createTime.split('T')[0] : new Date().toISOString().split('T')[0];

                fetchedPosts.push({
                  id: p.name || `gpost-${Date.now()}`,
                  slug: postSlug,
                  title: title,
                  excerpt: summary.slice(0, 220) + (summary.length > 220 ? '...' : ''),
                  content: summary,
                  coverImage: mediaUrl,
                  category: 'Outlet & Loja de Fábrica',
                  categorySlug: 'outlet-loja-fabrica',
                  publishedAt: createdTime,
                  formattedDate: new Date(createdTime).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  }),
                  author: 'Natex Confecções (Google Meu Negócio)',
                  readTimeMinutes: Math.max(1, Math.ceil(summary.split(/\s+/).length / 180)),
                  tags: ['Google Meu Negócio', 'Natex Navegantes', 'Novidades Fábrica', 'Loja Gravatá'],
                  isGooglePost: true,
                  googlePostUrl: p.searchUrl || 'https://maps.google.com/?cid=12648796856428785896',
                  callToAction: p.callToAction ? {
                    text: p.callToAction.actionType || 'Ver no Google',
                    link: p.callToAction.url || 'https://maps.google.com/?cid=12648796856428785896',
                    isExternal: true
                  } : {
                    text: 'Falar com a Fábrica no WhatsApp',
                    link: 'https://wa.me/5547992820556',
                    isExternal: true
                  },
                  seo: {
                    metaTitle: `${title} | Natex Confecções Navegantes`,
                    metaDescription: summary.slice(0, 160),
                    keywords: ['google meu negocio natex', 'loja de fabrica navegantes', 'uniformes gravata', 'outlet confeccao'],
                    aeoQuickAnswer: summary.slice(0, 200)
                  }
                });
              }
            }
          } catch (postErr) {
            console.warn(`Could not fetch posts for location ${loc.name}:`, postErr);
          }
        }
      }
    }

    if (fetchedPosts.length > 0) {
      syncedPosts = fetchedPosts;
    }
    authState.lastSync = new Date().toISOString();

    return { success: true, count: syncedPosts.length };
  } catch (err: any) {
    console.error('Error syncing Google My Business posts:', err);
    return { success: false, count: syncedPosts.length, error: err.message };
  }
}

// ----------------------------------------------------
// 3. PUBLIC POSTS & STATUS APIS
// ----------------------------------------------------

/**
 * Returns all synced Google posts
 */
app.get('/api/google-posts', (req: Request, res: Response) => {
  res.json({
    posts: syncedPosts,
    count: syncedPosts.length,
    lastSync: authState.lastSync,
    connected: Boolean(authState.accessToken || authState.refreshToken)
  });
});

/**
 * Returns connection and sync status
 */
app.get('/api/google-posts/status', (req: Request, res: Response) => {
  res.json({
    connected: Boolean(authState.accessToken || authState.refreshToken),
    userEmail: authState.userEmail,
    accountName: authState.accountName,
    locationName: authState.locationName,
    lastSync: authState.lastSync,
    postCount: syncedPosts.length,
    clientIdConfigured: Boolean(GOOGLE_CLIENT_ID)
  });
});

/**
 * Manually trigger sync
 */
app.post('/api/google-posts/sync', async (req: Request, res: Response) => {
  const result = await syncGoogleMyBusinessPosts();
  res.json(result);
});

/**
 * Disconnect Google Account
 */
app.post('/api/google-posts/disconnect', (req: Request, res: Response) => {
  authState.accessToken = null;
  authState.refreshToken = null;
  authState.expiresAt = null;
  authState.userEmail = null;
  authState.accountName = null;
  authState.locationName = null;
  syncedPosts = [];
  res.json({ success: true, message: 'Google account disconnected' });
});

// ----------------------------------------------------
// 3.1 HERO VIDEO MANAGEMENT & DIRECT UPLOAD APIS
// ----------------------------------------------------

/**
 * Returns current status and size of the hero video
 */
app.get('/api/video-status', (req: Request, res: Response) => {
  const publicVideoPath = path.join(process.cwd(), 'public', 'videos', 'natex-morph-hero.mp4');
  const distVideoPath = path.join(process.cwd(), 'dist', 'videos', 'natex-morph-hero.mp4');

  const exists = fs.existsSync(publicVideoPath) || fs.existsSync(distVideoPath);
  let size = 0;
  let mtime: Date | null = null;

  if (fs.existsSync(publicVideoPath)) {
    const stat = fs.statSync(publicVideoPath);
    size = stat.size;
    mtime = stat.mtime;
  } else if (fs.existsSync(distVideoPath)) {
    const stat = fs.statSync(distVideoPath);
    size = stat.size;
    mtime = stat.mtime;
  }

  const formattedSize = size > 0 ? `${(size / (1024 * 1024)).toFixed(2)} MB` : '0 MB';

  res.json({
    exists,
    size,
    formattedSize,
    path: '/videos/natex-morph-hero.mp4',
    url: '/videos/natex-morph-hero.mp4',
    lastModified: mtime ? mtime.toISOString() : null
  });
});

/**
 * Upload a new hero video file or download from a direct URL
 */
app.post('/api/upload-video', upload.single('video'), async (req: Request, res: Response) => {
  try {
    const publicDir = path.join(process.cwd(), 'public', 'videos');
    const distDir = path.join(process.cwd(), 'dist', 'videos');

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    const publicVideoPath = path.join(publicDir, 'natex-morph-hero.mp4');
    const distVideoPath = path.join(distDir, 'natex-morph-hero.mp4');

    // Case 1: Upload via file multipart
    if (req.file) {
      fs.writeFileSync(publicVideoPath, req.file.buffer);
      fs.writeFileSync(distVideoPath, req.file.buffer);

      return res.json({
        success: true,
        message: 'Vídeo atualizado com sucesso!',
        size: req.file.size,
        formattedSize: `${(req.file.size / (1024 * 1024)).toFixed(2)} MB`,
        url: '/videos/natex-morph-hero.mp4?v=' + Date.now()
      });
    }

    // Case 2: Upload via remote video URL
    const { videoUrl } = req.body;
    if (videoUrl && typeof videoUrl === 'string') {
      let downloadUrl = videoUrl.trim();

      // Transform Google Drive share URL to direct download URL if applicable
      if (downloadUrl.includes('drive.google.com')) {
        const fileIdMatch = downloadUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || downloadUrl.match(/id=([a-zA-Z0-9_-]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
          downloadUrl = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
        }
      } else if (downloadUrl.includes('dropbox.com')) {
        downloadUrl = downloadUrl.replace('?dl=0', '?dl=1');
      }

      const response = await fetch(downloadUrl);
      if (!response.ok) {
        return res.status(400).json({
          success: false,
          error: `Falha ao baixar vídeo da URL fornecida (HTTP ${response.status})`
        });
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      fs.writeFileSync(publicVideoPath, buffer);
      fs.writeFileSync(distVideoPath, buffer);

      return res.json({
        success: true,
        message: 'Vídeo importado da URL com sucesso!',
        size: buffer.length,
        formattedSize: `${(buffer.length / (1024 * 1024)).toFixed(2)} MB`,
        url: '/videos/natex-morph-hero.mp4?v=' + Date.now()
      });
    }

    return res.status(400).json({
      success: false,
      error: 'Nenhum arquivo de vídeo ou URL foi enviado.'
    });
  } catch (err: any) {
    console.error('Error handling video upload:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Erro ao processar o vídeo'
    });
  }
});

// ----------------------------------------------------
// 4. VITE DEV MIDDLEWARE / STATIC FILES PROD
// ----------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Natex Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
