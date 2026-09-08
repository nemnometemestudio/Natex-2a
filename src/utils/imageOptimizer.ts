/**
 * Utility to optimize remote and Unsplash image URLs for lightning-fast loading
 */
export function getOptimizedImageUrl(url: string, width = 600, quality = 70): string {
  if (!url) return '';
  if (url.includes('images.unsplash.com')) {
    try {
      const parsed = new URL(url);
      parsed.searchParams.set('w', width.toString());
      parsed.searchParams.set('q', quality.toString());
      parsed.searchParams.set('auto', 'format');
      parsed.searchParams.set('fit', 'crop');
      return parsed.toString();
    } catch {
      return url.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, `q=${quality}`);
    }
  }
  return url;
}
