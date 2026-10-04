# CreditRights: SEO and AI search audit

Audit date: 4 October 2026, the day creditrights.co.uk went live. Covers the code in this repository and the live site.

## Architecture (baseline)

- **Framework:** Astro, fully static (SSG). Every page's title, description, canonical, H1, body text, navigation links and JSON-LD are in the HTML the server sends. No content depends on JavaScript. The only scripts are small progressive enhancements: menus, the check flow and directory filters.
- **Hosting:** a Cloudflare Worker serves `./dist`.
  - Trailing slashes are enforced (`auto-trailing-slash`).
  - Missing pages return a real 404 page.
  - `www.creditrights.co.uk` redirects (301) to the bare domain once a DNS record exists for www.
  - HSTS is sent on the live host only.
  - Staging hosts (`*.workers.dev`, `staging.*`) send `X-Robots-Tag: noindex, nofollow` and a disallow-all robots.txt.
- **URLs:** lower case and hyphenated, with trailing slashes. The structure is flat: `/banks-and-lenders/<slug>/` is the only nested pattern. There are no query-string pages except `/check/?ref=` and `?borrow=`; `/check/` is noindexed.

## Route and indexability inventory

46 built routes; 39 are in the sitemap and indexable. There are no duplicate titles, no duplicate descriptions and no broken internal links. Every page has exactly one H1. Every indexable page has a self-referencing canonical.

| Route | Index | Main intent | Structured data | Notes |
|---|---|---|---|---|
| `/` | Yes | Overdraft refund / irresponsible lending claims (general) | Organization, WebSite, WebPage, Service, FAQPage | Main commercial page; the check sits on the page. |
| `/claim-types/` | Yes | What can be claimed for (8 product types) | WebPage, ItemList, BreadcrumbList | Hub for product types; the anchors are linked from the header. |
| `/banks-and-lenders/` | Yes | Find your lender | CollectionPage, ItemList, BreadcrumbList | Hub for the 30 lender pages. |
| `/banks-and-lenders/<slug>/` (30 pages) | Yes | "[Lender] overdraft / loan / card refund claim" | WebPage, Article (author, dates, `about` = lender with FCA FRN), FAQPage, BreadcrumbList | Facts sourced per lender; ombudsman decisions; the free route explained. |
| `/how-it-works/` | Yes | How a claim works, timescales | WebPage, BreadcrumbList | HowTo removed (see evidence log). |
| `/fees/` | Yes | Fees / fee cap | WebPage, BreadcrumbList | Title made descriptive. |
| `/faq/` | Yes | Questions about claiming | WebPage, FAQPage, BreadcrumbList | Added "Who runs CreditRights?" and "Had a letter, is it genuine?" with links. |
| `/about-us/` | Yes | Who CreditRights is | AboutPage, BreadcrumbList | Now linked from the FAQs and the letter page. |
| `/received-a-letter/` | Yes | Brand and letter queries ("CreditRights letter") | WebPage, FAQPage | Direct mail landing page; now linked from the FAQs. |
| `/contact/` | Yes | Contact | ContactPage, BreadcrumbList | No phone number, by design. |
| `/check/` | **No** (noindex, follow) | The check tool | Organization only | Thin tool page; the home page holds this intent. Removed from the sitemap. |
| Legal pages (4) | No (draft) | — | Organization only | Noindexed until the lawyer review (`LEGAL_REVIEWED`). |
| `/contact/sent/`, 404 | No | — | — | 404 has no canonical. |

**Internal links:** the header links every hub, all 8 claim types and all 30 lender pages from every page. Every indexable page is no more than two clicks from the home page. Lender pages link to the other lenders of the same type in the body text. There are no orphan pages.

**Cannibalisation:** none found. The home page (general overdraft claims), `/claim-types/` (product overview) and the lender pages (lender-specific) target different intents.

## Changes made in this pass

1. `/check/` set to `noindex, follow` and removed from the sitemap. It's a tool page with no unique information, and `?ref=` and `?borrow=` create variants of it.
2. Removed the HowTo markup from How it works.
3. Added a `Service` entity on the home page, linked to the Organization by @id. It describes what CreditRights actually does.
4. Lender `Article` markup now carries:
   - `author` (the organisation, accurately) and `datePublished`;
   - `about` set to the lender's legal entity, with its FCA FRN as an identifier and its FCA register page as `sameAs`;
   - `mentions` for the Financial Ombudsman Service.
5. The sitemap now has `lastmod`: lender pages use `UPDATED` in `src/data/lenders.ts`, and other pages use `SITE_UPDATED` in `astro.config.mjs`. **Bump these when content changes; never set them to the build date.**
6. Preloaded the Latin subset of the variable font, because the hero heading is the largest element on most pages.
7. Stopped fonts being inlined as `data:` URIs. Google's live test showed our own CSP blocking one of them.
8. Added two FAQs that state the organisation clearly (who runs CreditRights, whether the letters are genuine), with contextual links to About and Received a letter.
9. Clearer titles: "Claim fees and the regulator's fee cap" and "About CreditRights | Claim Simple Ltd".
10. Added `og:image:alt`. Removed the canonical from the 404 page.

## Live verification (4 Oct 2026)

- Google Search Console live test of `/` and `/banks-and-lenders/barclays/`: both "URL is available to Google" and "Page can be indexed". Breadcrumbs are valid. All resources loaded. HTTP 200, HSTS present, no `X-Robots-Tag`, brotli compression.
- Sitemap submitted in Search Console (`/sitemap-index.xml`). The home page was put in the priority crawl queue.
- Cloudflare AI Crawl Control:
  - no crawler is blocked, and all 19 AI-crawler requests got HTTP 200;
  - Bot Preference Sync is off, so our robots.txt is served unchanged.
- Public DNS (Google DoH) resolves creditrights.co.uk. The answers are signed but not validated (`AD: false`), so the DNSSEC DS record has not been added at the registrar (see below).

## Evidence log

| Decision | Source |
|---|---|
| No special files, schema or markup are needed for AI Overviews / AI Mode; standard SEO applies. So no `llms.txt`. | Google, "AI features and your website" (developers.google.com/search/docs/appearance/ai-features) |
| FAQ rich results were retired on 7 May 2026. We keep FAQPage only where questions are visible on the page, for machine understanding, and expect no rich result. | Google Search Central documentation updates (developers.google.com/search/updates) |
| HowTo rich results were retired (2023), and our steps describe our service rather than instructions, so the HowTo markup was removed. | Google Search Central documentation updates |
| `lastmod` must reflect real content changes. Sitemaps plus IndexNow is Bing's recommended approach for AI-powered search. | Bing Webmaster blog, July 2025, "Keeping Content Discoverable with Sitemaps in AI-Powered Search" |
| OpenAI: OAI-SearchBot (ChatGPT search, respects robots), GPTBot (training), ChatGPT-User (user-initiated; robots may not apply). | OpenAI, "Overview of OpenAI crawlers" (developers.openai.com/api/docs/bots) |
| Anthropic: Claude-SearchBot (search), Claude-User (user-initiated), ClaudeBot (training). All respect robots.txt. | Anthropic help centre article 8896518, as reported by Search Engine Journal |
| From 15 Sept 2026 Cloudflare sorts crawlers into Search, Agent and Training; search crawlers are allowed by default. | Help Net Security, 2 July 2026, Cloudflare crawler controls |

## Needs a decision or input from Jack

1. **AI model-training crawlers (policy choice).** At the moment everything is allowed: GPTBot, ClaudeBot, CCBot, Google-Extended, Meta and so on. Search and user crawlers (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User) should stay allowed for visibility. Allowing training crawlers is a separate business choice. If you'd rather block them, add `Disallow: /` groups for GPTBot, ClaudeBot, CCBot, Google-Extended and Meta-ExternalAgent in `public/robots.txt`. Blocking them doesn't affect search.
2. **Bing Webmaster Tools:** import from Google Search Console. Bing feeds ChatGPT search, Copilot, DuckDuckGo and Yahoo.
3. **Cloudflare Crawler Hints:** turn on (Caching → Configuration) to send IndexNow pings automatically.
4. **www:** add a proxied CNAME `www` → `creditrights.co.uk`, plus a route or redirect rule. The Worker already redirects www requests once they reach it.
5. **DNSSEC:** either add the DS record from Cloudflare (DNS → Settings) at IONOS, or switch DNSSEC off in Cloudflare. At present it's half set up. That's harmless, but it isn't protecting the domain.

## Opportunities not implemented (need real content, not page splitting)

- **Separate pages per claim type** (credit cards, payday loans, catalogues, guarantor loans and so on). These are distinct search intents, but at the moment each type only has a short section. Splitting that into pages would create thin pages. Worth doing once each type has substantive, sourced content: rules specific to that product, ombudsman decisions, lender lists.
- **Lender pages for more lenders**, but only where facts can be sourced as they were for the existing 30.
- **Genuine authorship / review:** if a named, qualified person reviews the content (for example a compliance lead), adding them as a reviewer would be a legitimate trust signal. Don't invent one.
- **Legal pages:** index them once they've been reviewed (`LEGAL_REVIEWED`, plus remove them from the NOINDEX list in `astro.config.mjs`).
