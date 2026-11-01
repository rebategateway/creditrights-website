// Lender facts for /banks-and-lenders/<slug>/.
// Every fact here comes from a source listed against the lender (researched
// 4 October 2026). Check the source before changing a fact. Rates change:
// re-check them when you update `updated`.

export type LenderType = 'overdraft' | 'card' | 'payday' | 'loan' | 'catalogue' | 'guarantor' | 'doorstep' | 'logbook' | 'carfinance' | 'bnpl';

export interface Decision {
  ref: string;
  outcome: 'Upheld' | 'Partly upheld' | 'Not upheld';
  summary: string;
  url: string;
}

export interface LenderInfo {
  slug: string;
  name: string;
  type: LenderType;
  /** Other names people search for. */
  aliases?: string[];
  /** The company that provides the credit. */
  entity: string;
  frn: string;
  companyNo?: string;
  group?: string;
  products: string;
  status: string;
  /** Short paragraphs for "Who are X?". */
  about: string[];
  /** Highlighted note, e.g. a rebrand or change of owner. */
  note?: { title: string; text: string };
  complaintsUrl?: string;
  decisions: Decision[];
  /** Extra lender-specific questions. */
  faqs?: { q: string; a: string }[];
  title?: string;
  h1?: string;
  description?: string;
  sources: { label: string; url: string }[];
  /** Shown on the homepage directory (first 12 overdraft banks). */
  featured?: boolean;
  /** Date this lender's facts were last checked, if later than UPDATED. */
  checked?: string;
}

const FOS = (ref: string) => `https://www.financial-ombudsman.org.uk/decision/${ref}.pdf`;

export const UPDATED = '2026-10-04';

// When the lender page template last changed in a way readers and search
// engines see (used for the sitemap's lastmod, not the page's "Updated" date).
export const TEMPLATE_CHANGED = '2026-11-01';

export const LENDER_INFO: LenderInfo[] = [
  // ---------------------------------------------------------------- overdrafts
  {
    slug: 'barclays', name: 'Barclays', type: 'overdraft', featured: true,
    entity: 'Barclays Bank UK PLC', frn: '759676', companyNo: '09740322', group: 'Barclays PLC',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'Barclays is one of the UK’s largest high street banks. Its personal current accounts and overdrafts are provided by Barclays Bank UK PLC, the ring-fenced bank owned by Barclays PLC. Barclaycard credit cards come from the same company.',
      'In December 2020 the FCA fined Barclays £26 million over how it treated customers who were in arrears or financial difficulty between 2014 and 2018. More than £273 million was paid back to customers on at least 1.5 million accounts.',
    ],
    complaintsUrl: 'https://www.barclays.co.uk/complaints/',
    decisions: [
      { ref: 'DRN-4501274', outcome: 'Upheld', summary: 'The bank should not have raised the limit to £5,000 in September 2017, and should have stepped in by September 2018. It was told to refund interest and charges on the balance above £4,200 from September 2017, and all of them from September 2018.', url: FOS('DRN-4501274') },
      { ref: 'DRN-5835365', outcome: 'Upheld', summary: 'A long-running student account overdraft: the bank failed to act on signs of financial difficulty once interest started being charged in March 2023.', url: FOS('DRN-5835365') },
      { ref: 'DRN-5976330', outcome: 'Not upheld', summary: 'The overdraft had stayed interest-free, so there was no loss to put right.', url: FOS('DRN-5976330') },
    ],
    sources: [
      { label: 'FCA: FCA fines Barclays £26m over treatment of customers in financial difficulty', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-barclays-treatment-customers-financial-difficulty' },
      { label: 'Barclays: site terms (company details)', url: 'https://www.barclays.co.uk/important-information/site-terms-conditions/' },
      { label: 'Barclays: complaints', url: 'https://www.barclays.co.uk/complaints/' },
    ],
  },
  {
    slug: 'lloyds', name: 'Lloyds', type: 'overdraft', featured: true, aliases: ['Lloyds Bank'],
    entity: 'Lloyds Bank plc', frn: '119278', companyNo: '00002065', group: 'Lloyds Banking Group',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'Lloyds is the main high street brand of Lloyds Banking Group, which also owns Halifax, Bank of Scotland and MBNA. From July 2026 Halifax customers in England, Wales and Northern Ireland are moving over to the Lloyds brand.',
      'Lloyds’ Classic account overdraft is 29.9% EAR variable (representative), though the bank sets each customer’s rate individually (checked October 2026).',
    ],
    complaintsUrl: 'https://www.lloydsbank.com/help-guidance/how-to-complain.html',
    decisions: [
      { ref: 'DRN-5246341', outcome: 'Upheld', summary: 'The overdraft had become unsustainable by June 2020. The bank should have offered help rather than carrying on charging.', url: FOS('DRN-5246341') },
      { ref: 'DRN-5635101', outcome: 'Not upheld', summary: 'Regular use of the overdraft on its own did not show the customer was in financial difficulty.', url: FOS('DRN-5635101') },
    ],
    sources: [
      { label: 'Lloyds Bank: Classic account', url: 'https://www.lloydsbank.com/current-accounts/all-accounts/classic-account.html' },
      { label: 'Lloyds Banking Group: our brands', url: 'https://www.lloydsbankinggroup.com/who-we-are/our-brands.html' },
      { label: 'Lloyds Bank: how to complain', url: 'https://www.lloydsbank.com/help-guidance/how-to-complain.html' },
    ],
  },
  {
    slug: 'halifax', name: 'Halifax', type: 'overdraft', featured: true,
    entity: 'Bank of Scotland plc (Halifax is a division)', frn: '169628', companyNo: 'SC327000', group: 'Lloyds Banking Group',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading, moving to the Lloyds brand',
    about: [
      'Halifax is a division of Bank of Scotland plc, part of Lloyds Banking Group. Its current account overdraft is 29.9% EAR variable (representative), with each customer’s rate set individually (checked October 2026).',
    ],
    note: { title: 'Halifax is becoming Lloyds', text: 'From 1 July 2026 the Halifax brand began moving to Lloyds, with branches changing through 2027. Account numbers and sort codes stay the same, and the accounts remain with Bank of Scotland plc, so past Halifax overdrafts can still be complained about.' },
    complaintsUrl: 'https://www.halifax.co.uk/contactus/how-to-complain.html',
    decisions: [
      { ref: 'DRN-4121799', outcome: 'Upheld', summary: 'The bank should not have raised the limit from £750 to £1,050 in March 2017, when the customer was already struggling.', url: FOS('DRN-4121799') },
      { ref: 'DRN-5481063', outcome: 'Upheld', summary: 'After the customer told the bank they were in difficulty and relying on the overdraft, it should have stopped offering it on normal terms from February 2023.', url: FOS('DRN-5481063') },
      { ref: 'DRN-5369231', outcome: 'Partly upheld', summary: 'A limit increase to £5,000 in May 2018 was made without reasonable checks while the customer was persistently overdrawn. Interest and charges from that date were refunded.', url: FOS('DRN-5369231') },
    ],
    sources: [
      { label: 'Lloyds Banking Group: Halifax to rebrand to Lloyds', url: 'https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/halifax-rebrand-to-lloyds.html' },
      { label: 'Lloyds Bank: Halifax brand change', url: 'https://www.lloydsbank.com/halifax-brand-change.html' },
      { label: 'Halifax: current account (overdraft rate)', url: 'https://www.halifax.co.uk/bankaccounts/current-accounts/current-account.html' },
      { label: 'Halifax: overdrafts', url: 'https://www.halifax.co.uk/bankaccounts/overdrafts.html' },
    ],
  },
  {
    slug: 'natwest', name: 'NatWest', type: 'overdraft', aliases: ['Sainsbury’s Bank credit card', 'Sainsbury’s Bank loan', 'Sainsbury’s Bank'], featured: true,
    entity: 'National Westminster Bank Plc', frn: '121878', companyNo: '00929027', group: 'NatWest Group plc',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'NatWest is the main high street bank of NatWest Group, which also owns Royal Bank of Scotland and, in Northern Ireland, Ulster Bank. Its standard arranged overdraft is 39.49% EAR variable (representative, checked October 2026).',
    ],
    complaintsUrl: 'https://www.natwest.com/support-centre/complaints.html',
    decisions: [
      { ref: 'DRN-4115823', outcome: 'Upheld', summary: 'By November 2019 the bank ought to have realised that continued overdraft use was not in the customer’s interests.', url: FOS('DRN-4115823') },
      { ref: 'DRN-5574900', outcome: 'Upheld', summary: 'The bank should not have raised the limit above £2,500 in July 2018 (it reached £4,500 by September 2018). It was told to refund interest and charges on balances above £2,500 from July 2018.', url: FOS('DRN-5574900') },
      { ref: 'DRN-5274025', outcome: 'Partly upheld', summary: 'The bank should not have raised one overdraft in April 2022, and should have stepped in on another by December 2022.', url: FOS('DRN-5274025') },
    ],
    faqs: [
      { q: 'I had a Sainsbury’s Bank credit card or loan. Who do I complain to?', a: 'NatWest. About a million Sainsbury’s Bank credit card and loan accounts moved to NatWest from 1 May 2025, so complaints about that lending now go to NatWest.' },
    ],
    sources: [
      { label: 'MoneySavingExpert: Sainsbury’s Bank loans and credit cards move to NatWest', url: 'https://www.moneysavingexpert.com/news/2024/06/sainsburys-loan-credit-card-natwest/' },
      { label: 'NatWest: overdrafts', url: 'https://www.natwest.com/current-accounts/overdrafts.html' },
      { label: 'NatWest: website terms (company details)', url: 'https://www.natwest.com/website-terms-and-conditions.html' },
      { label: 'NatWest Group: legal entity structure', url: 'https://investors.natwestgroup.com/fixed-income-investors/high-level-legal-entity-structure.aspx' },
    ],
  },
  {
    slug: 'hsbc', name: 'HSBC', type: 'overdraft', featured: true, aliases: ['HSBC UK', 'M&S Bank', 'Marks & Spencer credit card', 'M&S credit card'],
    entity: 'HSBC UK Bank plc', frn: '765112', companyNo: '09928412', group: 'HSBC Holdings plc',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'HSBC’s UK current accounts are provided by HSBC UK Bank plc, which also runs first direct. Its arranged overdraft is 39.9% EAR variable above any interest-free amount (checked October 2026).',
      'In May 2024 the FCA fined HSBC £6.28 million over how it treated customers in financial difficulty between 2017 and 2018. HSBC paid around £185 million in redress to more than 1.5 million customers.',
    ],
    complaintsUrl: 'https://www.hsbc.co.uk/help/feedback-and-complaints/',
    decisions: [
      { ref: 'DRN-4699072', outcome: 'Upheld', summary: 'HSBC missed “hardcore borrowing” from July 2022 and raised the limit instead of offering help. It was told to refund interest and charges from July 2022.', url: FOS('DRN-4699072') },
      { ref: 'DRN-4539635', outcome: 'Upheld', summary: 'An increase to a £4,000 limit in August 2017 was unaffordable. Charges on the balance above £2,000 were to be refunded.', url: FOS('DRN-4539635') },
    ],
    faqs: [
      { q: 'I had an M&S Bank credit card or loan. Who do I complain to?', a: 'HSBC UK. M&S Bank is a trading name of HSBC UK Bank plc, so complaints about M&S Bank lending go to HSBC UK.' },
    ],
    sources: [
      { label: 'M&S Bank: Transfer scheme', url: 'https://bank.marksandspencer.com/transfer-scheme/' },
      { label: 'FCA: FCA fines HSBC £6 million over treatment of customers in financial difficulty', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-hsbc-6-million-over-treatment-customers-financial-difficulty' },
      { label: 'HSBC: overdrafts', url: 'https://www.hsbc.co.uk/current-accounts/products/overdrafts/' },
      { label: 'HSBC: legal information', url: 'https://www.hsbc.co.uk/legal/' },
    ],
  },
  {
    slug: 'santander', name: 'Santander', type: 'overdraft', featured: true, aliases: ['Santander UK'],
    entity: 'Santander UK plc', frn: '106054', companyNo: '02294747', group: 'Banco Santander',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'Santander UK plc is the UK arm of Spain’s Banco Santander. It completed its purchase of TSB on 30 April 2026. Its Everyday Current Account arranged overdraft is 39.94% EAR variable (checked October 2026).',
    ],
    complaintsUrl: 'https://www.santander.co.uk/personal/support/customer-support/how-to-complain',
    decisions: [
      { ref: 'DRN-4528375', outcome: 'Partly upheld', summary: 'Santander should have reviewed the account before raising the limit to £2,000 in February 2022. A review would have shown hardcore borrowing. Interest and charges on balances above £1,500 from that date were to be refunded.', url: FOS('DRN-4528375') },
      { ref: 'DRN-5439348', outcome: 'Not upheld', summary: 'Use of a £1,000 overdraft was judged to be short-term rather than unsustainable.', url: FOS('DRN-5439348') },
    ],
    sources: [
      { label: 'Santander UK: legal information', url: 'https://www.santander.co.uk/personal/support/customer-support/legal-information' },
      { label: 'Santander UK: completes acquisition of TSB', url: 'https://www.santander.co.uk/about-santander/media-centre/press-releases/santander-uk-completes-cash-acquisition-of-tsb-banking/' },
      { label: 'Santander UK: how to complain', url: 'https://www.santander.co.uk/personal/support/customer-support/how-to-complain' },
    ],
  },
  {
    slug: 'tsb', name: 'TSB', type: 'overdraft', featured: true,
    title: 'TSB overdraft refund claims and complaints | CreditRights', // Test (16 Oct 2026): 'complaints' in the title; compare clicks after 4 weeks.
    entity: 'TSB Bank plc', frn: '191240', companyNo: 'SC095237', group: 'Santander UK (since April 2026)',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'TSB Bank plc is a UK high street bank. Its arranged overdraft is 39.90% EAR variable on the Spend & Save account (checked October 2026).',
      'In October 2024 the FCA fined TSB £10.9 million over how it treated customers in financial difficulty between 2014 and 2020, including overdraft customers. TSB paid £99.9 million in redress to 232,849 customers.',
    ],
    note: { title: 'TSB is now owned by Santander', text: 'Santander UK completed its purchase of TSB on 30 April 2026. Santander plans to move TSB’s business into Santander UK in the first half of 2027, subject to court and regulatory approval. Santander says there’s no immediate change for customers.' },
    complaintsUrl: 'https://www.tsb.co.uk/help-and-support/complaints.html',
    decisions: [
      { ref: 'DRN-3650803', outcome: 'Upheld', summary: 'Repeated requests to raise the limit within 24 hours should have prompted proper checks. TSB was told to write off the balance.', url: FOS('DRN-3650803') },
      { ref: 'DRN-3707034', outcome: 'Not upheld', summary: 'A November 2020 increase was irresponsible, but TSB had already refunded the customer, so its offer was found fair.', url: FOS('DRN-3707034') },
    ],
    sources: [
      { label: 'FCA: FCA fines TSB over treatment of customers in financial difficulty', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-tsb-over-treatment-customers-financial-difficulty' },
      { label: 'Santander UK: completes acquisition of TSB', url: 'https://www.santander.co.uk/about-santander/media-centre/press-releases/santander-uk-completes-cash-acquisition-of-tsb-banking/' },
      { label: 'TSB: overdrafts', url: 'https://www.tsb.co.uk/current-accounts/overdrafts/' },
      { label: 'Santander UK: cash acquisition of TSB Banking Group plc (announcement)', url: 'https://www.investegate.co.uk/announcement/rns/santander-uk-plc--sanb/cash-acquisition-of-tsb-banking-group-plc-/9547881' },
    ],
  },
  {
    slug: 'monzo', name: 'Monzo', type: 'overdraft', featured: true,
    entity: 'Monzo Bank Limited', frn: '730427', companyNo: '09446231', group: 'Monzo Bank Holding Group Limited',
    products: 'Current accounts, overdrafts, loans', status: 'Trading',
    about: [
      'Monzo is an app-based bank. Its overdrafts are charged at 19%, 29% or 39% EAR variable, depending on the customer’s credit score (checked October 2026).',
    ],
    complaintsUrl: 'https://monzo.com/help/legal-stuff/make-complaint-web',
    decisions: [
      { ref: 'DRN-4465599', outcome: 'Upheld', summary: 'Checks before raising the limit to £2,000 in July 2022 were not good enough, and Monzo didn’t step in on persistent use. It was told to refund interest and charges above £750 and correct the credit file.', url: FOS('DRN-4465599') },
      { ref: 'DRN-4742032', outcome: 'Not upheld', summary: 'Checks on a £1,000 overdraft were found to be proportionate.', url: FOS('DRN-4742032') },
    ],
    sources: [
      { label: 'Monzo: overdraft fees', url: 'https://monzo.com/help/overdrafts-loans/overdrafts-fees' },
      { label: 'Monzo: FSCS and legal information', url: 'https://monzo.com/legal/fscs-information' },
      { label: 'Companies House: Monzo Bank Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/09446231/persons-with-significant-control' },
    ],
  },
  {
    slug: 'bank-of-scotland', name: 'Bank of Scotland', type: 'overdraft', featured: true,
    entity: 'Bank of Scotland plc', frn: '169628', companyNo: 'SC327000', group: 'Lloyds Banking Group',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'Bank of Scotland is Lloyds Banking Group’s brand in Scotland, provided by Bank of Scotland plc. Unlike Halifax, it is not moving to the Lloyds brand.',
      'Its Classic account overdraft is 29.9% EAR variable (representative), with each customer’s rate set individually (checked October 2026).',
    ],
    complaintsUrl: 'https://www.bankofscotland.co.uk/contactus/how-to-complain.html',
    decisions: [
      { ref: 'DRN-5268265', outcome: 'Partly upheld', summary: 'The early lending was fair, but the bank should have acted from October 2020, once use became unsustainable. Interest, fees and charges from then were to be removed.', url: FOS('DRN-5268265') },
      { ref: 'DRN-5793048', outcome: 'Not upheld', summary: 'Not upheld beyond the bank’s own offer to refund fees and charges from November 2020 and remove the overdraft.', url: FOS('DRN-5793048') },
    ],
    sources: [
      { label: 'Bank of Scotland: Classic account (overdraft rate)', url: 'https://www.bankofscotland.co.uk/bankaccounts/classic.html' },
      { label: 'Bank of Scotland: overdrafts', url: 'https://www.bankofscotland.co.uk/bankaccounts/overdrafts.html' },
      { label: 'Lloyds Banking Group: Halifax to rebrand to Lloyds', url: 'https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/halifax-rebrand-to-lloyds.html' },
    ],
  },
  {
    slug: 'first-direct', name: 'First Direct', type: 'overdraft', featured: true, aliases: ['first direct'],
    entity: 'HSBC UK Bank plc (first direct is a division)', frn: '765112', companyNo: '09928412', group: 'HSBC Holdings plc',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'first direct is a division of HSBC UK Bank plc. Its 1st Account overdraft is interest-free on the first £250, then 39.9% EAR variable (checked October 2026).',
    ],
    complaintsUrl: 'https://www.firstdirect.com/legals/listening/',
    decisions: [
      { ref: 'DRN-5455553', outcome: 'Upheld', summary: 'first direct didn’t monitor the account or step in once there were clear signs of financial difficulty from April 2020. Sending letters was not enough.', url: FOS('DRN-5455553') },
      { ref: 'DRN-5613740', outcome: 'Not upheld', summary: 'A £250 interest-free overdraft was approved fairly.', url: FOS('DRN-5613740') },
    ],
    sources: [
      { label: 'first direct: current account', url: 'https://www.firstdirect.com/banking/current-account/' },
      { label: 'first direct: legal notes', url: 'https://www.firstdirect.com/legals/important-notes/' },
    ],
  },
  {
    slug: 'rbs', name: 'RBS', type: 'overdraft', featured: true, aliases: ['Royal Bank of Scotland'],
    h1: 'Royal Bank of Scotland (RBS) overdraft refund claims', title: 'RBS overdraft refund claims | CreditRights',
    entity: 'The Royal Bank of Scotland plc', frn: '114724', companyNo: 'SC083026', group: 'NatWest Group plc',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'Royal Bank of Scotland is part of NatWest Group. Its current accounts are provided by The Royal Bank of Scotland plc, and its standard arranged overdraft is 39.49% EAR variable (representative, checked October 2026).',
    ],
    complaintsUrl: 'https://www.rbs.co.uk/support-centre/complaints.html',
    decisions: [
      { ref: 'DRN-5423446', outcome: 'Partly upheld', summary: 'An increase to £1,500 in April 2021 was fair, but charging from July 2022 was unfair once the overdraft had become unsustainable.', url: FOS('DRN-5423446') },
      { ref: 'DRN-5743421', outcome: 'Not upheld', summary: 'The ombudsman did not find the overdraft lending unfair on the facts of this case.', url: FOS('DRN-5743421') },
    ],
    sources: [
      { label: 'RBS: overdrafts', url: 'https://www.rbs.co.uk/current-accounts/overdrafts.html' },
      { label: 'RBS: website terms (company details)', url: 'https://www.rbs.co.uk/website-terms-and-conditions.html' },
    ],
  },
  {
    slug: 'ulster-bank', name: 'Ulster Bank', type: 'overdraft', featured: true,
    entity: 'National Westminster Bank Plc, trading as Ulster Bank', frn: '121878', companyNo: '00929027', group: 'NatWest Group plc',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading in Northern Ireland',
    about: [
      'Ulster Bank in Northern Ireland has been part of National Westminster Bank Plc since 3 May 2021, when its business moved across under a court-approved scheme. The brand, sort codes and account numbers stayed the same.',
      'Its standard arranged overdraft is 39.49% APR variable (representative, checked October 2026).',
    ],
    note: { title: 'Northern Ireland accounts only', text: 'This page is about Ulster Bank accounts in Northern Ireland. Accounts with Ulster Bank Ireland in the Republic of Ireland were with a separate Irish company and fall outside a UK complaint.' },
    complaintsUrl: 'https://www.ulsterbank.co.uk/help-and-support/how-to-make-a-complaint.html',
    decisions: [
      { ref: 'DRN-5577395', outcome: 'Not upheld', summary: 'Statements showed a £1,000 overdraft was affordable, with no clear signs of financial difficulty.', url: FOS('DRN-5577395') },
    ],
    sources: [
      { label: 'Ulster Bank: banking business transfer scheme', url: 'https://www.ulsterbank.co.uk/globals/banking-business-transfer-scheme.html' },
      { label: 'Ulster Bank: overdrafts', url: 'https://www.ulsterbank.co.uk/current-accounts/overdrafts.html' },
    ],
  },
  {
    slug: 'nationwide', name: 'Nationwide', type: 'overdraft', aliases: ['Nationwide Building Society'],
    entity: 'Nationwide Building Society', frn: '106078', group: 'Mutual building society (owns Virgin Money)',
    products: 'Current accounts, overdrafts, mortgages, savings', status: 'Trading',
    about: [
      'Nationwide is the UK’s largest building society, owned by its members. It bought Virgin Money in October 2024, which continues as a separate bank for now.',
      'Its FlexAccount overdrafts are interest-free on the first £50, then 39.9% EAR variable (checked October 2026).',
    ],
    complaintsUrl: 'https://www.nationwide.co.uk/contact-us/make-a-complaint-or-send-us-feedback',
    decisions: [
      { ref: 'DRN-5881764', outcome: 'Upheld', summary: 'Nationwide failed to step in on a FlexAccount overdraft once there were clear signs of financial difficulty by May 2024. Sending letters was not enough.', url: FOS('DRN-5881764') },
      { ref: 'DRN-5537271', outcome: 'Upheld', summary: 'A March 2024 increase to £1,000 was made without proper checks, given what Nationwide knew about the customer.', url: FOS('DRN-5537271') },
    ],
    sources: [
      { label: 'Nationwide: arranged overdrafts', url: 'https://www.nationwide.co.uk/current-accounts/overdrafts/adult-account-arranged-overdrafts' },
      { label: 'Virgin Money: Nationwide and Virgin Money', url: 'https://uk.virginmoney.com/nationwide-and-virginmoney/' },
    ],
  },

  // ---------------------------------------------------------------- loans
  {
    slug: 'lending-stream', name: 'Lending Stream', type: 'payday',
    title: 'Lending Stream loan refund claims and complaints | CreditRights', // Test (16 Oct 2026): 'complaints' in the title; compare clicks after 4 weeks.
    entity: 'GAIN Credit LLC', frn: '689378', companyNo: 'FC032134', group: 'GAIN Credit',
    products: 'Short-term instalment loans over 6 or 12 months', status: 'Trading',
    about: [
      'Lending Stream is a high-cost short-term lender run by GAIN Credit LLC, which also runs Drafty. It offers instalment loans repaid over 6 or 12 months, from £50 for new customers up to £1,500 for returning customers.',
      'Taking several loans in a row is a common feature of these complaints: the ombudsman looks at whether later loans showed you had come to depend on this kind of credit.',
    ],
    complaintsUrl: 'https://lendingstream.co.uk/contactus-step2?sel_val=customer&req_type=complaint',
    decisions: [
      { ref: 'DRN-4305287', outcome: 'Partly upheld', summary: 'The third of three loans was irresponsible: the borrower had several loans running, defaults on file and was likely dependent on this type of credit.', url: FOS('DRN-4305287') },
      { ref: 'DRN-5598465', outcome: 'Partly upheld', summary: 'Loans four and five needed more checks because of frequent applications and differences in the application details.', url: FOS('DRN-5598465') },
    ],
    sources: [
      { label: 'Lending Stream: about us', url: 'https://www.lendingstream.co.uk/about-us/' },
      { label: 'Companies House: GAIN Credit LLC (FC032134)', url: 'https://find-and-update.company-information.service.gov.uk/company/FC032134' },
    ],
  },
  {
    slug: 'quidmarket', name: 'QuidMarket', type: 'payday', aliases: ['Quid Market', 'Stagemount'],
    entity: 'Propel Holdings (UK) Limited (formerly Stagemount Limited)', frn: '677995', companyNo: '07259223', group: 'Propel Holdings Inc. (since November 2024)',
    products: 'Short-term loans over 3 to 6 months', status: 'Trading',
    about: [
      'QuidMarket is a high-cost short-term lender. Loans range from £300 to £1,500, repaid over 3 to 6 months, with the higher amounts for returning customers.',
    ],
    note: { title: 'New owner and company name', text: 'Propel Holdings bought QuidMarket in November 2024, and the company changed its name from Stagemount Limited to Propel Holdings (UK) Limited in May 2025. Older paperwork and decisions name Stagemount Limited.' },
    complaintsUrl: 'https://www.quidmarketloans.com/complaints/',
    decisions: [
      { ref: 'DRN-5527945', outcome: 'Partly upheld', summary: 'Four of six loans were irresponsible because of existing debt and signs of financial difficulty.', url: FOS('DRN-5527945') },
      { ref: 'DRN-5175654', outcome: 'Not upheld', summary: 'The ombudsman found the checks reasonable on the facts of this case.', url: FOS('DRN-5175654') },
    ],
    sources: [
      { label: 'QuidMarket: complaints', url: 'https://www.quidmarketloans.com/complaints/' },
      { label: 'Companies House: filing history (07259223)', url: 'https://find-and-update.company-information.service.gov.uk/company/07259223/filing-history' },
      { label: 'Propel Holdings: Q1 2025 financial statements', url: 'https://cdn.propelholdings.com/web/pdfs/2025PropelQ1FinancialStmts.pdf' },
    ],
  },
  {
    slug: 'loans-2-go', name: 'Loans 2 Go', type: 'loan', aliases: ['Loans2Go'],
    title: 'Loans 2 Go loan refund claims and complaints | CreditRights', // Test (16 Oct 2026): 'complaints' in the title; compare clicks after 4 weeks.
    entity: 'Loans 2 Go Limited', frn: '679836', companyNo: '04519020', group: 'Money In Minutes Limited',
    products: '18-month personal instalment loans', status: 'Trading',
    about: [
      'Loans 2 Go lends £500 to £1,500 over 18 months, at representative APRs of several hundred per cent. Because the term is longer than 12 months, these loans fall outside the price cap on high-cost short-term credit.',
      'Its own published figures for January to June 2026 show 2,610 complaints opened, with 28% upheld.',
    ],
    complaintsUrl: 'https://loans2go.co.uk/complaints-data/',
    decisions: [
      { ref: 'DRN-5823883', outcome: 'Upheld', summary: 'The borrower’s income could have been as low as £805.50 a month, so a £51.39 monthly repayment was not shown to be sustainable.', url: FOS('DRN-5823883') },
      { ref: 'DRN4441181', outcome: 'Upheld', summary: 'An 18-month loan with an APR over 1,000% was unfair given the borrower’s circumstances. The balance was reduced.', url: FOS('DRN4441181') },
    ],
    sources: [
      { label: 'Loans 2 Go: complaints data', url: 'https://loans2go.co.uk/complaints-data/' },
      { label: 'Companies House: Loans 2 Go Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/04519020/persons-with-significant-control' },
    ],
  },
  {
    slug: '118-118-money', name: '118 118 Money', type: 'loan', aliases: ['118118 Money'],
    title: '118 118 Money loan refund claims and complaints | CreditRights', // Test (16 Oct 2026): 'complaints' in the title; compare clicks after 4 weeks.
    entity: 'Madison CF UK Limited', frn: '741774', companyNo: '08393840',
    products: 'Personal loans and credit cards', status: 'Trading',
    about: [
      '118 118 Money offers personal loans of £1,000 to £8,000 over one to five years, and credit cards. It is run by Madison CF UK Limited.',
    ],
    complaintsUrl: 'https://www.118118money.com/contact-us/',
    decisions: [
      { ref: 'DRN-3444112', outcome: 'Upheld', summary: 'All four loans were upheld: the lender kept lending without proportionate checks.', url: FOS('DRN-3444112') },
      { ref: 'DRN-4745963', outcome: 'Upheld', summary: 'Proportionate checks on a £2,500 loan would have shown gambling and repayment problems.', url: FOS('DRN-4745963') },
      { ref: 'DRN-5783142', outcome: 'Not upheld', summary: 'A credit card and a credit limit increase were found to be affordable.', url: FOS('DRN-5783142') },
    ],
    sources: [
      { label: '118 118 Money: FAQs', url: 'https://www.118118money.com/faqs' },
      { label: 'Companies House: Madison CF UK Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/08393840' },
    ],
  },
  {
    slug: 'likely-loans', name: 'Likely Loans and Finio', type: 'loan', aliases: ['Likely Loans', 'Finio Loans', 'Finio', 'OakbrookAdvance', 'Oakbrook Finance'],
    h1: 'Likely Loans and Finio Loans refund claims', title: 'Likely Loans and Finio Loans refund claims | CreditRights',
    description: 'Borrowed from Likely Loans or Finio Loans when you couldn’t afford it? You could claim back the interest and charges. Free to check.',
    entity: 'Oakbrook Finance Limited', frn: '707357', companyNo: '07831517', group: 'Oakbrook Holdings (UK) Limited',
    products: 'Personal instalment loans', status: 'Trading as OakbrookAdvance',
    about: [
      'Likely Loans and Finio Loans are trading styles of Oakbrook Finance Limited, a Nottingham lender. Likely Loans became Finio Loans in September 2022, and Finio Loans is now OakbrookAdvance, which lends £500 to £5,000 over 12 to 36 months.',
    ],
    complaintsUrl: 'https://oakbrook.com/complaints',
    decisions: [
      { ref: 'DRN-5616300', outcome: 'Upheld', summary: 'Two £1,000 Finio loans in 2022 and 2023: the checks were not proportionate and missed signs of financial instability.', url: FOS('DRN-5616300') },
      { ref: 'DRN-4149488', outcome: 'Not upheld', summary: 'A Likely Loans complaint where the lending was found affordable.', url: FOS('DRN-4149488') },
    ],
    sources: [
      { label: 'Oakbrook: consumer lending', url: 'https://oakbrook.com/consumer-lending' },
      { label: 'OakbrookAdvance', url: 'https://oakbrookadvance.com/' },
      { label: 'FCA: warning about a clone of Likely Loans', url: 'https://www.fca.org.uk/news/warnings/likely-loans-clone-fca-authorised-firm' },
    ],
  },
  {
    slug: 'bamboo-loans', name: 'Bamboo Loans', type: 'loan', aliases: ['Bamboo'],
    entity: 'Bamboo Limited', frn: '720565', companyNo: '05629336', group: 'Bamboo Topco Limited',
    products: 'Personal loans', status: 'Trading',
    about: [
      'Bamboo Loans is a Southampton-based lender offering personal loans of £2,000 to £15,000 over one to five years.',
    ],
    complaintsUrl: 'https://www.bambooloans.com/s/complaints',
    decisions: [
      { ref: 'DRN-4074489', outcome: 'Upheld', summary: 'The loan would have taken debt repayments to nearly 40% of income, and the borrower already had a County Court Judgment and was using an overdraft.', url: FOS('DRN-4074489') },
      { ref: 'DRN-5553098', outcome: 'Not upheld', summary: 'The ombudsman found the loan affordable on the facts of this case.', url: FOS('DRN-5553098') },
    ],
    sources: [
      { label: 'Bamboo Loans: complaints', url: 'https://www.bambooloans.com/s/complaints' },
      { label: 'Companies House: Bamboo Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/05629336' },
    ],
  },
  {
    slug: 'cash-asap', name: 'Cash ASAP', type: 'payday', aliases: ['cashasap', 'APFIN'],
    entity: 'APFIN LTD, trading as cashasap.co.uk', frn: '673186', companyNo: '07989136',
    products: 'Payday loans and short-term instalment loans', status: 'Trading',
    about: [
      'Cash ASAP is a direct lender of payday loans of up to 35 days and instalment loans over three to six months, run by APFIN LTD.',
    ],
    complaintsUrl: 'https://cashasap.co.uk/complaint.html',
    decisions: [
      { ref: 'DRN-5750839', outcome: 'Partly upheld', summary: 'A third loan of £350 in March 2023 was unfair because the borrower had become over-reliant on credit.', url: FOS('DRN-5750839') },
      { ref: 'DRN-4511493', outcome: 'Not upheld', summary: 'A £250 loan was found affordable.', url: FOS('DRN-4511493') },
    ],
    sources: [
      { label: 'Cash ASAP: legal notice', url: 'https://cashasap.co.uk/legal.html' },
      { label: 'Companies House: APFIN LTD', url: 'https://find-and-update.company-information.service.gov.uk/company/07989136' },
    ],
  },
  {
    slug: 'my-finance-club', name: 'My Finance Club', type: 'payday', aliases: ['Ondal', 'MyFinanceClub'],
    entity: 'My Finance Club Limited', frn: '674521', companyNo: '07301026',
    products: 'Short-term loans', status: 'Trading',
    about: [
      'My Finance Club is a Sheffield-based short-term lender, which also trades as Ondal.',
    ],
    decisions: [
      { ref: 'DRN-6205948', outcome: 'Not upheld', summary: 'A £400 Ondal loan from July 2025 was found affordable.', url: FOS('DRN-6205948') },
      { ref: 'DRN-4199122', outcome: 'Partly upheld', summary: 'The lending was found affordable, but the lender was told to pay £250 for poor complaint handling and delays.', url: FOS('DRN-4199122') },
    ],
    sources: [
      { label: 'Companies House: My Finance Club Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/07301026' },
      { label: 'Financial Ombudsman: decision naming Ondal as a trading name', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-4230005.pdf' },
    ],
  },
  {
    slug: 'lendable', name: 'Lendable', type: 'loan', aliases: ['Zable', 'Autolend'],
    entity: 'Lendable Ltd', frn: '720261', companyNo: '08828186', group: 'Lendable Operations Ltd',
    products: 'Personal loans, Zable credit card, Autolend car finance', status: 'Trading',
    about: [
      'Lendable is a London lender offering personal loans, the Zable credit card and Autolend car finance.',
      'Its own published figures for January to June 2026 show 23,547 complaints opened, with 28.4% upheld.',
    ],
    complaintsUrl: 'https://www.lendable.co.uk/complaints',
    decisions: [
      { ref: 'DRN-3818582', outcome: 'Upheld', summary: 'A £6,000 loan over 36 months would have taken debt repayments above 40% of the borrower’s income.', url: FOS('DRN-3818582') },
      { ref: 'DRN-6025908', outcome: 'Upheld', summary: 'Warning signs in the borrower’s bank data were not properly looked into before a £4,000 loan.', url: FOS('DRN-6025908') },
    ],
    sources: [
      { label: 'Lendable: complaints and complaints data', url: 'https://www.lendable.co.uk/complaints' },
      { label: 'Zable: complaints', url: 'https://zable.co.uk/complaints' },
      { label: 'Companies House: Lendable Ltd', url: 'https://find-and-update.company-information.service.gov.uk/company/08828186' },
    ],
  },
  {
    slug: 'drafty', name: 'Drafty', type: 'payday',
    entity: 'GAIN Credit LLC', frn: '689378', companyNo: 'FC032134', group: 'GAIN Credit',
    products: 'Line of credit and fixed-term loans', status: 'Trading',
    about: [
      'Drafty is run by GAIN Credit LLC, the company behind Lending Stream. It offers a running line of credit from £50 to £3,000, and fixed-term loans of £1,000 to £3,000.',
      'With a line of credit, the question is often when the lender should have noticed you were borrowing to repay borrowing.',
    ],
    complaintsUrl: 'https://www.drafty.co.uk/loan/faqs/issues-complaints/',
    decisions: [
      { ref: 'DRN-3705849', outcome: 'Partly upheld', summary: 'Opening a £500 facility was fair, but by March 2022 Drafty should have seen the customer was borrowing to repay borrowing and stopped charging interest.', url: FOS('DRN-3705849') },
    ],
    sources: [
      { label: 'Drafty: complaints', url: 'https://www.drafty.co.uk/loan/faqs/issues-complaints/' },
      { label: 'QED Investors: GAIN Credit', url: 'https://www.qedinvestors.com/companies/gain-credit' },
    ],
  },

  // ---------------------------------------------------------------- cards
  {
    slug: 'aqua', name: 'Aqua', type: 'card', aliases: ['Aqua card'],
    title: 'Aqua credit card refund claims and complaints | CreditRights', // Test (16 Oct 2026): 'complaints' in the title; compare clicks after 4 weeks.
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Credit cards', status: 'Trading',
    about: [
      'Aqua is a credit card brand of NewDay Ltd, which also runs Marbles and Fluid. These cards are often aimed at people building or rebuilding their credit, which makes limit increases a key part of many complaints.',
    ],
    complaintsUrl: 'https://www.newday.co.uk/contact-us/',
    decisions: [
      { ref: 'DRN-5127011', outcome: 'Partly upheld', summary: 'Aqua, Marbles and AO Finance accounts: interest removed on Aqua balances above £1,700 from June 2021, and all interest and charges removed on the other two accounts.', url: FOS('DRN-5127011') },
      { ref: 'DRN-5825415', outcome: 'Not upheld', summary: 'Fluid and Aqua: not upheld beyond one limit increase that NewDay had already refunded.', url: FOS('DRN-5825415') },
    ],
    sources: [
      { label: 'Aqua: regulatory information', url: 'https://www.aquacard.co.uk/faqs/other-useful-information' },
      { label: 'NewDay: company registration details', url: 'https://www.newday.co.uk/site-services/company-registration-details/' },
    ],
  },
  {
    slug: 'marbles', name: 'Marbles', type: 'card',
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Credit cards', status: 'Trading',
    about: [
      'Marbles is a credit card brand of NewDay Ltd, alongside Aqua and Fluid.',
    ],
    complaintsUrl: 'https://www.newday.co.uk/contact-us/',
    decisions: [
      { ref: 'DRN-5127011', outcome: 'Partly upheld', summary: 'NewDay should not have opened the Marbles account, so all interest and charges on it were removed.', url: FOS('DRN-5127011') },
      { ref: 'DRN-4683033', outcome: 'Not upheld', summary: 'Not upheld beyond limit increases that NewDay had already accepted and put right itself.', url: FOS('DRN-4683033') },
    ],
    sources: [
      { label: 'Marbles: about us', url: 'https://www.marbles.com/about-us/' },
      { label: 'NewDay: company registration details', url: 'https://www.newday.co.uk/site-services/company-registration-details/' },
    ],
  },
  {
    slug: 'fluid', name: 'Fluid', type: 'card',
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Credit cards', status: 'Trading',
    about: [
      'Fluid is a credit card brand of NewDay Ltd, alongside Aqua and Marbles.',
    ],
    complaintsUrl: 'https://www.newday.co.uk/contact-us/',
    decisions: [
      { ref: 'DRN-5825415', outcome: 'Not upheld', summary: 'Fluid and Aqua: not upheld beyond one limit increase that NewDay had already refunded.', url: FOS('DRN-5825415') },
      { ref: 'DRN-4683033', outcome: 'Not upheld', summary: 'Not upheld beyond limit increases that NewDay had already accepted and put right itself.', url: FOS('DRN-4683033') },
    ],
    sources: [
      { label: 'Fluid', url: 'https://www.fluid.co.uk/' },
      { label: 'NewDay: company registration details', url: 'https://www.newday.co.uk/site-services/company-registration-details/' },
    ],
  },
  {
    slug: 'vanquis', name: 'Vanquis', type: 'card', aliases: ['Vanquis Bank'],
    entity: 'Vanquis Bank Limited', frn: '221156', companyNo: '02558509', group: 'Vanquis Banking Group plc',
    products: 'Credit cards', status: 'Trading',
    about: [
      'Vanquis Bank is part of Vanquis Banking Group plc, which was called Provident Financial until March 2023. Its credit cards are often aimed at people with a limited or poor credit history.',
      'Vanquis says it suspends the card while it looks into an affordability complaint.',
    ],
    note: { title: 'Not part of the Provident scheme', text: 'The 2021 Provident scheme of arrangement covered Provident, Satsuma, Glo and Greenwood customers. Vanquis credit cards weren’t part of it, so Vanquis complaints follow the normal route.' },
    complaintsUrl: 'https://www.vanquis.com/complaints/',
    decisions: [
      { ref: 'DRN-5441665', outcome: 'Not upheld', summary: 'Checks weren’t always proportionate, but bank statements showed the borrower could afford the limits.', url: FOS('DRN-5441665') },
      { ref: 'DRN-6016090', outcome: 'Not upheld', summary: 'The ombudsman found the limits affordable on the facts of this case.', url: FOS('DRN-6016090') },
    ],
    sources: [
      { label: 'Vanquis: complaints', url: 'https://www.vanquis.com/complaints/' },
      { label: 'Vanquis: raise a responsible lending claim', url: 'https://www.vanquis.com/complaints/raise-responsible-lending-claim/' },
      { label: 'Financial Ombudsman: information for Provident customers', url: 'https://www.financial-ombudsman.org.uk/news/information-for-provident-customers' },
      { label: 'Debt Camel: the Provident and Satsuma scheme', url: 'https://debtcamel.co.uk/provident-satsuma-scheme/' },
    ],
  },
  {
    slug: 'capital-one', name: 'Capital One', type: 'card', aliases: ['Capital One UK', 'Post Office credit card', 'Ocean credit card'],
    entity: 'Capital One (Europe) plc', frn: '204440', companyNo: '03879023', group: 'Capital One Financial Corporation',
    products: 'Credit cards, including the Very and Littlewoods credit cards', status: 'Trading',
    about: [
      'Capital One (Europe) plc is the UK arm of the US card issuer. As well as its own cards, it issues the Very Credit Card and the Littlewoods Credit Card.',
    ],
    complaintsUrl: 'https://www.capitalone.co.uk/support/making-your-complaint',
    decisions: [
      { ref: 'DRN-5856779', outcome: 'Upheld', summary: 'A £500 limit and an increase to £1,250 were irresponsible because existing debts of around £24,000 weren’t properly taken into account. Interest and charges were removed and the credit file corrected.', url: FOS('DRN-5856779') },
      { ref: 'DRN-5802491', outcome: 'Partly upheld', summary: 'Increases from July 2015 (to £1,750, then £2,000) were unfair. Interest and charges on balances between £1,000 and £2,000 were removed from July 2015.', url: FOS('DRN-5802491') },
    ],
    faqs: [
      { q: 'Are Post Office and Ocean credit cards provided by Capital One?', a: 'Yes. The Post Office credit card and the Ocean credit card are provided by Capital One, so complaints about them go to Capital One.' },
    ],
    sources: [
      { label: 'Capital One: Post Office credit card legal information', url: 'https://www.capitalone.co.uk/postoffice/legal-information' },
      { label: 'Capital One: Ocean credit card legal information', url: 'https://capitalone.co.uk/ocean/legal-information' },
      { label: 'Capital One: making your complaint', url: 'https://www.capitalone.co.uk/support/making-your-complaint' },
      { label: 'Companies House: Capital One (Europe) plc', url: 'https://find-and-update.company-information.service.gov.uk/company/03879023' },
      { label: 'FCA: warning naming Capital One (Europe) plc, FRN 204440', url: 'https://www.fca.org.uk/news/warnings/capital-1-europe-trading-and-investing-clone-fca-authorised-firm' },
    ],
  },

  // ---------------------------------------------------------------- catalogue
  {
    slug: 'very', name: 'Very', type: 'catalogue', aliases: ['Very Pay'],
    entity: 'Shop Direct Finance Company Limited', frn: '312190', companyNo: '04660974', group: 'The Very Group',
    products: 'Very Pay account (catalogue credit, Buy Now Pay Later)', status: 'Trading',
    about: [
      'Very Pay accounts are provided by Shop Direct Finance Company Limited, part of The Very Group, which also runs Littlewoods. The Very Credit Card is a separate product issued by Capital One.',
      'Very and Littlewoods’ own figures for January to June 2024 show 31,639 credit-related complaints opened, with 24% upheld.',
    ],
    decisions: [
      { ref: 'DRN-6011343', outcome: 'Upheld', summary: 'Very and Littlewoods accounts: the unused Very account caused no loss, but Littlewoods limit increases from March 2021 were irresponsible.', url: FOS('DRN-6011343') },
      { ref: 'DRN-4630785', outcome: 'Not upheld', summary: 'Not upheld beyond the lender’s own offer to remove interest on balances above £2,650.', url: FOS('DRN-4630785') },
    ],
    sources: [
      { label: 'Very: homepage (credit provider details)', url: 'https://www.very.co.uk/' },
      { label: 'The Very Group: published complaints report 2024', url: 'https://sd.a.bigcontent.io/v1/static/fs-documents-published-complaints-report-24-v2' },
      { label: 'Companies House: Shop Direct Finance Company Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/04660974' },
    ],
  },
  {
    slug: 'littlewoods', name: 'Littlewoods', type: 'catalogue',
    entity: 'Shop Direct Finance Company Limited', frn: '312190', companyNo: '04660974', group: 'The Very Group',
    products: 'Littlewoods account (catalogue credit, Buy Now Pay Later)', status: 'Trading',
    about: [
      'Littlewoods accounts are provided by Shop Direct Finance Company Limited, the same company behind Very Pay. The Littlewoods Credit Card is issued separately by Capital One.',
    ],
    decisions: [
      { ref: 'DRN-6011343', outcome: 'Upheld', summary: 'The opening limit and first three increases were fair, but Littlewoods limit increases from March 2021 were irresponsible.', url: FOS('DRN-6011343') },
      { ref: 'DRN-5581255', outcome: 'Not upheld', summary: 'Very and Littlewoods accounts: not upheld, and one account was outside the time limits.', url: FOS('DRN-5581255') },
    ],
    sources: [
      { label: 'Littlewoods: homepage (credit provider details)', url: 'https://www.littlewoods.com/' },
      { label: 'Littlewoods: persistent debt', url: 'https://www.littlewoods.com/persistentdebt.page' },
    ],
  },

  // ------------------------------------------------- added 16 October 2026
  {
    slug: 'barclaycard', name: 'Barclaycard', type: 'card', aliases: ['Barclays credit card'],
    entity: 'Barclays Bank UK PLC', frn: '759676', companyNo: '09740322', group: 'Barclays PLC',
    products: 'Credit cards', status: 'Trading', checked: '2026-10-16',
    about: [
      'Barclaycard is the Barclays group’s credit card brand. UK Barclaycard cards are provided by Barclays Bank UK PLC, the same company behind Barclays current accounts and overdrafts. Its registered office is 1 Churchill Place, London E14 5HP.',
      'In December 2020 the FCA fined Barclays £26 million over how it treated consumer credit customers in arrears or financial difficulty between April 2014 and December 2018. By then it had paid over £273 million in redress on at least 1.5 million accounts.',
    ],
    complaintsUrl: 'https://barclaycard.co.uk/personal/help-and-support/complaints',
    decisions: [
      { ref: 'DRN-3901430', outcome: 'Upheld', summary: 'The ombudsman found the £6,000 opening limit in September 2017 was not irresponsible, but the August 2018 increase to £9,000 was. Barclaycard was told to remove interest, fees and charges on balances above £6,000, refund any overpayments with interest and remove adverse credit information recorded from August 2018 to June 2019.', url: FOS('DRN-3901430') },
      { ref: 'DRN-4601302', outcome: 'Partly upheld', summary: 'The January 2019 limit increase to £8,400 was found affordable, but the October 2019 increase to £11,400 should not have been given because of a returned direct debit, cash withdrawals and over-limit fees. Barclaycard was told to remove interest and charges on balances above £8,400, refund any overpayments with interest and remove adverse information from 28 October 2019.', url: FOS('DRN-4601302') },
      { ref: 'DRN-3502636', outcome: 'Partly upheld', summary: 'The ombudsman accepted the account opening and first limit increase, but found the second, third and fourth increases should not have been granted, as the customer was using about 80% of his available credit each time. Barclaycard was told to charge interest only on balances up to £1,200 from 9 February 2016, remove late and over-limit fees, refund any overpayments with interest and remove adverse information from that date.', url: FOS('DRN-3502636') },
    ],
    sources: [
      { label: 'Barclays: Electronic Commerce Directive (Barclays Bank UK PLC FS register no. 759676)', url: 'https://barclays.co.uk/important-information/electronic-commerce-directive' },
      { label: 'Companies House: Barclays Bank UK PLC (09740322)', url: 'https://find-and-update.company-information.service.gov.uk/company/09740322' },
      { label: 'Barclaycard: Complaints', url: 'https://barclaycard.co.uk/personal/help-and-support/complaints' },
      { label: 'Barclays: completion of the acquisition of Tesco’s retail banking business (Barclays Bank UK PLC a subsidiary of Barclays PLC)', url: 'https://home.barclays/news/press-releases/2024/11/completion-of-the-acquisition-of-tesco-s-retail-banking-business' },
      { label: 'FCA: FCA fines Barclays £26 million over treatment of customers in financial difficulty', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-barclays-treatment-customers-financial-difficulty' },
    ],
  },
  {
    slug: 'mbna', name: 'MBNA', type: 'card', aliases: ['MBNA Limited', 'MBNA credit card'],
    entity: 'MBNA Limited', frn: '204487', companyNo: '02783251', group: 'Lloyds Banking Group',
    products: 'Credit cards', status: 'Trading', checked: '2026-10-16',
    about: [
      'MBNA is a UK credit card brand. Its credit cards are issued by MBNA Limited, which has its registered office at Cawley House, Chester Business Park, Chester CH4 9FB. MBNA is also a trading style of Lloyds Bank plc, which holds MBNA savings deposits.',
      'MBNA Limited is part of Lloyds Banking Group, which bought the business from Bank of America.',
    ],
    complaintsUrl: 'https://www.mbna.co.uk/support/complaints.html',
    decisions: [
      { ref: 'DRN-4154357', outcome: 'Upheld', summary: 'The ombudsman found the £3,000 limit approved in January 2018 was not irresponsible, but the October 2019 increase to £5,400 was, because proper checks such as bank statements would have shown no clear surplus income. MBNA was told to remove interest and charges on balances above £3,000, refund any overpayments with interest and remove adverse information recorded after October 2019.', url: FOS('DRN-4154357') },
      { ref: 'DRN-6024521', outcome: 'Not upheld', summary: 'The complaint covered the account opening in May 2019 and four limit increases, which took the limit to £22,400 by April 2022. The ombudsman found MBNA’s checks were not proportionate, but that the lending was likely affordable, so MBNA did not have to do anything.', url: FOS('DRN-6024521') },
      { ref: 'DRN-4798328', outcome: 'Not upheld', summary: 'The ombudsman found MBNA’s checks at application in November 2020 (£4,000 limit) were reasonable. MBNA should have done more before doubling the limit to £8,000 in September 2022, but bank statements showed the increase was likely affordable.', url: FOS('DRN-4798328') },
    ],
    sources: [
      { label: 'MBNA: Regulatory agencies and self-regulatory bodies', url: 'https://www.mbna.co.uk/about-us/regulatory-agencies.html' },
      { label: 'MBNA: regulatory footer', url: 'https://www.mbna.co.uk/misc/fragments/visa-footer.html' },
      { label: 'Companies House: MBNA Limited (02783251)', url: 'https://find-and-update.company-information.service.gov.uk/company/02783251' },
      { label: 'MBNA: How to complain', url: 'https://www.mbna.co.uk/support/complaints.html' },
      { label: 'Finextra: Lloyds completes MBNA acquisition', url: 'https://finextra.com/pressarticle/69491/lloyds-completes-mbna-acquisition' },
    ],
  },
  {
    slug: 'virgin-money', name: 'Virgin Money', type: 'card', aliases: ['Virgin Money credit card', 'Virgin Money overdraft', 'Virgin Money current account', 'Clydesdale Bank', 'Yorkshire Bank'],
    entity: 'Nationwide Building Society (trading as Virgin Money)', frn: '106078', group: 'Nationwide Building Society',
    products: 'Credit cards, current accounts, overdrafts, loans', status: 'Trading', checked: '2026-10-16',
    about: [
      'Virgin Money is a UK banking brand that offers credit cards, current accounts with overdrafts, loans, savings and mortgages. Since 2 April 2026, Virgin Money credit cards and current accounts have been provided by Nationwide Building Society, trading as Virgin Money. Nationwide’s head office is at Nationwide House, Pipers Way, Swindon SN38 1NW.',
      'Before that date, Virgin Money products were provided by Clydesdale Bank PLC trading as Virgin Money. Virgin Money and Nationwide have been in the same group since October 2024. After Court approval on 23 February 2026, Virgin Money’s business transferred to Nationwide on 2 April 2026. Card numbers, PINs and account terms did not change.',
    ],
    note: { title: 'Now part of Nationwide', text: 'From 2 April 2026, Virgin Money’s banking business (including credit cards) transferred from Clydesdale Bank PLC to Nationwide Building Society, which continues to use the Virgin Money brand. Ombudsman decisions from before the transfer name Clydesdale Bank Plc trading as Virgin Money.' },
    complaintsUrl: 'https://uk.virginmoney.com/service/complaints/',
    decisions: [
      { ref: 'DRN-4727493', outcome: 'Upheld', summary: 'The ombudsman found the bank lent irresponsibly when it approved a £2,300 card in September 2019 and when it increased the limit to £4,600 in January 2022. Recent gambling and lower actual income were relevant. The bank was told to remove all interest, fees and charges since the account opened, refund any overpayments with interest and remove adverse credit information.', url: FOS('DRN-4727493') },
      { ref: 'DRN-4216645', outcome: 'Upheld', summary: 'The £4,300 opening limit in July 2017 was not found irresponsible, but the May 2019 increase to £8,600 was not fairly made. Virgin Money was told to remove interest, fees and charges on balances above £4,300 from May 2019, refund any overpayments with interest and remove adverse information.', url: FOS('DRN-4216645') },
      { ref: 'DRN-5691955', outcome: 'Not upheld', summary: 'The complaint covered a £5,200 card approved in December 2020 and an increase to £9,000 in July 2021. The investigator had recommended a refund, but the ombudsman disagreed and did not require the bank to do anything.', url: FOS('DRN-5691955') },
    ],
    faqs: [
      { q: 'Can I claim for a Virgin Money overdraft?', a: 'Yes. Overdraft complaints follow the same rules: if you were in your overdraft most of every month, or your limit went up while you were struggling, you could claim back the interest and charges. Since 2 April 2026 Virgin Money current accounts have been provided by Nationwide Building Society.' },
    ],
    sources: [
      { label: 'MoneySavingExpert: Virgin Money products move to Nationwide (April 2026)', url: 'https://blog.moneysavingexpert.com/news/2026/04/virgin-money-nationwide-takeover' },
      { label: 'Virgin Money: Who are we? (legals)', url: 'https://uk.virginmoney.com/legals' },
      { label: 'Virgin Money: Nationwide transfer: credit cards', url: 'https://uk.virginmoney.com/nationwide-transfer/credit-cards' },
      { label: 'Virgin Money: Complaints', url: 'https://uk.virginmoney.com/service/complaints/' },
    ],
  },
  {
    slug: 'jaja', name: 'Jaja', type: 'card', aliases: ['Jaja Finance', 'Jaja credit card', 'Asda Money credit card'],
    entity: 'Jaja Finance Ltd', frn: '775979', companyNo: '09797750', group: 'Ray Fintech (Jersey-registered parent, as reported by City AM)',
    products: 'Jaja and Asda Money credit cards', status: 'Trading', checked: '2026-10-16',
    about: [
      'Jaja Finance Ltd is a London-based credit card provider founded in 2015. It issues its own Jaja credit cards and the Asda Money credit card, and lists Bank of Ireland UK credit cards among its other brands. Its registered office is at 27 Old Gloucester Street, Holborn, London WC1N 3AX.',
    ],
    complaintsUrl: 'https://jaja.co.uk/complaint/',
    decisions: [
      { ref: 'DRN-3624528', outcome: 'Upheld', summary: 'The ombudsman found it irresponsible to lend on a card opened in July 2016 with a £4,300 limit and increased to £8,300 in 2017, when the customer already had around £60,000 to £80,000 in revolving credit limits. The account was later migrated to Jaja. Jaja was told to remove all interest, fees and charges from July 2016 and return any overpayments to the customer’s estate with interest.', url: FOS('DRN-3624528') },
      { ref: 'DRN-4923681', outcome: 'Partly upheld', summary: 'Jaja accepted that approving a £900 card in December 2023 for an unemployed, vulnerable customer was irresponsible. It was told to remove all interest, fees and charges, refund any credit balance with interest and remove adverse information. A request to write off the balance was not upheld.', url: FOS('DRN-4923681') },
      { ref: 'DRN-5759300', outcome: 'Not upheld', summary: 'The ombudsman found Jaja’s checks were reasonable and proportionate both when it opened a £1,000 card in November 2023 and when it raised the limit to £1,400 in September 2024. Jaja did not have to do anything.', url: FOS('DRN-5759300') },
    ],
    sources: [
      { label: 'Jaja: Making a complaint (regulatory footer)', url: 'https://jaja.co.uk/complaint/' },
      { label: 'Companies House: Jaja Finance Ltd (09797750)', url: 'https://find-and-update.company-information.service.gov.uk/company/09797750' },
      { label: 'IBS Intelligence: Jaja Finance expands into the near-prime credit card space', url: 'https://ibsintelligence.com/ibsi-news/jaja-finance-expands-into-the-near-prime-credit-card-space' },
    ],
  },
  {
    slug: 'zopa', name: 'Zopa', type: 'card', aliases: ['Zopa Bank', 'Zopa credit card'],
    entity: 'Zopa Bank Limited', frn: '800542', companyNo: '10627575',
    products: 'Credit cards, personal loans, car finance', status: 'Trading', checked: '2026-10-16',
    about: [
      'Zopa Bank Limited is a UK digital bank founded in 2004, with its registered office at Level 12, 20 Water Street, Canary Wharf, London E14 5GX. It offers credit cards, personal loans and car finance, as well as savings and the Biscuit current account, which it launched in June 2025.',
      'Tech.eu reported that Zopa had 1.7 million customers and £3.8 billion in gross loans at the end of 2025.',
    ],
    complaintsUrl: 'https://www.zopa.com/contact/complaints',
    decisions: [
      { ref: 'DRN-4529140', outcome: 'Partly upheld', summary: 'The ombudsman found the £300 opening limit (November 2020) and the increase to £900 (August 2021) were not irresponsible. The November 2022 increase to £1,600 was, given about £25,500 of other debt and recent cash withdrawals. Zopa was told to remove interest, fees and charges on balances above £900 from 15 November 2022, refund any overpayments with interest and remove adverse information after that date.', url: FOS('DRN-4529140') },
      { ref: 'DRN-5916648', outcome: 'Not upheld', summary: 'The £600 card approved in October 2023 was found reasonable. Zopa’s checks before the May 2024 increase to £1,300 were not detailed enough, but bank statements showed the customer could likely afford it, so Zopa did not have to do anything.', url: FOS('DRN-5916648') },
      { ref: 'DRN-5346493', outcome: 'Not upheld', summary: 'The ombudsman found Zopa did not lend irresponsibly when it provided a credit card with a £1,000 limit in August 2023, and no redress was required.', url: FOS('DRN-5346493') },
    ],
    sources: [
      { label: 'Zopa: home page regulatory footer', url: 'https://home.zopa.com/' },
      { label: 'Zopa: Complaints', url: 'https://www.zopa.com/contact/complaints' },
      { label: 'Zopa: How do I make a complaint about my Zopa product?', url: 'https://www.zopa.com/help/article/how-do-i-make-a-complaint-about-my-zopa-product' },
      { label: 'Zopa: Loans FAQ', url: 'https://www.zopa.com/loans/faq' },
      { label: 'Zopa: How do I raise a complaint to review my car finance with you', url: 'https://www.zopa.com/help/article/how-do-i-raise-a-complaint-to-review-my-car-finance-with-you' },
      { label: 'Tech.eu: Zopa reports third consecutive year of profit (19 March 2026)', url: 'https://tech.eu/2026/03/19/zopa-reports-third-consecutive-year-of-profit-says-take-up-of-new-current-account-topping-expectations/' },
    ],
  },
  {
    slug: 'tesco-bank', name: 'Tesco Bank', type: 'card', aliases: ['Tesco Bank credit card', 'Tesco Clubcard credit card', 'Tesco Personal Finance', 'Tesco Bank loan', 'Tesco Bank current account', 'Tesco Bank overdraft'],
    entity: 'Barclays Bank UK PLC (trading as Tesco Bank)', frn: '759676', companyNo: '09740322', group: 'Barclays PLC',
    products: 'Credit cards, personal loans', status: 'Trading', checked: '2026-10-16',
    about: [
      'Tesco Bank is a trading name of Barclays Bank UK PLC. Barclays bought Tesco Personal Finance plc’s retail banking business, which included about £4.2 billion of credit card balances, unsecured personal loans and customer deposits. The business transferred to Barclays Bank UK PLC on 1 November 2024, after the High Court approved the transfer on 17 October 2024.',
      'Barclays continues to use the Tesco Bank brand under a 10-year partnership with Tesco. Tesco Personal Finance kept its insurance and money services, such as travel money and ATMs.',
    ],
    note: { title: 'Now provided by Barclays', text: 'Since 1 November 2024, Tesco Bank credit cards, loans and savings have been provided by Barclays Bank UK PLC, trading as Tesco Bank. Before that they were provided by Tesco Personal Finance plc. Older ombudsman decisions name Tesco Personal Finance PLC trading as Tesco Bank.' },
    complaintsUrl: 'https://tescobank.com/help/complaints/',
    decisions: [
      { ref: 'DRN-5007519', outcome: 'Upheld', summary: 'The ombudsman found Tesco Bank should not have raised a limit from £3,200 to £5,200 in December 2022, when the customer’s unsecured debt had grown from £434 to £11,751 and he had just incurred a late payment fee. Tesco Bank was told to remove interest and charges on balances above £3,200, refund any overpayments with interest and remove adverse information from December 2022.', url: FOS('DRN-5007519') },
      { ref: 'DRN-5553646', outcome: 'Partly upheld', summary: 'The £6,300 card approved in December 2022 was found reasonable. The January 2024 increase to £8,300 was not, as other unsecured debt had risen to £27,092 and there was over £4,000 of gambling spending in the previous three months. Tesco Bank was told to remove interest and charges on balances above £6,300, refund any overpayments with interest and remove adverse information after January 2024.', url: FOS('DRN-5553646') },
      { ref: 'DRN-5982543', outcome: 'Not upheld', summary: 'This complaint, against Barclays Bank UK PLC trading as Tesco Bank, covered a £2,500 card opened in March 2017 and an increase to £3,500 in October 2017. The ombudsman found the lending was not irresponsible and no redress was required.', url: FOS('DRN-5982543') },
    ],
    faqs: [
      { q: 'Can I claim for a Tesco Bank loan or old current account overdraft?', a: 'Yes. Tesco Bank loans moved to Barclays Bank UK PLC with the credit cards on 1 November 2024, along with balances on Tesco Bank current accounts, which closed in 2021. Complaints go to Tesco Bank, subject to the usual time limits.' },
    ],
    sources: [
      { label: 'Tesco Bank: Complaints process (footer: Tesco Bank is a trading name of Barclays Bank UK PLC)', url: 'https://tescobank.com/help/complaints/' },
      { label: 'Tesco Bank: Transfer scheme', url: 'https://www.tescobank.com/transfer-scheme/' },
      { label: 'Barclays: Tesco Bank and Barclays: key points', url: 'https://barclays.co.uk/tesco-partnership/tesco-bank-and-barclays' },
      { label: 'Barclays: Completion of the acquisition of Tesco’s retail banking business', url: 'https://home.barclays/news/press-releases/2024/11/completion-of-the-acquisition-of-tesco-s-retail-banking-business' },
      { label: 'Barclays: Electronic Commerce Directive (FS register no. 759676)', url: 'https://barclays.co.uk/important-information/electronic-commerce-directive' },
      { label: 'Companies House: Barclays Bank UK PLC (09740322)', url: 'https://find-and-update.company-information.service.gov.uk/company/09740322' },
    ],
  },
  {
    slug: 'co-operative-bank', name: 'The Co-operative Bank', type: 'overdraft', aliases: ['Co-op Bank', 'smile', 'The Co-operative Bank p.l.c.'],
    entity: 'The Co-operative Bank p.l.c.', frn: '121885', companyNo: '00990937', group: 'Coventry Building Society',
    products: 'Current accounts, overdrafts (Co-operative Bank and smile), credit cards', status: 'Trading', checked: '2026-10-16',
    about: [
      'The Co-operative Bank p.l.c. is a UK bank with its registered office at 1 Balloon Street, Manchester M4 4BE. It provides current accounts and overdrafts under The Co-operative Bank and smile brands. smile is a trading name of the bank.',
      'Coventry Building Society bought The Co-operative Bank on 1 January 2025. The bank has proposed transferring its business, including smile, to Coventry Building Society. The Court hearing is set for 2 December 2026, and the transfer would take effect on 1 January 2027 if approved. The Co-operative Bank and smile brands would continue as trading names.',
    ],
    note: { title: 'Owned by Coventry Building Society', text: 'Coventry Building Society has owned The Co-operative Bank since 1 January 2025. A transfer of the bank’s business into Coventry Building Society goes to Court on 2 December 2026 and, if approved, is expected to take effect on 1 January 2027. The Co-operative Bank and smile brands would stay.' },
    complaintsUrl: 'https://www.smile.co.uk/help-and-support/contact-us/make-a-complaint/',
    decisions: [
      { ref: 'DRN-5758097', outcome: 'Not upheld', summary: 'The complaint covered a £500 overdraft agreed in August 2022 and increases in February 2023, July 2023 and June 2024. The ombudsman found Co-op’s checks and monitoring were reasonable. It had written to the customer three times about his overdraft use and stopped the overdraft in June 2025, so it did not have to do anything further.', url: FOS('DRN-5758097') },
      { ref: 'DRN-3504750', outcome: 'Not upheld', summary: 'The ombudsman found Co-op’s checks were proportionate when it approved a £500 overdraft in September 2018. When the customer later reported financial difficulty, the bank paused interest and charges and agreed a reducing repayment plan, which the ombudsman found appropriate.', url: FOS('DRN-3504750') },
    ],
    sources: [
      { label: 'smile (The Co-operative Bank p.l.c.): Important information: registered address, FS register no. 121885', url: 'https://www.smile.co.uk/global/important-information' },
      { label: 'Companies House: The Co-operative Bank p.l.c. (00990937)', url: 'https://find-and-update.company-information.service.gov.uk:443/company/00990937' },
      { label: 'Coventry Building Society: Important update on The Co-operative Bank transfer', url: 'https://coventrybuildingsociety.co.uk/member/important-update.html' },
      { label: 'smile: Make a complaint', url: 'https://www.smile.co.uk/help-and-support/contact-us/make-a-complaint/' },
    ],
  },
  {
    slug: 'mr-lender', name: 'Mr Lender', type: 'payday', aliases: ['MrLender.com', 'PDL Finance'],
    entity: 'PDL Finance Limited', frn: '673310', companyNo: '06738633',
    products: 'Short-term instalment loans', status: 'Trading', checked: '2026-10-16',
    about: [
      'Mr Lender is the trading name of PDL Finance Limited. The company was incorporated in 2008 and its registered office is in London. It provides short-term instalment loans online, usually of £250 to £1,500 repaid over 3 to 12 months.',
      'The FCA has warned about a clone firm using similar website addresses (mrlenders.com and pdlfinance.co.uk).',
    ],
    complaintsUrl: 'https://www.mrlender.com/complaints-policy',
    decisions: [
      { ref: 'DRN-4779546', outcome: 'Upheld', summary: 'A £300 loan from June 2022 should not have been approved. The credit data showed the borrower was over his credit card limit and in arrears on a personal loan. Mr Lender was told to remove all interest, fees and charges, refund any overpayment with interest and remove adverse information from his credit file.', url: FOS('DRN-4779546') },
      { ref: 'DRN-4291164', outcome: 'Partly upheld', summary: 'Two small loans in July 2022 were found to be fair. A third loan of £1,500 over 12 months in December 2022 needed further checks, which would probably have shown it was unaffordable. Mr Lender was told to remove the interest and charges on that loan and to remove all three loans from the credit file.', url: FOS('DRN-4291164') },
      { ref: 'DRN-2612819', outcome: 'Not upheld', summary: 'The complaint covered two £250 loans taken in 2017 and 2018. The ombudsman found Mr Lender’s checks on income and expenditure were proportionate, so no redress was ordered.', url: FOS('DRN-2612819') },
    ],
    sources: [
      { label: 'FCA warning: PDL Finance Limited clone (genuine firm details, FRN 673310)', url: 'https://www.fca.org.uk/news/warnings/pdl-finance-clone' },
      { label: 'Companies House: PDL Finance Limited (06738633)', url: 'https://find-and-update.company-information.service.gov.uk/company/06738633' },
    ],
  },
  {
    slug: 'jd-williams', name: 'JD Williams', type: 'catalogue', aliases: ['Simply Be', 'Jacamo', 'Ambrose Wilson', 'Fashion World', 'Figleaves'],
    entity: 'J D Williams & Company Limited', frn: '311618', companyNo: '00178367', group: 'N Brown Group (taken private by the Alliance family, completed 12 February 2025)',
    products: 'Personal credit account (catalogue credit, Buy Now Pay Later)', status: 'Trading', checked: '2026-10-16',
    about: [
      'J D Williams & Company Limited is the credit provider for the N Brown group’s online retail brands. Simply Be and Jacamo both state that they are trading names of the company. The FCA register lists Fashion World, Ambrose Wilson and Figleaves as trading names. Its personal credit account is an open-ended revolving account. The company’s own example uses a 44.9% variable APR on a £500 limit. The company is based at Griffin House, 40 Lever Street, Manchester.',
      'In September 2016 N Brown said J D Williams had received full FCA authorisation. It also said it had found an error in an earlier calculation of redress for financial services complaints, had told the FCA and expected an exceptional cost of £5m to £8m. In 2017 the group reported a hit of about £40m connected with a credit insurance product it sold between 2006 and 2014.',
    ],
    note: { title: 'One lender, several brands', text: 'Accounts with JD Williams, Simply Be, Jacamo, Ambrose Wilson and Fashion World are provided by the same company, J D Williams & Company Limited. A complaint about any of these brands goes to the same lender.' },
    complaintsUrl: 'https://support.jdwilliams.co.uk/hc/en-gb/categories/360000686179-Complaints',
    decisions: [
      { ref: 'DRN-3513735', outcome: 'Partly upheld', summary: 'A Simply Be account was opened in 2013 with a £125 limit, and the limit was later raised as high as £3,500. The ombudsman found the increase on 29 August 2014 should not have been given and told the lender to rework the account and remove interest on balances above £1,000 from that date.', url: FOS('DRN-3513735') },
      { ref: 'DRN-3173135', outcome: 'Partly upheld', summary: 'An account was opened in November 2017 with a £175 limit, and the limit was raised seven times to £1,500 by December 2018. The ombudsman found the December 2018 increase should not have been made because the customer had already started missing payments, and ordered a refund of interest above £1,000 and of fees.', url: FOS('DRN-3173135') },
      { ref: 'DRN-3200028', outcome: 'Partly upheld', summary: 'A second account was opened in December 2019 with a £150 limit, and the limit was raised six times to £1,500 by September 2020. The ombudsman found the lender should not have increased the limit from 8 February 2020 and ordered the account to be reworked so that interest applied only up to £150.', url: FOS('DRN-3200028') },
    ],
    sources: [
      { label: 'JD Williams: Your Personal Credit Account terms', url: 'https://www.jdwilliams.co.uk/terms-and-conditions/your-personal-credit-account' },
      { label: 'Jacamo: Legal notice', url: 'https://www.jacamo.co.uk/terms-and-conditions/legal-notice' },
      { label: 'Simply Be: Legal notice', url: 'https://www.simplybe.co.uk/terms-and-conditions/legal-notice' },
      { label: 'Companies House: J.D. Williams & Company Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/00178367' },
      { label: 'N Brown Group RNS \'Update\', 21 September 2016', url: 'https://www.investegate.co.uk/announcement/rns/brown-n-group--bwng/update/4550500' },
      { label: 'Wikipedia: N Brown Group', url: 'https://en.wikipedia.org/wiki/N_Brown_Group' },
    ],
  },
  {
    slug: 'freemans', name: 'Freemans', type: 'catalogue', aliases: ['Kaleidoscope', 'Curvissa', 'Bonprix'],
    entity: 'Freemans plc', frn: '311341', companyNo: '00321643', group: 'Freemans Grattan Holdings Limited (Otto Group)',
    products: 'Flexiway and Flexi credit accounts, Buy Now Pay Later', status: 'Trading', checked: '2026-10-16',
    about: [
      'Freemans plc is an online home shopping retailer based in Bradford. It provides credit through its own accounts, including Flexiway, which has a representative APR of 39.9% variable. Its parent is Freemans Grattan Holdings Limited, which also owns Grattan plc. Both are part of Germany’s Otto Group.',
      'Published ombudsman decisions show that complaints about Kaleidoscope and Curvissa catalogue accounts have also been answered by Freemans plc.',
    ],
    complaintsUrl: 'https://www.freemans.com/web/main/help_contact_us.asp',
    decisions: [
      { ref: 'DRN-4938203', outcome: 'Upheld', summary: 'A shopping account was opened in July 2018 with a £100 limit. The ombudsman found that although the checks were proportionate, the customer’s credit file showed arrears and near-limit borrowing, so lending was unfair. Freemans was told to refund what the customer had paid above the amount borrowed,.', url: FOS('DRN-4938203') },
      { ref: 'DRN-3301824', outcome: 'Partly upheld', summary: 'The complaint covered four catalogue accounts (Kaleidoscope, Freemans, Bon Prix and Grattan) whose limits rose repeatedly between 2013 and 2017. The ombudsman found further lending was likely to be unsustainable from December 2013 and told Freemans to rework the accounts from that point.', url: FOS('DRN-3301824') },
      { ref: 'DRN-3600988', outcome: 'Partly upheld', summary: 'Kaleidoscope and Curvissa accounts were opened in January 2013 with £100 limits. The ombudsman found the Curvissa increase on 12 June 2015 should not have been made and ordered the account to be reworked from that date.', url: FOS('DRN-3600988') },
    ],
    sources: [
      { label: 'Lowell: Freemans Grattan Holdings brands', url: 'https://www.lowell.co.uk/fgh' },
      { label: 'Freemans: Flexiway credit account (legal footer)', url: 'https://www.freemans.com/web/main/flexiway-credit-account.asp' },
      { label: 'Freemans: Help & contact us', url: 'https://www.freemans.com/web/main/help_contact_us.asp' },
      { label: 'Companies House: Freemans Public Limited Company', url: 'https://find-and-update.company-information.service.gov.uk/company/00321643' },
      { label: 'Freemans Grattan Holdings: Risk & regulations', url: 'https://fgh-uk.com/risk-regulations/' },
      { label: 'Modern slavery statement registry: Grattan plc group statement 2024', url: 'https://modern-slavery-statement-registry.service.gov.uk/statement-summary/dC5znZh8/2024/group' },
      { label: 'FashionNetwork: \'Freemans owner Otto Group finalises its Executive Board\', 5 March 2026', url: 'https://uk.fashionnetwork.com/news/Freemans-owner-otto-group-finalises-its-executive-board,1813441.html' },
      { label: 'Wikipedia: Freemans', url: 'https://en.wikipedia.org/wiki/Freemans' },
    ],
  },
  {
    slug: 'grattan', name: 'Grattan', type: 'catalogue', aliases: ['Look Again', 'Witt International'],
    entity: 'Grattan plc', frn: '311340', companyNo: '00249001', group: 'Freemans Grattan Holdings Limited (Otto Group)',
    products: 'Flexiway credit account, Buy Now Pay Later', status: 'Trading', checked: '2026-10-16',
    about: [
      'Grattan plc is a Bradford-based home shopping retailer and the credit provider for Grattan accounts. Its Flexiway account has a representative APR of 39.9% variable. Grattan is a separate company from Freemans plc but belongs to the same group, Freemans Grattan Holdings.',
      'The FCA register lists trading names including Grattan and Lookagain.co.uk. Published ombudsman decisions about Look Again and Witt International shopping accounts name Grattan plc as the lender.',
    ],
    complaintsUrl: 'https://www.grattan.co.uk/web/main/help_contact_us.asp',
    decisions: [
      { ref: 'DRN-4630825', outcome: 'Upheld', summary: 'A Look Again account was opened in February 2014 with a £200 limit, which was raised to £500 by June 2014. The ombudsman found Grattan should have seen the customer was unlikely to repay sustainably, and ordered removal of all interest, fees and charges.', url: FOS('DRN-4630825') },
      { ref: 'DRN-4714777', outcome: 'Not upheld', summary: 'A Look Again account was opened in November 2017 with a £100 limit, which rose by £100 a month to £500 by April 2018. The ombudsman did not find that Grattan had lent irresponsibly.', url: FOS('DRN-4714777') },
      { ref: 'DRN-3764002', outcome: 'Not upheld', summary: 'A Witt International account was opened in February 2018 with a £1,000 limit, although the customer said she had asked for £100. The ombudsman found the evidence did not show the lending was irresponsible or unaffordable.', url: FOS('DRN-3764002') },
    ],
    sources: [
      { label: 'Grattan: Flexiway credit account (legal footer)', url: 'https://www.grattan.co.uk/web/main/flexiway-credit-account.asp' },
      { label: 'Freemans Grattan Holdings: Risk & regulations', url: 'https://fgh-uk.com/risk-regulations/' },
      { label: 'Wikipedia: Freemans (Otto ownership of Grattan and Freemans)', url: 'https://en.wikipedia.org/wiki/Freemans' },
    ],
  },
  {
    slug: 'studio', name: 'Studio', type: 'catalogue', aliases: ['Studio Pay', 'Studio Retail', 'Express Gifts', 'Frasers Plus'],
    entity: 'Frasers Group Financial Services Limited', frn: '311908', companyNo: '00718151', group: 'Frasers Group',
    products: 'Frasers Plus credit account; formerly Studio Pay accounts', status: 'Trading', checked: '2026-10-16',
    about: [
      'Studio’s credit accounts are provided by Frasers Group Financial Services Limited. The company was called Studio Retail Limited until 31 May 2023 and Express Gifts Limited until January 2019. Frasers Group bought Studio out of administration in February 2022. The company is based at Clayton Business Park, Accrington. It now provides the Frasers Plus credit product, and Studio’s retail arm describes itself as a credit introducer, not a lender.',
      'Ombudsman decisions published after the sale, including decisions against both Studio Retail Limited and Frasers Group Financial Services Limited, show that the company still answers complaints about accounts opened before 2022.',
    ],
    note: { title: 'Where Studio Pay complaints go', text: 'Studio says complaints about lending on a Studio Pay account, the sale of the balance or account closure should be emailed to studiopaycomplaints@frasers.plus. This applies even if the account is now handled by Link Financial. Accounts that moved to Frasers Plus use the Frasers Plus support form.' },
    complaintsUrl: 'https://help.studio.co.uk/support/solutions/articles/80001078488-how-do-i-make-a-financial-services-complaint-',
    decisions: [
      { ref: 'DRN-4024273', outcome: 'Upheld', summary: 'A Studio account was opened in June 2019 with a £200 limit, which was raised to £600 in November 2019. The ombudsman found Studio Retail Limited acted unfairly in extending credit and ordered a refund of all interest and charges.', url: FOS('DRN-4024273') },
      { ref: 'DRN-6046390', outcome: 'Partly upheld', summary: 'A Studio account opened in about November 2018 with a £150 limit had its limit raised several times, to £1,600 by November 2020. The ombudsman found the later increases were irresponsible but the earlier ones were not, and ordered the account to be reworked.', url: FOS('DRN-6046390') },
      { ref: 'DRN-4876341', outcome: 'Not upheld', summary: 'A Studio account was opened in December 2020 with a £375 limit, which was raised to £600 by May 2021. The ombudsman found the checks were proportionate and the lending decisions were reasonable.', url: FOS('DRN-4876341') },
    ],
    sources: [
      { label: 'Studio Help Centre: Your Studio Pay Credit Account', url: 'https://help.studio.co.uk/hc/en-gb/articles/6018135179167-Your-Studio-Pay-Credit-Account' },
      { label: 'Studio Help Centre: About us', url: 'https://help.studio.co.uk/support/solutions/articles/80001078342-about-us' },
      { label: 'Studio Help Centre: How do I make a financial services complaint?', url: 'https://help.studio.co.uk/support/solutions/articles/80001078488-how-do-i-make-a-financial-services-complaint-' },
      { label: 'Frasers Plus customer complaints process (PDF)', url: 'https://cdn.tymit.com/media/Frasers_Plus_Customer_Complaints_Process_05abd5c61f.pdf' },
      { label: 'Companies in the UK: Frasers Group Financial Services Limited (previous names)', url: 'https://www.companiesintheuk.co.uk/ltd/studio-retail' },
      { label: 'Internet Retailing: Frasers Group buys Studio Retail out of administration, 25 February 2022', url: 'https://internetretailing.net/?p=43323' },
      { label: 'Home of Direct Commerce: Frasers Group splits Studio Retail, 2 June 2023', url: 'https://homeofdirectcommerce.com/news/frasers-group-splits-studio-retail/' },
      { label: 'Retail Gazette: Studio under Frasers ownership, January 2024', url: 'https://www.retailgazette.co.uk/blog/2024/01/studio-profit-frasers/' },
    ],
  },
  {
    slug: 'logbook-money', name: 'Logbook Money', type: 'logbook',
    entity: 'Logbook Money Limited', frn: '680947', companyNo: '07508778',
    products: 'Logbook loans of £1,000 to £50,000', status: 'Trading', checked: '2026-10-16',
    about: [
      'Logbook Money Limited is a logbook lender with its registered office in Horsforth, Leeds, incorporated in January 2011. It lends £1,000 to £50,000 secured on the borrower’s vehicle, and the borrower keeps driving the car while repaying. Its representative example is £3,000 over 36 months at 193.63% APR.',
      'In England and Wales its loans are secured by a bill of sale. Customers in Scotland sign a hire purchase agreement instead.',
    ],
    complaintsUrl: 'https://www.logbookmoney.com/complaints-procedure',
    decisions: [
      { ref: 'DRN-3477207', outcome: 'Upheld', summary: 'A £1,500 logbook loan was taken in April 2021, repayable as £4,200 over 78 weekly instalments. The ombudsman found the lender should have seen the repayments were not sustainably affordable, given the customer’s variable income and gambling. It ordered a refund of payments above the amount borrowed,.', url: FOS('DRN-3477207') },
      { ref: 'DRN-3366774', outcome: 'Partly upheld', summary: 'The complaint covered two loans: £1,000 in October 2017 and about £1,442 in February 2018. The ombudsman found the first loan was not irresponsible but the second was, and ordered a refund of payments above the capital on that loan.', url: FOS('DRN-3366774') },
      { ref: 'DRN-3554979', outcome: 'Upheld', summary: 'A £1,000 logbook loan was taken in August 2019, repayable as £2,800 over 78 weekly instalments of £36. The ombudsman found the checks were not proportionate and the loan was likely unaffordable. The lender was told to write off the balance, refund payments above the amount borrowed and pay £200 for distress caused when the car was recovered.', url: FOS('DRN-3554979') },
    ],
    sources: [
      { label: 'Logbook Money: Homepage (legal footer)', url: 'https://www.logbookmoney.com/' },
      { label: 'Logbook Money: Complaints procedure', url: 'https://www.logbookmoney.com/complaints-procedure' },
      { label: 'Companies House: Logbook Money Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/07508778' },
    ],
  },
  {
    slug: 'car-cash-point', name: 'Car Cash Point', type: 'logbook', aliases: ['CarCashPoint', 'elogbookloan', 'Logbook Loans NI'],
    entity: 'CarCashPoint Limited', frn: '670218', companyNo: '07345897',
    products: 'Logbook loans of £500 to £100,000', status: 'Trading', checked: '2026-10-16',
    about: [
      'CarCashPoint Limited is a logbook lender based in north London. The FCA authorised it in March 2016 to enter into bill of sale loan agreements. It lends against cars, vans, motorbikes and other vehicles over terms of one to five years, with weekly or monthly payments. Its representative example is £1,000 over 36 months at 230.70% APR.',
      'The FCA register lists elogbookloan and Logbook Loans NI as trading names.',
    ],
    complaintsUrl: 'https://www.carcashpoint.co.uk/frequently-asked-questions/',
    decisions: [
      { ref: 'DRN-3618176', outcome: 'Upheld', summary: 'A £530 logbook loan was taken in January 2019, repayable as £2,438 over 36 monthly instalments. The ombudsman found the checks were not proportionate and that better checks would have shown the loan was unaffordable. It ordered a refund of payments above the amount borrowed, including the £30 agent fee,.', url: FOS('DRN-3618176') },
      { ref: 'DRN-3058381', outcome: 'Upheld', summary: 'A £2,060 loan secured on the customer’s vehicle was taken in October 2014, repayable in 260 weekly payments of £45.96. The ombudsman found the checks were not reasonable and the loan was unaffordable, and ordered a refund of all interest and charges.', url: FOS('DRN-3058381') },
      { ref: 'DRN-5605836', outcome: 'Not upheld', summary: 'A £1,060 logbook loan was taken in August 2023, repayable as £2,968.02 over 18 monthly instalments. The ombudsman found the lender’s checks were reasonable and proportionate and its lending decision was fair.', url: FOS('DRN-5605836') },
    ],
    sources: [
      { label: 'Car Cash Point: Homepage (legal footer)', url: 'https://www.carcashpoint.co.uk/' },
      { label: 'Car Cash Point: Frequently asked questions (complaints)', url: 'https://www.carcashpoint.co.uk/frequently-asked-questions/' },
      { label: 'Car Cash Point: terms of use (FRN 670218, company 07345897)', url: 'https://www.carcashpoint.co.uk/terms-of-use/' },
    ],
  },
  {
    slug: 'fernovo', name: 'Fernovo', type: 'payday', aliases: ['Quidie'],
    entity: 'Quidie Limited', frn: '674141', companyNo: '08110266',
    products: 'Short-term instalment loans and payday loans', status: 'Trading', checked: '2026-10-16',
    about: [
      'Fernovo is the trading name of Quidie Limited, a Croydon-based company incorporated in 2012. It is authorised to provide high-cost short-term credit and lends small instalment loans of up to £1,000 over two to six months, and payday loans of up to £400 repaid in one go.',
    ],
    complaintsUrl: 'https://www.fernovo.co.uk/info/complaints-policy',
    decisions: [
      { ref: 'DRN-4237730', outcome: 'Upheld', summary: 'A £300 instalment loan from June 2022 was found to be unaffordable, given the borrower’s circumstances at the time. Fernovo was told to remove all interest and charges, refund any amount paid above £300 with interest and remove adverse credit file information.', url: FOS('DRN-4237730') },
      { ref: 'DRN-5912511', outcome: 'Partly upheld', summary: 'Of 17 loans, the ombudsman upheld loans 9 to 11, taken between April 2022 and August 2023. Fernovo was told to refund the interest and charges on those loans with interest and remove adverse information about them.', url: FOS('DRN-5912511') },
      { ref: 'DRN-6106340', outcome: 'Not upheld', summary: 'The ombudsman looked at a third loan of £250 taken in September 2022 and found Fernovo had not lent irresponsibly. No redress was ordered.', url: FOS('DRN-6106340') },
    ],
    sources: [
      { label: 'FCA register: Quidie Limited, FRN 674141 (authorised; trades as Fernovo)', url: 'https://register.fca.org.uk/s/firm?id=001b000000khJcHAAU' },
      { label: 'Finder UK: Fernovo review (products; updated Mar 2024)', url: 'https://www.finder.com/uk/payday-loans/fernovo' },
    ],
  },
  {
    slug: 'mutual', name: 'Mutual', type: 'doorstep', aliases: ['Mutual Clothing & Supply', 'Kingstone', 'Mutual Retail'],
    entity: 'Mutual Clothing & Supply Company Limited', frn: '692399', companyNo: '00181701',
    products: 'Home-collected loans, household goods on weekly credit', status: 'Trading', checked: '2026-10-16',
    about: [
      'Mutual Clothing & Supply Company Limited is a Leicester-based home credit lender, incorporated in 1922. It provides cash loans collected by agents at the customer’s home. Its representative example is £500 over 51 weeks at 104.0% APR. Through Mutual Retail and the Kingstone store it also sells household goods on weekly credit over 150 weeks, at a representative APR of 42.4%.',
      'The firm is authorised by the FCA for home collected credit, consumer credit lending, consumer hire and credit broking. It trades as Mutual and Kingstone and is a member of the Consumer Credit Trade Association.',
    ],
    complaintsUrl: 'https://www.mutual.uk.com/contact-us/make-a-complaint',
    decisions: [
      { ref: 'DRN-3023277', outcome: 'Partly upheld', summary: 'The complaint covered eight home collected loans taken between 2011 and 2019. The ombudsman found that by loan 6 (July 2017, £1,000) the pattern of lending had become unsustainable, and ordered a refund of interest and charges on loans 6 to 8,.', url: FOS('DRN-3023277') },
      { ref: 'DRN-3473021', outcome: 'Partly upheld', summary: 'Seven loans of £500 to £700 taken between August 2015 and December 2020 were in scope. The ombudsman found Mutual should not have provided loans 5 to 11 because the lending was unsustainable, and ordered a refund of interest and charges. Earlier loans fell outside the service’s jurisdiction.', url: FOS('DRN-3473021') },
      { ref: 'DRN-4386383', outcome: 'Partly upheld', summary: 'The complaint covered seven agreements between 2013 and 2018, including a furniture hire purchase deal. The ombudsman upheld it for loans 4 to 7, from December 2015, and Mutual had already put the refund at £3,128.16.', url: FOS('DRN-4386383') },
    ],
    sources: [
      { label: 'Mutual: Contact us (legal footer and products)', url: 'https://www.mutual.uk.com/contact-us' },
      { label: 'Mutual: Mutual Retail', url: 'https://www.mutual.uk.com/mutual-retail' },
      { label: 'Mutual: Make a complaint', url: 'https://www.mutual.uk.com/contact-us/make-a-complaint' },
      { label: 'Companies House: Mutual Clothing & Supply Company Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/00181701' },
      { label: 'FCA register: Mutual Clothing & Supply Company Limited, FRN 692399', url: 'https://register.fca.org.uk/s/firm?id=001b000000oUeeXAAS' },
    ],
  },
  {
    slug: 'next', name: 'Next', type: 'catalogue',
    h1: 'Next nextpay account refund claims', title: 'Next nextpay account refund claims | CreditRights', aliases: ['nextpay', 'Next Online', 'Next Directory'],
    entity: 'Next Retail Limited', frn: '707578', companyNo: '04521150', group: 'NEXT plc',
    products: 'nextpay credit account, Pay in 3', status: 'Trading', checked: '2026-10-16',
    about: [
      'Next Retail Limited, based in Enderby, Leicester, is the lender for Next’s own credit accounts. The nextpay account is a running credit account for use online and in store, with a representative APR of 24.9% variable. Pay in 3 splits purchases into three monthly payments and has a representative APR of 34.9% variable. Next Online is a trading name of Next Retail Limited.',
      'Next has a separate consumer credit complaints process for credit complaints, distinct from its retail complaints route.',
    ],
    complaintsUrl: 'https://zendesk.next.co.uk/hc/en-gb/articles/4407489973777',
    decisions: [
      { ref: 'DRN-2714912', outcome: 'Upheld', summary: 'Next raised a NextPay credit limit from £400 to £3,000 in September 2017, and the account defaulted in December 2018. The ombudsman found Next had not carried out proportionate checks and ordered removal of interest and charges from 30 September 2017.', url: FOS('DRN-2714912') },
      { ref: 'DRN-4666693', outcome: 'Partly upheld', summary: 'An account was opened in December 2020 with a £600 limit, which was raised to £900 in July 2021 and £1,200 in January 2022. The ombudsman found the account opening was fair, but Next should have made further checks before the increases from 1 July 2021.', url: FOS('DRN-4666693') },
    ],
    sources: [
      { label: 'Next: Credit options', url: 'https://www.next.co.uk/credit' },
      { label: 'Next: Terms & conditions', url: 'https://www.next.co.uk/terms' },
      { label: 'Next Help: Financial Conduct Authority (FCA) Regulation', url: 'https://zendesk.next.co.uk/hc/en-gb/articles/4407644516881-Financial-Conduct-Authority-FCA-Regulation' },
      { label: 'Next Help: Complaints process', url: 'https://zendesk.next.co.uk/hc/en-gb/articles/4407489973777' },
      { label: 'FCA register: Next Retail Limited, FRN 707578', url: 'https://register.fca.org.uk/s/firm?id=001b000000rHjtqAAC' },
    ],
  },
  {
    slug: 'moneybarn', name: 'Moneybarn', type: 'carfinance', aliases: ['Moneybarn Vehicle Finance'],
    entity: 'Moneybarn No. 1 Limited', frn: '702780', companyNo: '04496573', group: 'Vanquis Banking Group plc (formerly Provident Financial plc)',
    products: 'Car finance (conditional sale and hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Moneybarn is the trading style of Moneybarn No. 1 Limited, registered office Athena House, Bedford Road, Petersfield, Hampshire. It lends vehicle finance for cars, vans and motorbikes, mostly to customers with lower credit scores, and is the vehicle finance arm of Vanquis Banking Group.',
      'In February 2020 the FCA fined Moneybarn £2.77 million for how it treated customers in arrears between April 2014 and October 2017. Customers in financial difficulty were not given a realistic, sustainable way to clear arrears, and were not told clearly what missing payments or ending the agreement would cost. Moneybarn paid more than £30 million in redress to 5,933 customers. That case was about arrears handling, not about the original lending decisions.',
    ],
    complaintsUrl: 'https://www.moneybarn.com/about-us/feedback-and-complaints',
    decisions: [
      { ref: 'DRN-4747114', outcome: 'Upheld', summary: 'The ombudsman found Moneybarn did not carry out proportionate checks before a used-car conditional sale agreement (£2,000 deposit, 36 payments of £377.16). Moneybarn had to refund anything Mr H paid above the £7,680 cash price, with interest, and remove adverse credit file entries.', url: FOS('DRN-4747114') },
      { ref: 'DRN-4049534', outcome: 'Upheld', summary: 'A July 2021 conditional sale agreement for a £10,995 car at 39.9% APR was found to be irresponsible lending. Moneybarn had to end the agreement and collect the car at no cost. It could keep £190 for each month Mr M had the car and had to refund the deposit and any overpayments with interest. It also had to remove adverse credit file entries.', url: FOS('DRN-4049534') },
      { ref: 'DRN-4295770', outcome: 'Not upheld', summary: 'The complaint was about a 60-month hire purchase agreement from May 2021 with monthly payments of £502.96. The ombudsman found Moneybarn’s checks were not proportionate, but better checks would probably have shown the payments were affordable, so no redress was ordered.', url: FOS('DRN-4295770') },
    ],
    sources: [
      { label: 'Moneybarn: Feedback and complaints (legal footer, FRN, company number)', url: 'https://www.moneybarn.com/about-us/feedback-and-complaints' },
      { label: 'Moneybarn: Complaints data, 1 Jan to 31 Jul 2026', url: 'https://www.moneybarn.com/complaints-data/' },
      { label: 'FCA: FCA fines Moneybarn £2.77m for unfair treatment of customers in arrears', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-moneybarn-277m-unfair-treatment-customers-arrears' },
    ],
  },
  {
    slug: 'close-brothers-motor-finance', name: 'Close Brothers Motor Finance', type: 'carfinance', aliases: ['Close Motor Finance', 'CBMF'],
    entity: 'Close Brothers Limited', frn: '124750', companyNo: '00195626', group: 'Close Brothers Group plc',
    products: 'Car finance (hire purchase, PCP, conditional sale)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Close Brothers Motor Finance is a trading style of Close Brothers Limited, a bank authorised by the Prudential Regulation Authority and regulated by the FCA and PRA. Its registered office is 10 Crown Place, London, and it is a subsidiary of Close Brothers Group plc. It provides car finance through dealers.',
      'The group has made large provisions for motor finance commission redress. That is a separate issue from affordability complaints, which are about whether the lender checked properly that the agreement was affordable.',
    ],
    complaintsUrl: 'https://www.closemotorfinance.co.uk/customers/help-centre/how-to-complain',
    decisions: [
      { ref: 'DRN-6184384', outcome: 'Upheld', summary: 'The ombudsman found the lender should have done more checks and would not fairly have approved a £20,695, five-year conditional sale agreement. It had to refund anything paid above the £22,104 cash price, with interest. It also had to end the agreement if it was still running and remove adverse credit file entries.', url: FOS('DRN-6184384') },
      { ref: 'DRN-5078043', outcome: 'Not upheld', summary: 'The complaint was about a July 2019 conditional sale agreement repayable over 48 months (total £12,919.12). Further checks would have been proportionate, but they would have shown the agreement was affordable, so no redress was ordered.', url: FOS('DRN-5078043') },
      { ref: 'DRN-5805429', outcome: 'Not upheld', summary: 'The complaint was about a used-car conditional sale agreement with 60 payments of £388.88. The ombudsman said the lender could have done more to verify Mr S’s income, but better checks would still have shown it was affordable. No redress was ordered.', url: FOS('DRN-5805429') },
    ],
    sources: [
      { label: 'Close Brothers Motor Finance: Customer support (legal footer, products)', url: 'https://www.closemotorfinance.co.uk/customers/support' },
      { label: 'Close Brothers Motor Finance: Terms of business', url: 'https://closemotorfinance.co.uk/Terms-of-Business' },
      { label: 'Close Brothers Motor Finance: How to complain', url: 'https://www.closemotorfinance.co.uk/customers/help-centre/how-to-complain' },
      { label: 'Close Brothers Group: Half-year report to 31 January 2026 (RNS via LSE)', url: 'https://www.lse.co.uk/rns/CBG/half-year-report-for-six-months-to-31-january-2026-e2jkm8l77w7oss2.html' },
    ],
  },
  {
    slug: 'startline-motor-finance', name: 'Startline Motor Finance', type: 'carfinance', aliases: ['Startline'],
    entity: 'Startline Motor Finance Limited', frn: '741747', companyNo: '08302453',
    products: 'Car finance (hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Startline Motor Finance is a Glasgow-based lender founded in 2013 that provides near-prime car finance through franchise and independent dealers. It is authorised by the FCA to enter into regulated credit agreements as a lender. In May 2026 it reported about 85,000 customers and £652 million of assets under management, and completed its third Satus securitisation.',
    ],
    complaintsUrl: 'https://startlinemotorfinance.com/customers/make-a-complaint/',
    decisions: [
      { ref: 'DRN-5146305', outcome: 'Upheld', summary: 'The ombudsman found Startline should have checked Mr M’s income and spending more closely, given his credit file and recent short-term borrowing, before a May 2021, 60-month hire purchase agreement. Mr M keeps the car and pays only the £8,900 cash price, with no interest or charges. Startline refunds anything above that with interest and removes adverse credit file entries.', url: FOS('DRN-5146305') },
      { ref: 'DRN-5601651', outcome: 'Not upheld', summary: 'The complaint was about a hire purchase agreement for a £14,400 car with a £5,879.84 final balloon payment. Startline’s checks were not thorough enough, but Mr S’s bank statements showed the payments were affordable. The ombudsman also found Startline treated him fairly when he struggled to pay, and made no award.', url: FOS('DRN-5601651') },
      { ref: 'DRN-5633816', outcome: 'Not upheld', summary: 'Miss F said her car finance agreement was unaffordable. The ombudsman found Startline’s creditworthiness checks were proportionate and ordered no redress.', url: FOS('DRN-5633816') },
    ],
    sources: [
      { label: 'Startline Motor Finance: make a complaint (FRN 741747)', url: 'https://startlinemotorfinance.com/customers/make-a-complaint/' },
      { label: 'Scottish Financial Review: Startline £452m securitisation, 6 May 2026', url: 'https://scottishfinancialreview.com/2026/05/06/glasgows-startline-motor-in-452m-securitisation/' },
      { label: 'Motor Finance Online: Startline completes £450m LSE securitisation (2024)', url: 'https://www.motorfinanceonline.com/newsletters/startline-motor-finance-completes-450m-lse-securitisation' },
    ],
  },
  {
    slug: 'advantage-finance', name: 'Advantage Finance', type: 'carfinance',
    entity: 'Advantage Finance Ltd', frn: '307864', companyNo: '03773673', group: 'S&U plc',
    products: 'Car finance (hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Advantage Finance Ltd is the motor finance subsidiary of S&U plc. Its registered office is 2 Stratford Court, Cranmore Boulevard, Solihull, and its operations base is in Grimsby. It provides hire purchase finance for used cars and is authorised by the FCA to enter into regulated credit agreements as a lender.',
      'In October 2024 S&U said Advantage had been in discussions with the FCA about how it treats borrowers in financial difficulty (forbearance), and had voluntarily limited some collection activity in the meantime. With the FCA’s agreement those limits were lifted in October 2024, and S&U said regulatory discussions were continuing.',
    ],
    complaintsUrl: 'https://www.advantage-finance.co.uk/Information/Complaints',
    decisions: [
      { ref: 'DRN-5870960', outcome: 'Upheld', summary: 'A used-car hire purchase agreement at 42.02% APR (£357.53 a month) was found to be unaffordable. Advantage had to end the agreement and collect the car. It could keep £190 for each month Mr M had the car, and had to refund the rest with interest. It also had to remove adverse credit file entries and pay £300 for distress and inconvenience.', url: FOS('DRN-5870960') },
      { ref: 'DRN-3224900', outcome: 'Upheld', summary: 'The complaint was about a January 2018 car hire purchase agreement (47 payments of £155.07). Advantage had to limit what Ms T paid to a fair usage charge of £90 a month (£2,430), refund anything above that including the deposit, and remove adverse credit file entries. Any balance still owed was to go on an affordable repayment plan.', url: FOS('DRN-3224900') },
    ],
    sources: [
      { label: 'Advantage Finance: Regulations (legal entity, FRN, company number, registered office)', url: 'https://advantage-finance.co.uk/Information/Regulations' },
      { label: 'Companies House: Advantage Finance Limited (03773673), registered c/o S&U plc', url: 'https://find-and-update.company-information.service.gov.uk/company/03773673' },
      { label: 'S&U plc: Update on Advantage Finance Limited, 14 Oct 2024 (RNS 9657H)', url: 'https://www.ticker.app/lse/SUS/rns/2024-10-14/Update-on-Advantage-Finance-Limited/9657H' },
    ],
  },
  {
    slug: 'oodle-car-finance', name: 'Oodle Car Finance', type: 'carfinance', aliases: ['Oodle'],
    entity: 'Oodle Financial Services Limited', frn: '702459', companyNo: '07277272',
    products: 'Car finance (hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Oodle Car Finance is a trading name of Oodle Financial Services Limited, registered office 2 New Bailey, 6 Stanley Street, Salford, and a member of the Finance & Leasing Association. It is authorised by the FCA to enter into regulated credit agreements as a lender. It provides hire purchase finance for used cars. In April 2026 it completed a £383.6 million securitisation backed by hire purchase agreements it originated.',
    ],
    complaintsUrl: 'https://www.oodlecarfinance.com/complaints',
    decisions: [
      { ref: 'DRN-5944958', outcome: 'Upheld', summary: 'The complaint was about an August 2019 hire purchase agreement for a £7,000 car over 60 months (about £12,350 repayable). Miss W pays only the £7,000 cash price, with all interest and charges removed. Oodle refunds anything above that with interest and removes adverse credit file entries.', url: FOS('DRN-5944958') },
      { ref: 'DRN-5490982', outcome: 'Not upheld', summary: 'The complaint was about a March 2021 hire purchase agreement for a £6,848 car over 60 months. Oodle’s checks were not proportionate, but reasonable checks would probably have shown the loan was sustainably affordable, so no redress was ordered.', url: FOS('DRN-5490982') },
      { ref: 'DRN-5511980', outcome: 'Not upheld', summary: 'The complaint was about an October 2023 used-car hire purchase agreement. The ombudsman found Oodle’s checks were reasonable, as bank statements suggested the agreement was likely affordable, and ordered no redress.', url: FOS('DRN-5511980') },
    ],
    sources: [
      { label: 'Oodle Car Finance: How to make a complaint (legal footer, FRN, company number)', url: 'https://www.oodlecarfinance.com/complaints' },
      { label: 'Oodle Car Finance: Reviews page (legal footer)', url: 'https://oodlecarfinance.com/reviews' },
      { label: 'Slaughter and May: Oodle Dowson 2026-1 auto loan securitisation, 30 Apr 2026', url: 'https://www.slaughterandmay.com/recent-work/oodle-financial-services-limited-on-its-latest-383-6mn-dowson-2026-1-auto-loan-securitisation/' },
    ],
  },
  {
    slug: 'first-response-finance', name: 'First Response Finance', type: 'carfinance', aliases: ['First Response'],
    entity: 'First Response Finance Limited', frn: '309356', companyNo: '03560611',
    products: 'Car finance (hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'First Response Finance Limited is a Nottingham-based motor finance lender, registered office 5 Regan Way, Chetwynd Business Park, Chilwell. It lends mainly to non-prime customers through dealers and offers hire purchase for cars, motorbikes and vans. It is authorised by the FCA to enter into regulated credit agreements as a lender.',
    ],
    complaintsUrl: 'https://www.firstresponsefinance.co.uk/about-us/complaints',
    decisions: [
      { ref: 'DRN-6060220', outcome: 'Upheld', summary: 'The complaint was about a September 2021 used-car hire purchase agreement (£7,995 credit, 48 payments of £292.87). First Response had to end the agreement with nothing more to pay, transfer ownership of the car to the customers, refund anything above the £8,495 cash price with interest, and remove adverse credit file entries.', url: FOS('DRN-6060220') },
      { ref: 'DRN-5764052', outcome: 'Upheld', summary: 'The complaint was about a used-car hire purchase agreement for £10,000 of credit over 61 months. Mrs L pays only the £12,389.99 cash price, with no interest or charges. First Response refunds anything above that with interest and removes adverse credit file entries.', url: FOS('DRN-5764052') },
      { ref: 'DRN-5501889', outcome: 'Not upheld', summary: 'The complaint was about a March 2018 used-car hire purchase agreement. The ombudsman found the decision to lend was not unfair and ordered no redress.', url: FOS('DRN-5501889') },
    ],
    sources: [
      { label: 'Companies House: First Response Finance Limited (03560611)', url: 'https://pay.company-information.service.gov.uk/company/03560611' },
      { label: 'First Response Finance: regulatory information (FRN 309356)', url: 'https://www.firstresponsefinance.co.uk/about-us/regulatory-information' },
      { label: 'Motor Finance Online: First Response Finance company profile (products)', url: 'https://www.motorfinanceonline.com/companies/first-response-finance/' },
    ],
  },
  {
    slug: 'billing-finance', name: 'Billing Finance', type: 'carfinance', aliases: ['Orchard Leasing'],
    entity: 'Billing Finance Limited', frn: '314223', companyNo: '01693490',
    products: 'Car finance (hire purchase)', status: 'Trading', checked: '2026-10-16',
    about: [
      'Billing Finance Limited is a motor finance lender based at Billing House, The Causeway, Great Billing, Northampton. It provides hire purchase finance for used vehicles, mainly to non-prime customers, and is authorised by the FCA to enter into regulated credit agreements as a lender. In December 2025 it agreed a £250 million funding package with Quilam Capital, which took a strategic stake in the business. At that point it had more than 15,000 active customers.',
    ],
    complaintsUrl: 'https://billingfinance.co.uk/complaints/',
    decisions: [
      { ref: 'DRN-6147645', outcome: 'Upheld', summary: 'The complaint was about an October 2017 used-car hire purchase agreement over 60 months. All interest and charges were removed and Ms Y pays a fair usage charge of £149.16 for each month she had the car. Any overpayment is refunded with interest, any shortfall goes on an affordable repayment plan, and adverse credit file entries are removed.', url: FOS('DRN-6147645') },
      { ref: 'DRN-5312539', outcome: 'Not upheld', summary: 'The complaint was about a car hire purchase agreement for £8,400 with 59 payments of £230.30. Billing’s checks were not proportionate, but the agreement was affordable, so the ombudsman found no irresponsible lending and ordered no redress.', url: FOS('DRN-5312539') },
      { ref: 'DRN-5757855', outcome: 'Not upheld', summary: 'The complaint was about a hire purchase agreement for a £2,300 motorbike over 48 months. The ombudsman found no irresponsible lending and ordered no redress.', url: FOS('DRN-5757855') },
    ],
    sources: [
      { label: 'Billing Finance: customer feedback and complaints (FRN 314223)', url: 'https://billingfinance.co.uk/complaints/' },
      { label: 'Companies House: Billing Finance Limited (01693490)', url: 'https://find-and-update.company-information.service.gov.uk/company/01693490' },
      { label: 'Travers Smith: Billing Finance £250m funding package from Quilam Capital, 12 Dec 2025', url: 'https://www.traverssmith.com/knowledge/knowledge-container/travers-smith-advises-billing-finance-on-250m-funding-package-from-quilam-capital/' },
    ],
  },
  // ------------------------------------------------- added 17 October 2026
  {
    slug: 'everyday-loans', name: 'Everyday Loans and George Banco', type: 'loan', aliases: ['Evlo', 'Everyday Lending', 'George Banco', 'TrustTwo'],
    description: 'Borrowed from Evlo or Everyday Loans since April 2021 when you couldn’t afford it? You could claim back the interest and charges. Free to check.',
    entity: 'Everyday Lending Limited', frn: '724445', companyNo: '05850869',
    products: 'Personal loans of £1,000 to £15,000; George Banco guarantor loans (closed to new lending)', status: 'Trading', checked: '2026-10-17',
    about: [
      'Everyday Lending Limited is based in Slough and has been lending since 2006. It trades as Evlo (formerly Everyday Loans) and lends to people with little or poor credit history, meeting customers face to face through branches across the country. Its loans run from £1,000 to £15,000 over 18 to 60 months. The same company also trades as George Banco and TrustTwo. George Banco says it is in managed run-off and will not approve any more borrowing, and the TrustTwo website now redirects to Evlo.',
      'In 2023 the court approved a scheme of arrangement between Everyday Lending and its creditors. The scheme covers unaffordable lending complaints about loans approved on or before 31 March 2021, including Everyday Loans, George Banco and TrustTwo customers, and those claims go through the scheme rather than the Financial Ombudsman. The Ombudsman can still look at complaints about loans approved after 31 March 2021, and at complaints referred to it before 17 March 2023.',
    ],
    note: { title: 'Which loans can be claimed', text: 'Loans approved from 1 April 2021 can be complained about in the usual way. Loans approved on or before 31 March 2021 were covered by a court-approved scheme in 2023, so the Financial Ombudsman can’t look at them. Everyday Loans changed its name to Evlo in March 2025; the lender is still Everyday Lending Limited.' },
    faqs: [
      { q: 'Can I claim for an Everyday Loans loan from before April 2021?', a: 'Usually not. Loans approved on or before 31 March 2021, including George Banco and TrustTwo loans, were covered by Everyday Lending’s 2023 scheme of arrangement, so the Financial Ombudsman can’t look at them unless the complaint reached it before 17 March 2023.' },
      { q: 'Can I claim for an Evlo loan?', a: 'Yes. Evlo is the new name for Everyday Loans, and loans approved from 1 April 2021 can be complained about in the usual way: to Evlo first, then the Financial Ombudsman.' },
    ],
    complaintsUrl: 'https://www.evlo.co.uk/about-us/complaints-procedure/',
    decisions: [
      { ref: 'DRN-6026522', outcome: 'Upheld', summary: 'A £11,240 debt consolidation loan in May 2023. The ombudsman found that Evlo’s own figures left the borrower only about £86 a month after repayments, which was not enough to repay sustainably over five years. Evlo had to remove all interest and charges and take the loan off her credit file.', url: FOS('DRN-6026522') },
      { ref: 'DRN-6106034', outcome: 'Upheld', summary: 'A £3,350 loan in August 2024, later refinanced to about £4,000. Evlo counted child benefit the borrower did not get, and without it he had about £37 a month left, below Evlo’s own £50 minimum. Evlo had to refund what he paid above the amount borrowed.', url: FOS('DRN-6106034') },
      { ref: 'DRN-3762872', outcome: 'Upheld', summary: 'A guarantor complained about a £7,500 George Banco loan from September 2017. The ombudsman found that proper checks would have shown the guarantor was already struggling, so George Banco had to release him from the guarantee, refund his payments and clear his credit file.', url: FOS('DRN-3762872') },
    ],
    sources: [
      { label: 'Evlo legals and privacy (FRN, company number, trading names)', url: 'https://www.evlo.co.uk/about-us/legals/' },
      { label: 'Evlo home page (loan amounts and terms)', url: 'https://www.evlo.co.uk/' },
      { label: 'Evlo press release: Everyday Loans rebrands to Evlo (3 March 2025)', url: 'https://www.evlo.co.uk/news/press-release/everyday-loans-rebrands-to-evlo-and-strengthens-leadership-team-to-tackle-financial-exclusion/' },
      { label: 'George Banco home page (managed run-off notice)', url: 'https://www.georgebanco.com/' },
      { label: 'Financial Ombudsman: information for customers of Everyday Lending, Everyday Loans, George Banco and TrustTwo', url: 'https://www.financial-ombudsman.org.uk/news/information-customers-everyday-lending-everyday-loans-george-banco-trust-two' },
      { label: 'Companies House: Everyday Lending Limited', url: 'https://find-and-update.company-information.service.gov.uk/company/05850869' },
    ],
  },
  {
    slug: 'admiral-loans', name: 'Admiral Loans', type: 'loan', aliases: ['Admiral Money', 'Admiral Car Finance', 'Admiral Financial Services'],
    entity: 'Admiral Financial Services Limited', frn: '771862', companyNo: '10255225', group: 'Admiral Group plc',
    products: 'Personal loans and car finance', status: 'Trading', checked: '2026-10-17',
    about: [
      'Admiral Financial Services Limited is the lending company of Admiral Group plc, the insurer based in Cardiff. It trades as Admiral Money, Admiral Loans and Admiral Car Finance, among other names, and offers personal loans (including debt consolidation loans) and car finance. Each applicant gets a personal rate after a quote that uses a soft search.',
    ],
    complaintsUrl: 'https://www.admiral.com/contact-us/complaint-information.php',
    decisions: [
      { ref: 'DRN-5916577', outcome: 'Upheld', summary: 'A £22,000 loan in September 2024. The borrower said her housing costs were £350, but her credit file showed about £4,100 a month in mortgage payments. Proper checks would have shown she had no money left after repayments, so Admiral had to remove all interest and charges.', url: FOS('DRN-5916577') },
      { ref: 'DRN-5546537', outcome: 'Not upheld', summary: 'A £20,000 debt consolidation loan in February 2022. The ombudsman said Admiral should have asked about essential spending, but found the loan would still have looked affordable, and that Admiral could not have seen a second loan taken out at the same time.', url: FOS('DRN-5546537') },
      { ref: 'DRN-5954468', outcome: 'Not upheld', summary: 'A £13,000 loan in July 2023 to consolidate debts. Admiral’s income, credit and spending checks left the borrower with over £500 a month, and the ombudsman found them proportionate.', url: FOS('DRN-5954468') },
    ],
    sources: [
      { label: 'Admiral customer legal information (entity, FRN, trading names)', url: 'https://www.admiral.com/existing-customers/legal-information.php' },
      { label: 'Admiral personal loan FAQs', url: 'https://www.admiral.com/loans/personal-loans/FAQs' },
      { label: 'Admiral complaint information', url: 'https://www.admiral.com/contact-us/complaint-information.php' },
    ],
  },
  {
    slug: 'novuna-personal-finance', name: 'Novuna Personal Finance', type: 'loan', aliases: ['Novuna', 'Hitachi Personal Finance', 'Hitachi Capital'],
    entity: 'Mitsubishi HC Capital UK PLC', frn: '704348', companyNo: '01630491', group: 'Mitsubishi HC Capital Inc.',
    products: 'Personal loans and retail finance', status: 'Trading', checked: '2026-10-17',
    about: [
      'Novuna Personal Finance is a trading style of Mitsubishi HC Capital UK PLC, which has its registered office in Staines-upon-Thames. It offers personal loans (for cars, home improvements, debt consolidation and other purposes) and retail finance for buying goods in shops and online. The UK business says it has more than 1.3 million customers.',
      'The company used to be Hitachi Capital (UK) PLC. It became part of Mitsubishi HC Capital Inc. on 1 April 2021, after Hitachi Capital Corporation merged with Mitsubishi UFJ Lease & Finance, and it changed its name and became Novuna on 14 February 2022.',
    ],
    note: { title: 'Formerly Hitachi Personal Finance', text: 'Hitachi Capital (UK) PLC became Mitsubishi HC Capital UK PLC on 14 February 2022, and its loans business was renamed from Hitachi Personal Finance to Novuna Personal Finance. Older loans from Hitachi are with the same company.' },
    complaintsUrl: 'https://www.novunapersonalfinance.co.uk/help-centre/help-with-a-complaint/',
    decisions: [
      { ref: 'DRN-6095508', outcome: 'Upheld', summary: 'A £23,000 loan in July 2019, three months after a £20,000 loan. The ombudsman found that Novuna should have checked further, because the borrower’s income and spending showed he had less than nothing left each month, and his bank statements showed heavy gambling. Novuna had to refund all interest and charges and clear his credit file.', url: FOS('DRN-6095508') },
      { ref: 'DRN-5973807', outcome: 'Not upheld', summary: 'A £5,000 loan in April 2024. Novuna checked the borrower’s income and credit file, which showed about £1,500 a month left and older defaults from 2018 and 2019, and the ombudsman found these checks reasonable.', url: FOS('DRN-5973807') },
      { ref: 'DRN-5950709', outcome: 'Not upheld', summary: 'A £1,210 buy now pay later agreement in November 2024. The repayments were small, and Novuna’s income and credit checks showed the borrower could afford them.', url: FOS('DRN-5950709') },
    ],
    sources: [
      { label: 'Novuna Personal Finance help centre (entity, FRN, company number, products)', url: 'https://www.novunapersonalfinance.co.uk/help-centre' },
      { label: 'Mitsubishi HC Capital UK: business becomes Novuna (14 February 2022)', url: 'https://www.mitsubishihccapital.co.uk/latest-news-and-insights/latest-news/leading-uk-finance-provider-becomes-novuna-today-following-merger-of-two-global-financial-heavyweights/' },
    ],
  },
  {
    slug: 'plend', name: 'Plend', type: 'loan', aliases: ['Plend Loans'],
    entity: 'Plend Limited', frn: '963328', companyNo: '12581855',
    products: 'Personal loans, including debt consolidation', status: 'Trading', checked: '2026-10-17',
    about: [
      'Plend Limited is a London-based lender with its registered office at Aldgate Tower. It decides on loans using open banking data and its own PLEND Score, which looks at how people manage their money now rather than relying only on their credit history. Its loans are offered through ClearScore, Credit Karma and TotallyMoney, and applicants must be 21 or over with a UK bank account they have used for at least three months.',
    ],
    complaintsUrl: 'https://www.plend.com/complaints',
    decisions: [
      { ref: 'DRN-5489947', outcome: 'Upheld', summary: 'A £10,000 loan over five years in November 2023. Even after the debts it paid off, the borrower’s credit repayments, rent and bills came to more than his verified income before living costs. Plend had to remove all interest and charges.', url: FOS('DRN-5489947') },
      { ref: 'DRN-6096811', outcome: 'Upheld', summary: 'A £10,000 debt consolidation loan in April 2025. Plend did not ask about the borrower’s changing income or her existing credit repayments of about £1,250 a month. The repayments left her nothing for unexpected costs, so Plend had to remove all interest and charges.', url: FOS('DRN-6096811') },
      { ref: 'DRN-6154976', outcome: 'Upheld', summary: 'A £10,000 loan in April 2025. Plend’s figures left out the borrower’s rent and household bills, and once these were counted the monthly repayment was more than he had left. Plend had to refund what he paid above the amount borrowed and clear his credit file.', url: FOS('DRN-6154976') },
    ],
    sources: [
      { label: 'Plend complaints page (entity, FRN, company number)', url: 'https://www.plend.com/complaints' },
      { label: 'Plend: apply for a loan (partners, eligibility)', url: 'https://www.plend.com/borrow' },
      { label: 'Plend: about us', url: 'https://www.plend.com/about-us' },
      { label: 'Plend blog: FCA approval and B Corp status', url: 'https://plend.co.uk/blog/plend-is-first-uk-consumer-lender-to-achieve-pending-b-corp-status-and-announces-fca-approval-as-early-access-launches/' },
    ],
  },
  {
    slug: 'fluro', name: 'Fluro', type: 'loan', aliases: ['Lending Works'],
    entity: 'Fluro Platform Limited', frn: '723151', companyNo: '08302549',
    products: 'Unsecured personal loans', status: 'Trading', checked: '2026-10-17',
    about: [
      'Fluro Platform Limited is a London lender based at Valentine Place, SE1. It started in 2014 as Lending Works, a peer-to-peer lender, and now offers unsecured personal loans, including loans for debt consolidation and home improvements.',
      'Lending Works put its peer-to-peer business into run-off in December 2021 and changed its name to Fluro in September 2022.',
    ],
    note: { title: 'Formerly Lending Works', text: 'Lending Works changed its name to Fluro in September 2022. Loans taken out with Lending Works are with the same company, Fluro Platform Limited.' },
    complaintsUrl: 'https://www.fluro.co.uk/complaints',
    decisions: [
      { ref: 'DRN-6294657', outcome: 'Not upheld', summary: 'A £15,000 loan in March 2023. Fluro used a mortgage letter showing higher housing costs than the borrower had declared, and still found the repayments affordable, so the ombudsman said its checks were proportionate.', url: FOS('DRN-6294657') },
      { ref: 'DRN-5964076', outcome: 'Not upheld', summary: 'A £6,000 loan in May 2025. Fluro checked the borrower’s income through open banking and worked out that she had about £266 a month left after all costs and the new repayment, and her credit file showed no recent arrears.', url: FOS('DRN-5964076') },
      { ref: 'DRN-5153502', outcome: 'Not upheld', summary: 'A £20,000 home improvement loan in November 2023. Fluro checked the borrower’s income, credit file and open banking data, which showed about £593 a month left and no signs of money problems.', url: FOS('DRN-5153502') },
    ],
    sources: [
      { label: 'Fluro: about us (entity, FRN, company number)', url: 'https://www.fluro.co.uk/company' },
      { label: 'Fluro complaints page', url: 'https://www.fluro.co.uk/complaints' },
    ],
  },
  {
    slug: 'guarantor-my-loan', name: 'Guarantor My Loan', type: 'guarantor', aliases: ['GuarantorMyLoan', 'Match the Cash'],
    h1: 'Guarantor My Loan refund claims', title: 'Guarantor My Loan refund claims | CreditRights',
    description: 'Was your Guarantor My Loan loan unaffordable for you or your guarantor? Either of you could claim back what you paid. Free to check.',
    entity: 'Match the Cash Limited', frn: '718844', companyNo: '08667447',
    products: 'Guarantor loans from £2,000 to £12,500 over one to five years', status: 'Trading', checked: '2026-10-17',
    about: [
      'Guarantor My Loan is a trading name of Match the Cash Limited. The company’s registered office is in London and its customer service team is in Norwich. It offers guarantor loans from £2,000 to £12,500 over one to five years, with a representative APR of 49.9%. A friend or family member must agree to repay the loan if the borrower cannot.',
    ],
    complaintsUrl: 'https://www.guarantormyloan.co.uk/complaints-procedure/',
    decisions: [
      { ref: 'DRN-2959972', outcome: 'Upheld', summary: 'A £3,000 guarantor loan in February 2020. The borrower had at least four defaults and 29 credit searches in the previous year, and the ombudsman found that more checks would have shown he was already spending more than he earned. Match the Cash had to refund the interest and charges and clear his credit file.', url: FOS('DRN-2959972') },
      { ref: 'DRN-3683847', outcome: 'Upheld', summary: 'A £5,000 guarantor loan for a car in June 2019. The lender’s checks were proportionate, but the information it collected showed the borrower could not keep up the repayments, so it should not have lent.', url: FOS('DRN-3683847') },
      { ref: 'DRN-5889086', outcome: 'Not upheld', summary: 'A guarantor complained about a £12,500 loan she guaranteed in about September 2024. Match the Cash had checked her income and spending through open banking and credit checks, and the ombudsman found these showed she could afford the repayments.', url: FOS('DRN-5889086') },
    ],
    sources: [
      { label: 'Guarantor My Loan home page (entity, FRN, company number, loan terms)', url: 'https://www.guarantormyloan.co.uk/' },
      { label: 'Guarantor My Loan complaints procedure', url: 'https://www.guarantormyloan.co.uk/complaints-procedure/' },
    ],
  },
  {
    slug: 'cashfloat', name: 'Cashfloat', type: 'payday', aliases: ['Western Circle'],
    entity: 'Western Circle Limited', frn: '714479', companyNo: '07581337',
    products: 'Short-term loans from £300 to £1,500 over three to nine months', status: 'Trading', checked: '2026-10-17',
    about: [
      'Cashfloat is a trading style of Western Circle Limited, based in north-west London (NW11). It has lent since 2014 and offers high-cost short-term loans, including to people with bad credit. Loans run from £300 to £1,500 and are repaid in monthly instalments over three to nine months.',
    ],
    complaintsUrl: 'https://www.cashfloat.co.uk/compliance/complaints-procedure/',
    decisions: [
      { ref: 'DRN-3478222', outcome: 'Upheld', summary: 'Two loans of £500 and £1,000 in May and June 2021. The second loan, for twice as much, was approved within hours of the first being repaid. Cashfloat’s own checks showed defaulted accounts and several open short-term loans, so it had to refund the interest and charges on both loans and clear the borrower’s credit file.', url: FOS('DRN-3478222') },
      { ref: 'DRN-5660641', outcome: 'Not upheld', summary: 'Three loans of £900 to £1,200 between August and November 2023. The ombudsman found Cashfloat’s income, spending and credit checks proportionate, and the loans did not overlap.', url: FOS('DRN-5660641') },
      { ref: 'DRN-5880241', outcome: 'Not upheld', summary: 'A £450 loan in March 2025. Cashfloat relied on the declared salary, which passed an industry income check, and the ombudsman found it was entitled to do so.', url: FOS('DRN-5880241') },
    ],
    sources: [
      { label: 'Cashfloat home page (entity, FRN, company number)', url: 'https://www.cashfloat.co.uk/' },
      { label: 'Cashfloat: about us (loan range and terms)', url: 'https://www.cashfloat.co.uk/about-us/' },
      { label: 'Cashfloat complaints procedure', url: 'https://www.cashfloat.co.uk/compliance/complaints-procedure/' },
    ],
  },
  {
    slug: 'starling-bank', name: 'Starling Bank', type: 'overdraft', aliases: ['Starling'],
    entity: 'Starling Bank Limited', frn: '730166', companyNo: '09092149',
    products: 'Personal current accounts with arranged overdrafts', status: 'Trading', checked: '2026-10-17',
    about: [
      'Starling Bank Limited trades as Starling. It is registered in England and Wales (company 09092149, incorporated 18 June 2014), authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority. Its personal current accounts can come with an arranged overdraft.',
      'In October 2024 the FCA fined Starling £28,959,426 for weak financial crime controls. The failings included sanctions screening, and opening accounts for high-risk customers when it had agreed not to. The fine was not about lending.',
    ],
    complaintsUrl: 'https://www.starlingbank.com/how-to-complain',
    decisions: [
      { ref: 'DRN-4559145', outcome: 'Upheld', summary: 'The ombudsman found Starling’s checks were reasonable when it gave Mrs G a £500 overdraft. But once her income fell to benefits only, Starling should have reviewed the account and offered help from January 2020, so it had to refund interest, fees and charges from that date.', url: FOS('DRN-4559145') },
      { ref: 'DRN-5641828', outcome: 'Upheld', summary: 'Mr I used his £500 overdraft heavily and almost all the time, and was also relying on high-cost short-term loans. The ombudsman said Starling should have started reducing his limit from November 2019, and that its messages and attempts to contact him did not go far enough.', url: FOS('DRN-5641828') },
    ],
    sources: [
      { label: 'Starling: Making a complaint', url: 'https://www.starlingbank.com/how-to-complain' },
      { label: 'Starling: Corporate information', url: 'https://starlingbank.com/media/company-fact-sheet' },
      { label: 'Companies House: Starling Bank Limited (09092149)', url: 'https://find-and-update.company-information.service.gov.uk/company/09092149' },
      { label: 'FCA: FCA fines Starling Bank £29m for failings in their financial crime systems and controls', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-starling-bank-failings-financial-crime-systems-and-controls' },
    ],
  },
  {
    slug: 'danske-bank', name: 'Danske Bank', type: 'overdraft', aliases: ['Danske', 'Northern Bank'],
    entity: 'Northern Bank Limited, trading as Danske Bank', frn: '122261', companyNo: 'R568 (registered in Northern Ireland)', group: 'Danske Bank Group (parent Danske Bank A/S)',
    products: 'Personal current accounts and overdrafts in Northern Ireland', status: 'Trading', checked: '2026-10-17',
    about: [
      'Danske Bank is a trading name of Northern Bank Limited, which is registered in Northern Ireland (R568) and is a member of the Danske Bank Group. Its registered office is Donegall Square West, Belfast. It provides personal current accounts with overdrafts in Northern Ireland.',
    ],
    note: { title: 'Formerly Northern Bank', text: 'The bank stopped using the Northern Bank name on 19 November 2012 and has traded as Danske Bank since then. The legal entity is still Northern Bank Limited, so older letters and statements may show either name.' },
    complaintsUrl: 'https://danskebank.co.uk/personal/help/feedback/complaint-procedure',
    decisions: [
      { ref: 'DRN-3332746', outcome: 'Upheld', summary: 'Danske changed its overdraft charges in a way that made it unrealistic for Miss K to get out of her overdraft. The ombudsman said that from January 2020 it should have stopped offering the overdraft on the same terms and offered help instead, so it had to remove all interest, fees and charges from then on.', url: FOS('DRN-3332746') },
    ],
    sources: [
      { label: 'Danske Bank: Legal information', url: 'https://danskebank.co.uk/important-information/legal-information' },
      { label: 'Danske Bank: Complaints procedure', url: 'https://danskebank.co.uk/personal/help/feedback/complaint-procedure' },
      { label: 'Wikipedia: Danske Bank (Northern Ireland)', url: 'https://en.wikipedia.org/wiki/Danske_Bank_(Northern_Ireland)' },
    ],
  },
  {
    slug: 'metro-bank', name: 'Metro Bank', type: 'overdraft', aliases: ['Metro'],
    entity: 'Metro Bank PLC', frn: '488982', companyNo: '06419578', group: 'Metro Bank Holdings PLC (holding company)',
    products: 'Personal current accounts with overdrafts', status: 'Trading', checked: '2026-10-17',
    about: [
      'Metro Bank PLC is registered in England and Wales (company 6419578), with its registered office at One Southampton Row, London. It is authorised by the PRA and regulated by the FCA and PRA. Its holding company is Metro Bank Holdings PLC. It offers personal current accounts with overdrafts, and has also given personal loans under the RateSetter name.',
      'In April 2020 the Competition and Markets Authority found that Metro had broken banking rules by not always warning customers before unarranged overdraft charges were applied. Metro offered about £11.4m in refunds to 128,564 customers. In November 2024 the FCA fined Metro £16,675,200 for failing to monitor transactions properly for money laundering risk.',
    ],
    complaintsUrl: 'https://www.metrobankonline.co.uk/help-and-support/forms/give-us-feedback/',
    decisions: [
      { ref: 'DRN-4413809', outcome: 'Upheld', summary: 'Metro withdrew Mr E’s overdraft in February 2020 when he was close to his overdraft and credit card limits. It was entitled to call the overdraft in, but should have looked at his income and spending and agreed a payment plan sooner. It had to remove late payment markers, take off card interest for five months, refund £83.37 and pay £75.', url: FOS('DRN-4413809') },
      { ref: 'DRN-5281140', outcome: 'Partly upheld', summary: 'Mr F said Metro should not have given him an account with an overdraft. The ombudsman found its checks were reasonable and it was fair to charge interest and default the account. Metro only had to pay more compensation because it handled his complaint poorly.', url: FOS('DRN-5281140') },
    ],
    sources: [
      { label: 'Metro Bank: Legal information', url: 'https://www.metrobankonline.co.uk/about-us/legal-information/' },
      { label: 'Metro Bank: Our service relationship with Personal Customers (FCA register number)', url: 'https://www.metrobankonline.co.uk/Global/Metro%20Bank%20Online%20-%20January%202013/Our%20service%20relationship%20with%20Personal%20Customers.pdf' },
      { label: 'Metro Bank: Compliment or complaint', url: 'https://www.metrobankonline.co.uk/help-and-support/forms/give-us-feedback/' },
      { label: 'CMA: public letter to Metro Bank (April 2020)', url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/879761/Banking-MetroBank-public-letter-CMA.pdf' },
      { label: 'FCA: FCA fines Metro Bank £16m for financial crime failings', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-metro-bank-16m-financial-crime-failings' },
    ],
  },
  {
    slug: 'moneyboat', name: 'MoneyBoat', type: 'payday', aliases: ['Evergreen Finance'],
    entity: 'Evergreen Finance London Limited, trading as MoneyBoat.co.uk', frn: '674154', companyNo: '07669210',
    products: 'Short-term instalment loans of £200 to £1,500', status: 'Trading', checked: '2026-10-17',
    about: [
      'MoneyBoat.co.uk is a trading name of Evergreen Finance London Limited (company 07669210, incorporated 14 June 2011). Its registered office is in London NW4. It offers short-term loans of £200 to £1,500, repaid in monthly instalments.',
    ],
    note: { title: 'Formerly Quid 4 Payday', text: 'Evergreen Finance London Limited was called Quid 4 Payday Limited from 14 June 2011 to 25 September 2014 (Companies House).' },
    decisions: [
      { ref: 'DRN-3433244', outcome: 'Upheld', summary: 'MoneyBoat’s checks went far enough, but it did not act on what they showed: Mr M was already heavily in debt and relying on high-cost credit. His second loan was taken a day after the first was repaid, was seven times bigger and was also unlikely to be affordable.', url: FOS('DRN-3433244') },
      { ref: 'DRN-4230899', outcome: 'Upheld', summary: 'Mr H already had large debts and had used most of his available credit. Further checks would have shown his outgoings were higher than his income even before the loan repayments, so the two loans were not affordable.', url: FOS('DRN-4230899') },
      { ref: 'DRN-5822139', outcome: 'Not upheld', summary: 'MoneyBoat raised Mr J’s stated living costs well above what he had told it, and still found the £500 loan affordable. His credit file showed nothing that called for more checks, so the ombudsman found the lending was fair.', url: FOS('DRN-5822139') },
    ],
    sources: [
      { label: 'Companies House: Evergreen Finance London Limited (07669210)', url: 'https://find-and-update.company-information.service.gov.uk/company/07669210' },
      { label: 'FCA register: Evergreen Finance London Limited, FRN 674154 (website moneyboat.co.uk)', url: 'https://register.fca.org.uk/s/firm?id=001b000000khKLoAAM' },
    ],
  },
  {
    slug: 'abound', name: 'Abound', type: 'loan', aliases: ['Abound loans', 'Fintern', 'Fintern Ltd', 'Fintern Ltd t/a Abound', 'getabound'],
    entity: 'Fintern Ltd', frn: '929244', companyNo: '12472034',
    products: 'personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'Abound is the trading name of Fintern Ltd, registered in England and Wales (number 12472034) with its registered office at 3rd Floor, 86-90 Paul Street, London EC2A 4NE. The company was incorporated in February 2020 and the business was known as Fintern before it became Abound. It uses Open Banking data to assess applications and offers loans of £1,000 to £20,000, repayable over up to eight years.',
      'In March 2023 Abound said it had raised over £500 million in debt and equity and had served more than 150,000 customers. In March 2025 Deutsche Bank committed £250 million, taking its total funding lines to £1.6 billion; City AM reported that it became profitable in April 2024.',
    ],
    complaintsUrl: 'https://www.getabound.com/help/complaints',
    decisions: [
      { ref: 'DRN-6218973', outcome: 'Not upheld', summary: 'Mrs K was lent £8,000 over 61 months in June 2024, with monthly repayments of £239.73. The ombudsman found Abound’s checks were reasonable and proportionate and that it did nothing wrong in lending. The complaint was not upheld and Abound was not asked to do anything.', url: FOS('DRN-6218973') },
      { ref: 'DRN-6217587', outcome: 'Not upheld', summary: 'Ms D was lent £10,000 over 62 months around June 2025, with monthly repayments of £301.63. The ombudsman found the checks were reasonable and proportionate and that Abound did nothing wrong in providing the loan. No redress was required.', url: FOS('DRN-6217587') },
      { ref: 'DRN-6053517', outcome: 'Not upheld', summary: 'Mr W was lent £14,000 in January 2025, with monthly repayments of £313, and said Abound relied on variable commission and overstated his income. The ombudsman said "I do not uphold this complaint", finding the checks reasonable and proportionate. No redress was required.', url: FOS('DRN-6053517') },
    ],
    sources: [
      { label: 'Abound: Complaints (complaints process; legal footer: Fintern Ltd, company number, FRN, address)', url: 'https://www.getabound.com/help/complaints' },
      { label: 'Companies House: FINTERN LTD 12472034 (registered office, incorporation date, nature of business)', url: 'https://pay.company-information.service.gov.uk/company/12472034' },
      { label: 'Abound: British fintech Abound raises £500m (funding, customers served, Fintern now Abound, FRN)', url: 'https://www.getabound.com/post/british-fintech-abound-raises-ps500m-to-turbocharge-growth-of-affordable-loans' },
      { label: 'City AM: Deutsche Bank bets £250m on UK fintech Abound (funding lines, loan range, profitability)', url: 'https://www.cityam.com/deutsche-bank-bets-250m-on-uk-fintech-abound/' },
      { label: 'Super Payments: Who is Abound and Fintern Limited (Fintern Ltd trading as Abound, FRN 929244)', url: 'https://support.superpayments.com/hc/en-gb/articles/29871082611869-Who-is-Abound-and-Fintern-Limited' },
      { label: 'Financial Ombudsman: DRN-6218973', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6218973.pdf' },
      { label: 'Financial Ombudsman: DRN-6217587', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6217587.pdf' },
      { label: 'Financial Ombudsman: DRN-6053517', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6053517.pdf' },
      { label: 'FCA Register: Fintern Ltd (firm reference 929244)', url: 'https://register.fca.org.uk/s/search?q=929244&type=Companies' },
    ],
  },
  {
    slug: 'american-express', name: 'American Express', type: 'card', aliases: ['Amex', 'American Express credit card', 'Amex credit card', 'American Express Services Europe Limited', 'AESEL'],
    entity: 'American Express Services Europe Limited', frn: '661836', companyNo: '01833139', group: 'American Express Company',
    products: 'Credit cards, charge cards', status: 'Trading', checked: '2026-11-01',
    about: [
      'American Express cards for UK consumers are provided by American Express Services Europe Limited (AESEL), registered office Belgrave House, 76 Buckingham Palace Road, London SW1W 9AX. AESEL is the company named in American Express’s UK complaints reporting and in Financial Ombudsman decisions about Amex cards.',
      'AESEL is part of American Express Company, which traces its origins to 1850. American Express had 86.6 million of its own cards in force worldwide at the end of 2025, and lists the United Kingdom among the countries that make up a significant part of its card spending.',
    ],
    complaintsUrl: 'https://www.americanexpress.com/uk/legal/customer-complaints.html',
    decisions: [
      { ref: 'DRN-5870809', outcome: 'Upheld', summary: 'A credit card opened in September 2017 with a £6,600 limit, raised to £14,600 in January 2020. Amex accepted it should not have made the increase and offered to refund all interest and charges from the start, which went beyond the usual redress. The ombudsman upheld the complaint and told Amex to refund interest and charges to bring the balance down to £814.79, pay £300 for distress and inconvenience, agree a repayment arrangement and remove negative credit file information from November 2024.', url: FOS('DRN-5870809') },
      { ref: 'DRN-6052805', outcome: 'Not upheld', summary: 'A credit card opened in February 2016 with a £1,000 limit and raised five times to £7,000 by July 2018. The ombudsman found Amex did not do proportionate checks before the last three increases because it did not appear to look at living costs, but the declared income left enough spare, so fuller checks would not have stopped them. The complaint was not upheld and no redress was required.', url: FOS('DRN-6052805') },
      { ref: 'DRN-6103957', outcome: 'Not upheld', summary: 'A credit card opened in September 2020 with a £10,200 limit on a declared income of £26,000. Given the high limit, the ombudsman said it would have been reasonable to check living costs, but the declared costs still left enough to make the repayments. The complaint was not upheld and no redress was required.', url: FOS('DRN-6103957') },
    ],
    sources: [
      { label: 'American Express UK: company information (AESEL, FCA reference 661836, company number, registered office; founded 1850)', url: 'https://www.americanexpress.com/en-gb/company/about/information/' },
      { label: 'American Express UK: how we handle customer complaints (AESEL named in complaints data)', url: 'https://www.americanexpress.com/uk/legal/customer-complaints.html' },
      { label: 'Companies House: American Express Services Europe Limited (01833139)', url: 'https://find-and-update.company-information.service.gov.uk/company/01833139/filing-history' },
      { label: 'American Express Company: Form 10-K for 2025 (86.6 million proprietary cards in force; UK a significant market)', url: 'https://www.sec.gov/Archives/edgar/data/4962/000000496226000080/axp-20251231.htm' },
      { label: 'FCA Register: American Express Services Europe Limited (firm reference 661836)', url: 'https://register.fca.org.uk/s/search?q=661836&type=Companies' },
    ],
  },
  {
    slug: 'argos-card', name: 'Argos Card', type: 'card', aliases: ['Argos Pay', 'Argos store card', 'Argos credit card', 'Argos Classic Credit Card', 'Argos Financial Services', 'Home Retail Group Card Services Limited', 'Argos Monthly Payment Plan', 'NewDay Argos'],
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Store card, Argos Pay credit account, credit card', status: 'Trading', checked: '2026-11-01',
    about: [
      'The Argos Card was provided for many years by Home Retail Group Card Services Limited (company number 04007072), which traded as Argos Card and Argos Financial Services and is part of J Sainsbury plc. In October 2024 Sainsbury’s agreed to sell the Argos Financial Services cards portfolio to NewDay for about £720 million. NewDay said the portfolio had about two million customers and £800 million of balances.',
      'NewDay took beneficial ownership of the portfolio in March 2025. On 26 April 2026 certain Argos store card accounts were moved to Argos Pay, which is provided by NewDay Ltd (registered office 7 Handyside Street, London N1C 4DA). Argos Limited acts as a credit broker for NewDay and is not the lender. NewDay also provided an Argos Classic Credit Card before the sale.',
    ],
    note: { title: 'Argos Card moved to NewDay in 2026', text: 'Before 26 April 2026 the Argos Card was provided by Home Retail Group Card Services Limited, part of Sainsbury’s. On that date certain accounts moved to Argos Pay from NewDay Ltd, and NewDay now deals with any existing or new complaint about those accounts. Historic Argos Card and Monthly Payment Plan accounts that did not move are handled by Sainsbury’s Money.' },
    complaintsUrl: 'https://help.argos.co.uk/help/payment/how-do-i-make-a-complaint-about-my-argos-card',
    decisions: [
      { ref: 'DRN-5747118', outcome: 'Upheld', summary: 'An Argos credit card approved in December 2019 with a £200 limit. After seeing the customer’s bank statements, Argos accepted it had lent irresponsibly, but it worked out the refund wrongly. The ombudsman upheld the complaint and told Argos to remove all interest, fees, charges and insurances not already refunded, pay 8% simple interest on any overpayment, remove adverse credit file information and pay £50 for distress and inconvenience.', url: FOS('DRN-5747118') },
      { ref: 'DRN-6231921', outcome: 'Not upheld', summary: 'An Argos store card opened in June 2016 with a £700 limit, raised to £840 in July 2017. Argos could no longer show the income evidence it had used, but the customer’s bank statements showed it would still have made the same decisions after fuller checks. The complaint was not upheld and no redress was required.', url: FOS('DRN-6231921') },
      { ref: 'DRN-5647203', outcome: 'Not upheld', summary: 'NewDay’s Argos Classic Credit Card, opened in April 2020 with a £450 limit and raised in steps to £3,500 by March 2021. The ombudsman found NewDay should have checked further before the August 2020 increase to £1,000, but the evidence did not show the repayments were unaffordable, and the other decisions were fair. The complaint was not upheld and no redress was required.', url: FOS('DRN-5647203') },
    ],
    faqs: [
      { q: 'My Argos Card moved to NewDay. Who do I complain to?', a: 'If your account was moved to Argos Pay on 26 April 2026, NewDay is your point of contact for any existing or new complaint about the account. If your account was not moved, complaints about a historic Argos Card or Monthly Payment Plan go to Sainsbury’s Money.' },
    ],
    sources: [
      { label: 'Sainsbury’s: sale of Argos Financial Services cards portfolio (31 Oct 2024; deal, price, two million customers)', url: 'https://corporate.sainsburys.co.uk/news/press-releases/sale-of-argos-financial-services-cards-portfolio-and-partnership-to-create-new-digital-credit-proposition/' },
      { label: 'NewDay: acquisition of Argos store card portfolio (about two million customers, £800m receivables)', url: 'https://www.newday.co.uk/who-we-are/news-and-awards/2024/acquisition-of-argos-store-card-portfolio-and-new-long-term-relationship-with-argos/' },
      { label: 'Sainsbury’s RNS: sale of Argos store card portfolio (3 Mar 2025; beneficial title to NewDay)', url: 'https://www.ticker.app/lse/SBRY/rns/2025-03-03/Sale-of-Argos-Store-Card-Portfolio/9459Y' },
      { label: 'Habitat (Argos Limited): Argos Card is changing (26 April 2026 move to Argos Pay; complaints routes; NewDay FRN 690292)', url: 'https://www.habitat.co.uk/help/argos-card-is-changing' },
      { label: 'Habitat (Argos Limited): Argos Pay (NewDay Ltd lender, company number, registered office)', url: 'https://www.habitat.co.uk/help/argos-pay' },
      { label: 'Argos: how do I make a complaint about my Argos Card (Home Retail Group Card Services Ltd)', url: 'https://help.argos.co.uk/help/payment/how-do-i-make-a-complaint-about-my-argos-card' },
      { label: 'Argos Card terms and conditions, 2020 (Home Retail Group Card Services Limited, no. 04007072, FCA register no. 716148)', url: 'https://documents.4rgos.it/v1/static/ArgosCard_TermsAndConditions_29_9&39_9APR-01-09-2020' },
      { label: 'firmtracer: Home Retail Group Card Services Limited (FCA register mirror; trading names Argos Card, Argos Financial Services)', url: 'https://firmtracer.com/firm/716148' },
      { label: 'Companies House: Home Retail Group Card Services Limited (04007072)', url: 'https://find-and-update.company-information.service.gov.uk/company/04007072' },
      { label: 'FCA Register: NewDay Ltd (firm reference 690292)', url: 'https://register.fca.org.uk/s/search?q=690292&type=Companies' },
    ],
  },
  {
    slug: 'bank-of-ireland-uk', name: 'Bank of Ireland UK', type: 'loan', aliases: ['Bank of Ireland (UK) plc', 'BOI UK', 'Post Office personal loan', 'Post Office Money loan', 'AA personal loan', 'AA loan'],
    entity: 'Bank of Ireland (UK) plc', frn: '512956', companyNo: '07022885', group: 'Bank of Ireland Group plc',
    products: 'personal loans, Post Office personal loans, AA personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'Bank of Ireland UK is the trading name of Bank of Ireland (UK) plc, registered in England and Wales (number 7022885) with its registered office at 45 Gresham Street, London EC2V 7EH. It is a wholly owned subsidiary of Bank of Ireland and part of Bank of Ireland Group plc, which is listed in Dublin and London.',
      'For years it provided the personal loans sold under the Post Office and AA brands, which made up most of the group’s UK unsecured personal lending; that book was expected to be about €1.3 billion at the end of 2023. In December 2023 it stopped providing Post Office and AA personal loans, and in May 2025 it sold the loans taken out on or before 5 December 2023. Bank of Ireland UK, AA and Post Office credit cards were sold to a group of investors including Jaja Finance in 2019, with accounts moving from 2020.',
    ],
    note: { title: 'Post Office and AA loans sold in May 2025', text: 'Bank of Ireland UK sold its personal loans taken out on or before 5 December 2023, including Post Office and AA loans. Since 17 May 2025 they have been managed by Antelope Loans or Link Financial Outsourcing Ltd, and borrowers were sent a letter saying which. Bank of Ireland UK says complaints already open, including those at the Financial Ombudsman, are not affected by the sale, and the ombudsman has kept deciding irresponsible lending complaints against Bank of Ireland (UK) Plc since then.' },
    complaintsUrl: 'https://www.bankofirelanduk.com/help-and-support/how-to-complain/',
    decisions: [
      { ref: 'DRN-6109633', outcome: 'Upheld', summary: 'Mr D was lent £20,000 over 60 months in April 2019 at 9.9% APR. The ombudsman upheld his complaint that the bank lent irresponsibly. Bank of Ireland (UK) Plc was told to remove all interest and charges, treat his payments as repaying the capital, refund any overpayment with 8% simple interest and remove adverse information from his credit file.', url: FOS('DRN-6109633') },
      { ref: 'DRN-5751375', outcome: 'Upheld', summary: 'Mr D was lent £19,500 over 84 months in August 2022, with repayments of £379 a month. The ombudsman said "I’m upholding this complaint" on the basis that the loan was provided irresponsibly. The bank was told to refund anything he paid above £19,500 with 8% simple interest, remove adverse information once the balance is repaid, and work with any new owner if the debt has been sold.', url: FOS('DRN-5751375') },
      { ref: 'DRN-5672678', outcome: 'Not upheld', summary: 'Mr R was lent £14,900 over 84 months in August 2019, with repayments of £271.75 a month. The ombudsman found the loan was affordable based on his bank statements and payslips and did not uphold the complaint. No redress was required.', url: FOS('DRN-5672678') },
    ],
    faqs: [
      { q: 'Who manages my Post Office or AA loan now?', a: 'If you took the loan out on or before 5 December 2023, Bank of Ireland UK sold it and it has been managed by Antelope Loans or Link Financial Outsourcing Ltd since 17 May 2025. The letter Bank of Ireland UK sent you says which one. Your interest rate and terms did not change.' },
    ],
    title: 'Bank of Ireland UK and Post Office Loan Refund Claims | CreditRights',
    h1: 'Bank of Ireland UK, Post Office and AA loan refund claims',
    sources: [
      { label: 'Bank of Ireland UK: Update on UK financial services partnerships, 5 Dec 2023 (end of Post Office and AA loans; legal footer: entity, FRN 512956, company number, registered office)', url: 'https://bankofirelanduk.com/?p=41162' },
      { label: 'Bank of Ireland Group: Update on UK financial services partnerships PDF (UK personal loan book c.€1.3bn, partnerships)', url: 'https://investorrelations.bankofireland.com/app/uploads/Update-on-UK-financial-services-partnerships.pdf' },
      { label: 'Bank of Ireland UK: Personal loans (sale to Antelope Loans or Link Financial Outsourcing from 17 May 2025)', url: 'https://www.bankofirelanduk.com/?p=41719' },
      { label: 'Post Office: Help and support for loans taken out on or before 5 December 2023 (sale, open complaints unaffected)', url: 'https://www.postoffice.co.uk/personal-loans/help-support-legacy-loans' },
      { label: 'The AA: Manage your AA loan (AA loans sold, transfer date)', url: 'https://theaa.com/loans/manage-your-loan' },
      { label: 'Bank of Ireland: Bank of Ireland UK (wholly owned subsidiary, group)', url: 'https://bankofireland.com/about-bank-of-ireland/bank-of-ireland-uk' },
      { label: 'Bank of Ireland UK: How to complain (complaints process)', url: 'https://www.bankofirelanduk.com/help-and-support/how-to-complain/' },
      { label: 'Which?: Bank of Ireland sells off UK credit cards (Post Office, AA and Bank of Ireland cards to Jaja Finance group)', url: 'https://www.which.co.uk/news/2019/06/bank-of-ireland-sells-off-uk-credit-cards-what-will-happen-to-your-account/' },
      { label: 'Financial Ombudsman: DRN-6109633', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6109633.pdf' },
      { label: 'Financial Ombudsman: DRN-5751375', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5751375.pdf' },
      { label: 'Financial Ombudsman: DRN-5672678', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5672678.pdf' },
      { label: 'FCA Register: Bank of Ireland (UK) plc (firm reference 512956)', url: 'https://register.fca.org.uk/s/search?q=512956&type=Companies' },
    ],
  },
  {
    slug: 'black-horse', name: 'Black Horse', type: 'carfinance', aliases: ['Black Horse Limited', 'Black Horse Finance', 'Black Horse Motor Finance', 'Black Horse Motorcycle Finance', 'Black Horse Caravan and Motorhome Finance', 'CarSelect', 'Land Rover Financial Services', 'Lloyds Auto', 'Chartered Trust'],
    entity: 'Black Horse Limited', frn: '313409', companyNo: '00661204', group: 'Lloyds Banking Group',
    products: 'Hire purchase, personal contract purchase, lease purchase, motorcycle finance, caravan and motorhome finance', status: 'Trading', checked: '2026-11-01',
    about: [
      'Black Horse is the motor finance business of Lloyds Banking Group. The lender is Black Horse Limited, registered in England and Wales (company 00661204) with its registered office at 25 Gresham Street, London EC2V 7HN. The company was incorporated in 1960 and was called Chartered Trust plc until 2001.',
      'Black Horse finances cars on hire purchase, lease purchase and personal contract purchase, and also offers motorcycle, caravan and motorhome finance. Lloyds Banking Group reported £16.4 billion of UK motor finance loans and advances at 31 December 2025.',
    ],
    note: { title: 'Black Horse is moving to the Lloyds Auto name', text: 'On 16 October 2026 Lloyds Banking Group announced that Black Horse, Lex Autolease and Tusker will come together under one customer-facing brand, Lloyds Auto, introduced gradually over time. Lloyds says existing agreements, terms and services continue to work as they do today.' },
    complaintsUrl: 'https://blackhorse.co.uk/help/complaints.html',
    decisions: [
      { ref: 'DRN-5777313', outcome: 'Upheld', summary: 'Mr H took out a hire purchase agreement in February 2019, borrowing about £11,300 for a car. The ombudsman found Black Horse’s checks were not proportionate, as it left out his fixed-term credit repayments, and his heavy use of short-term, high-cost loans showed the agreement was not sustainably affordable. Black Horse was told to refund everything he paid above the car’s £12,434 cash price, with 8% simple interest, and remove adverse information from his credit file.', url: FOS('DRN-5777313') },
      { ref: 'DRN-5853531', outcome: 'Upheld', summary: 'Miss C, who was retired, borrowed £50,500 on hire purchase in August 2022 for a static caravan, repayable over ten years at £627.65 a month. The ombudsman found Black Horse relied on averaged spending figures and her credit file, and that proper checks would have shown the loan was unaffordable. It was told to refund her £9,500 deposit and any payments above a £10,500 fair-usage charge, with 8% simple interest, and remove adverse credit file entries.', url: FOS('DRN-5853531') },
      { ref: 'DRN-5748698', outcome: 'Not upheld', summary: 'Mr G borrowed about £18,000 for a car in March 2021, repayable over 60 months. The ombudsman found Black Horse’s checks were proportionate: it verified his income using current account turnover data, his credit file showed no adverse data and his payday loans did not appear on the checks. Black Horse did not have to take any action.', url: FOS('DRN-5748698') },
    ],
    faqs: [
      { q: 'Is Land Rover Financial Services part of Black Horse?', a: 'Yes. Ombudsman decisions name the lender as Black Horse Limited trading as Land Rover Financial Services, so complaints about that finance go to Black Horse.' },
      { q: 'Are Black Horse motorcycle and caravan finance the same lender?', a: 'Yes. Black Horse Motor Finance, Black Horse Motorcycle Finance and Black Horse Caravan and Motorhome Finance are all trading styles of Black Horse Limited.' },
    ],
    sources: [
      { label: 'Black Horse: Legal information (entity, trading styles, FCA number 313409, company number, registered office)', url: 'https://www.blackhorse.co.uk/dealer/legal.html' },
      { label: 'Companies House: Black Horse Limited 00661204 (registered office, incorporation 1960, previous name Chartered Trust)', url: 'https://find-and-update.company-information.service.gov.uk/company/00661204' },
      { label: 'Black Horse: Complaints (complaints page, registered office)', url: 'https://blackhorse.co.uk/help/complaints.html' },
      { label: 'Black Horse: Why Black Horse? (products, Lloyds Banking Group)', url: 'https://www.blackhorse.co.uk/why.html' },
      { label: 'Lloyds Banking Group: Lloyds Banking Group launches Lloyds Auto, 16 October 2026 (rebrand, existing agreements unchanged)', url: 'https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/lloyds-banking-group-launches-lloyds-auto.html' },
      { label: 'Investegate: Lloyds Banking Group 2025 results (UK motor finance loans and advances £16.4bn)', url: 'https://www.investegate.co.uk/announcement/rns/lloyds-banking-group--lloy/2025-results-/9392603' },
      { label: 'FCA: Car finance list of lenders (Black Horse Limited trading names incl. CarSelect)', url: 'https://www.fca.org.uk/consumers/car-finance-complaints/list-lenders' },
      { label: 'Financial Ombudsman: DRN-5724003 (Black Horse Limited trading as Land Rover Financial Services)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5724003.pdf' },
      { label: 'Financial Ombudsman: DRN-5777313 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5777313.pdf' },
      { label: 'Financial Ombudsman: DRN-5853531 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5853531.pdf' },
      { label: 'Financial Ombudsman: DRN-5748698 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5748698.pdf' },
      { label: 'FCA Register: Black Horse Limited (firm reference 313409)', url: 'https://register.fca.org.uk/s/search?q=313409&type=Companies' },
    ],
  },
  {
    slug: 'bmw-financial-services', name: 'BMW Financial Services', type: 'carfinance', aliases: ['BMW Financial Services (GB) Limited', 'BMW Finance', 'BMW Finance (GB) Limited', 'ALPHERA Financial Services', 'Alphera', 'MINI Financial Services', 'MINI Finance'],
    entity: 'BMW Financial Services (GB) Limited', frn: '312578', companyNo: '01288537', group: 'BMW Group (BMW AG)',
    products: 'Hire purchase, personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'BMW Financial Services (GB) Limited provides finance for BMW and MINI vehicles, and for other makes through dealers under its ALPHERA Financial Services trading style. It is registered in England and Wales (company 01288537) with its registered office at Summit ONE, Summit Avenue, Farnborough, Hampshire GU14 0FB. BMW AG is its ultimate parent.',
      'The company was incorporated in 1976 and was called BMW Finance (GB) Limited from 1987 to 1997. It says it is the only manufacturer-owned finance house with an all-makes finance brand, and that ALPHERA works with 1,500 partners in the UK.',
    ],
    complaintsUrl: 'https://www.bmw.co.uk/en/footer/contact/contact-us/financial-services-support.html',
    decisions: [
      { ref: 'DRN-5480679', outcome: 'Upheld', summary: 'Mr B borrowed £100,000 on hire purchase in October 2022 for a £107,000 used car, with monthly payments of £1,586.35. The ombudsman found that BMW Financial Services, trading as ALPHERA, had its own checks showing the agreement was neither affordable nor sustainable, so it lent irresponsibly. It was told to end the agreement with nothing more to pay, collect the car at no cost and remove adverse credit file entries.', url: FOS('DRN-5480679') },
      { ref: 'DRN-6092465', outcome: 'Upheld', summary: 'Miss T took a £3,740 personal loan from ALPHERA Financial Services in March 2022, on the same day as an £18,700 car finance agreement. The ombudsman found the checks should have gone further, and her bank statements showed the two new agreements would leave her outgoings above her income. The interest was to be cut to what it would have been at 8.9% APR, with any overpayment refunded with 8% simple interest and adverse credit file entries removed.', url: FOS('DRN-6092465') },
      { ref: 'DRN-5689913', outcome: 'Not upheld', summary: 'Mr W took out a hire purchase agreement in March 2017, with monthly payments of £705.88. The ombudsman found BMW could not evidence its checks, but his bank statements showed about £1,500 a month left after committed spending and the repayment, with no signs of financial strain. No redress was required.', url: FOS('DRN-5689913') },
    ],
    faqs: [
      { q: 'Are ALPHERA and MINI Financial Services part of BMW Financial Services?', a: 'Yes. ALPHERA Financial Services and MINI Financial Services are trading names of BMW Financial Services (GB) Limited, so complaints about finance under either name go to BMW Financial Services.' },
    ],
    sources: [
      { label: 'BMW UK: Legal notice (registered office, company number, FCA reference number 312578, BMW AG ultimate parent)', url: 'https://www.bmw.co.uk/en/footer/legal/legal-notice.html' },
      { label: 'FirmTracer (FCA register mirror): BMW Financial Services (GB) Limited, FRN 312578', url: 'https://firmtracer.com/firm/312578' },
      { label: 'Companies House: BMW Financial Services (GB) Limited 01288537 (incorporated 1976, previous names)', url: 'https://find-and-update.company-information.service.gov.uk/company/01288537' },
      { label: 'BMW UK: Financial Services Support (complaints page, trading names)', url: 'https://www.bmw.co.uk/en/footer/contact/contact-us/financial-services-support.html' },
      { label: 'MINI UK: Financial Services Complaints Procedure (MINI Financial Services trading name)', url: 'https://www.mini.co.uk/en_GB/home/complaints-procedure/financial-services-complaints-procedure.html' },
      { label: 'BMW UK: BMW Financial Services Stakeholder Engagement Statement 2024 (ALPHERA all-makes brand, 1,500 partners, BMW Group)', url: 'https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/footer/legal/legal-notice/BMW-FS-Website-Stakeholder-Engagement-Statement-2024.pdf.asset.1762437923060.pdf' },
      { label: 'FCA: Car finance list of lenders (trading names ALPHERA Financial Services and MINI Financial Services)', url: 'https://www.fca.org.uk/consumers/car-finance-complaints/list-lenders' },
      { label: 'Financial Ombudsman: DRN-5480679 (upheld affordability decision, trading as ALPHERA)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5480679.pdf' },
      { label: 'Financial Ombudsman: DRN-6092465 (upheld affordability decision, personal loan)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6092465.pdf' },
      { label: 'Financial Ombudsman: DRN-5689913 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5689913.pdf' },
      { label: 'FCA Register: BMW Financial Services (GB) Limited (firm reference 312578)', url: 'https://register.fca.org.uk/s/search?q=312578&type=Companies' },
    ],
  },
  {
    slug: 'clearpay', name: 'Clearpay', type: 'bnpl', aliases: ['Clearpay Finance Limited', 'Clearpay Finance Ltd', 'Smartcheck Limited', 'Clearpay Pay in 4'],
    entity: 'Clearpay Finance Limited', frn: '826341', companyNo: '05198026',
    products: 'Pay in 4 (interest-free instalments)', status: 'Trading', checked: '2026-11-01',
    about: [
      'Clearpay is provided by Clearpay Finance Limited, a company registered in England with its registered office at 101 New Cavendish Street, London. The company was incorporated in 2004 as Smartcheck Limited and took the Clearpay Finance name in November 2017.',
      'Clearpay splits an order into four interest-free instalments paid every two weeks. Retailers describe its plans as deemed authorised and regulated by the FCA under the temporary permissions regime, which lets lenders keep offering buy now, pay later while they apply for full authorisation.',
    ],
    note: { title: 'Regulated from 15 July 2026', text: 'The FCA started regulating interest-free buy now, pay later on 15 July 2026. Clearpay plans taken out from that date are covered, including affordability checks and the right to go to the Financial Ombudsman. Plans taken out before then remain unregulated.' },
    decisions: [
    ],
    faqs: [
      { q: 'Which Clearpay plans can I complain about to the Financial Ombudsman?', a: 'Plans taken out on or after 15 July 2026. The FCA says buy now, pay later agreements taken out before that date remain unregulated and the new protections do not apply to them. Complain to Clearpay first; if you are unhappy with its response, you can go to the Financial Ombudsman.' },
    ],
    sources: [
      { label: 'Companies House: CLEARPAY FINANCE LIMITED (05198026) overview (office, incorporation, previous name)', url: 'https://find-and-update.company-information.service.gov.uk/company/05198026' },
      { label: 'Free People UK: What is Clearpay? (provided by Clearpay Finance Ltd; temporary permission regime; Pay in 4)', url: 'https://www.freepeople.com/uk/help/what-is-clearpay/' },
      { label: 'Square: Clearpay merchant terms (Clearpay Finance Limited provides the deferred payment service)', url: 'https://square.com/gb/legal/general/clearpay-merchant-terms' },
      { label: 'FCA: Buy now pay later (regulated from 15 July 2026; temporary permissions regime; earlier agreements remain unregulated)', url: 'https://www.fca.org.uk/consumers/buy-now-pay-later' },
      { label: 'FCA: Buy now pay later, printable version (temporary permissions regime, complaints)', url: 'https://www.fca.org.uk/consumers/buy-now-pay-later/printable/print' },
      { label: 'Financial Ombudsman: BNPL users can bring complaints from 15 July', url: 'https://www.financial-ombudsman.org.uk/who-we-are/data-insight/news/bnpl-complaints-15-july' },
      { label: 'FCA Register: Clearpay Finance Limited (firm reference 826341)', url: 'https://register.fca.org.uk/s/search?q=826341&type=Companies' },
    ],
  },
  {
    slug: 'creation', name: 'Creation', type: 'loan', aliases: ['Creation Finance', 'Creation Consumer Finance Ltd', 'Creation Consumer Finance Limited', 'Creation Loans', 'BNP Paribas Personal Finance', 'Creation Financial Services'],
    entity: 'Creation Consumer Finance Ltd', frn: '311518', companyNo: 'NI032565', group: 'BNP Paribas Personal Finance (BNP Paribas Group)',
    products: 'personal loans, retail point-of-sale finance, motor finance', status: 'Trading', checked: '2026-11-01',
    about: [
      'Creation Consumer Finance Ltd provides Creation’s personal loans, motor finance and retail finance, the finance offered at the checkout by retailers such as John Lewis, B&Q, Currys and DFS. It is registered in Northern Ireland (company NI032565) with its registered office at Wellington Buildings, 2-4 Wellington Street, Belfast BT1 6HT, and its main place of business in Solihull. Creation is part of BNP Paribas Personal Finance, which belongs to the BNP Paribas banking group, and says it has provided finance for over 50 years.',
      'BNP Paribas Personal Finance UK says it serves 4 million customers and handles £3.6 billion of sales a year. In the first half of 2026, Creation Consumer Finance opened 8,629 complaints about fixed-term agreements (2.85 per 1,000 accounts) and upheld 49.52% of the complaints it closed. Creation credit cards come from a sister company, Creation Financial Services Ltd.',
    ],
    complaintsUrl: 'https://www.creation.co.uk/about-us/customer-care',
    decisions: [
      { ref: 'DRN-6306891', outcome: 'Upheld', summary: 'In July 2023 Creation provided a retail credit account to buy an item costing £2,374, with repayments of just under £180 a month. The ombudsman found Creation had no evidence of how it checked Mr S’s income or living costs, and that proportionate checks would probably have shown the agreement was unsustainable. Creation was told to remove all interest, fees and charges, take his payments off the £2,374 balance, agree a repayment plan for anything left and report the corrected balance to credit reference agencies.', url: FOS('DRN-6306891') },
      { ref: 'DRN-6258852', outcome: 'Not upheld', summary: 'In May 2025 Creation lent Mr A £9,000, repayable over 60 months at £197.82 a month. The ombudsman found Creation had checked his income against his bank account, asked about his spending and searched his credit file, and that fuller checks would still have shown the repayments were affordable. No redress was required, though Creation was reminded to treat his current payment difficulties with forbearance.', url: FOS('DRN-6258852') },
      { ref: 'DRN-5910914', outcome: 'Not upheld', summary: 'In November 2024 Creation lent Mr B £1,241.44, repayable over 18 months at £96.07 a month. The ombudsman found the checks were reasonable for the amount and term: his credit file showed no recent problems and he appeared to have enough spare income. No redress was required.', url: FOS('DRN-5910914') },
    ],
    faqs: [
      { q: 'Is my Creation credit card from the same company as my Creation loan?', a: 'No. Creation credit cards are run by Creation Financial Services Ltd (FCA reference 313153, registered in England, company 1091883). Loans, motor finance and retail finance come from Creation Consumer Finance Ltd (FCA reference 311518). A complaint should name the company that provided your credit.' },
    ],
    title: 'Creation Finance Refund Claims | CreditRights',
    h1: 'Creation Finance refund claims',
    sources: [
      { label: 'Creation: Creation Consumer Finance customer care report (entities, FRNs, company numbers, registered offices, H1 2026 complaint figures)', url: 'https://creation.co.uk/about-us/creation-consumer-finance-customer-care-report' },
      { label: 'Creation: About us (BNP Paribas Personal Finance ownership, retail partners, products, over 50 years)', url: 'https://www.creation.co.uk/about-us' },
      { label: 'Creation: Customer care (complaints form and process)', url: 'https://www.creation.co.uk/about-us/customer-care' },
      { label: 'BNP Paribas Personal Finance UK: About us (4 million customers, £3.6 billion annual sales)', url: 'https://bnpparibas-pf.co.uk/about-us' },
      { label: 'Firmtracer (mirrors FCA register): Creation Consumer Finance Limited, FRN 311518 (status, addresses, trading names, permissions)', url: 'https://firmtracer.com/firm/311518' },
      { label: 'Financial Ombudsman Service: DRN-6306891', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6306891.pdf' },
      { label: 'Financial Ombudsman Service: DRN-6258852', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6258852.pdf' },
      { label: 'Financial Ombudsman Service: DRN-5910914', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5910914.pdf' },
      { label: 'FCA Register: Creation Consumer Finance Ltd (firm reference 311518)', url: 'https://register.fca.org.uk/s/search?q=311518&type=Companies' },
    ],
  },
  {
    slug: 'creditspring', name: 'Creditspring', type: 'loan', aliases: ['Creditspring loans', 'Creditspring membership', 'Inclusive Finance Limited', 'Inclusive Finance Ltd t/a Creditspring'],
    entity: 'Inclusive Finance Limited', frn: '786052', companyNo: '10522518',
    products: 'membership (subscription) loans, small personal loan advances', status: 'Trading', checked: '2026-11-01',
    about: [
      'Creditspring is the trading name of Inclusive Finance Limited, a company registered in England and Wales (number 10522518) with its registered office at 86-90 Paul Street, London EC2A 4NE. It was incorporated in December 2016. Members pay a monthly membership fee and can draw fixed cash advances during the year; the example on its website is two advances of £360 in a year with a £144 membership fee.',
      'Creditspring says it has served more than one million customers, has over 270,000 current members and has paid out more than £1 billion in loans. Inclusive Finance Limited’s group accounts for 2024 show turnover of £31.13 million and 91 employees.',
    ],
    complaintsUrl: 'https://help.creditspring.co.uk/en/articles/158-how-do-i-make-a-complaint',
    decisions: [
      { ref: 'DRN-6146239', outcome: 'Partly upheld', summary: 'Ms M took three Creditspring memberships between October 2022 and February 2025, with advances rising from £250 to £1,000. The ombudsman found the first membership was fairly given but upheld the complaint about the second and third. Creditspring was told to remove all fees and charges on those memberships, refund any overpayments with 8% simple interest and remove adverse information from her credit file.', url: FOS('DRN-6146239') },
      { ref: 'DRN-6136823', outcome: 'Partly upheld', summary: 'Miss W took three memberships from February 2024, with advances of £300, then £1,000, then two £1,000 advances in May and July 2025. The ombudsman partially upheld the complaint: the third membership was unaffordable because her remaining income would not cover the repayments and Creditspring had already seen her fall into arrears. Creditspring was told to refund anything she paid above the amount borrowed, with 8% simple interest, and remove adverse information from her credit file.', url: FOS('DRN-6136823') },
      { ref: 'DRN-6106296', outcome: 'Not upheld', summary: 'Miss B borrowed £200 in July 2023, £200 in June 2024 and £600 in July 2025. The ombudsman said Creditspring should have done more checks before the third loan, but found her disposable income would still have covered the repayments and membership fee. The complaint was not upheld and no redress was required.', url: FOS('DRN-6106296') },
    ],
    sources: [
      { label: 'Creditspring: Bad credit loan page (legal footer: entity, company number, registered office, FRN; membership example; complaints link)', url: 'https://www.creditspring.co.uk/bad-credit-loan' },
      { label: 'Endole: Inclusive Finance Limited (incorporation date, registered office, 2024 group accounts, employees)', url: 'https://open.endole.co.uk/insight/company/10522518-inclusive-finance-limited' },
      { label: 'FinTech Futures: FCA grants credit broker status to subscription lender Creditspring (customers, members, loans paid out)', url: 'https://www.fintechfutures.com/regulations-compliance/fca-grants-credit-broker-status-to-subscription-lender-creditspring/' },
      { label: 'Financial Ombudsman: DRN-6146239', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6146239.pdf' },
      { label: 'Financial Ombudsman: DRN-6136823', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6136823.pdf' },
      { label: 'Financial Ombudsman: DRN-6106296', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6106296.pdf' },
      { label: 'FCA Register: Inclusive Finance Limited (firm reference 786052)', url: 'https://register.fca.org.uk/s/search?q=786052&type=Companies' },
    ],
  },
  {
    slug: 'ford-credit', name: 'Ford Credit', type: 'carfinance', aliases: ['FCE Bank plc', 'FCE Bank', 'Ford Credit Europe', 'Ford Options', 'Ford Finance'],
    entity: 'FCE Bank plc', frn: '204469', companyNo: '00772784', group: 'Ford Motor Credit Company (Ford Motor Company)',
    products: 'Car finance (hire purchase, including Ford Options personal contract purchase, Ford Acquire and Ford Options Cashplan)', status: 'Trading', checked: '2026-11-01',
    about: [
      'Ford Credit is a trading style of FCE Bank plc, a bank authorised by the Prudential Regulation Authority and regulated by the FCA and the PRA. FCE Bank was incorporated in 1963 and its registered office is on Arterial Road, Laindon, Essex. It provides the finance offered through Ford dealers, including Ford Options (hire purchase with an optional final payment), Ford Acquire and Ford Options Cashplan. Ford Personal Contract Hire is provided by a different company, ALD Automotive Ltd, trading as Ford Lease.',
      'FCE Bank is the UK-based subsidiary through which Ford Motor Credit Company runs its European business. Ford Motor Company’s 2025 annual report says Europe is Ford Credit’s largest operation outside the United States, and that the United Kingdom and Germany are its largest European markets.',
    ],
    complaintsUrl: 'https://www.ford.co.uk/support/how-tos/owner-resources/ford-credit/how-do-i-make-a-complaint-with-ford-credit',
    decisions: [
      { ref: 'DRN-6034231', outcome: 'Not upheld', summary: 'Miss E took a hire purchase agreement for a new vehicle in March 2021, with £19,721 financed. The investigator upheld the complaint, but the ombudsman found that although Ford Credit could not show its checks were proportionate, her open banking data showed salary and benefits income that meant better checks would probably have shown the payments were affordable. No redress was ordered.', url: FOS('DRN-6034231') },
      { ref: 'DRN-5677398', outcome: 'Not upheld', summary: 'Mrs B took a hire purchase agreement for a new Ford in November 2023, with 49 monthly payments of £299 and an optional final payment of £8,706. Ford Credit did not provide enough evidence of its checks, but her credit file and bank statements showed the repayments were affordable, so the ombudsman found it did not lend irresponsibly. No redress was ordered.', url: FOS('DRN-5677398') },
      { ref: 'DRN-5469674', outcome: 'Not upheld', summary: 'Mr L took an interest-free hire purchase agreement for a new car in January 2022, borrowing £27,423.78 with 38 payments of £328.81 and an optional final payment. The ombudsman was not satisfied Ford Credit’s checks were proportionate, but found proportionate checks would most likely have shown the payments were affordable. No redress was ordered.', url: FOS('DRN-5469674') },
    ],
    title: 'Ford Credit Car Finance Refund Claims | CreditRights',
    h1: 'Ford Credit car finance refund claims',
    sources: [
      { label: 'Ford UK: Finance eligibility check (legal footer: trading style, FRN, company number, registered office)', url: 'https://www.ford.co.uk/finance/eligibility-check' },
      { label: 'Ford UK: Personal car finance (Ford Options, Ford Acquire, Ford Options Cashplan, Ford Lease provider)', url: 'https://www.ford.co.uk/finance/overview/personal-finance' },
      { label: 'Ford UK: Ford Credit finance application privacy notice (FCE Bank plc, FRN, registered office)', url: 'https://www.ford.co.uk/content/dam/guxeu/uk/documents/home/footer/DOC-ford_credit_fce_bank_plc_finance_application_privacy_notice.pdf' },
      { label: 'Companies House: FCE BANK PLC (00772784) overview (status, office, incorporation date)', url: 'https://find-and-update.company-information.service.gov.uk/company/00772784' },
      { label: 'SEC: Ford Motor Company Form 10-K for 2025 (FCE Bank as Ford Credit’s UK-based European subsidiary; UK and Germany largest markets)', url: 'https://www.sec.gov/Archives/edgar/data/37996/000003799626000015/f-20251231.htm' },
      { label: 'Ford UK: How do I make a complaint with Ford Credit?', url: 'https://www.ford.co.uk/support/how-tos/owner-resources/ford-credit/how-do-i-make-a-complaint-with-ford-credit' },
      { label: 'Financial Ombudsman: decision DRN-6034231', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6034231.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5677398', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5677398.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5469674', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5469674.pdf' },
      { label: 'FCA Register: FCE Bank plc (firm reference 204469)', url: 'https://register.fca.org.uk/s/search?q=204469&type=Companies' },
    ],
  },
  {
    slug: 'hyundai-capital', name: 'Hyundai Capital UK', type: 'carfinance', aliases: ['Hyundai Capital UK Limited', 'Hyundai Finance', 'Kia Finance', 'Genesis Finance'],
    entity: 'Hyundai Capital UK Limited', frn: '581186', companyNo: '07945949', group: 'Joint venture of Hyundai Capital and Santander Consumer (UK) plc',
    products: 'Car finance (personal contract purchase, conditional sale, personal motor loans)', status: 'Trading', checked: '2026-11-01',
    about: [
      'Hyundai Capital UK Limited is the finance company behind Hyundai Finance, Kia Finance and Genesis Finance. It was incorporated in February 2012, its registered office is in Reigate, Surrey, and it is authorised and regulated by the FCA as a lender. It provides finance through Hyundai, Kia and Genesis dealers, including personal contract purchase, conditional sale and Kia’s Personal Motor Loan.',
      'The business was set up in 2012 as a joint venture between Santander Consumer (UK), Hyundai Capital Services, Hyundai Motor UK and Kia Motors UK. At launch it was the captive finance provider to 152 Hyundai and 170 Kia dealerships. Santander Consumer (UK) still describes it as a joint venture with Hyundai Capital covering Hyundai and Kia dealers.',
    ],
    decisions: [
      { ref: 'DRN-4708250', outcome: 'Upheld', summary: 'Mr S took a conditional sale agreement from Hyundai Finance for a new car in August 2018, with £23,643 financed and 48 payments of £400.23. The ombudsman found his salary of about £1,300 a month was almost entirely used by living costs and existing credit, including payday loans, so reasonable checks would have shown he could not sustainably afford it. The lender had to refund all interest, fees and charges with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-4708250') },
      { ref: 'DRN-5504003', outcome: 'Not upheld', summary: 'Miss T took three Kia Finance loan agreements in August 2019, October 2020 and August 2021, each of around £7,500 to £10,200. The ombudsman was not persuaded the checks were proportionate, because Kia Finance did not get her income or expenditure, but her bank statements showed each agreement was affordable. No redress was ordered.', url: FOS('DRN-5504003') },
      { ref: 'DRN-5462710', outcome: 'Not upheld', summary: 'Ms A took a 60-month conditional sale agreement from Kia Finance for a used car in December 2017, with 60 payments of £205.67. The ombudsman found the lender did no income or expenditure checks despite a recent missed payment, but her bank statements showed about £1,000 a month left after the repayments. No redress was ordered.', url: FOS('DRN-5462710') },
    ],
    title: 'Hyundai and Kia Finance Refund Claims | CreditRights',
    h1: 'Hyundai Capital refund claims: Hyundai and Kia Finance',
    sources: [
      { label: 'Kia UK: Personal Motor Loan offers (Hyundai Capital UK Limited trading as Kia Finance, FRN 581186)', url: 'https://eu-www.kia.com/uk/new-cars/offers/retail/pml' },
      { label: 'Genesis UK: Initial disclosure document (Hyundai Capital UK Limited T/A Genesis Finance)', url: 'https://www.genesis.com/content/dam/genesis-web-eu/site/document/uk/legal/GMUK_initial_disclosure_document.pdf' },
      { label: 'Companies House: HYUNDAI CAPITAL UK LIMITED (07945949) overview (office, incorporation date)', url: 'https://find-and-update.company-information.service.gov.uk/company/07945949' },
      { label: 'firmtracer.com: Hyundai Capital UK Limited (FRN 581186, FCA register mirror)', url: 'https://firmtracer.com/firm/581186' },
      { label: 'AM Online: Hyundai Motor Group creates finance joint venture (March 2012)', url: 'https://am-online.com/news/2012/3/9/hyundai-motor-group-creates-finance-joint-venture/30641' },
      { label: 'Santander Consumer (UK): About us (joint venture with Hyundai Capital)', url: 'https://www.santanderconsumer.co.uk/about-us/' },
      { label: 'Financial Ombudsman: decision DRN-4708250 (trading as Hyundai Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-4708250.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5504003 (trading as Kia Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5504003.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5462710 (trading as Kia Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5462710.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5959766 (PCP and fixed sum loan products, trading as Hyundai Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5959766.pdf' },
      { label: 'FCA Register: Hyundai Capital UK Limited (firm reference 581186)', url: 'https://register.fca.org.uk/s/search?q=581186&type=Companies' },
    ],
  },
  {
    slug: 'john-lewis-card', name: 'John Lewis Partnership Card', type: 'card', aliases: ['John Lewis credit card', 'John Lewis Partnership Credit Card', 'John Lewis Money credit card', 'Partnership Card', 'NewDay John Lewis', 'HSBC John Lewis card'],
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Credit card', status: 'Trading', checked: '2026-11-01',
    about: [
      'The John Lewis Partnership Credit Card is provided by NewDay Ltd, registered office 7 Handyside Street, London N1C 4DA. John Lewis Finance Limited introduces the card as a credit broker and is not the lender.',
      'The card launched in 2004 with HSBC as the provider. NewDay took over in 2022: the HSBC cards stopped working at 6pm on 31 October 2022, and customers who wanted the new card had to apply again. John Lewis said the card had issued £230 million of vouchers in the five years to early 2023.',
    ],
    note: { title: 'HSBC to NewDay in 2022', text: 'Partnership Cards from before November 2022 were HSBC accounts. They were not moved to NewDay: customers had to reapply for the NewDay card. The old accounts stayed with HSBC (HSBC UK Bank plc), so complaints about lending on an old HSBC Partnership Card go to HSBC, and complaints about the current card go to NewDay.' },
    complaintsUrl: 'https://www.johnlewismoney.com/partnership-credit-card/faqs?category=PartnershipCardComplaints',
    decisions: [
      { ref: 'DRN-6151896', outcome: 'Partly upheld', summary: 'A NewDay John Lewis credit card opened in December 2023 with a £1,200 limit, raised to £2,000 in August 2024, £3,000 in December 2024 and £3,500 in May 2025. Opening the account was fair, but proportionate checks before the August 2024 increase would have shown it was unaffordable, and the later increases followed from it. NewDay was told to refund interest, fees and charges on balances above £1,200 after 27 August 2024, with 8% simple interest on any overpayment, and remove adverse information recorded after that date.', url: FOS('DRN-6151896') },
      { ref: 'DRN-5824681', outcome: 'Not upheld', summary: 'A Partnership Credit Card with a £1,200 limit, opened around April 2024. The ombudsman found NewDay’s checks reasonable and proportionate; a recent loan probably was not yet on the credit file and would not have changed the decision. No redress was required.', url: FOS('DRN-5824681') },
      { ref: 'DRN-5823814', outcome: 'Not upheld', summary: 'A card with a £700 limit approved in November 2022. NewDay ran credit searches and an income and expenditure assessment, which left about £570 a month spare, and the ombudsman found these checks reasonable and proportionate. No redress was required.', url: FOS('DRN-5823814') },
    ],
    faqs: [
      { q: 'I had the old HSBC John Lewis card. Who do I complain to?', a: 'HSBC. The HSBC Partnership Cards stopped working on 31 October 2022 and the accounts were not moved to NewDay. HSBC kept running the old accounts, so complaints about lending on them go to HSBC rather than NewDay.' },
    ],
    sources: [
      { label: 'John Lewis Money: Partnership Credit Card FAQs (NewDay Ltd lender, FRN 690292, company number; John Lewis Finance broker)', url: 'https://www.johnlewismoney.com/partnership-credit-card/faqs' },
      { label: 'John Lewis Money: Partnership Card complaints FAQs (complaints route)', url: 'https://www.johnlewismoney.com/partnership-credit-card/faqs?category=PartnershipCardComplaints' },
      { label: 'MoneySavingExpert: John Lewis Partnership Card moves from HSBC to NewDay (31 Oct 2022 cut-off; reapply)', url: 'https://www.moneysavingexpert.com/news/2022/08/john-lewis-partnership-card-hsbc-newday/' },
      { label: 'Which?: John Lewis relaunches Partnership reward credit card with NewDay (2004 launch with HSBC; £230m vouchers)', url: 'https://which.co.uk/news/article/john-lewis-relaunches-partnership-reward-credit-card-with-newday-aQbat7m63fPV' },
      { label: 'Financial Ombudsman: DRN-5528458 (old Partnership Card administered by HSBC UK Bank Plc)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5528458.pdf' },
      { label: 'FCA Register: NewDay Ltd (firm reference 690292)', url: 'https://register.fca.org.uk/s/search?q=690292&type=Companies' },
    ],
  },
  {
    slug: 'klarna', name: 'Klarna', type: 'bnpl', aliases: ['Klarna Financial Services UK Limited', 'Klarna Bank AB (publ)', 'Klarna Pay in 3', 'Klarna Pay in 30 days', 'Klarna Financing'],
    entity: 'Klarna Financial Services UK Limited', frn: '987889', companyNo: '14290857', group: 'Klarna Bank AB',
    products: 'Pay in 3, Pay in 30 days, Financing (fixed-term instalment credit), Klarna Credit Card', status: 'Trading', checked: '2026-11-01',
    about: [
      'Klarna Financial Services UK Limited is the UK company through which Klarna provides credit. Its registered office is 10 York Road, London, and it is authorised and regulated by the FCA for consumer credit. It is owned by Klarna Bank AB, a Swedish bank. Before the UK company was authorised in 2023, Klarna Bank AB (publ) provided Klarna’s regulated credit in the UK, and older ombudsman decisions name it as the lender.',
      'Klarna offers Pay in 3, Pay in 30 days and Financing, which spreads larger purchases over 6 to 24 months and can be interest-free or charge interest. Klarna said in May 2025 that it had passed 11 million UK customers and that the UK was its third-largest market.',
    ],
    note: { title: 'Pay in 3 and Pay in 30 days regulated from 15 July 2026', text: 'The FCA started regulating interest-free buy now, pay later on 15 July 2026. Pay in 3 and Pay in 30 days plans taken out from that date are covered, including affordability checks and the right to go to the Financial Ombudsman. Plans taken out before then remain unregulated. Klarna Financing was already a regulated credit agreement before that date.' },
    complaintsUrl: 'https://www.klarna.com/uk/complaints/',
    decisions: [
      { ref: 'DRN-5764204', outcome: 'Not upheld', summary: 'Mr E complained that Klarna Financial Services UK irresponsibly gave him a £1,020 point of sale loan he could not afford, and then reported a default. The ombudsman found Klarna’s checks were reasonable and proportionate, showing enough disposable income and no defaults, and that the default was reported accurately. No redress was ordered.', url: FOS('DRN-5764204') },
      { ref: 'DRN-5931795', outcome: 'Not upheld', summary: 'Mr D used Klarna’s ’Pay Over 6 Months’ running-account credit for a £439.99 purchase in June 2020. The ombudsman found Klarna Bank AB’s checks, including his declared £60,000 income and a credit search showing no defaults or arrears, were proportionate and raised no concerns. No redress was ordered.', url: FOS('DRN-5931795') },
      { ref: 'DRN-5570382', outcome: 'Not upheld', summary: 'Miss M took a £5,000 Klarna loan to fund a purchase in May 2023, repayable at £130.64 a month. The ombudsman found Klarna Bank AB’s checks were proportionate and it was reasonable to accept her declared £18,000 income without verifying it. No redress was ordered.', url: FOS('DRN-5570382') },
    ],
    faqs: [
      { q: 'Which Klarna plans can I complain about to the Financial Ombudsman?', a: 'Klarna Financing agreements, which were regulated credit before July 2026, and Pay in 3 or Pay in 30 days plans taken out on or after 15 July 2026. Pay in 3 and Pay in 30 days plans taken out before 15 July 2026 are unregulated, and Klarna says complaints about them are outside the ombudsman’s remit. Complain to Klarna first; if you are unhappy with its final response, you can go to the ombudsman.' },
    ],
    sources: [
      { label: 'Klarna UK: Complaints (legal footer: entity, FRN 987889, company number, registered office; ombudsman and 15 July 2026)', url: 'https://www.klarna.com/uk/complaints/' },
      { label: 'Klarna UK: Complaints publication report, 1 Jan to 30 Jun 2026', url: 'https://www.klarna.com/uk/complaints/complaints-publication-report/' },
      { label: 'Klarna Docs: Regulated financing promotion rules 101 (Financing regulated; Pay in 3 and Pay in 30 days unregulated before July 2026)', url: 'https://docs.klarna.com/resources/marketing-tools/advertising-legal-guidelines/united-kingdom/regulated-financing-promotion-rules-101' },
      { label: 'Stripe support: Klarna Financing for UK customers (regulated credit, 6 to 24 months, interest-free or up to 21.9% APR)', url: 'https://support.stripe.com/questions/klarna-financing-for-uk-customers' },
      { label: 'Companies House: KLARNA FINANCIAL SERVICES UK LIMITED persons with significant control (Klarna Bank AB)', url: 'https://find-and-update.company-information.service.gov.uk/company/14290857/persons-with-significant-control' },
      { label: 'FinTech Global: Klarna secures FCA approval for UK credit and payment services (November 2023)', url: 'https://fintech.global/2023/11/24/klarna-secures-fca-approval-to-expand-uks-credit-and-payment-services/' },
      { label: 'Klarna: Klarna hits 11 million UK customers (2 May 2025)', url: 'https://s205.q4cdn.com/644747736/files/doc_news/Klarna-hits-11-million-UK-customers-as-UK-revenue-soars-30-in-breakout-2024-2025-FTRhW1OrrK-2025.pdf' },
      { label: 'FCA: Buy now pay later (regulated from 15 July 2026; earlier agreements remain unregulated)', url: 'https://www.fca.org.uk/consumers/buy-now-pay-later' },
      { label: 'Financial Ombudsman: BNPL users can bring complaints from 15 July', url: 'https://www.financial-ombudsman.org.uk/who-we-are/data-insight/news/bnpl-complaints-15-july' },
      { label: 'Financial Ombudsman: decision DRN-5764204', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5764204.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5931795', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5931795.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5570382', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5570382.pdf' },
      { label: 'FCA Register: Klarna Financial Services UK Limited (firm reference 987889)', url: 'https://register.fca.org.uk/s/search?q=987889&type=Companies' },
    ],
  },
  {
    slug: 'kroo', name: 'Kroo', type: 'overdraft', aliases: ['Kroo Bank', 'Kroo Bank Ltd', 'Kroo overdraft', 'Kroo loan'],
    entity: 'Kroo Bank Ltd', frn: '953772', companyNo: '10359002',
    products: 'arranged overdraft, personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'Kroo is a UK app-based bank. Kroo Bank Ltd is authorised as a bank by the Prudential Regulation Authority and regulated by the Financial Conduct Authority. It is registered in England and Wales, with its registered office at 3 More London Riverside, London SE1 2AQ. It offers a current account, savings, a cash ISA and personal loans. Kroo current account customers can be invited to apply for an arranged overdraft of up to £1,000.',
      'At the end of 2024, Kroo had 188,382 personal current accounts and £965.8 million of customer deposits. Its lending was still small: net consumer loans were £15.6 million and net overdrafts £0.49 million.',
    ],
    note: { title: 'Personal loans started in late 2023', text: 'Kroo launched its personal loans in the last quarter of 2023, so loan complaints can only cover borrowing from then on. Kroo has not published when its overdraft started.' },
    complaintsUrl: 'https://kroo.com/complaint-information',
    decisions: [
      { ref: 'DRN-6179362', outcome: 'Upheld', summary: 'In August 2024 Kroo lent Mr W £3,500 as a personal loan over 36 months. The ombudsman found Kroo did not properly use the Open Banking data it had, which showed three high-cost loans totalling about £6,000 taken in the previous two months and around £16,000 of debt. With this loan, his credit repayments would have taken about 45% of his income. Kroo was told to remove all interest and charges, refund any overpayment with 8% simple interest, agree a plan for any balance left and remove adverse credit file entries once the loan is settled.', url: FOS('DRN-6179362') },
    ],
    sources: [
      { label: 'Kroo: Company fact sheet (legal name, FRN 953772, company number, registered office, PRA authorisation, products)', url: 'https://kroo.com/company-fact-sheet' },
      { label: 'Kroo: Personal overdrafts (limits up to £1,000, invitation only for current account customers)', url: 'https://kroo.com/personal-overdrafts' },
      { label: 'Kroo: Annual report 2024 (customer accounts, deposits, loans and overdrafts, 2024 loss, loans launched Q4 2023)', url: 'https://kroo.com/files/kroo-annual-report-2024.pdf' },
      { label: 'Kroo: Complaint information (how to complain, timescales, Financial Ombudsman)', url: 'https://kroo.com/complaint-information' },
      { label: 'Financial Ombudsman Service: DRN-6179362', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6179362.pdf' },
      { label: 'FCA Register: Kroo Bank Ltd (firm reference 953772)', url: 'https://register.fca.org.uk/s/search?q=953772&type=Companies' },
    ],
  },
  {
    slug: 'motonovo', name: 'MotoNovo Finance', type: 'carfinance', aliases: ['MotoNovo', 'MotoNovo Finance Limited', 'Motonovo Finance', 'FirstRand Bank Limited (London Branch)', 'Carlyle Finance'],
    entity: 'MotoNovo Finance Limited', frn: '827851', companyNo: '11556144', group: 'Aldermore Group (FirstRand)',
    products: 'Hire purchase, personal contract purchase', status: 'Trading', checked: '2026-11-01',
    about: [
      'MotoNovo Finance is a Cardiff-based motor finance lender. Since May 2019 new agreements have been written by MotoNovo Finance Limited, registered in Wales (company 11556144) with its registered office at Two Central Square, Cardiff CF10 1FS. It is part of the Aldermore Group, which is owned by FirstRand.',
      'The business started in Cardiff in 1977 as Carlyle Finance and took the MotoNovo Finance name in 2012. WesBank, part of FirstRand, bought it in 2006, and MotoNovo says it reached second place in the UK used car finance market in 2017.',
    ],
    note: { title: 'Older agreements may name FirstRand Bank', text: 'Before MotoNovo joined Aldermore on 13 May 2019, its agreements were provided by MotoNovo Finance, a division of FirstRand Bank Limited (London Branch). New business has been written in the name of MotoNovo Finance Limited since then. MotoNovo reports complaints for both together.' },
    complaintsUrl: 'https://www.motonovofinance.com/help-and-support/complaints',
    decisions: [
      { ref: 'DRN-6246883', outcome: 'Upheld', summary: 'Mr S financed a £9,600 van with MotoNovo in April 2020. The ombudsman found MotoNovo did not verify his stated income or his essential spending, and his records showed irregular income and a shortfall against essential outgoings, so the agreement was unaffordable. MotoNovo was told to let him keep the van, refund what he paid above £9,600 with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-6246883') },
      { ref: 'DRN-5950577', outcome: 'Upheld', summary: 'Mr M signed a hire purchase agreement in September 2021 for a £28,000 used car, borrowing £23,000. The ombudsman found MotoNovo did not verify his income or spending, and checking would likely have shown he had no regular income at the time. MotoNovo was told to refund payments above £28,000 with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-5950577') },
      { ref: 'DRN-6017212', outcome: 'Not upheld', summary: 'Mr B took out a personal contract purchase agreement in September 2020, borrowing £15,784. The ombudsman found MotoNovo should have checked more, given missed payments on two credit cards, but proportionate checks would likely have shown the agreement was affordable. MotoNovo did not have to take any action.', url: FOS('DRN-6017212') },
    ],
    faqs: [
      { q: 'Is MotoNovo part of Aldermore?', a: 'Yes. MotoNovo Finance Limited is part of the Aldermore Group. Both are owned by FirstRand, which bought Aldermore in 2018 and has owned MotoNovo since 2006.' },
    ],
    title: 'MotoNovo Finance Refund Claims | CreditRights',
    h1: 'MotoNovo Finance refund claims',
    sources: [
      { label: 'Aldermore: Motor finance by MotoNovo (entity, company number, registered office, part of Aldermore Group)', url: 'https://www.aldermore.co.uk/motor-finance-by-motonovo/' },
      { label: 'Car Dealer Magazine: MotoNovo Finance and Aldermore complete integration, 13 May 2019 (new business in MotoNovo Finance Limited’s name, FirstRand ownership)', url: 'https://cardealermagazine.co.uk/motonovo-finance-aldermore-complete-integration/171078' },
      { label: 'MotoNovo Finance: Complaints data (FirstRand Bank Limited (London Branch) and MotoNovo Finance Limited)', url: 'https://dealer.motonovofinance.com/complaints-data' },
      { label: 'MotoNovo Finance careers: Who we are (history, Carlyle Finance 1977, WesBank 2006, market position)', url: 'https://careers.motonovofinance.com/who-we-are' },
      { label: 'Companies House: MotoNovo Finance Limited 11556144', url: 'https://find-and-update.company-information.service.gov.uk/company/11556144' },
      { label: 'Financial Ombudsman: DRN-6246883 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6246883.pdf' },
      { label: 'Financial Ombudsman: DRN-5950577 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5950577.pdf' },
      { label: 'Financial Ombudsman: DRN-6017212 (not upheld affordability decision, PCP)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6017212.pdf' },
      { label: 'FCA Register: MotoNovo Finance Limited (firm reference 827851)', url: 'https://register.fca.org.uk/s/search?q=827851&type=Companies' },
    ],
  },
  {
    slug: 'northridge-finance', name: 'Northridge Finance', type: 'carfinance', aliases: ['N.I.I.B. Group Limited', 'NIIB Group', 'NIIB', 'Northridge', 'Marshall Leasing', 'Bank of Ireland car finance'],
    entity: 'N.I.I.B. Group Limited', frn: '671302', companyNo: 'NI003721', group: 'Bank of Ireland (UK) plc (Bank of Ireland Group)',
    products: 'Hire purchase, car finance', status: 'Trading', checked: '2026-11-01',
    about: [
      'Northridge Finance is the trading name of N.I.I.B. Group Limited, the car and asset finance business of Bank of Ireland UK. The company is registered in Northern Ireland (company NI003721) with its registered office at 1 Donegall Square South, Belfast BT1 5LR. It was formed in 1956, bought by Bank of Ireland in 1984 and is a wholly owned subsidiary of Bank of Ireland (UK) plc.',
      'It has lent in Great Britain since 1999, providing motor, commercial and agricultural finance through dealers, brokers and directly, and also trades as Marshall Leasing. Bank of Ireland UK reported £1.1 billion of gross new lending by Northridge in 2018.',
    ],
    decisions: [
      { ref: 'DRN-6242692', outcome: 'Upheld', summary: 'Mr J signed a hire purchase agreement in January 2025 for a £29,120 used car. The ombudsman found Northridge Finance had no evidence of an assessment based on his verified income and spending, and his bank statements showed about £467 a month left over, less than the monthly payment. Northridge was told to charge no interest, keep only a £1,510.59 fair-usage charge, refund any excess with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-6242692') },
      { ref: 'DRN-5886392', outcome: 'Upheld', summary: 'Mr F took out car finance in September 2019, repayable at £527.19 a month over 49 months. The ombudsman found Northridge relied on his stated £52,000 income without verifying it or assessing his spending, and proportionate checks would have shown he could not sustainably repay. Northridge was told to refund payments above the car’s £34,995 cash price with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-5886392') },
      { ref: 'DRN-6003462', outcome: 'Not upheld', summary: 'Miss P took out a hire purchase agreement in October 2019, repayable at £148.44 a month over 60 months. The ombudsman found Northridge gathered reasonable information about her income and employment and ran a credit check showing no defaults; a county court judgment did not appear on its checks. Northridge did not have to take any action.', url: FOS('DRN-6003462') },
    ],
    faqs: [
      { q: 'Is Northridge Finance part of Bank of Ireland?', a: 'Yes. Northridge Finance is the trading name of N.I.I.B. Group Limited, a wholly owned subsidiary of Bank of Ireland (UK) plc. Complaints about a Northridge agreement go to Northridge Finance.' },
    ],
    title: 'Northridge Finance Refund Claims | CreditRights',
    h1: 'Northridge Finance refund claims',
    sources: [
      { label: 'Companies House: N.I.I.B. Group Limited NI003721 (registered office, incorporated 1956)', url: 'https://pay.company-information.service.gov.uk/company/NI003721' },
      { label: 'FirmTracer (FCA register mirror): N.I.I.B. Group Limited, FRN 671302', url: 'https://firmtracer.com/firm/671302' },
      { label: 'Bank of Ireland UK: Northridge Finance announce record year as lending reaches £1.1 billion in 2018 (trading name of NIIB, history, ownership, lending)', url: 'https://www.bankofirelanduk.com/?p=25465' },
      { label: 'Bank of Ireland UK: About Bank of Ireland UK (Northridge Finance and Marshall Leasing brands)', url: 'https://www.bankofirelanduk.com/?p=3079' },
      { label: 'FCA: Car finance list of lenders (N.I.I.B. Group Ltd, trading names Northridge Finance and Marshall Leasing, website)', url: 'https://www.fca.org.uk/consumers/car-finance-complaints/list-lenders' },
      { label: 'Financial Ombudsman: DRN-6242692 (upheld affordability decision, N.I.I.B. Group Limited trading as Northridge Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6242692.pdf' },
      { label: 'Financial Ombudsman: DRN-5886392 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5886392.pdf' },
      { label: 'Financial Ombudsman: DRN-6003462 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6003462.pdf' },
      { label: 'FCA Register: N.I.I.B. Group Limited (firm reference 671302)', url: 'https://register.fca.org.uk/s/search?q=671302&type=Companies' },
    ],
  },
  {
    slug: 'paypal-credit', name: 'PayPal Credit', type: 'card', aliases: ['PayPal credit account', 'PayPal UK Ltd', 'PayPal (Europe) S.à r.l. et Cie, S.C.A.', 'PayPal Credit UK'],
    entity: 'PayPal UK Ltd', frn: '996405', companyNo: '14741686', group: 'PayPal',
    products: 'Revolving credit account', status: 'Trading', checked: '2026-11-01',
    about: [
      'PayPal Credit is a revolving credit line used to pay online through PayPal. In the UK it is provided by PayPal UK Ltd, registered office 76 Upper Ground, London SE1 9PZ, which is authorised by the FCA for consumer credit under firm reference 996405 (with separate references for e-money and cryptoasset services).',
      'PayPal Credit has been offered in the UK since 2014. PayPal said in November 2019 that there were 1.5 million PayPal Credit accounts in the UK and that it had lent more than £2 billion, and in October 2020 that the product had served more than two million UK customers.',
    ],
    note: { title: 'Older accounts were with PayPal (Europe)', text: 'Until 1 November 2023 PayPal’s UK services, including PayPal Credit, were provided by the Luxembourg company PayPal (Europe) S.à r.l. et Cie, S.C.A. On that date they transferred to PayPal UK Ltd. Some ombudsman decisions about lending before the transfer name PayPal (Europe) as the business.' },
    complaintsUrl: 'https://www.paypal.com/uk/cshelp/complaints',
    decisions: [
      { ref: 'DRN-5955243', outcome: 'Upheld', summary: 'A PayPal credit account approved in June 2020 with a £1,500 limit, raised to £2,500 in July 2021 and £3,500 in January 2022. Opening the account was fair, but PayPal did not verify income before the increases and the bank statements showed little or nothing spare, so fuller checks would probably have stopped both. PayPal UK Ltd was told to refund interest, fees and charges on balances above £1,500 from July 2021, with 8% simple interest on any overpayment, and remove adverse information recorded after July 2021.', url: FOS('DRN-5955243') },
      { ref: 'DRN-5276303', outcome: 'Upheld', summary: 'A revolving credit account opened in April 2022 with a £2,400 limit, provided by PayPal (Europe). The ombudsman found PayPal’s checks were not proportionate: bank statements showed reliance on salary advances, returned direct debits and constant overdraft use, so the account was unaffordable. PayPal was told to remove all interest, fees and charges, refund any overpayment with 8% simple interest and remove adverse credit file information.', url: FOS('DRN-5276303') },
      { ref: 'DRN-5982063', outcome: 'Not upheld', summary: 'An account opened in October 2019 with a £1,200 limit, raised to £2,200 in December 2021. The ombudsman said PayPal should have done more to verify income before the increase because it relied on figures more than two years old, but later figures showed it would still have offered the increase. No redress was required.', url: FOS('DRN-5982063') },
    ],
    sources: [
      { label: 'PayPal: user agreement (PayPal UK Ltd company number, registered office, consumer credit FRN 996405)', url: 'https://history.paypal.com/uk/legalhub/useragreement-full' },
      { label: 'PayPal: what is PayPal changing in the UK on 1 November 2023 (transfer from PayPal (Europe) to PayPal UK Ltd)', url: 'https://www.paypal.com/uk/cshelp/article/what-is-paypal-changing-in-the-uk-on-1-november-2023-help1075' },
      { label: 'Samsung UK: PayPal Credit (provided by PayPal UK Ltd)', url: 'https://www.samsung.com/uk/paypal-credit' },
      { label: 'PayPal newsroom: PayPal Credit reaches £2bn in UK lending (Nov 2019; 1.5 million accounts; launched 2014)', url: 'https://newsroom.uk.paypal-corp.com/Retailers-see-15-sales-increase-through-PayPal-Credit-as-product-reaches-2bn-in-UK-lending' },
      { label: 'PayPal newsroom: PayPal launches Pay in 3 (Oct 2020; PayPal Credit over two million UK customers)', url: 'https://newsroom.uk.paypal-corp.com/paypal-launches-pay-in-3' },
      { label: 'PayPal: complaint submissions (UK)', url: 'https://www.paypal.com/uk/cshelp/complaints' },
      { label: 'FCA Register: PayPal UK Ltd (firm reference 996405)', url: 'https://register.fca.org.uk/s/search?q=996405&type=Companies' },
    ],
  },
  {
    slug: 'paypal-pay-in-3', name: 'PayPal Pay in 3', type: 'bnpl', aliases: ['Pay in 3', 'PayPal Pay Later', 'PayPal buy now pay later', 'PayPal UK Ltd'],
    entity: 'PayPal UK Ltd', frn: '996405', companyNo: '14741686', group: 'PayPal',
    products: 'Deferred payment credit (three interest-free instalments)', status: 'Trading', checked: '2026-11-01',
    about: [
      'PayPal Pay in 3 splits an online purchase into three interest-free payments: one at checkout and two more monthly. It is provided by PayPal UK Ltd, registered office 76 Upper Ground, London SE1 9PZ, which holds FCA consumer credit authorisation under firm reference 996405. PayPal says it may run a soft credit check, which does not affect the customer’s credit score.',
      'PayPal launched Pay in 3 in the UK in October 2020 for purchases between £45 and £2,000; it now appears for eligible baskets between £20 and £3,000. At launch PayPal said it had more than 24 million UK users.',
    ],
    note: { title: 'Regulated from 15 July 2026', text: 'The FCA began regulating buy now pay later (deferred payment credit) on 15 July 2026. PayPal describes Pay in 3 as a regulated deferred payment credit agreement, and its current agreement is dated 15 July 2026. Under the FCA’s rules, agreements taken out before 15 July 2026 remain unregulated.' },
    complaintsUrl: 'https://www.paypal.com/uk/cshelp/complaints',
    decisions: [
    ],
    sources: [
      { label: 'PayPal: Pay in 3 agreement (version 15 July 2026; PayPal UK Ltd, company number, FRNs; complaints and Financial Ombudsman)', url: 'https://www.paypal.com/uk/webapps/mpp/paypal-payin3/terms' },
      { label: 'PayPal: what is Pay in 3 (regulated deferred payment credit; £20 to £3,000; soft credit check)', url: 'https://www.paypal.com/uk/cshelp/article/what-is-pay-in-3-help463' },
      { label: 'PayPal newsroom: PayPal launches Pay in 3 (Oct 2020; £45 to £2,000; 24 million UK users)', url: 'https://newsroom.uk.paypal-corp.com/paypal-launches-pay-in-3' },
      { label: 'FCA: buy now pay later (regulation from 15 July 2026; earlier agreements remain unregulated)', url: 'https://www.fca.org.uk/consumers/buy-now-pay-later' },
      { label: 'PayPal: complaint submissions (UK)', url: 'https://www.paypal.com/uk/cshelp/complaints' },
      { label: 'FCA Register: PayPal UK Ltd (firm reference 996405)', url: 'https://register.fca.org.uk/s/search?q=996405&type=Companies' },
    ],
  },
  {
    slug: 'plata-finance', name: 'Plata Finance', type: 'loan', aliases: ['Plata', 'Plata loans', 'Plata Finance Limited'],
    entity: 'Plata Finance Limited', frn: '718925', companyNo: '05197592', group: 'Plata Holdings UK',
    products: 'personal loans, additional borrowing', status: 'Trading', checked: '2026-11-01',
    about: [
      'Plata is the trading name used by Plata Finance Limited, registered in England and Wales (number 05197592) with its registered office at Frobisher House, Southbrook Road, Southampton SO15 1GX. It lends from £2,000 to £35,000 and also offers additional borrowing to existing customers.',
      'The company was called Zopa Limited, the firm behind Zopa’s original peer-to-peer lending business, until July 2022. Plata Holdings UK became its majority owner in February 2022 and the company was renamed Plata Finance Limited on 8 July 2022. Its 2023 accounts reported servicing fees and commissions of £14.2 million and an after-tax profit of £4.7 million.',
    ],
    note: { title: 'Formerly Zopa Limited', text: 'Plata Finance Limited is the company that was called Zopa Limited until 8 July 2022. When it was renamed, Zopa said Zopa Limited’s loan customers would continue to be serviced by Zopa Bank. If your loan was taken out with Plata, you complain to Plata.' },
    complaintsUrl: 'https://www.plata.com/s/complaints',
    decisions: [
      { ref: 'DRN-6271698', outcome: 'Not upheld', summary: 'Mr D was lent £3,000 in May 2025, repayable over 18 months, and said Plata should have seen gambling on his bank statements. The ombudsman found Plata’s checks were proportionate and that it did not lend irresponsibly. The complaint was not upheld and no redress was required.', url: FOS('DRN-6271698') },
      { ref: 'DRN-6269937', outcome: 'Not upheld', summary: 'Mr W was lent £3,000 over 36 months in August 2023. The ombudsman said "I do not uphold this complaint", finding Plata’s checks proportionate. Plata had already made a goodwill offer, which Mr W accepted, and it was not required to do anything more.', url: FOS('DRN-6269937') },
      { ref: 'DRN-6192064', outcome: 'Not upheld', summary: 'Mr T was lent £5,500 over 30 months in December 2024. The ombudsman found Plata’s checks were proportionate and showed he could afford the loan. No redress was required.', url: FOS('DRN-6192064') },
    ],
    sources: [
      { label: 'Plata: Complaints (complaints process; legal footer: company number, FRN 718925, registered office)', url: 'https://www.plata.com/s/complaints' },
      { label: 'Plata: How does it work (loan amounts, products)', url: 'https://www.plata.com/s/how-does-it-work' },
      { label: 'Bringo: Plata Finance Limited 05197592 (registered office, previous name Zopa Limited until 8 July 2022)', url: 'https://bringo.co.uk/company/9526919' },
      { label: 'Alternative Credit Investor: Zopa’s P2P brand sold and rebranded as Plata Finance (Plata Holdings UK, rename, Zopa Bank servicing)', url: 'https://alternativecreditinvestor.com/2022/07/08/zopas-p2p-brand-sold-and-rebranded-as-plata-finance/' },
      { label: 'Crowdfund Insider: Online lender Plata Finance reports full year 2023 results (fees, profit)', url: 'https://www.crowdfundinsider.com/2024/10/230756-online-lender-plata-finance-reports-full-year-2023-results/' },
      { label: 'Financial Ombudsman: DRN-6271698', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6271698.pdf' },
      { label: 'Financial Ombudsman: DRN-6269937', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6269937.pdf' },
      { label: 'Financial Ombudsman: DRN-6192064', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6192064.pdf' },
      { label: 'FCA Register: Plata Finance Limited (firm reference 718925)', url: 'https://register.fca.org.uk/s/search?q=718925&type=Companies' },
    ],
  },
  {
    slug: 'revolut', name: 'Revolut', type: 'loan', aliases: ['Revolut Bank UK Ltd', 'Revolut Bank UK', 'Revolut NewCo UK Ltd', 'Revolut loan', 'Revolut personal loan'],
    entity: 'Revolut Bank UK Ltd', frn: '981170', companyNo: '12871051',
    products: 'personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'Revolut is a London-based digital bank with about 14 million UK customers and more than 80 million worldwide. Its UK bank, Revolut Bank UK Ltd (formerly Revolut NewCo UK Ltd), has its registered office at 30 South Colonnade, London E14 5HX. On 11 March 2026 the Prudential Regulation Authority approved it to leave its mobilisation phase and launch as a fully licensed bank. Existing customers, who held e-money accounts with Revolut Ltd, are being moved to the bank over several months.',
      'Revolut announced on 26 October 2026 that it had started offering unsecured personal loans in the UK: £2,000 to £25,000 over one to five years, at 6.9% to 29.3% APR. The loans are going to a selected group of customers first and will be extended over the coming months. Revolut does not yet offer a UK credit card. It said in June 2026 that five UK cards would go live soon, and in October that a credit card would follow in the near future.',
    ],
    note: { title: 'UK lending only began in October 2026', text: 'Revolut only started lending in the UK in late October 2026, with personal loans for a selected group of customers. Earlier personal loans offered through the Revolut app came from the peer-to-peer lender Lending Works, not from Revolut.' },
    decisions: [
    ],
    sources: [
      { label: 'Revolut: Help centre (UK footer: Revolut Bank UK Ltd, FRN 981170, company 12871051, registered office)', url: 'https://help.revolut.com/' },
      { label: 'Bloomberg LEI: Revolut Bank UK Ltd (previous legal name Revolut NewCo UK Ltd, company 12871051, registered address)', url: 'https://lei.bloomberg.com/leis/view/2138003LXONKR247S255' },
      { label: 'Firmtracer (mirrors FCA register): Revolut Bank UK Ltd, FRN 981170', url: 'https://firmtracer.com/firm/981170' },
      { label: 'City AM: Revolut to take fight to high street banks with UK personal loans (26 October 2026; amounts, terms, APR, 13 million UK customers)', url: 'https://www.cityam.com/?p=2471277' },
      { label: 'Retail Banker International: Revolut has entered Britain’s unsecured personal loans market (27 October 2026; 14 million UK customers, 80 million worldwide, Revolut Bank UK, credit card not yet launched)', url: 'https://www.retailbankerinternational.com/?p=108939' },
      { label: 'Cyprus Mail (Reuters): Revolut launches unsecured personal loans in Britain (selected customers first; credit card in the near future)', url: 'https://cyprus-mail.com/2026/10/27/revolut-launches-unsecured-personal-loans-in-britain-to-challenge-major-banks' },
      { label: 'FX News Group: Revolut Bank UK launches (11 March 2026; mobilisation exit, customer migration from Revolut Ltd)', url: 'https://fxnewsgroup.com/forex-news/payments/revolut-bank-uk-launches' },
      { label: 'PYMNTS: Revolut increases focus on UK credit card market (4 June 2026; five UK cards to go live soon)', url: 'https://www.pymnts.com/credit-cards/2026/revolut-increases-focus-united-kingdom-credit-card-market/' },
      { label: 'Finextra: Revolut partners with P2P lender to offer customers cut-price instant credit (earlier in-app loans provided by Lending Works)', url: 'https://finextra.com/pressarticle/68446/revolut-partners-with-p2p-lender-to-offer-customers-cut-price-instant-credit' },
      { label: 'FCA Register: Revolut Bank UK Ltd (firm reference 981170)', url: 'https://register.fca.org.uk/s/search?q=981170&type=Companies' },
    ],
  },
  {
    slug: 'salad-money', name: 'Salad Money', type: 'loan', aliases: ['Salad', 'Salad Loans', 'Salad Finance', 'Salad Finance Limited'],
    entity: 'Salad Finance Limited', frn: '795723', companyNo: '11006249',
    products: 'personal loans', status: 'Trading', checked: '2026-11-01',
    about: [
      'Salad Money is run by Salad Finance Limited, registered in England (number 11006249) and incorporated in October 2017, with its address at 49 Greek Street, London W1D 4EG. It describes itself as a community development finance institution (CDFI) lending to workers shut out of mainstream credit, and its website has loan pages aimed at NHS staff, nurses and teachers.',
      'Salad says it had served 94,156 customers by the end of 2024 and is the largest consumer-lending CDFI in the UK. In December 2024 the FCA registered it as an account information service provider, so it can read applicants’ Open Banking data directly.',
    ],
    complaintsUrl: 'https://www.saladmoney.co.uk/help-centre/i-need-to-make-a-complaint',
    decisions: [
      { ref: 'DRN-6260539', outcome: 'Not upheld', summary: 'Miss B was lent £1,200 over 18 months in January 2025. The ombudsman said "I do not uphold this complaint", finding Salad’s checks proportionate and its lending decision fair. No redress was required.', url: FOS('DRN-6260539') },
      { ref: 'DRN-5896748', outcome: 'Not upheld', summary: 'Mr C was lent £1,000 over 18 months in July 2023 and said Salad lent to him while he had a gambling addiction. The ombudsman found the affordability checks reasonable and proportionate and did not uphold the complaint. No redress was required, though Salad was encouraged to consider forbearance on any balance.', url: FOS('DRN-5896748') },
      { ref: 'DRN-5867928', outcome: 'Partly upheld', summary: 'Mrs C was lent £500 in December 2022, then refinanced to £1,200 in July 2023 and topped up to £1,500 in April 2024. The ombudsman partly upheld the complaint, finding Salad’s checks were not far-reaching enough and the April 2024 top-up should not have been approved. Salad was told to remove interest and charges on the top-up, refund any credit balance with 8% simple interest and remove adverse information recorded after April 2024.', url: FOS('DRN-5867928') },
    ],
    sources: [
      { label: 'Salad: Complaints help page (legal footer: Salad Finance Limited, FRN 795723, company number, address)', url: 'https://www.saladmoney.co.uk/help/complaints' },
      { label: 'Salad: Make a complaint (complaints process)', url: 'https://www.saladmoney.co.uk/help-centre/i-need-to-make-a-complaint' },
      { label: 'Endole: Salad Finance Limited 11006249 (incorporation date, address)', url: 'https://open.endole.co.uk/insight/company/11006249-salad-finance-limited' },
      { label: 'Salad: Salad publishes complaints data (customers served, largest consumer-lending CDFI, who it lends to)', url: 'https://www.saladmoney.co.uk/news/salad-publishes-complaints-data-and-asks-shouldnt-all-consumer-lenders-do-the-same' },
      { label: 'Open Banking Expo: Salad Money secures first AISP licence given to a CDFI lender (AISP registration, CDFI)', url: 'https://openbankingexpo.com/news/uks-salad-money-secures-first-aisp-licence-given-to-a-cdfi-lender' },
      { label: 'Financial Ombudsman: DRN-6260539', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6260539.pdf' },
      { label: 'Financial Ombudsman: DRN-5896748', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5896748.pdf' },
      { label: 'Financial Ombudsman: DRN-5867928', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5867928.pdf' },
      { label: 'FCA Register: Salad Finance Limited (firm reference 795723)', url: 'https://register.fca.org.uk/s/search?q=795723&type=Companies' },
    ],
  },
  {
    slug: 'santander-consumer-finance', name: 'Santander Consumer Finance', type: 'carfinance', aliases: ['Santander Consumer (UK) plc', 'Santander Consumer UK', 'Santander Consumer Finance (UK) plc', 'Santander car finance', 'Vauxhall Motor Finance', 'MG Motor Financial Services', 'Volvo Car Financial Services', 'Volvo Car Credit', 'Hyundai Car Financial Services', 'Kia Financial Services', 'Kia Access', 'Yamaha Motor Finance', 'KTM Finance', 'Husqvarna Motorcycles Finance', 'Caterham Finance', 'INEOS Automotive Finance'],
    entity: 'Santander Consumer (UK) plc', frn: '444327', companyNo: '02248870', group: 'Banco Santander',
    products: 'Conditional sale, hire purchase, fixed-sum car loans, motorcycle finance', status: 'Trading', checked: '2026-11-01',
    about: [
      'Santander Consumer Finance is the trading name of Santander Consumer (UK) plc, part of the Banco Santander group. It is registered in England and Wales (company 02248870) with its registered office at Santander House, 86 Station Road, Redhill, Surrey RH1 1SR.',
      'It finances cars and motorcycles through dealers, brokers and partnerships with manufacturers, including a joint venture with Hyundai Capital for Hyundai and Kia finance. It says it has over half a million live customer agreements.',
    ],
    complaintsUrl: 'https://www.santanderconsumer.co.uk/making-a-complaint',
    decisions: [
      { ref: 'DRN-5954529', outcome: 'Not upheld', summary: 'Mr B financed a car on a conditional sale agreement in October 2021, borrowing £10,633.87. The ombudsman found Santander could not fully evidence its checks, but reasonable checks would not have shown the lending was unaffordable, as his credit file and bank statements showed no signs of financial difficulty. Santander did not have to take any further action.', url: FOS('DRN-5954529') },
      { ref: 'DRN-5694784', outcome: 'Not upheld', summary: 'Mrs B financed a car with a £10,557 conditional sale agreement in 2019. The ombudsman found Santander’s checks were not reasonable and proportionate, as there was no evidence it understood her income or essential spending, but there was not enough evidence that she could not sustainably repay. No redress was required.', url: FOS('DRN-5694784') },
      { ref: 'DRN-5243192', outcome: 'Not upheld', summary: 'Mr J borrowed £15,500 on a conditional sale agreement in December 2018 to buy a car. The ombudsman found Santander should have gathered more information, as his bank statements showed low income, overdraft reliance and returned direct debits, but proportionate checks would also have shown his income was about to rise. Santander was not required to provide any redress.', url: FOS('DRN-5243192') },
    ],
    faqs: [
      { q: 'Which finance brands does Santander Consumer Finance cover?', a: 'Its trading names include Vauxhall Motor Finance, MG Motor Financial Services, Volvo Car Financial Services, Volvo Car Credit, Hyundai Car Financial Services, Kia Financial Services, Kia Access, Yamaha Motor Finance, KTM Finance and Caterham Finance. A complaint about finance under any of these names goes to Santander Consumer (UK) plc.' },
      { q: 'Is Santander Consumer Finance the same as Santander bank?', a: 'No. Santander Consumer (UK) plc is a separate company from Santander UK plc, the bank. Car finance from Santander Consumer Finance is a Santander Consumer (UK) plc matter; personal loans from the bank are a Santander UK plc matter.' },
    ],
    title: 'Santander Consumer Finance Refund Claims | CreditRights',
    h1: 'Santander Consumer Finance refund claims',
    sources: [
      { label: 'Santander Consumer Finance: About us (trading name, Banco Santander group, half a million agreements, Hyundai Capital joint venture, registered office, FRN 444327)', url: 'https://www.santanderconsumer.co.uk/about-us/' },
      { label: 'Companies House: Santander Consumer (UK) plc 02248870 (registered office, previous names)', url: 'https://find-and-update.company-information.service.gov.uk/company/02248870' },
      { label: 'Santander Consumer Finance: Making a complaint (complaints page, trading names covered)', url: 'https://www.santanderconsumer.co.uk/making-a-complaint' },
      { label: 'Financial Ombudsman: DRN-5583279 (Santander UK plc, a separate company, personal loan)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5583279.pdf' },
      { label: 'Financial Ombudsman: DRN-5954529 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5954529.pdf' },
      { label: 'Financial Ombudsman: DRN-5694784 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5694784.pdf' },
      { label: 'Financial Ombudsman: DRN-5243192 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5243192.pdf' },
      { label: 'Financial Ombudsman: DRN-5320802 (Santander Consumer (UK) plc hire purchase/conditional sale agreement)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5320802.pdf' },
      { label: 'Financial Ombudsman: DRN-5762977 (Santander Consumer (UK) plc fixed-sum car loan)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5762977.pdf' },
      { label: 'FCA Register: Santander Consumer (UK) plc (firm reference 444327)', url: 'https://register.fca.org.uk/s/search?q=444327&type=Companies' },
    ],
  },
  {
    slug: 'stellantis-financial-services', name: 'Stellantis Financial Services', type: 'carfinance', aliases: ['Stellantis Financial Services UK Limited', 'Stellantis Financial Services', 'PSA Finance UK Limited', 'PSA Finance', 'Peugeot Financial Services', 'Vauxhall Finance'],
    entity: 'Stellantis Financial Services UK Limited', frn: '660010', companyNo: '01024322', group: 'Stellantis (joint venture with BNP Paribas)',
    products: 'Car finance (personal contract purchase, conditional sale), personal contract hire', status: 'Trading', checked: '2026-11-01',
    about: [
      'Stellantis Financial Services UK Limited provides finance for cars sold through Stellantis brand dealers: Abarth, Alfa Romeo, Citroën, DS Automobiles, FIAT, FIAT Professional, Jeep, Leapmotor, Maserati, Peugeot, SPOTICAR and Vauxhall. Its registered office is 61 London Road, Redhill, Surrey, and it is authorised and regulated by the FCA. It says it was formed in 2023 by bringing together PSA Finance, Vauxhall Finance and FCA Automotive Services, as part of a joint venture with BNP Paribas.',
      'The company was called PSA Finance UK Limited until April 2023. Ombudsman decisions name it trading as Peugeot Financial Services and as Vauxhall Finance. It reported about 305,864 credit-related agreements in the first half of 2026.',
    ],
    note: { title: 'Formerly PSA Finance UK', text: 'PSA Finance UK Limited changed its name to Stellantis Financial Services UK Limited on 3 April 2023. Agreements from Peugeot Financial Services and Vauxhall Finance are now handled under the Stellantis Financial Services name.' },
    complaintsUrl: 'https://www.stellantisfinancialservices.co.uk/support/complaints',
    decisions: [
      { ref: 'DRN-5882108', outcome: 'Upheld', summary: 'Miss C took a conditional sale agreement for a new car in March 2017, with £16,435.32 lent and 48 payments of £251.43. The ombudsman found Stellantis did no income and expenditure assessment, and proportionate checks would probably have shown the repayments were unaffordable against net income of about £890 a month. Stellantis had to refund anything paid above £16,435.32 with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-5882108') },
      { ref: 'DRN-6210552', outcome: 'Not upheld', summary: 'Miss C took a conditional sale agreement for a car in September 2021, with 47 payments of £408.49 and an optional final payment of £13,872. Stellantis could not provide evidence of its checks, but her bank statements showed about £815 a month left after committed costs and the repayments, so the ombudsman did not find the loan unaffordable. No redress was ordered.', url: FOS('DRN-6210552') },
      { ref: 'DRN-6005682', outcome: 'Not upheld', summary: 'Miss W took a conditional sale agreement for a used car from Vauxhall Finance in May 2021, with £18,493.25 lent. The ombudsman said Stellantis ought to have completed more checks, but on the information available it could fairly have decided the lending was affordable and sustainable. No redress was ordered.', url: FOS('DRN-6005682') },
    ],
    faqs: [
      { q: 'I had Fiat, Jeep or Alfa Romeo finance before 2023. Is my lender Stellantis Financial Services?', a: 'Not always. Some agreements for these brands were provided by FCA Automotive Services UK Ltd, now called CA Auto Finance UK Ltd. Check the lender named on your agreement or statements.' },
    ],
    description: 'Did Stellantis Financial Services lend you car finance you couldn’t afford? Peugeot, Citroën, Vauxhall and Fiat finance claims. Free to check.',
    sources: [
      { label: 'Stellantis Financial Services UK: Company disclosure (company number, registered office, FCA regulation)', url: 'https://www.stellantisfinancialservices.co.uk/company-disclosure' },
      { label: 'Stellantis Financial Services UK: About us (2023 formation, BNP Paribas joint venture, brands, products)', url: 'https://stellantisfinancialservices.co.uk/about' },
      { label: 'Stellantis Financial Services UK: Complaints data, 1 Jan to 30 Jun 2026 (credit-related agreements)', url: 'https://www.stellantisfinancialservices.co.uk/complaints-data' },
      { label: 'Stellantis Financial Services UK: Complaints', url: 'https://www.stellantisfinancialservices.co.uk/support/complaints' },
      { label: 'Companies House: STELLANTIS FINANCIAL SERVICES UK LIMITED (01024322) overview (previous names and dates)', url: 'https://find-and-update.company-information.service.gov.uk/company/01024322' },
      { label: 'Companies House: STELLANTIS FINANCIAL SERVICES UK LIMITED persons with significant control (former shareholders)', url: 'https://find-and-update.company-information.service.gov.uk/company/01024322/persons-with-significant-control' },
      { label: 'firmtracer.com: Stellantis Financial Services UK Limited (FRN 660010, FCA register mirror)', url: 'https://firmtracer.com/firm/660010' },
      { label: 'Stellantis: Press release, 4 April 2023 (Banque PSA Finance renamed Stellantis Financial Services)', url: 'https://www.stellantis.com/en/news/press-releases/2023/april/stellantis-strengthens-and-streamline-european-financing-and-leasin-services-with-two-new-simplified-organizations' },
      { label: 'Financial Ombudsman: decision DRN-5882108', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5882108.pdf' },
      { label: 'Financial Ombudsman: decision DRN-6210552 (Stellantis, formerly Vauxhall Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6210552.pdf' },
      { label: 'Financial Ombudsman: decision DRN-6005682 (trading as Vauxhall Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6005682.pdf' },
      { label: 'Financial Ombudsman: decision DRN-6025306 (trading as Peugeot Financial Services)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6025306.pdf' },
      { label: 'Financial Ombudsman: decision DRN-6214095 (CA Auto Finance UK Ltd, then trading as FCA Automotive Services UK Ltd)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6214095.pdf' },
      { label: 'FCA Register: Stellantis Financial Services UK Limited (firm reference 660010)', url: 'https://register.fca.org.uk/s/search?q=660010&type=Companies' },
    ],
  },
  {
    slug: 'toyota-financial-services', name: 'Toyota Financial Services', type: 'carfinance', aliases: ['Toyota Financial Services (UK) PLC', 'Toyota Finance', 'Lexus Financial Services', 'Mazda Financial Services', 'Redline Finance', 'Toyota Motor Finance (UK) PLC'],
    entity: 'Toyota Financial Services (UK) PLC', frn: '310226', companyNo: '02299961', group: 'Toyota Financial Services Corporation (Toyota Motor Corporation)',
    products: 'Car finance (personal contract purchase, hire purchase), personal contract hire', status: 'Trading', checked: '2026-11-01',
    about: [
      'Toyota Financial Services (UK) PLC was established in 1988 and has its registered office at Great Burgh, Burgh Heath, Epsom, Surrey. It was called Toyota Motor Finance (UK) PLC until 2001. It is authorised and regulated by the FCA and trades as Toyota Financial Services, Lexus Financial Services, Redline Finance and Mazda Financial Services. It offers personal contract purchase, hire purchase and contract hire for new and used cars and vans.',
      'It is part of the financial services business coordinated by Toyota Financial Services Corporation, a wholly owned subsidiary of Toyota Motor Corporation.',
    ],
    complaintsUrl: 'https://www.toyota.co.uk/help-centre/complaints-and-feedback#financial-services-complaints',
    decisions: [
      { ref: 'DRN-5621347', outcome: 'Not upheld', summary: 'The estate of Mr M complained about a hire purchase agreement for a car taken in July 2023, with about £21,000 financed over 48 months. The ombudsman found Toyota Financial Services did not verify Mr M’s income, so its checks were not proportionate, but his bank statements showed he could sustainably afford the agreement. No redress was ordered.', url: FOS('DRN-5621347') },
      { ref: 'DRN-5641665', outcome: 'Not upheld', summary: 'Ms D took two car finance agreements, for £14,255.65 in February 2020 and £21,084.04 in April 2021, each over 48 months. Toyota relied on a credit check only, so its checks were not proportionate, but her bank statements showed disposable income of about £550 and £650 a month, so it would probably still have lent. No redress was ordered.', url: FOS('DRN-5641665') },
      { ref: 'DRN-5709528', outcome: 'Not upheld', summary: 'Mr L took a car finance agreement from Lexus Financial Services in June 2021, borrowing £30,323 over 48 months at £399.16 a month. The ombudsman found the checks should have gone further, but his stated income and essential outgoings showed the agreement was affordable. No redress was ordered.', url: FOS('DRN-5709528') },
    ],
    sources: [
      { label: 'Toyota UK: About Toyota Finance (established 1988, ownership, trading names, products)', url: 'https://toyota.co.uk/finance-insurance/about-toyota-finance' },
      { label: 'Toyota UK: Finance help centre (complaints link, products, legal footer)', url: 'https://toyota.co.uk/help-centre/finance' },
      { label: 'Toyota Financial Services: Complaints data, 1 Oct 2025 to 31 Mar 2026 (trading names, registered office)', url: 'https://www.toyota.co.uk/content/dam/toyota/nmsc/united-kingdom/help-centre/finance/tfs-publishable-complaints-data-march-26.pdf' },
      { label: 'Toyota Financial Services: Complaints data, 1 Apr to 30 Sep 2025 (trading names, registered office)', url: 'https://www.toyota.co.uk/content/dam/toyota/nmsc/united-kingdom/help-centre/finance/tfs-publishable-complaints-data.pdf' },
      { label: 'Companies House: TOYOTA FINANCIAL SERVICES (UK) PLC (02299961) overview (previous names)', url: 'https://find-and-update.company-information.service.gov.uk:443/company/02299961' },
      { label: 'firmtracer.com: Toyota Financial Services (UK) PLC (FRN 310226, FCA register mirror)', url: 'https://firmtracer.com/firm/310226' },
      { label: 'Financial Ombudsman: decision DRN-5621347', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5621347.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5641665', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5641665.pdf' },
      { label: 'Financial Ombudsman: decision DRN-5709528 (trading as Lexus Financial Services)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5709528.pdf' },
      { label: 'FCA Register: Toyota Financial Services (UK) PLC (firm reference 310226)', url: 'https://register.fca.org.uk/s/search?q=310226&type=Companies' },
    ],
  },
  {
    slug: 'updraft', name: 'Updraft', type: 'loan', aliases: ['Updraft loans', 'Updraft Credit', 'Fairscore', 'Fairscore Ltd', 'Fairscore Ltd t/a Updraft'],
    entity: 'Fairscore Ltd', frn: '810923', companyNo: '10868865',
    products: 'personal loans (Updraft Credit)', status: 'Trading', checked: '2026-11-01',
    about: [
      'Updraft is the trading name of Fairscore Ltd, a company registered in England and Wales (number 10868865) and incorporated in July 2017. Its registered office is 20-22 Wenlock Road, London N1 7GU, and its app listing gives 5 Merchant Square, London W2 1AY as its address. Fairscore says it is authorised and regulated by the Financial Conduct Authority under reference numbers 810923 and 828910.',
      'Updraft offers loans through its app, which lists a representative APR of 22.9% for Updraft Credit; many of its loans are used to consolidate debts. In December 2022 it raised £108 million in debt and equity, including a round led by NatWest, and had about 300,000 members.',
    ],
    decisions: [
      { ref: 'DRN-6277539', outcome: 'Not upheld', summary: 'Miss B was lent £8,900 under an Updraft fixed-term agreement repayable over 61 months. The ombudsman said "I do not uphold this complaint", finding Updraft’s checks were proportionate and its lending decision fair. No redress was required.', url: FOS('DRN-6277539') },
      { ref: 'DRN-6193554', outcome: 'Partly upheld', summary: 'Mr S was lent £11,700 in July 2024 and £7,400 in May 2025, both over 61 months to consolidate debts. The ombudsman found the first loan was fairly given but upheld the complaint in part for the second. Updraft was told to remove all interest and charges on that loan, refund any overpayment with 8% simple interest and remove adverse information from his credit file once it is repaid.', url: FOS('DRN-6193554') },
      { ref: 'DRN-6132887', outcome: 'Upheld', summary: 'Mr C was lent £8,000 over 60 months in September 2024; Updraft had already upheld his complaint about a later loan from January 2025. The ombudsman upheld the complaint about the September 2024 loan. Updraft was told to remove all interest, fees and charges, refund any credit balance with 8% simple interest and remove adverse information from his credit file.', url: FOS('DRN-6132887') },
    ],
    sources: [
      { label: 'Companies House: FAIRSCORE LTD 10868865 (registered office, incorporation date, nature of business)', url: 'https://pay.company-information.service.gov.uk/company/10868865' },
      { label: 'Apple App Store: Updraft (Fairscore Ltd FCA reference numbers 810923 and 828910, address, representative APR)', url: 'https://apps.apple.com/gb/app/updraft/id1373018727' },
      { label: 'Endole: Updraft brand (operated by Fairscore Ltd)', url: 'https://open.endole.co.uk/insight/brand/337874-updraft' },
      { label: 'IBS Intelligence: London fintech Updraft raises £108m in Series A led by NatWest (funding, members)', url: 'https://ibsintelligence.com/ibsi-news/london-fintech-updraft-raises-108m-in-series-a-led-by-natwest/' },
      { label: 'Financial Ombudsman: DRN-6277539', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6277539.pdf' },
      { label: 'Financial Ombudsman: DRN-6193554', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6193554.pdf' },
      { label: 'Financial Ombudsman: DRN-6132887', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6132887.pdf' },
      { label: 'FCA Register: Fairscore Ltd (firm reference 810923)', url: 'https://register.fca.org.uk/s/search?q=810923&type=Companies' },
    ],
  },
  {
    slug: 'v12-retail-finance', name: 'V12 Retail Finance', type: 'loan', aliases: ['V12 Finance', 'V12', 'V12 Retail Finance Ltd', 'Secure Trust Bank', 'Secure Trust Bank PLC', 'AppToPay'],
    entity: 'Secure Trust Bank PLC', frn: '204550', companyNo: '00541132',
    products: 'retail point-of-sale loans (interest-bearing and interest-free), AppToPay', status: 'Trading', checked: '2026-11-01',
    about: [
      'V12 Retail Finance is the retail finance business of Secure Trust Bank PLC, which provides finance for purchases at around 900 retail partners. V12 Retail Finance Ltd (company 4585692) is a credit broker that introduces customers to Secure Trust Bank, its parent company, which is the lender. Both companies have their registered office at Yorke House, Arleston Way, Solihull B90 4LH. Secure Trust Bank is listed on the London Stock Exchange.',
      'At 31 December 2025, Secure Trust Bank’s Retail Finance loan book stood at £1,466.5 million, after net lending grew 8.0% during the year. Over 475,000 customers had registered for the V12 Retail Finance app. Secure Trust Bank’s AppToPay business operates as part of V12 Retail Finance.',
    ],
    note: { title: 'V12 Vehicle Finance was sold', text: 'Secure Trust Bank sold its separate car finance business, which traded as V12 Vehicle Finance, to funds managed by LCM Partners. The sale completed on 25 February 2026. This page covers V12 Retail Finance, which Secure Trust Bank still runs.' },
    complaintsUrl: 'https://www.v12retailfinance.com/complaints-process',
    decisions: [
      { ref: 'DRN-6292951', outcome: 'Not upheld', summary: 'In June 2025 V12 provided Mr M with an interest-free loan of £5,829.10, repayable over 48 months at £121.44 a month. Because no interest was charged, the ombudsman did not need to decide whether V12’s affordability checks were proportionate: the usual remedy is repaying only what was lent, so Mr M had not lost out. V12 was not asked to do anything further.', url: FOS('DRN-6292951') },
      { ref: 'DRN-5701224', outcome: 'Not upheld', summary: 'Secure Trust Bank, trading as V12 Retail Finance, lent Mrs E £763.91 in April 2019 and £7,549.28 in October 2021. The ombudsman found V12’s checks were not proportionate given her high unsecured debt and missed payments, but the evidence suggested better checks would have shown the repayments were affordable. No redress was required.', url: FOS('DRN-5701224') },
      { ref: 'DRN-5578061', outcome: 'Upheld', summary: 'In 2019 V12 provided Miss H with £1,083.56 of credit. The ombudsman found V12’s own data showed her estimated monthly spending of about £1,915 was more than her declared income of roughly £1,200 to £1,480, and that she had nearly £24,000 of other unsecured debt, yet V12 did not act on this. V12 was told to refund all interest she had paid, with 8% simple interest.', url: FOS('DRN-5578061') },
    ],
    faqs: [
      { q: 'Who lent me the money: V12 or Secure Trust Bank?', a: 'Secure Trust Bank PLC is the lender. V12 Retail Finance Ltd is a credit broker that introduces customers to Secure Trust Bank, its parent company, so a complaint about the lending decision is against Secure Trust Bank, trading as V12 Retail Finance.' },
    ],
    title: 'V12 Retail Finance Refund Claims | CreditRights',
    h1: 'V12 Retail Finance refund claims',
    sources: [
      { label: 'V12 Retail Finance: V12 Retail Finance (broker and lender roles, company numbers, FCA registration numbers, registered office)', url: 'https://www.v12retailfinance.com/v12-retail-finance' },
      { label: 'V12 Retail Finance: Complaints process (complaints route; Secure Trust Bank is the lender)', url: 'https://www.v12retailfinance.com/complaints-process' },
      { label: 'Ticker (RNS): Secure Trust Bank 2025 Annual Results (Retail Finance loan book £1,466.5m, net lending growth 8.0%, c.900 retail partners, 475,000 app registrations, vehicle finance sale completed 25 February 2026)', url: 'https://www.ticker.app/lse/STB/rns/2026-03-12/2025-Annual-Results-and-Investor-Update-Event/3086W' },
      { label: 'Investegate (RNS): Secure Trust Bank, Completion of sale of Consumer Vehicle Finance (buyer: funds managed by LCM Partners)', url: 'https://www.investegate.co.uk/announcement/rns/secure-trust-bank--stb/completion-of-sale-of-consumer-vehicle-finance/9447328' },
      { label: 'Wikipedia: Secure Trust Bank (London Stock Exchange listing, company number, AppToPay part of V12 Retail Finance)', url: 'https://en.wikipedia.org/wiki/Secure_Trust_Bank' },
      { label: 'Financial Ombudsman Service: DRN-6107280 (Secure Trust Bank PLC trading as V12 Vehicle Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6107280.pdf' },
      { label: 'Financial Ombudsman Service: DRN-6292951', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6292951.pdf' },
      { label: 'Financial Ombudsman Service: DRN-5701224', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5701224.pdf' },
      { label: 'Financial Ombudsman Service: DRN-5578061', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5578061.pdf' },
      { label: 'FCA Register: Secure Trust Bank PLC (firm reference 204550)', url: 'https://register.fca.org.uk/s/search?q=204550&type=Companies' },
    ],
  },
  {
    slug: 'volkswagen-financial-services', name: 'Volkswagen Financial Services', type: 'carfinance', aliases: ['Volkswagen Financial Services (UK) Limited', 'VWFS', 'VWFS UK', 'VW Finance', 'Volkswagen Finance', 'Audi Finance', 'Audi Financial Services', 'SEAT Finance', 'Skoda Finance', 'Škoda Financial Services', 'CUPRA Finance'],
    entity: 'Volkswagen Financial Services (UK) Limited', frn: '311988', companyNo: '02835230', group: 'Volkswagen Financial Services (Volkswagen AG)',
    products: 'Hire purchase, personal contract purchase', status: 'Trading', checked: '2026-11-01',
    about: [
      'Volkswagen Financial Services (UK) Limited provides finance for Volkswagen Group vehicles in the UK. Audi Financial Services and Škoda Financial Services are its trading names, and the FCA also lists Audi Finance, SEAT Finance and Skoda Finance. It is registered in England and Wales (company 02835230) with its registered office at Brunswick Court, Yeomans Drive, Blakelands, Milton Keynes MK14 5LR, and is part of the Volkswagen Financial Services division of Volkswagen AG.',
      'The FCA describes it as one of the UK’s largest motor finance providers.',
    ],
    complaintsUrl: 'https://customer.vwfs.co.uk/customer-concern-policy.html',
    decisions: [
      { ref: 'DRN-5527439', outcome: 'Upheld', summary: 'Mr B financed a car in April 2017, borrowing £63,957 with monthly payments of £1,074.36. The ombudsman found VWFS relied mainly on credit data and statistical estimates, and proper checks would have shown he was 65, largely retired, spending more than his income and heavily overdrawn. VWFS was told to refund anything he paid above £63,957 with 8% simple interest and remove adverse credit file entries.', url: FOS('DRN-5527439') },
      { ref: 'DRN-6279502', outcome: 'Not upheld', summary: 'Miss C took out a hire purchase agreement with VWFS, trading as Audi Finance, in September 2016, financing about £17,175. The ombudsman could not be satisfied VWFS’s checks were proportionate, but her bank statements showed she could more likely than not afford the repayments. VWFS did not have to take any further action.', url: FOS('DRN-6279502') },
      { ref: 'DRN-5901802', outcome: 'Not upheld', summary: 'Mrs P took out two hire purchase agreements for new cars, borrowing £24,692 in January 2019 and £44,092 in June 2022. The ombudsman found VWFS’s checks were not sufficient for either, but her bank statements showed both agreements were likely affordable. VWFS did not have to take any action.', url: FOS('DRN-5901802') },
    ],
    faqs: [
      { q: 'Which car brands does Volkswagen Financial Services cover?', a: 'Its customer concern policy names Volkswagen, Audi, SEAT, CUPRA, Škoda, Volkswagen Commercial Vehicles, Porsche, Bentley and Lamborghini. Audi Financial Services and Škoda Financial Services are trading names of Volkswagen Financial Services (UK) Limited, so complaints about that finance go to VWFS.' },
    ],
    description: 'Did VW Financial Services lend you car finance you couldn’t afford? Volkswagen, Audi, SEAT, Škoda and CUPRA finance claims. Free to check.',
    sources: [
      { label: 'Škoda UK: Regulations (Škoda Financial Services trading name, company number, registered office, FRN 311988)', url: 'https://www.skoda.co.uk/discover/regulations' },
      { label: 'Audi UK: Who regulates us (Audi Financial Services trading name, FRN 311988)', url: 'https://www.audi.co.uk/en/audi-world/who-regulates-us/' },
      { label: 'Companies House: Volkswagen Financial Services (UK) Limited 02835230', url: 'https://find-and-update.company-information.service.gov.uk/company/02835230' },
      { label: 'VWFS UK: Customer Concern Policy (complaints page, brands, registered office, FRN)', url: 'https://customer.vwfs.co.uk/customer-concern-policy.html' },
      { label: 'VWFS UK: Media (Volkswagen Financial Services division of Volkswagen AG)', url: 'https://customer.vwfs.co.uk/en/home/media.html' },
      { label: 'FCA: FCA fines Volkswagen Finance £5.4m over treatment of customers in financial difficulty, 21 October 2024 (fine, redress, size)', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-volkswagen-finance-over-treatment-customers-financial-difficulty' },
      { label: 'FCA: Car finance list of lenders (trading names Audi Finance, Seat Finance, Skoda Finance)', url: 'https://www.fca.org.uk/consumers/car-finance-complaints/list-lenders' },
      { label: 'Financial Ombudsman: DRN-5527439 (upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5527439.pdf' },
      { label: 'Financial Ombudsman: DRN-6279502 (not upheld affordability decision, trading as Audi Finance)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6279502.pdf' },
      { label: 'Financial Ombudsman: DRN-5901802 (not upheld affordability decision)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5901802.pdf' },
      { label: 'Financial Ombudsman: DRN-5558198 (personal contract purchase agreements)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-5558198.pdf' },
      { label: 'FCA Register: Volkswagen Financial Services (UK) Limited (firm reference 311988)', url: 'https://register.fca.org.uk/s/search?q=311988&type=Companies' },
    ],
  },
  {
    slug: 'yonder', name: 'Yonder', type: 'card', aliases: ['Yonder credit card', 'Yonder card', 'Yonder Technology Ltd'],
    entity: 'Yonder Technology Ltd', frn: '946219', companyNo: '12739942',
    products: 'credit card', status: 'Trading', checked: '2026-11-01',
    about: [
      'Yonder is a rewards credit card aimed at millennial and Gen Z customers. It was founded in 2021 and launched in spring 2022. The card is provided by Yonder Technology Ltd, registered in England and Wales, with its registered office at Shoreditch Exchange, Senna Building, Gorsuch Place, London E2 8JF. Cardholders choose a Free or a Full membership, and Full costs £15 a month or £160 a year.',
      'Yonder raised £12.5 million in equity and £50 million in debt funding in April 2023, in a round co-led by Northzone and RTP Global. In September 2024 it raised a further £23.4 million, led by Dan Jones of Repeat, at a valuation above £100 million. Yonder says it uses Open Banking and transaction data, not just traditional credit checks, to assess applicants.',
    ],
    decisions: [
    ],
    sources: [
      { label: 'Yonder: Account terms and conditions (company number, registered office, FCA firm reference 946219)', url: 'https://www.yonder.com/docs/account-terms' },
      { label: 'Yonder: Yonder (Yonder Technology Ltd) Credit Card agreement v2.8 (creditor, FCA registration 946219, membership fees, complaints route)', url: 'https://www.yonder.com/docs/credit-agreement-2-8' },
      { label: 'FinTech Futures: Credit card start-up Yonder bags £62.5m in equity and debt funding (Series A, investors, founded 2021, Open Banking assessment)', url: 'https://fintechfutures.com/?p=15270496' },
      { label: 'IBS Intelligence: Rewards credit card Yonder secures £23.4m in new funding (September 2024 round, April 2023 Series A, spring 2022 launch)', url: 'https://ibsintelligence.com/ibsi-news/rewards-credit-card-yonder-secures-23-4m-in-new-funding' },
      { label: 'City AM: Revolut investor backs Gen Z credit card fintech Yonder (£23.4m round, valuation above £100m, target customers)', url: 'https://cityam.com/?p=2262144' },
      { label: 'FCA Register: Yonder Technology Ltd (firm reference 946219)', url: 'https://register.fca.org.uk/s/search?q=946219&type=Companies' },
    ],
  },
  {
    slug: 'zilch', name: 'Zilch', type: 'bnpl', aliases: ['Zilch Technology Limited', 'Zilch card', 'Zilch Pay Later', 'Zilch pay over 6 weeks', 'Zilch pay over 3 months', 'payzilch'],
    entity: 'Zilch Technology Limited', frn: '843421', companyNo: '11488502',
    products: 'Pay later instalment plans, revolving credit account', status: 'Trading', checked: '2026-11-01',
    about: [
      'Zilch is a London payments and buy now pay later company. Its credit is provided by Zilch Technology Limited, registered office 111 Buckingham Palace Road, London SW1W 0SR, which has been regulated by the FCA since April 2020 after obtaining its consumer credit permission through the FCA’s Regulatory Sandbox.',
      'In the year to 31 March 2024 Zilch reported 4 million registered customers, revenue of £57.1 million and consumer loan balances of £60.4 million.',
    ],
    note: { title: 'What was regulated before July 2026', text: 'Before 15 July 2026 Zilch’s six-week instalment plan was short-term unregulated credit, while its Pay over 3 months product (from April 2024) was offered as regulated credit under Zilch’s FCA consumer credit permission. The FCA began regulating buy now pay later (deferred payment credit) on 15 July 2026; agreements of that kind taken out before that date remain unregulated.' },
    decisions: [
      { ref: 'DRN-5957706', outcome: 'Upheld', summary: 'A Zilch account opened in February 2022 with an £800 limit, raised to £1,000 in July 2023. Zilch could not show what checks it did, and the customer’s credit file showed substantial debt, exceeded limits, cash advances, payment arrangements and arrears before the application, so the account should not have been opened. Zilch was told to remove all interest, fees and charges, refund any overpayment with 8% simple interest, and remove adverse credit file information or set up an affordable payment plan.', url: FOS('DRN-5957706') },
      { ref: 'DRN-6157503', outcome: 'Not upheld', summary: 'A revolving credit account provided in September 2024 with a £1,200 limit. Zilch could not evidence its checks, but the ombudsman found proportionate checks would probably have shown the repayments were sustainable, and Zilch could not reasonably have known about the customer’s gambling. No redress was required.', url: FOS('DRN-6157503') },
      { ref: 'DRN-5450020', outcome: 'Not upheld', summary: 'A revolving credit account opened in March 2024 with a £460 limit. The ombudsman found the checks proportionate for the low repayments and said payday loans alone do not rule out lending; Zilch also accepted £10 monthly payments when the customer reported difficulty. No redress was required.', url: FOS('DRN-5450020') },
    ],
    sources: [
      { label: 'Zilch: terms of use (Zilch Technology Limited, company number, registered office, FRN 843421)', url: 'https://www.zilch.com/uk/?p=143' },
      { label: 'firmtracer: Zilch Technology Limited (FCA register mirror; FRN 843421, company 11488502)', url: 'https://firmtracer.com/firm/843421' },
      { label: 'Companies House: Zilch Technology Limited (11488502)', url: 'https://find-and-update.company-information.service.gov.uk/company/11488502' },
      { label: 'Zilch: launches Pay over 3 months regulated product (Feb 2024; FCA regulated since April 2020)', url: 'https://www.zilch.com/?p=15146' },
      { label: 'Zilch: annual report and financial statements FY 2024 (4 million customers, revenue, loan balances)', url: 'https://www.zilch.com/pdf/financial-statements/zilch-technology-limited-annual-report-and-financial-statements-FY-2024.pdf' },
      { label: 'Financial Ombudsman: DRN-6148809 (six-week Zilch plan described as short-term unregulated credit)', url: 'https://www.financial-ombudsman.org.uk/decision/DRN-6148809.pdf' },
      { label: 'FCA: buy now pay later (regulation from 15 July 2026; earlier agreements remain unregulated)', url: 'https://www.fca.org.uk/consumers/buy-now-pay-later' },
      { label: 'FCA Register: Zilch Technology Limited (firm reference 843421)', url: 'https://register.fca.org.uk/s/search?q=843421&type=Companies' },
    ],
  },
];

export const lenderBySlug = (slug: string) => LENDER_INFO.find((l) => l.slug === slug);
