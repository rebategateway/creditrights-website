// /llms.txt: a plain-text summary of the site for AI tools that look for one
// (llmstxt.org). Google says it doesn't use it; it's here for others. Built
// from the same data as the pages, so the lender list can't drift.
import type { APIRoute } from 'astro';
import { FREE_ROUTE, LENDERS, NAV_CLAIMS, PARTNER, PAYMENT_LINE, SITE, TYPE_LABEL, lenderHref } from '../data/site';
import type { LenderType } from '../data/lenders';

const u = (path: string) => `${SITE.url}${path}`;
const c = SITE.company;

export const GET: APIRoute = () => {
  const types = Object.keys(TYPE_LABEL) as LenderType[];
  const lenders = types
    .map((t) => [`### ${TYPE_LABEL[t]}`, ...LENDERS.filter((l) => l.type === t).map((l) => `- [${l.name}](${u(lenderHref(l.slug))})`)].join('\n'))
    .join('\n\n');

  const body = `# ${SITE.name}

> ${SITE.name} helps people in the UK check whether they could claim back interest and charges on credit they couldn't afford: bank overdrafts, credit and store cards, personal and payday loans, catalogue accounts, and guarantor, doorstep and logbook loans. It is a trading name of ${c.legalName} (FCA FRN ${c.frn}, company ${c.number}), which introduces eligible people to ${PARTNER.name} (${PARTNER.legalName}, SRA ${PARTNER.sra}) to run their claim.

Key facts:

- ${FREE_ROUTE} A claims firm is not needed.
- ${PAYMENT_LINE}
- If a claim succeeds, ${PARTNER.name}'s fee is a percentage of the refund within the regulator's cap: 36% (max £504) on refunds up to £1,499, falling to 18% (max £12,000) on £50,000 or more, including VAT. Charges can also apply if you cancel after the 14-day cooling-off period. Full details: ${u('/fees/')}
- Our check takes about a minute and involves no credit check.
- There is no phone line; contact is by email (${SITE.email}) or post.

## Main pages

- [Home and claim check](${u('/')}): who can claim and how to start
- [What you can claim for](${u('/claim-types/')}): the eight types of lending covered
- [How it works](${u('/how-it-works/')}): the steps and typical timescales
- [Fees](${u('/fees/')}): the success-fee bands and when fees apply
- [FAQs](${u('/faq/')}): common questions, including the free route
- [About us](${u('/about-us/')}): who runs ${SITE.name} and how we are paid
- [Received a letter?](${u('/received-a-letter/')}): for people who have had a letter from us
- [Contact](${u('/contact/')})

## Claim types

${NAV_CLAIMS.map((t) => `- [${t.label}](${u(t.href)})`).join('\n')}

## Banks and lenders

Each page covers the lender's legal entity and FCA number, what counts as irresponsible lending for that product, and how to complain for free.

${lenders}

## Optional

- [All banks and lenders](${u('/banks-and-lenders/')})
- [Sitemap](${u('/sitemap-index.xml')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
