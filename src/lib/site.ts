/**
 * Site-wide settings. Swap this module for a CMS-driven config later
 * (e.g. Sanity singleton, Contentful entry) without changing templates.
 */
export const site = {
  name: 'Metavera Ltd',
  shortName: 'Metavera',
  tagline: 'Premium Real Estate in Nigeria',
  description:
    'Metavera Ltd is a leading Nigerian real estate company delivering residential, commercial, and land investment opportunities with transparency and quality.',
  url: 'https://metaveraltd.com',
  email: 'hello@metaveraltd.com',
  salesEmail: 'sales@metaveraltd.com',
  phoneDisplay: '+234 (0) 800 META VERA',
  phoneTel: '+2348001234567',
  phoneSecondary: '+234 (0) 912 345 6789',
  whatsapp: '2348001234567',
  address: {
    lagos: '15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    abuja: 'Suite 4B, Plot 774 Cadastral Zone, Maitama District, Abuja, FCT',
  },
  hours: {
    weekdays: 'Mon – Fri: 8:00am – 6:00pm',
    saturday: 'Saturday: 9:00am – 3:00pm',
  },
  social: {
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.727!2d3.461!3d6.430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDgiLjAiTiAzwrAyNyc0MiI0IkU!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng',
  /** Set PUBLIC_FORM_ENDPOINT in .env for Formspree / Web3Forms / custom API */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  stats: [
    { value: 38, suffix: '', label: 'Projects Delivered' },
    { value: 1200, suffix: '', label: 'Happy Clients' },
    { value: 9, suffix: '', label: 'Years Active' },
    { value: 6, suffix: '', label: 'Cities Covered' },
  ],
  aboutStats: [
    { value: '38+', label: 'Projects Delivered' },
    { value: '₦42B', label: 'Portfolio Value' },
    { value: '1,200+', label: 'Happy Clients' },
    { value: '6', label: 'States Active' },
  ],
} as const;

export type SiteConfig = typeof site;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
