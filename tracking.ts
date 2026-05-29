export const CAMPAIGN_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
] as const;

type CampaignParamKey = (typeof CAMPAIGN_PARAM_KEYS)[number];
type TrackingValue = string | number | boolean | null | undefined;

export type TrackingParams = Record<string, TrackingValue>;

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push?: MetaPixelFunction;
  loaded?: boolean;
  version?: string;
  queue?: IArguments[];
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: MetaPixelFunction;
    _fbq?: Window['fbq'];
  }
}

const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
let marketingPixelsInitialized = false;

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const normalizeUrl = (pageUrl?: string) => {
  if (pageUrl) return new URL(pageUrl);
  if (isBrowser()) return new URL(window.location.href);
  return new URL('https://www.aquamaria.com.ar/');
};

const loadScript = (id: string, src: string) => {
  if (!isBrowser() || document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const cleanParams = (params: TrackingParams) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  ) as TrackingParams;

export const getCampaignParams = (search = isBrowser() ? window.location.search : '') => {
  const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);

  return CAMPAIGN_PARAM_KEYS.reduce((campaign, key) => {
    const value = params.get(key);
    if (value) campaign[key] = value;
    return campaign;
  }, {} as Partial<Record<CampaignParamKey, string>>);
};

export const buildEventParams = (params: TrackingParams = {}, pageUrl?: string): TrackingParams => {
  const url = normalizeUrl(pageUrl);

  return cleanParams({
    page_path: url.pathname,
    page_location: url.href,
    ...getCampaignParams(url.search),
    ...params,
  });
};

export const initMarketingPixels = () => {
  if (!isBrowser() || marketingPixelsInitialized) return;

  const gtmId = env.VITE_PUBLIC_GTM_ID;
  const gaId = env.VITE_PUBLIC_GA_ID;
  const metaPixelId = env.VITE_PUBLIC_META_PIXEL_ID;

  window.dataLayer = window.dataLayer || [];

  if (gtmId) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript('aquamaria-gtm', `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
  }

  if (gaId) {
    loadScript('aquamaria-ga4', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer?.push(arguments as unknown as TrackingParams);
      };
    window.gtag('js', new Date());
    window.gtag('config', gaId, buildEventParams());
  }

  if (metaPixelId) {
    window.fbq =
      window.fbq ||
      function fbq() {
        window.fbq?.callMethod
          ? window.fbq.callMethod(...arguments)
          : window.fbq?.queue?.push(arguments);
      };
    window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    loadScript('aquamaria-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', metaPixelId);
    window.fbq('track', 'PageView');
  }

  marketingPixelsInitialized = true;
};

export const trackEvent = (eventName: string, params: TrackingParams = {}) => {
  if (!isBrowser()) return;

  const eventParams = buildEventParams(params);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventParams });
  window.gtag?.('event', eventName, eventParams);
  window.fbq?.('trackCustom', eventName, eventParams);
};

export const trackCtaClick = (params: TrackingParams) => {
  trackEvent('cta_click', params);
};

export const trackWhatsAppClick = (params: TrackingParams = {}) => {
  trackEvent('whatsapp_click', { contact_type: 'whatsapp', ...params });
  trackEvent('primary_conversion', { conversion_type: 'whatsapp_lead', ...params });
};
