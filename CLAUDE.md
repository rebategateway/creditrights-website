# CreditRights website

Handover, status and open items: the "creditrights-status-memo" in the Claim Simple / CMC project notes.

## Compliance rule (Jack, 4 Oct 2026)
Commercial first, compliant to the letter. Include exactly what the rules require (CMCOB, consumer protection law, PECR/UK GDPR) and nothing beyond it. Don't add extra warnings, caveats, discouragement or disclosures that the rules don't require and that work against conversion. If unsure whether something is required, check the rule and cite it rather than adding it "to be safe".

Required wording already in use, keep as is: `FREE_ROUTE` and `PAYMENT_LINE` in `src/data/site.ts`, and the fee caps on `/fees/`.

## Letter mailings (copied from Report Repair, 17 Oct 2026)
- Letters print the reference top right as `CR-` + 8 random digits (never sequential: a sequential reference would show a neighbour's name and address) and send people to creditrights.co.uk/letter, which redirects to `/received-a-letter/`.
- `/received-a-letter/` checks the reference with `/api/letter` (`worker/letter.ts`) before sending people to the check; unknown references get an error, with "Lost your letter? Start without a reference". Failed lookups are limited to 10 per device per hour (`letter_lookups`, hashed IP).
- The check's first step for a found reference (`/check/?ref=`, step "letter") shows "Hello [Title] [Surname]", the address we wrote to and why we wrote; "What did you borrow?" chips answer question 1; "Yes, that's me" fills in the name for the details form (used once `LEADS_LIVE` is on).
- Stop our letters: `/opt-out/` (footer, letter page, contact page, privacy policy) posts to `/api/opt-out/` (`worker/optout.ts`) → Supabase `opt_outs`, plus an email to `CONTACT_TO` once Resend is set up. Every mailing file is checked against `opt_outs` before it goes to the mailhouse.
- Data: Supabase tables in `supabase/schema.sql`. The Worker needs `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` (Cloudflare → Worker → Settings → Variables and Secrets; Jack sets these). Until they're set, every reference is let through to the check without a lookup.
- Mailing file process: `scripts/mailing.py` (same as Report Repair's, with `CR-`). It drops opt-outs, duplicates and rows without an address or valid postcode, adds random references, and writes the mailhouse file, an excluded list and `letters` inserts in 1,000-row SQL files. Load the SQL, check the row count, then send the mailhouse file. Delete the test record 73519046 when the first real file loads.
- Where letter data comes from is stated in the letter itself, not on the site (as on Report Repair). Lawful basis for letters: legitimate interests.
- Retention (privacy policy, 17 Oct 2026): letters 12 months from the letter date; do-not-mail list while we send letters; failed lookups 30 days; introductions, consents and complaints six years. A daily pg_cron job in Supabase (`creditrights-retention`, end of `supabase/schema.sql`) deletes old lookups and letters. Legal pages reviewed by the lawyer (`LEGAL_REVIEWED = true`, 17 Oct 2026).
