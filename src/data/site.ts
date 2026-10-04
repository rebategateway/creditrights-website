// Single source of truth for company details, partner details, figures and
// navigation. Change a fact here and it updates on every page.

export const SITE = {
  name: 'CreditRights',
  url: 'https://creditrights.co.uk',
  tagline: 'Overdraft and irresponsible lending claims',
  company: {
    legalName: 'Claim Simple Ltd',
    number: '11459714',
    frn: '830182',
    icoRef: 'ZA449298',
    jurisdiction: 'England and Wales',
    address: {
      street: 'The Old Fuel Depot, Twemlow Lane, Holmes Chapel',
      locality: 'Crewe',
      postcode: 'CW4 8GJ',
      country: 'GB',
    },
  },
} as const;

// The legal partner people are handed to at the end of the check.
// TODO before launch: confirm our referral reference and whether we can link
// straight to the sign-up step with details passed across.
export const PARTNER = {
  name: 'Recoup',
  legalName: 'Clear Legal Limited',
  sra: '469975',
  url: 'https://www.werecoup.co.uk/check/eligibility?ref=creditrights',
} as const;

// Average claim figures supplied by Recoup. Shown with a footnote marker
// that points to SOURCE_NOTE in the footer.
// TODO before launch: Recoup's written permission to use these figures.
export const AVERAGES = {
  overdraft: '£2,023',
  creditCard: '£2,043',
  personalLoan: '£881',
} as const;

export const SOURCE_NOTE =
  'Average claim figures are provided by Recoup, a trading style of Clear Legal Limited (SRA 469975), and are based on its irresponsible lending settlements on behalf of clients up to June 2026. Every claim is different: you may get back more, less or nothing.';

export const FREE_ROUTE =
  'You can complain to your bank or lender, then the Financial Ombudsman, yourself for free.';

export const PAYMENT_LINE = 'Our legal partners pay us when we introduce your claim.';

export interface Lender { name: string; slug: string; type: 'overdraft' | 'loan' | 'card' | 'other' }

// Lenders our legal partner currently acts against, plus a few we cover in
// guides. Only lenders with a page in PAGES link to their own page; the rest
// link to their entry on the banks and lenders index.
export const LENDERS: Lender[] = [
  ...['Barclays', 'Lloyds', 'Halifax', 'NatWest', 'HSBC', 'Santander', 'TSB', 'Monzo', 'Bank of Scotland', 'First Direct', 'RBS', 'Ulster Bank']
    .map((name) => ({ name, slug: slugify(name), type: 'overdraft' as const })),
  ...['Lending Stream', 'QuidMarket', 'Loans 2 Go', '118 118 Money', 'Oakbrook Finance', 'Bamboo Loans', 'Cash ASAP', 'My Finance Club', 'Lendable', 'Drafty']
    .map((name) => ({ name, slug: slugify(name), type: 'loan' as const })),
  ...['Aqua', 'Marbles', 'Fluid'].map((name) => ({ name, slug: slugify(name), type: 'card' as const })),
  ...['Vanquis', 'Capital One', 'Very', 'Littlewoods', 'Nationwide'].map((name) => ({ name, slug: slugify(name), type: 'other' as const })),
];

export const LENDER_PAGES = new Set(['barclays']);

export const lenderHref = (slug: string) =>
  LENDER_PAGES.has(slug) ? `/banks-and-lenders/${slug}/` : `/banks-and-lenders/#${slug}`;

export const TYPE_LABEL: Record<Lender['type'], string> = {
  overdraft: 'Overdrafts',
  loan: 'Personal loans',
  card: 'Credit cards',
  other: 'Other lenders',
};

export function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const NAV_MAIN = [
  { id: 'how', label: 'How it works', href: '/how-it-works/' },
  { id: 'types', label: 'Claim types', href: '/claim-types/' },
  { id: 'lenders', label: 'Banks and lenders', href: '/banks-and-lenders/' },
  { id: 'guides', label: 'Guides', href: '/guides/' },
  { id: 'faq', label: 'FAQs', href: '/faq/' },
  { id: 'about', label: 'About us', href: '/about-us/' },
] as const;

export type NavId = (typeof NAV_MAIN)[number]['id'] | 'none';

export const NAV_FOOTER = [
  {
    heading: 'Claim',
    links: [
      { label: 'Check my claim', href: '/check/' },
      { label: 'How it works', href: '/how-it-works/' },
      { label: 'Fees', href: '/fees/' },
      { label: 'FAQs', href: '/faq/' },
    ],
  },
  {
    heading: 'Claim types',
    links: [
      { label: 'Bank overdrafts', href: '/claim-types/' },
      { label: 'Credit cards', href: '/claim-types/' },
      { label: 'Personal loans', href: '/claim-types/' },
      { label: 'Payday loans', href: '/claim-types/' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Banks and lenders', href: '/banks-and-lenders/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'About us', href: '/about-us/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy-policy/' },
      { label: 'Complaints', href: '/complaints-policy/' },
      { label: 'Website terms', href: '/website-terms/' },
      { label: 'Cookies', href: '/cookie-policy/' },
    ],
  },
] as const;

// Pages that exist as placeholders on staging until their content is written.
// They carry noindex and stay out of the sitemap.
export const PLACEHOLDERS: Record<string, string> = {
  'how-it-works': 'How it works',
  'claim-types': 'Claim types',
  guides: 'Guides',
  faq: 'Frequently asked questions',
  fees: 'Fees',
  'about-us': 'About us',
  contact: 'Contact us',
  'privacy-policy': 'Privacy policy',
  'complaints-policy': 'Complaints policy',
  'website-terms': 'Website terms',
  'cookie-policy': 'Cookie policy',
};
