import { OutletInstagramPost, OUTLET_INSTAGRAM_POSTS, OUTLET_INFO } from '../data/outletData';

export interface InstagramFeedConfig {
  feedUrl?: string;
  accessToken?: string;
  autoRefreshIntervalMinutes?: number;
}

const STORAGE_KEY_POSTS = 'natex_instagram_posts_cache';
const STORAGE_KEY_LAST_SYNC = 'natex_instagram_last_sync';
const STORAGE_KEY_CONFIG = 'natex_instagram_config';

/**
 * Service to handle real-time Instagram synchronization for @natexoutlet
 */
export class InstagramService {
  /**
   * Fetches latest 9 posts either from configured live endpoint or fallback dataset
   */
  static async getLatestPosts(): Promise<{ posts: OutletInstagramPost[]; isLive: boolean; lastSync: string }> {
    const config = this.getConfig();
    const cachedPosts = this.getCachedPosts();
    const lastSync = localStorage.getItem(STORAGE_KEY_LAST_SYNC) || 'Recente';

    // If custom API endpoint or token is provided, attempt live fetch
    if (config.feedUrl || config.accessToken) {
      try {
        const livePosts = await this.fetchFromApi(config);
        if (livePosts && livePosts.length > 0) {
          const top9 = livePosts.slice(0, 9);
          this.saveCache(top9);
          return { posts: top9, isLive: true, lastSync: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) };
        }
      } catch (err) {
        console.warn('Could not fetch live Instagram feed, using cached/curated posts:', err);
      }
    }

    if (cachedPosts && cachedPosts.length > 0) {
      return { posts: cachedPosts.slice(0, 9), isLive: false, lastSync };
    }

    return { posts: OUTLET_INSTAGRAM_POSTS.slice(0, 9), isLive: false, lastSync };
  }

  /**
   * Live API fetch implementation supporting Graph API or JSON Feed bridges (Behold, RSS2JSON, Elfsight)
   */
  private static async fetchFromApi(config: InstagramFeedConfig): Promise<OutletInstagramPost[]> {
    let url = config.feedUrl;

    if (!url && config.accessToken) {
      url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${config.accessToken}&limit=9`;
    }

    if (!url) return [];

    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    // Standard Graph API format
    if (data.data && Array.isArray(data.data)) {
      return data.data.map((item: any) => ({
        id: item.id || `ig-${Math.random()}`,
        imageUrl: item.media_url || item.thumbnail_url || '',
        caption: item.caption || 'Publicação de moda direto da fábrica Natex Outlet Navegantes.',
        likes: item.like_count || Math.floor(Math.random() * 150) + 120,
        comments: item.comments_count || Math.floor(Math.random() * 25) + 10,
        tags: ['#NatexOutlet', '#NavegantesSC', '#ModaDiretoDeFabrica'],
        postUrl: item.permalink || OUTLET_INFO.instagramUrl,
        category: this.guessCategory(item.caption || ''),
        dateDisplay: this.formatRelativeDate(item.timestamp),
      }));
    }

    // Behold / standard array format
    if (Array.isArray(data)) {
      return data.map((item: any) => ({
        id: item.id || `ig-${Math.random()}`,
        imageUrl: item.mediaUrl || item.imageUrl || item.thumbnailUrl || '',
        caption: item.caption || item.text || 'Novidade em @natexoutlet',
        likes: item.likes || 180,
        comments: item.comments || 22,
        tags: ['#NatexOutlet', '#PrecoDeFabrica'],
        postUrl: item.permalink || item.url || OUTLET_INFO.instagramUrl,
        category: this.guessCategory(item.caption || ''),
        dateDisplay: this.formatRelativeDate(item.timestamp || item.createdAt),
      }));
    }

    return [];
  }

  private static guessCategory(caption: string): 'feminina' | 'masculina' | 'infantil' | 'loja' | 'promocao' {
    const lower = caption.toLowerCase();
    if (lower.includes('vestido') || lower.includes('feminina') || lower.includes('blusa') || lower.includes('saia')) return 'feminina';
    if (lower.includes('camisa') || lower.includes('polo') || lower.includes('masculin') || lower.includes('bermuda')) return 'masculina';
    if (lower.includes('infantil') || lower.includes('crian') || lower.includes('kids') || lower.includes('beb')) return 'infantil';
    if (lower.includes('promo') || lower.includes('desconto') || lower.includes('oferta') || lower.includes('liquida')) return 'promocao';
    return 'loja';
  }

  private static formatRelativeDate(dateStr?: string): string {
    if (!dateStr) return 'Recente';
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);

      if (diffHours < 24) return 'Hoje';
      if (diffDays === 1) return 'Ontem';
      if (diffDays < 7) return `Há ${diffDays} dias`;
      return 'Há 1 semana';
    } catch {
      return 'Recente';
    }
  }

  static getConfig(): InstagramFeedConfig {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (stored) return JSON.parse(stored);
    } catch {}
    return {
      feedUrl: (import.meta as any).env?.VITE_INSTAGRAM_FEED_URL || '',
      accessToken: (import.meta as any).env?.VITE_INSTAGRAM_ACCESS_TOKEN || '',
    };
  }

  static saveConfig(config: InstagramFeedConfig): void {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
  }

  private static getCachedPosts(): OutletInstagramPost[] | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY_POSTS);
      if (data) return JSON.parse(data);
    } catch {}
    return null;
  }

  private static saveCache(posts: OutletInstagramPost[]): void {
    try {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
      localStorage.setItem(STORAGE_KEY_LAST_SYNC, new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    } catch {}
  }
}
