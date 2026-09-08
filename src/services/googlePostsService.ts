import { BlogPost } from '../types';
import { INITIAL_BLOG_POSTS } from '../data/blogData';

/**
 * Service to retrieve blog posts and factory articles
 */
export class GooglePostsService {
  /**
   * Calculates reading time in minutes based on average 180 words/minute
   */
  public static calculateReadingTime(content: string): number {
    if (!content) return 1;
    const cleanText = content.replace(/[#*`_\[\]()]/g, ' ').trim();
    const wordCount = cleanText.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 180));
  }

  /**
   * Formats ISO or YYYY-MM-DD date string to Brazilian Portuguese
   */
  public static formatDateToPTBR(dateString: string): string {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Recentemente';
      }
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return 'Recentemente';
    }
  }

  /**
   * Generates a URL-friendly slug from title
   */
  public static slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  /**
   * Returns all blog posts synchronously from memory with zero latency
   */
  public static getInitialPosts(): BlogPost[] {
    return INITIAL_BLOG_POSTS;
  }

  /**
   * Returns all blog posts (synchronous in-memory lookup, instant load)
   */
  public static async getAllBlogPosts(): Promise<{ posts: BlogPost[]; hasGoogleSync: boolean; googlePostsCount: number }> {
    return {
      posts: INITIAL_BLOG_POSTS,
      hasGoogleSync: false,
      googlePostsCount: 0
    };
  }

  /**
   * Retrieves single blog post by slug instantly from in-memory index
   */
  public static async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return INITIAL_BLOG_POSTS.find(p => p.slug === slug);
  }

  /**
   * Get Google connection & sync status
   */
  public static async getSyncStatus(): Promise<{
    connected: boolean;
    userEmail?: string;
    accountName?: string;
    locationName?: string;
    lastSync?: string;
    postCount: number;
    clientIdConfigured: boolean;
  }> {
    try {
      const response = await fetch('/api/google-posts/status');
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.warn('Error fetching Google status:', e);
    }
    return {
      connected: false,
      postCount: 0,
      clientIdConfigured: true
    };
  }

  /**
   * Trigger Google OAuth login flow
   */
  public static async startGoogleAuth(): Promise<void> {
    try {
      const response = await fetch('/api/auth/google/url');
      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        }
      }
    } catch (e) {
      console.error('Failed to get Google auth URL:', e);
    }
  }

  /**
   * Trigger manual sync
   */
  public static async triggerSync(): Promise<{ success: boolean; count: number; error?: string }> {
    try {
      const response = await fetch('/api/google-posts/sync', { method: 'POST' });
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.error('Failed to trigger Google sync:', e);
    }
    return { success: false, count: 0, error: 'Erro de comunicação com o servidor' };
  }
}

