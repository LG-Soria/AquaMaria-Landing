const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const BRAND_NAME = 'AquaMaría';
export const SITE_URL = (env.VITE_PUBLIC_SITE_URL || 'https://www.aquamaria.com.ar').replace(/\/$/, '');
export const WHATSAPP_PHONE_E164 = '+5491165532832';
export const WHATSAPP_PHONE_DISPLAY = '11 6553-2832';
export const INSTAGRAM_URL = 'https://instagram.com/aquamariared';
export const INSTAGRAM_HANDLE = '@aquamariared';
export const SERVICE_AREA = 'CABA y Gran Buenos Aires';

export const PROPOSAL_MESSAGE =
  'Hola, quiero consultar por una solución de agua purificada para mi empresa/comercio. Estamos en [zona] y somos aproximadamente [cantidad de personas]. ¿Me pueden asesorar?';

export const WHATSAPP_PROPOSAL_URL = `https://wa.me/${WHATSAPP_PHONE_E164.replace('+', '')}?text=${encodeURIComponent(PROPOSAL_MESSAGE)}`;
