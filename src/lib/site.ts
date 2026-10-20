/**
 * Site-wide settings. Swap this module for a CMS-driven config later
 * (e.g. Sanity singleton, Contentful entry) without changing templates.
 */
export const site = {
  name: 'Metavera Investment Limited',
  shortName: 'Metavera',
  tagline: 'Premium Real Estate in Nigeria',
  description:
    'Metavera Investment Limited delivers exceptional real estate assets and sustainable land and housing opportunities across strategic growth corridors in Nigeria.',
  url: 'https://metaveraltd.com',
  email: 'Metaverainvestmentltd@gmail.com',
  phones: [
    { display: '0803 316 7061', tel: '+2348033167061' },
    { display: '0907 896 6311', tel: '+2349078966311' },
    { display: '0916 677 2884', tel: '+2349166772884' },
  ],
  phoneDisplay: '0803 316 7061',
  phoneTel: '+2348033167061',
  whatsapp: '2348033167061',
  address: {
    headOffice: {
      city: 'Abuja',
      label: 'Head Office (Abuja)',
      line: 'No. 9 Oshogbo Close, Off Emeka Anyaoku Street, Area 11 Garki, Opposite Nicon Luxury Hotel, Abuja FCT',
    },
    branchOffice: {
      city: 'Port Harcourt',
      label: 'Branch Office (Port Harcourt)',
      line: 'No. 1 Igbogo Orotor, Rumuokparali/Rumuokwachi Layout, Rumuokparali Town, Obio/Akpor LGA, Rivers State, Port Harcourt',
    },
  },
  vision:
    'To be West Africa’s most trusted real estate Company, redefining modern urban living through sustainable infrastructure, value-driven properties, and architectural excellence for wealth creation and civil transformation.',
  mission:
    'To deliver exceptional real estate assets and sustainable land and housing opportunities across strategic growth corridors and partnerships in Nigeria.',
  coreValuesStatement:
    'We shall deliver satisfaction to our clients through Professionalism, Innovation, Transparency, Reliability, Respect, Integrity, Leadership, Customer focus, Disciplined Project delivery and Investor alignment.',
  coreValues: [
    { num: '01', title: 'Professionalism', text: 'High standards of conduct, clear communication, and expert advisory across every stage of your property transaction.' },
    { num: '02', title: 'Innovation', text: 'Modern urban planning, forward-looking infrastructure, and adaptable solutions tailored to evolving real estate demands.' },
    { num: '03', title: 'Transparency', text: 'Clear titles, straightforward documentation, and open processes with no hidden fees or ambiguity.' },
    { num: '04', title: 'Reliability', text: 'Dependable timelines, consistent quality, and commitments we stand behind from allocation to handover.' },
    { num: '05', title: 'Respect', text: 'Valuing every client, partner, and host community with fairness, dignity, and mutual trust.' },
    { num: '06', title: 'Integrity', text: 'Honest dealings, verified statutory documentation, and ethical governance in every investment we manage.' },
    { num: '07', title: 'Leadership', text: 'Setting benchmarks in West African real estate through bold vision, civil transformation, and architectural excellence.' },
    { num: '08', title: 'Customer Focus', text: 'Personalised support and tailored property opportunities designed around each buyer’s goals.' },
    { num: '09', title: 'Disciplined Project Delivery', text: 'Rigorous engineering oversight, milestone accountability, and strict adherence to structural standards.' },
    { num: '10', title: 'Investor Alignment', text: 'Structuring sustainable land and housing assets in strategic growth corridors for long-term wealth creation.' },
  ],
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
    'https://www.google.com/maps?q=9+Oshogbo+Close+Area+11+Garki+Abuja&output=embed',
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
