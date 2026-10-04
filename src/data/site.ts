// Single source of truth for company details, partner details, figures and
// navigation. Change a fact here and it updates on every page.

export const SITE = {
  name: 'CreditRights',
  url: 'https://creditrights.co.uk',
  tagline: 'Overdraft and irresponsible lending claims',
  // TODO before launch: create this IONOS mailbox.
  email: 'support@creditrights.co.uk',
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

import { LENDER_INFO } from './lenders';
import type { LenderType } from './lenders';

export interface Lender { name: string; slug: string; type: LenderType; featured?: boolean; aliases?: string[] }

// Every lender with a page, in display order. Facts live in ./lenders.ts.
export const LENDERS: Lender[] = LENDER_INFO.map(({ name, slug, type, featured, aliases }) => ({ name, slug, type, featured, aliases }));

export const lenderHref = (slug: string) => `/banks-and-lenders/${slug}/`;

export const TYPE_LABEL: Record<LenderType, string> = {
  overdraft: 'Overdrafts',
  loan: 'Personal loans',
  card: 'Credit cards',
  catalogue: 'Catalogues',
};

export function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Header menus. Top-level items open panels; every page they link to is also in the footer.
export const NAV_CLAIMS = [
  { label: 'Bank overdrafts', desc: 'In the red most months', href: '/claim-types/#overdrafts' },
  { label: 'Credit and store cards', desc: 'Limits that kept going up', href: '/claim-types/#cards' },
  { label: 'Personal loans', desc: 'Repayments you couldn’t afford', href: '/claim-types/#personal-loans' },
  { label: 'Payday loans', desc: 'One loan after another', href: '/claim-types/#payday-loans' },
  { label: 'Catalogue accounts', desc: 'Shop now, pay later', href: '/claim-types/#catalogue' },
  { label: 'Guarantor loans', desc: 'For borrowers and guarantors', href: '/claim-types/#guarantor-loans' },
  { label: 'Doorstep loans', desc: 'Home credit', href: '/claim-types/#doorstep-loans' },
  { label: 'Logbook loans', desc: 'Secured on your car', href: '/claim-types/#logbook-loans' },
] as const;

export const NAV_HELP = [
  { id: 'faq', label: 'FAQs', desc: 'Answers to common questions', href: '/faq/' },
  { id: 'fees', label: 'Fees', desc: 'What our partner charges if you win', href: '/fees/' },
  { id: 'about', label: 'About us', desc: 'Who we are and how we’re paid', href: '/about-us/' },
  { id: 'contact', label: 'Contact', desc: 'Email or write to us', href: '/contact/' },
] as const;

export const LETTER = { label: 'Received a letter?', href: '/received-a-letter/' } as const;

export type NavId = 'types' | 'lenders' | 'how' | (typeof NAV_HELP)[number]['id'] | 'none';

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
      { label: 'Bank overdrafts', href: '/claim-types/#overdrafts' },
      { label: 'Credit and store cards', href: '/claim-types/#cards' },
      { label: 'Personal loans', href: '/claim-types/#personal-loans' },
      { label: 'Payday loans', href: '/claim-types/#payday-loans' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Received a letter?', href: '/received-a-letter/' },
      { label: 'Banks and lenders', href: '/banks-and-lenders/' },
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
export const PLACEHOLDERS: Record<string, string> = {};

// Legal pages are drafts until a lawyer has reviewed them. While false they
// carry noindex and show a draft banner.
export const LEGAL_REVIEWED = false;
