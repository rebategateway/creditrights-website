// Claim-type guide pages, /claim-types/<slug>/. One shared template
// (src/pages/claim-types/[slug].astro); the words on each page are written
// for that product alone. Every rule, date and decision here has a source in
// the page's `sources` list: check it before changing a fact.
import type { Decision } from './lenders';

export interface ClaimDecision extends Decision { business: string }

export interface ClaimType {
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** The short answer in the hero. */
  answer: string;
  /** Option pre-selected in the check. */
  borrow: string;
  /** Four facts under the hero. `avg` marks a figure with the Recoup footnote. */
  facts: { label: string; value: string; avg?: boolean }[];
  /** "What counts as unaffordable … lending": opening paragraphs. */
  intro: string[];
  /** The rules lenders have to follow, with when each started. */
  rules: { when: string; text: string }[];
  /** Signs you could have a claim, each with a line of explanation. */
  signs: { title: string; text: string }[];
  putRight: { title: string; rows: [string, string, boolean][]; paras: string[] };
  decisions: ClaimDecision[];
  /** Heading for the lender list; omitted when there are no lender pages. */
  lendersHeading?: string;
  /** Extra section for anything distinctive about this product. */
  extra?: { id: string; heading: string; paras: string[] };
  faqs: { q: string; a: string }[];
  /** "How to complain …" paragraphs (the free route). */
  complain: string[];
  sources: { label: string; url: string }[];
  /** Date the facts were last checked (YYYY-MM-DD). */
  checked: string;
}

export const CLAIM_TYPES: ClaimType[] = [];

export const claimType = (slug: string) => CLAIM_TYPES.find((c) => c.slug === slug);
