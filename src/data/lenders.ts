// Lender facts for /banks-and-lenders/<slug>/.
// Every fact here comes from a source listed against the lender (researched
// 4 October 2026). Check the source before changing a fact. Rates change:
// re-check them when you update `updated`.

export type LenderType = 'overdraft' | 'card' | 'payday' | 'loan' | 'catalogue' | 'guarantor' | 'doorstep' | 'logbook' | 'carfinance';

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
export const TEMPLATE_CHANGED = '2026-10-16';

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
    slug: 'natwest', name: 'NatWest', type: 'overdraft', featured: true,
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
    sources: [
      { label: 'NatWest: overdrafts', url: 'https://www.natwest.com/current-accounts/overdrafts.html' },
      { label: 'NatWest: website terms (company details)', url: 'https://www.natwest.com/website-terms-and-conditions.html' },
      { label: 'NatWest Group: legal entity structure', url: 'https://investors.natwestgroup.com/fixed-income-investors/high-level-legal-entity-structure.aspx' },
    ],
  },
  {
    slug: 'hsbc', name: 'HSBC', type: 'overdraft', featured: true, aliases: ['HSBC UK'],
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
    sources: [
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
    description: 'Borrowed from Likely Loans or Finio Loans when you couldn’t afford it? You could claim back the interest and charges. Free to check in a minute.',
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
    slug: 'capital-one', name: 'Capital One', type: 'card', aliases: ['Capital One UK'],
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
    sources: [
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
    slug: 'virgin-money', name: 'Virgin Money', type: 'card', aliases: ['Virgin Money credit card'],
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
    sources: [
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
    slug: 'tesco-bank', name: 'Tesco Bank', type: 'card', aliases: ['Tesco Bank credit card', 'Tesco Clubcard credit card', 'Tesco Personal Finance'],
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
    slug: 'freemans', name: 'Freemans', type: 'catalogue', aliases: ['Kaleidoscope', 'Curvissa'],
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
];

export const lenderBySlug = (slug: string) => LENDER_INFO.find((l) => l.slug === slug);
