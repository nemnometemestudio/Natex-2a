/**
 * Analytics and conversion tracking dispatcher
 * Configurable for Google Analytics 4, Meta Pixel, and GTM.
 */

export interface AnalyticsConfig {
  gaMeasurementId?: string;
  gtmId?: string;
  metaPixelId?: string;
  debugMode?: boolean;
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  // Insert keys here when provisioned in production:
  gaMeasurementId: '',
  gtmId: '',
  metaPixelId: '',
  debugMode: process.env.NODE_ENV === 'development',
};

export type EventType =
  | 'whatsapp_click'
  | 'quote_modal_open'
  | 'quote_form_submit'
  | 'catalog_view_item'
  | 'category_click'
  | 'portfolio_filter'
  | 'phone_click'
  | 'maps_click'
  | 'download_brochure'
  | 'instagram_post_click'
  | 'instagram_follow_click'
  | 'outlet_article_click'
  | 'blog_category_filter'
  | 'blog_post_click'
  | 'blog_share_copy'
  | 'blog_share_whatsapp';

export const trackEvent = (
  eventName: EventType,
  properties: Record<string, string | number | boolean | undefined> = {}
) => {
  if (ANALYTICS_CONFIG.debugMode) {
    console.log(`[Natex Analytics] Event: ${eventName}`, properties);
  }

  // Google Tag Manager / GA4 dataLayer push if available
  if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }

  // Meta Pixel trackCustom if available
  if (typeof window !== 'undefined' && (window as unknown as { fbq?: (action: string, event: string, params: object) => void }).fbq) {
    (window as unknown as { fbq: (action: string, event: string, params: object) => void }).fbq('trackCustom', eventName, properties);
  }
};

export const createWhatsAppLink = (message: string, origin: string = 'geral'): string => {
  const phone = '5547992820556';
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
};
