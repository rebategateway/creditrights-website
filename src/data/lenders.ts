// Lender facts for /banks-and-lenders/<slug>/.
// Every fact here comes from a source listed against the lender (researched
// 4 October 2026). Check the source before changing a fact. Rates change:
// re-check them when you update `updated`.

export type LenderType = 'overdraft' | 'loan' | 'card' | 'catalogue';

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
}

const FOS = (ref: string) => `https://www.financial-ombudsman.org.uk/decision/${ref}.pdf`;

export const UPDATED = '2026-10-04';

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
      { ref: 'DRN-4501274', outcome: 'Upheld', summary: 'The bank should not have raised the overdraft limit to £5,000 in September 2017, and should have stepped in by September 2018. It was told to remove interest and charges.', url: FOS('DRN-4501274') },
      { ref: 'DRN-5835365', outcome: 'Upheld', summary: 'A graduate overdraft: the bank failed to act on signs of financial difficulty once interest started being charged in March 2023.', url: FOS('DRN-5835365') },
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
    note: { title: 'Halifax is becoming Lloyds', text: 'From 1 July 2026 the Halifax brand began moving to Lloyds, with branches changing through 2027. Account numbers and sort codes stay the same, and you can still complain about a past Halifax overdraft.' },
    complaintsUrl: 'https://www.halifax.co.uk/contactus/how-to-complain.html',
    decisions: [
      { ref: 'DRN-4121799', outcome: 'Upheld', summary: 'The bank should not have raised the limit from £750 to £1,050 in March 2017, when the customer was already struggling.', url: FOS('DRN-4121799') },
      { ref: 'DRN-5481063', outcome: 'Upheld', summary: 'After the customer told the bank they were in difficulty and relying on the overdraft, it should have stopped offering it on normal terms from February 2023.', url: FOS('DRN-5481063') },
      { ref: 'DRN-5369231', outcome: 'Partly upheld', summary: 'A limit increase to £5,000 in May 2018 was made without reasonable checks while the customer was persistently overdrawn. Interest and charges from that date were refunded.', url: FOS('DRN-5369231') },
    ],
    sources: [
      { label: 'Lloyds Banking Group: Halifax to rebrand to Lloyds', url: 'https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/halifax-rebrand-to-lloyds.html' },
      { label: 'Lloyds Bank: Halifax brand change', url: 'https://www.lloydsbank.com/halifax-brand-change.html' },
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
      { ref: 'DRN-5574900', outcome: 'Upheld', summary: 'The bank failed to monitor for financial difficulty after raising the limit to £4,500. It was told to refund interest and charges on balances above £2,500 from July 2018.', url: FOS('DRN-5574900') },
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
      { ref: 'DRN-4528375', outcome: 'Partly upheld', summary: 'Santander should have reviewed the account before raising the limit to £2,000 in February 2022. A review would have shown hardcore borrowing. Charges from that date were to be refunded.', url: FOS('DRN-4528375') },
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
    entity: 'TSB Bank plc', frn: '191240', companyNo: 'SC095237', group: 'Santander UK (since April 2026)',
    products: 'Current accounts, overdrafts, credit cards, loans', status: 'Trading',
    about: [
      'TSB Bank plc is a UK high street bank. Its arranged overdraft is 39.90% EAR variable on the Spend & Save account (checked October 2026).',
      'In October 2024 the FCA fined TSB £10.9 million over how it treated customers in financial difficulty between 2014 and 2020, including overdraft customers. TSB paid £99.9 million in redress to 232,849 customers.',
    ],
    note: { title: 'TSB is now owned by Santander', text: 'Santander UK completed its purchase of TSB on 30 April 2026. Santander plans to move TSB’s business into Santander UK in the first half of 2027, subject to court approval. For now, complaints still go to TSB.' },
    complaintsUrl: 'https://www.tsb.co.uk/help-and-support/complaints.html',
    decisions: [
      { ref: 'DRN-3650803', outcome: 'Upheld', summary: 'Repeated requests to raise the limit within 24 hours should have prompted proper checks. TSB was told to write off the balance.', url: FOS('DRN-3650803') },
      { ref: 'DRN-3707034', outcome: 'Not upheld', summary: 'A November 2020 increase was irresponsible, but TSB had already refunded the customer, so its offer was found fair.', url: FOS('DRN-3707034') },
    ],
    sources: [
      { label: 'FCA: FCA fines TSB over treatment of customers in financial difficulty', url: 'https://www.fca.org.uk/news/press-releases/fca-fines-tsb-over-treatment-customers-financial-difficulty' },
      { label: 'Santander UK: completes acquisition of TSB', url: 'https://www.santander.co.uk/about-santander/media-centre/press-releases/santander-uk-completes-cash-acquisition-of-tsb-banking/' },
      { label: 'TSB: overdrafts', url: 'https://www.tsb.co.uk/current-accounts/overdrafts/' },
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
    slug: 'lending-stream', name: 'Lending Stream', type: 'loan',
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
    slug: 'quidmarket', name: 'QuidMarket', type: 'loan', aliases: ['Quid Market', 'Stagemount'],
    entity: 'Propel Holdings (UK) Limited (formerly Stagemount Limited)', frn: '677995', companyNo: '07259223', group: 'Propel Holdings Inc. (since November 2024)',
    products: 'Short-term loans over 3 to 6 months', status: 'Trading',
    about: [
      'QuidMarket is a high-cost short-term lender. New customers can borrow £300 to £1,000, and returning customers up to £1,500, repaid over 3 to 6 months.',
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
    slug: 'cash-asap', name: 'Cash ASAP', type: 'loan', aliases: ['cashasap', 'APFIN'],
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
    slug: 'my-finance-club', name: 'My Finance Club', type: 'loan', aliases: ['Ondal', 'MyFinanceClub'],
    entity: 'My Finance Club Limited', frn: '674521', companyNo: '07301026',
    products: 'Short-term loans', status: 'Trading',
    about: [
      'My Finance Club is a Sheffield-based short-term lender, which also trades as Ondal.',
    ],
    decisions: [
      { ref: 'DRN-6205948', outcome: 'Not upheld', summary: 'A £400 Ondal loan from July 2025 was found affordable.', url: FOS('DRN-6205948') },
      { ref: 'DRN-4199122', outcome: 'Not upheld', summary: 'The lending complaint was not upheld, but the lender was told to pay £250 for handling the complaint poorly.', url: FOS('DRN-4199122') },
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
    slug: 'drafty', name: 'Drafty', type: 'loan',
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
    entity: 'NewDay Ltd', frn: '690292', companyNo: '07297722', group: 'NewDay',
    products: 'Credit cards', status: 'Trading',
    about: [
      'Aqua is a credit card brand of NewDay Ltd, which also runs Marbles and Fluid. These cards are often aimed at people building or rebuilding their credit, which makes limit increases a key part of many complaints.',
    ],
    complaintsUrl: 'https://www.newday.co.uk/contact-us/',
    decisions: [
      { ref: 'DRN-5127011', outcome: 'Partly upheld', summary: 'Aqua, Marbles and AO cards: interest removed on Aqua balances above £1,700 from June 2021, and all interest and charges removed on the other two accounts.', url: FOS('DRN-5127011') },
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
      { ref: 'DRN-5127011', outcome: 'Partly upheld', summary: 'All interest and charges were removed on a Marbles account because of irresponsible lending and limit increases.', url: FOS('DRN-5127011') },
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
    note: { title: 'Not part of the Provident scheme', text: 'The 2021 Provident scheme of arrangement covered Provident, Satsuma, Glo and Greenwood. It did not include Vanquis, so Vanquis card complaints still follow the normal route.' },
    complaintsUrl: 'https://www.vanquis.com/complaints/',
    decisions: [
      { ref: 'DRN-5441665', outcome: 'Not upheld', summary: 'Checks weren’t always proportionate, but bank statements showed the borrower could afford the limits.', url: FOS('DRN-5441665') },
      { ref: 'DRN-6016090', outcome: 'Not upheld', summary: 'The ombudsman found the limits affordable on the facts of this case.', url: FOS('DRN-6016090') },
    ],
    sources: [
      { label: 'Vanquis: complaints', url: 'https://www.vanquis.com/complaints/' },
      { label: 'Vanquis: raise a responsible lending claim', url: 'https://www.vanquis.com/complaints/raise-responsible-lending-claim/' },
      { label: 'Financial Ombudsman: information for Provident customers', url: 'https://www.financial-ombudsman.org.uk/news/information-for-provident-customers' },
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
      { ref: 'DRN-5802491', outcome: 'Partly upheld', summary: 'A July 2015 increase to £1,750 was unfair. Interest on balances above £1,000 was removed.', url: FOS('DRN-5802491') },
    ],
    sources: [
      { label: 'Capital One: making your complaint', url: 'https://www.capitalone.co.uk/support/making-your-complaint' },
      { label: 'Companies House: Capital One (Europe) plc', url: 'https://find-and-update.company-information.service.gov.uk/company/03879023' },
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
      { ref: 'DRN-6011343', outcome: 'Partly upheld', summary: 'The opening limit and first increases were fair, but increases from March 2021 were irresponsible.', url: FOS('DRN-6011343') },
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
      { ref: 'DRN-6011343', outcome: 'Partly upheld', summary: 'Very and Littlewoods accounts: limit increases from March 2021 were irresponsible.', url: FOS('DRN-6011343') },
      { ref: 'DRN-5581255', outcome: 'Not upheld', summary: 'Very and Littlewoods accounts: not upheld, and one account was outside the time limits.', url: FOS('DRN-5581255') },
    ],
    sources: [
      { label: 'Littlewoods: homepage (credit provider details)', url: 'https://www.littlewoods.com/' },
      { label: 'Littlewoods: persistent debt', url: 'https://www.littlewoods.com/persistentdebt.page' },
    ],
  },
];

export const lenderBySlug = (slug: string) => LENDER_INFO.find((l) => l.slug === slug);
