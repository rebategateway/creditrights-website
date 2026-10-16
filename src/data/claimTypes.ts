// Claim-type guide pages, /claim-types/<slug>/. One shared template
// (src/pages/claim-types/[slug].astro); the words on each page are written
// for that product alone. Every rule, date and decision here has a source in
// the page's `sources` list: check it before changing a fact.
import type { Decision } from './lenders';
import { AVERAGES } from './averages';

const FOS = (ref: string) => `https://www.financial-ombudsman.org.uk/decision/${ref}.pdf`;

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

export const CLAIM_TYPES: ClaimType[] = [
  {
    slug: 'overdrafts',
    title: 'Overdraft refund claims: get back interest and charges | CreditRights',
    description: 'In your overdraft month after month? Banks must spot repeat use and step in. How overdraft claims work, what you could get back and how to check.',
    h1: 'Overdraft refund claims',
    answer: 'If you were in your overdraft most of every month, or your bank raised your limit while you were struggling, you could get back the interest and charges. Banks have had to spot repeat overdraft use and offer help since December 2019.',
    borrow: 'overdraft',
    facts: [
      { label: 'Repeat-use rules since', value: 'December 2019' },
      { label: 'Average overdraft claim', value: AVERAGES.overdraft, avg: true },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'Your bank, then the Financial Ombudsman' },
    ],
    intro: [
      'An overdraft is credit, so your bank has to lend responsibly. It should check a limit is affordable before agreeing it or raising it, and keep an eye on how you use it afterwards.',
      'Most overdraft claims aren’t about the day the overdraft was set up. They’re about what happened next: a limit raised while you were already struggling, or months of being overdrawn without the bank getting in touch.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'When the FCA took over consumer credit, its rules required banks to assess whether you can afford credit before agreeing it or significantly raising a limit, based on your circumstances, not just your credit score.' },
      { when: 'Nov 2018', text: 'More detailed rules on those checks: lenders must look at your income and essential outgoings, and whether you can repay without borrowing more or falling behind on bills.' },
      { when: 'Dec 2019', text: 'Banks must monitor how each customer uses their overdraft and spot repeat use early. The FCA says being overdrawn every month for 12 months is likely to count. Those showing signs of financial difficulty must be contacted and offered help.' },
      { when: 'Apr 2020', text: 'Fixed daily and monthly overdraft fees were banned, unarranged overdrafts can cost no more than arranged ones, and overdrafts carry a single annual interest rate.' },
    ],
    signs: [
      { title: 'You were overdrawn most of every month', text: 'If your balance only went back above zero for a day or two when your wages arrived, the bank could see you were relying on it.' },
      { title: 'Your limit went up while you were maxed out', text: 'Each increase was a fresh lending decision. Raising a limit for someone already at the top of their overdraft is a common reason complaints are upheld.' },
      { title: 'Charges kept coming and nobody got in touch', text: 'Since December 2019 banks have had to watch for repeat overdraft use and step in if you showed signs of financial strain. More days overdrawn, a growing balance and refused payments are all signs the FCA lists.' },
      { title: 'You were using it for everyday bills', text: 'Rent, food and bills paid from the overdraft, month after month, suggest it had stopped being a short-term buffer.' },
      { title: 'Other signs were on your statements', text: 'Payday loans, gambling, returned direct debits or other lenders’ payments on your account are all things the bank could see.' },
    ],
    putRight: {
      title: 'Your overdraft, put right',
      rows: [['Overdraft interest', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
      paras: [
        'If a complaint is upheld, the bank usually refunds the interest and charges from the date it should have stepped in or should not have raised the limit. Interest is added to money you get back.',
        'If you’re still overdrawn, the refund normally reduces your balance first. The bank may also reduce or remove the overdraft and agree an affordable way to repay what’s left.',
      ],
    },
    decisions: [
      { business: 'Barclays', ref: 'DRN-4501274', outcome: 'Upheld', summary: 'The bank should not have raised the limit to £5,000 in September 2017, and should have stepped in by September 2018. It was told to refund interest and charges on the balance above £4,200 from September 2017, and all of them from September 2018.', url: FOS('DRN-4501274') },
      { business: 'HSBC', ref: 'DRN-4699072', outcome: 'Upheld', summary: 'HSBC missed “hardcore borrowing” from July 2022 and raised the limit instead of offering help. It was told to refund interest and charges from July 2022.', url: FOS('DRN-4699072') },
      { business: 'Lloyds', ref: 'DRN-5635101', outcome: 'Not upheld', summary: 'Regular use of the overdraft on its own did not show the customer was in financial difficulty.', url: FOS('DRN-5635101') },
    ],
    lendersHeading: 'Banks we cover',
    faqs: [
      { q: 'Can I claim if I’m still overdrawn?', a: 'Yes. If the complaint is upheld, the refund may reduce your balance rather than being paid to you in cash.' },
      { q: 'Will my bank take my overdraft away?', a: 'It can. If a complaint is upheld, the bank may reduce or remove the overdraft and agree an affordable way to repay what’s left.' },
      { q: 'Does using my overdraft every month mean I can claim?', a: 'Not on its own. The ombudsman looks at whether the bank should have realised the borrowing had become a problem, for example because you never got out of it or other debts were building.' },
      { q: 'Can I claim for an account I’ve closed?', a: 'Yes. Closed accounts can still be looked at, subject to the time limits.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to your bank directly and for free. Explain that you relied on the overdraft, when it started, and that you want the interest and charges reviewed. Each bank’s page on this site links to its complaints page.',
      'The bank has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA Handbook CONC 5D.2: monitoring repeat overdraft use', url: 'https://handbook.fca.org.uk/handbook/conc5d/conc5ds2' },
      { label: 'FCA: overdraft rule changes (April 2020)', url: 'https://fca.org.uk/news/press-releases/millions-customers-together-save-nearly-1billion-due-overdraft-rule-changes' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'credit-cards',
    title: 'Credit card refund claims: unaffordable limits | CreditRights',
    description: 'Card limit raised while you were struggling? Each increase had to be affordable. How credit and store card claims work, what you get back and how to check.',
    h1: 'Credit and store card refund claims',
    answer: 'If a card provider gave you a card, or kept raising your limit, when you couldn’t afford it, you could get back the interest and charges on that lending. Each limit increase was a separate decision that should have been checked.',
    borrow: 'card',
    facts: [
      { label: 'Persistent debt rules since', value: 'March 2018' },
      { label: 'Average credit card claim', value: AVERAGES.creditCard, avg: true },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The card provider, then the Financial Ombudsman' },
    ],
    intro: [
      'A credit card is a running account: you can keep borrowing up to the limit. That makes the limit the thing that matters. The provider had to check the opening limit was affordable, and check again before any significant increase.',
      'Many card claims are about limits that climbed while the balance never came down. A card that started at £500 and reached several thousand pounds, while only minimum payments were being made, is a common pattern in upheld complaints.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, card providers must assess whether you can afford the credit before opening an account or significantly raising the limit.' },
      { when: 'Mar 2018', text: 'Persistent debt rules: after 18 months of paying more in interest and charges than off the balance, the provider must contact you. About nine months later it must remind you. At 36 months it must offer a way to repay over a reasonable time, usually three to four years, and if you can’t, it must show forbearance, which can mean reducing or cancelling interest and charges.' },
      { when: 'Nov 2018', text: 'More detailed rules on affordability checks, including looking at income and essential outgoings, not just credit history.' },
    ],
    signs: [
      { title: 'Your limit went up while you were only paying the minimum', text: 'Minimum payments month after month, then an increase, is one of the clearest signs the provider should have looked harder.' },
      { title: 'You maxed out the card soon after getting it', text: 'Using the whole limit straight away can show you needed the money to get by, not that you could afford to borrow it.' },
      { title: 'You used it for bills, essentials or cash', text: 'Cash withdrawals and essential spending on a card are often signs of financial difficulty.' },
      { title: 'You had other debts building up', text: 'Other cards, loans or missed payments on your credit file were visible to the provider when it decided your limit.' },
      { title: 'You were stuck in persistent debt', text: 'If you paid more in interest and charges than off the balance for 18 months, the provider had to contact you. Limit increases offered while you were in persistent debt are worth looking at.' },
    ],
    putRight: {
      title: 'Your card account, put right',
      rows: [['Interest on unaffordable lending', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
      paras: [
        'If a complaint is upheld, the provider usually removes interest and charges on the part of the balance that shouldn’t have been lent, from the date of the unfair decision. For example, if an increase from £1,000 to £2,000 was unfair, interest on the balance above £1,000 comes off from that date.',
        'If you still owe money, the refund reduces your balance first, and anything left over is paid to you with interest added.',
      ],
    },
    decisions: [
      { business: 'Capital One', ref: 'DRN-5856779', outcome: 'Upheld', summary: 'A £500 limit and an increase to £1,250 were irresponsible because existing debts of around £24,000 weren’t properly taken into account.', url: FOS('DRN-5856779') },
      { business: 'Capital One', ref: 'DRN-5802491', outcome: 'Partly upheld', summary: 'Increases from July 2015 (to £1,750, then £2,000) were unfair. Interest and charges on balances between £1,000 and £2,000 were removed from July 2015.', url: FOS('DRN-5802491') },
      { business: 'Vanquis', ref: 'DRN-5441665', outcome: 'Not upheld', summary: 'Checks weren’t always proportionate, but bank statements showed the borrower could afford the limits.', url: FOS('DRN-5441665') },
    ],
    lendersHeading: 'Card providers we cover',
    faqs: [
      { q: 'Can I claim for limit increases?', a: 'Yes. Each increase was a separate lending decision, so the provider should have checked it was affordable each time.' },
      { q: 'Can I claim for a store card?', a: 'Yes. Store cards are credit cards for one retailer, and the same lending rules apply.' },
      { q: 'What does persistent debt mean?', a: 'Paying more in interest, fees and charges than off what you borrowed over 18 months. Since 2018 card providers have had to contact people in that position, and at 36 months offer a way to clear the balance.' },
      { q: 'I only ever paid the minimum. Does that help?', a: 'It can. Long periods of minimum payments, especially before a limit increase, are something the ombudsman looks at.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the card provider directly and for free. Say which account, when the limit increases happened, and that you want them reviewed for affordability.',
      'The provider has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA Handbook CONC TP 7A: when the persistent debt rules started', url: 'https://handbook.fca.org.uk/handbook/conctp7a' },
      { label: 'FCA Handbook CONC 6.7: persistent debt rules', url: 'https://handbook.fca.org.uk/handbook/conc6/conc6s7' },
      { label: 'FCA: new credit card rules introduced', url: 'https://www.fca.org.uk/news/press-releases/new-credit-card-rules-introduced-fca/printable/print' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'payday-loans',
    title: 'Payday loan refund claims for repeat borrowing | CreditRights',
    description: 'Took one payday loan after another? Lenders should have spotted the pattern. How payday and short-term loan claims work, what you get back and how to check.',
    h1: 'Payday and short-term loan refund claims',
    answer: 'If a payday or short-term lender kept lending to you when you couldn’t afford it, or when you were clearly relying on its loans, you could get back the interest and charges. Each loan is looked at separately.',
    borrow: 'loan',
    facts: [
      { label: 'Price cap since', value: 'January 2015' },
      { label: 'Interest cap', value: '0.8% a day' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The lender, then the Financial Ombudsman' },
    ],
    intro: [
      'Payday and short-term loans are high-cost credit: small amounts over days or months, at high interest. Because they’re expensive, the lender had to be sure you could repay without borrowing again or falling behind on bills.',
      'Most claims are about the pattern rather than one loan. Borrowing again soon after repaying, having loans running at the same time, or each loan being bigger than the last can all show the lending had stopped being sustainable. A lender can be wrong to keep lending even if each repayment looked small.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, lenders must check you can afford each loan, and a loan can’t be rolled over more than twice. Lenders shouldn’t let you take loan after loan if the combined effect is unsustainable.' },
      { when: 'Jan 2015', text: 'Price cap: interest and fees capped at 0.8% a day, a £15 cap on default fees, and you never repay more than double what you borrowed.' },
      { when: 'Nov 2018', text: 'More detailed rules on affordability checks, including income and essential outgoings.' },
    ],
    signs: [
      { title: 'You borrowed again soon after repaying', text: 'A new loan within days of clearing the last one suggests you needed to borrow to get through the month.' },
      { title: 'You had several loans running at once', text: 'Overlapping loans from the same lender, or from several, are a strong sign of financial difficulty.' },
      { title: 'Each loan was bigger than the last', text: 'Rising amounts over time can show growing reliance on credit rather than a one-off need.' },
      { title: 'You borrowed over a long period', text: 'Months or years of short-term borrowing is something the ombudsman treats as potentially harmful in itself.' },
      { title: 'You had defaults or missed payments', text: 'Problems on your credit file when you applied were visible to the lender.' },
    ],
    putRight: {
      title: 'Your loans, put right',
      rows: [['Interest and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Balance owed', 'Reduced', true], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'For each loan found unaffordable, you usually only repay what you borrowed. Interest and charges you paid above that come back to you, with interest added.',
        'Where the pattern of lending was the problem, negative information about those loans is usually removed from your credit file. If you still owe money, refunds reduce the balance first.',
      ],
    },
    decisions: [
      { business: 'QuidMarket', ref: 'DRN-5527945', outcome: 'Partly upheld', summary: 'Four of six loans were irresponsible because of existing debt and signs of financial difficulty.', url: FOS('DRN-5527945') },
      { business: 'Lending Stream', ref: 'DRN-4305287', outcome: 'Partly upheld', summary: 'The third of three loans was irresponsible: the borrower had several loans running, defaults on file and was likely dependent on this type of credit.', url: FOS('DRN-4305287') },
      { business: 'Cash ASAP', ref: 'DRN-4511493', outcome: 'Not upheld', summary: 'A £250 loan was found affordable.', url: FOS('DRN-4511493') },
    ],
    lendersHeading: 'Payday and short-term lenders we cover',
    faqs: [
      { q: 'Can I claim if I paid every loan back on time?', a: 'Yes. Repaying on time doesn’t mean the loans were affordable: many people repay by borrowing again or by falling behind on other bills.' },
      { q: 'What if the lender has gone bust?', a: 'You can’t usually get a refund from a lender that has collapsed, unless it set up a redress scheme. Several big payday lenders have closed. Our lender pages only cover lenders that are still trading.' },
      { q: 'Does it matter that each loan was small?', a: 'Not necessarily. The ombudsman looks at the whole pattern, and a long run of small loans can still be unaffordable.' },
      { q: 'What if my loan was sold to a debt collector?', a: 'You still complain to the lender that made the decision to lend.' },
      { q: 'How far back can I claim?', a: 'Usually six years from each loan, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the lender directly and for free. List the loans you took, if you can, and say you want them reviewed for affordability. Our lender pages link to each lender’s complaints page.',
      'The lender has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA: price cap rules for payday lenders confirmed', url: 'https://www.fca.org.uk/news/press-releases/fca-confirms-price-cap-rules-payday-lenders' },
      { label: 'Financial Ombudsman: payday loans', url: 'https://www.financial-ombudsman.org.uk/payday-loans' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'personal-loans',
    title: 'Personal loan refund claims: unaffordable loans | CreditRights',
    description: 'Struggled to keep up with a personal loan? The lender had to check you could afford it. How personal loan claims work, what you get back and how to check.',
    h1: 'Personal loan refund claims',
    answer: 'If a lender gave you a personal loan when the repayments weren’t affordable, or kept topping it up while you were struggling, you could get back the interest and charges. This covers high-cost instalment loans as well as bank loans.',
    borrow: 'loan',
    facts: [
      { label: 'Affordability rules since', value: '2014' },
      { label: 'Average personal loan claim', value: AVERAGES.personalLoan, avg: true },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The lender, then the Financial Ombudsman' },
    ],
    intro: [
      'A personal loan is a fixed amount repaid in instalments, usually over one to five years. The lender had to check the repayments were affordable for the whole term, not just the first month.',
      'Claims are most common with higher-cost lenders, where interest can be several times the amount borrowed, and with loans taken to pay off other debts. Consolidation loans often leave people worse off if the old debts aren’t closed.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, lenders must check you can afford a loan before agreeing it. The more you borrow and the longer the term, the more thorough the checks should be.' },
      { when: 'Nov 2018', text: 'More detailed rules: lenders must look at your income and essential outgoings, and whether you can repay without borrowing more or falling behind on bills.' },
      { when: 'Ombudsman', text: 'You had to be able to repay without undue difficulty, while meeting your other commitments and without borrowing more. A loan can be unaffordable even if you never missed a payment.' },
    ],
    signs: [
      { title: 'The repayments took a big share of your income', text: 'In upheld Bamboo Loans and Lendable decisions, the new loan would have taken debt repayments to around 40% of income.' },
      { title: 'You borrowed to pay off other debts', text: 'A consolidation loan only helps if the old debts are cleared. If they weren’t, the lender should have checked.' },
      { title: 'You already had defaults or missed payments', text: 'Problems on your credit file when you applied were visible to the lender.' },
      { title: 'You went back for a top-up or a new loan', text: 'Refinancing before the first loan was paid off can show the borrowing was becoming a cycle.' },
      { title: 'Your bank statements showed warning signs', text: 'Gambling, payday loans or returned payments were there to be seen if the lender looked.' },
    ],
    putRight: {
      title: 'Your loan, put right',
      rows: [['Interest and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Balance owed', 'Reduced', true], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'If a loan is found unaffordable, you usually only repay what you borrowed. Anything you paid above that comes back to you, with interest added.',
        'If you still owe money, the refund comes off the balance first, and the lender should agree an affordable way to repay the rest.',
      ],
    },
    decisions: [
      { business: 'Bamboo Loans', ref: 'DRN-4074489', outcome: 'Upheld', summary: 'The loan would have taken debt repayments to nearly 40% of income, and the borrower already had a County Court Judgment and was using an overdraft.', url: FOS('DRN-4074489') },
      { business: 'Lendable', ref: 'DRN-3818582', outcome: 'Upheld', summary: 'A £6,000 loan over 36 months would have taken debt repayments above 40% of the borrower’s income.', url: FOS('DRN-3818582') },
      { business: 'NatWest', ref: 'DRN-5008578', outcome: 'Upheld', summary: 'NatWest accepted its checks on a £5,000, five-year loan were inadequate: proper checks would have shown the borrower was a student without a job. It refunded interest and charges, removed negative credit file entries and agreed a repayment plan for the rest.', url: FOS('DRN-5008578') },
      { business: 'Likely Loans', ref: 'DRN-4149488', outcome: 'Not upheld', summary: 'A Likely Loans complaint where the lending was found affordable.', url: FOS('DRN-4149488') },
    ],
    lendersHeading: 'Personal loan lenders we cover',
    faqs: [
      { q: 'Can I claim if I’ve paid the loan off?', a: 'Yes. Repaid loans can still be looked at, subject to the time limits.' },
      { q: 'I took the loan to clear other debts. Can I still claim?', a: 'Yes. The lender still had to check the new repayments were affordable. The ombudsman looks at whether the lender could reasonably expect the loan to leave you better off.' },
      { q: 'Does a high-street bank loan count?', a: 'Yes. Any lender had to check affordability, including high-street banks. Most credit union loans fall outside these rules.' },
      { q: 'What if my loan was sold to a debt collector?', a: 'You still complain to the lender that made the decision to lend.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the loan, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the lender directly and for free. Say which loan, when you took it, and that you want it reviewed for affordability.',
      'The lender has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'catalogues',
    title: 'Catalogue refund claims: limits that kept rising | CreditRights',
    description: 'Catalogue limit kept going up while you struggled? Each increase had to be affordable. How catalogue and shopping account claims work, and how to check.',
    h1: 'Catalogue account refund claims',
    answer: 'If a catalogue or online shopping account kept raising your limit while you were only making minimum payments, you could get back the interest and charges on the lending that shouldn’t have happened.',
    borrow: 'catalogue',
    facts: [
      { label: 'Type of credit', value: 'Running account, like a card' },
      { label: 'Each limit increase', value: 'A lending decision' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The retailer’s credit provider, then the ombudsman' },
    ],
    intro: [
      'A catalogue or shopping account lets you buy now and pay over time, with interest on the balance. It works like a credit card for one retailer or group of retailers, so the same lending rules apply.',
      'The provider had to check the opening limit was affordable and check again before significant increases. Claims usually involve limits that crept up, sometimes with a “good news” letter, while the balance stayed close to the limit.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, catalogue credit providers must assess whether you can afford the credit before opening an account or significantly raising the limit.' },
      { when: 'Nov 2018', text: 'More detailed rules on affordability checks, including looking at income and essential outgoings.' },
      { when: 'Dec 2018', text: 'Catalogue and store card providers must not raise the credit limit for customers at risk of financial difficulty. From March 2019 customers had to be given control over limit increases.' },
      { when: 'Jun 2019', text: 'Persistent debt rules extended to catalogue accounts: providers must step in after 18 months of paying more in interest and charges than off the balance.' },
    ],
    signs: [
      { title: 'Your limit kept going up', text: 'Several increases in a short time, especially unasked, are a common feature of upheld complaints.' },
      { title: 'Your balance was always close to the limit', text: 'A balance that never came down suggested you were relying on the account.' },
      { title: 'You only ever made the minimum payment', text: 'Years of minimum payments mean you paid mostly interest.' },
      { title: 'You used it for essentials', text: 'Clothes for the children, bedding or appliances you couldn’t otherwise afford point to financial difficulty.' },
      { title: 'You had other debts or missed payments', text: 'Problems on your credit file were visible when the provider raised your limit.' },
    ],
    putRight: {
      title: 'Your shopping account, put right',
      rows: [['Interest on unaffordable lending', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
      paras: [
        'If a complaint is upheld, the provider usually removes interest and charges on the part of the balance above the last fair limit, from the date of the unfair increase.',
        'If you still owe money, the refund reduces the balance first. Anything left over is paid to you with interest added.',
      ],
    },
    decisions: [
      { business: 'Littlewoods', ref: 'DRN-6011343', outcome: 'Upheld', summary: 'The opening limit and first three increases were fair, but Littlewoods limit increases from March 2021 were irresponsible.', url: FOS('DRN-6011343') },
      { business: 'JD Williams', ref: 'DRN-3173135', outcome: 'Partly upheld', summary: 'The limit was raised seven times, from £175 to £1,500, in just over a year. The last increase should not have been made because the customer had already started missing payments.', url: FOS('DRN-3173135') },
      { business: 'Very', ref: 'DRN-4630785', outcome: 'Not upheld', summary: 'Not upheld beyond the lender’s own offer to remove interest on balances above £2,650.', url: FOS('DRN-4630785') },
    ],
    lendersHeading: 'Catalogue and shopping accounts we cover',
    faqs: [
      { q: 'Is a catalogue account the same as a credit card?', a: 'For lending purposes, yes. It’s a running account with a limit and interest, so the same affordability rules apply.' },
      { q: 'I have accounts with several brands. Do I complain to each?', a: 'Check who provides the credit. Several brands can belong to one provider, and one complaint can cover all of them.' },
      { q: 'Can I claim if the account is closed?', a: 'Yes. Closed accounts can still be looked at, subject to the time limits.' },
      { q: 'What about buy now pay later on my catalogue account?', a: 'Buy now pay later offers on a catalogue account are part of a regulated credit account, so they’re covered. Since March 2019 providers have had to explain them clearly and remind you before the offer period ends.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the credit provider directly and for free. Say which account and when the limit increases happened, and ask for them to be reviewed for affordability.',
      'The provider has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA CP18/43: high-cost credit review (catalogue credit, store cards and home credit)', url: 'https://www.fca.org.uk/publication/consultation/cp18-43.pdf' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'guarantor-loans',
    title: 'Guarantor loan claims for borrowers and guarantors | CreditRights',
    description: 'Guarantor loan you couldn’t afford, or asked to pay as a guarantor? Both can complain. How guarantor loan claims work, what you get back and how to check.',
    h1: 'Guarantor loan refund claims',
    answer: 'If a guarantor loan wasn’t affordable for you, you could get back the interest and charges. If you were the guarantor and were asked to pay, you may be able to get your payments back too, if the lender didn’t check you could afford it.',
    borrow: 'guarantor',
    facts: [
      { label: 'Who can complain', value: 'Borrowers and guarantors' },
      { label: 'Guarantor rules since', value: 'November 2015' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The lender, then the Financial Ombudsman' },
    ],
    intro: [
      'A guarantor loan is a personal loan where a friend or family member agrees to pay if you can’t. They’re usually offered to people with poor credit, at higher interest.',
      'Having a guarantor didn’t let the lender skip its checks on you. It still had to be satisfied you could repay without relying on your guarantor. It also had to check the guarantor could afford to step in.',
    ],
    rules: [
      { when: 'Nov 2015', text: 'Guarantors became customers under the FCA’s rules. Lenders had to check the guarantor could afford to pay and explain when the guarantee could be called on.' },
      { when: 'Nov 2018', text: 'More detailed affordability rules. The lender must consider whether the loan could harm the guarantor’s finances, and can’t rely on the guarantee when checking the borrower can afford it.' },
      { when: 'Before signing', text: 'The guarantor must be told when they could be asked to pay and what would happen, including legal action, if they didn’t.' },
    ],
    signs: [
      { title: 'The repayments were too much for your income', text: 'If the loan was only affordable with your guarantor’s help, it wasn’t affordable for you.' },
      { title: 'Your guarantor ended up making payments', text: 'Missed payments soon after the loan started can show it was never sustainable.' },
      { title: 'You had other debts or missed payments when you applied', text: 'Poor credit history is why guarantor loans exist, but the lender still had to look at whether you could repay.' },
      { title: 'You took a second loan or a top-up', text: 'Borrowing again before the first loan was paid off can show the lending had become a problem.' },
      { title: 'As guarantor, you couldn’t really afford to pay', text: 'If the lender didn’t check your own income and outgoings properly, you may have a complaint of your own.' },
    ],
    putRight: {
      title: 'Your guarantor loan, put right',
      rows: [['Interest and charges', 'Refunded', true], ['Guarantor payments', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'If a borrower’s complaint is upheld, the borrower usually only repays what they borrowed. Interest and charges paid above that come back with interest added.',
        'If a guarantor’s complaint is upheld, the guarantor is usually released from the guarantee and gets back what they paid, with interest. Information about the loan is removed from their credit file.',
      ],
    },
    decisions: [
      { business: 'Amigo Loans', ref: 'DRN-2511754', outcome: 'Upheld', summary: 'A borrower’s complaint. Amigo didn’t carry out proportionate checks before either of two guarantor loans, and proper checks would probably have shown neither was affordable. Interest and charges came off the balance or were refunded, and negative credit file entries were removed.', url: FOS('DRN-2511754') },
      { business: 'George Banco', ref: 'DRN-3711790', outcome: 'Upheld', summary: 'A guarantor’s complaint. The lender’s own checks showed the guarantor was already heavily in debt with little income left over. She was released from the guarantee, her payments were refunded with interest and the loan was removed from her credit file.', url: FOS('DRN-3711790') },
    ],
    lendersHeading: 'Guarantor lenders we cover',
    faqs: [
      { q: 'Can my guarantor complain too?', a: 'Yes, if they were asked to pay. The lender should have checked they could afford the repayments if you couldn’t.' },
      { q: 'Can I complain if my guarantor made the payments?', a: 'Yes. If the loan wasn’t affordable for you, that’s a complaint about the lender’s checks on you.' },
      { q: 'What if the lender has gone bust?', a: 'Several guarantor lenders have closed. Where a lender collapsed, you usually can’t get a refund unless it set up a redress scheme.' },
      { q: 'Can I claim if the loan is paid off?', a: 'Yes. Repaid loans can still be looked at, subject to the time limits.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the loan, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'Borrowers and guarantors can each complain to the lender directly and for free. Say whether you were the borrower or the guarantor, which loan, and that you want the lender’s checks reviewed.',
      'The lender has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA PS15/23: guarantors treated as customers', url: 'https://www.fca.org.uk/publication/policy/ps15-23.pdf' },
      { label: 'Financial Ombudsman: guarantor loan complaints', url: 'https://financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/guarantor-loans' },
      { label: 'Financial Ombudsman: guarantor loans (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/guarantor-loans' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'doorstep-loans',
    title: 'Doorstep loan refund claims for home credit | CreditRights',
    description: 'Took doorstep loans one after another? Home credit lenders had to check you could afford each one. How doorstep loan claims work and how to check yours.',
    h1: 'Doorstep loan refund claims',
    answer: 'If a doorstep lender kept lending to you when you couldn’t afford it, or offered a new loan before the last one was paid, you could get back the interest and charges. Several big doorstep lenders have closed, so check who you borrowed from.',
    borrow: 'guarantor',
    facts: [
      { label: 'Also called', value: 'Home-collected credit' },
      { label: 'Repaid', value: 'Weekly, to an agent' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The lender, then the Financial Ombudsman' },
    ],
    intro: [
      'With a doorstep loan, an agent visits your home to arrange the loan and collect repayments, usually weekly. It’s expensive credit, often used by people who can’t borrow elsewhere.',
      'The lender had to check each loan was affordable. Claims usually involve repeat lending: a new or bigger loan offered as the last one neared its end, or several loans running at once.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, home credit lenders must check each loan is affordable, and the ombudsman asks whether repeat lending had become unsustainable.' },
      { when: 'Nov 2018', text: 'More detailed affordability rules, looking at the borrower’s income and essential outgoings before each loan.' },
      { when: 'Dec 2018', text: 'Agents should only discuss a new loan or a top-up if you raise it. A visit for anything other than collecting needs your specific written request.' },
      { when: 'Mar 2019', text: 'Before a top-up or a second loan, the lender must show you in writing how the weekly payments and total cost compare.' },
    ],
    signs: [
      { title: 'You took a new loan before the last one was paid', text: 'Topping up an unpaid loan is a common feature of upheld doorstep complaints.' },
      { title: 'You were offered more as you neared the end', text: 'Being offered a new loan just as you were about to finish can show a cycle of borrowing.' },
      { title: 'You had more than one loan running', text: 'Overlapping loans add up quickly at doorstep rates.' },
      { title: 'You borrowed over many years', text: 'A long run of loans can show you’d become reliant on them.' },
      { title: 'You struggled with payments alongside bills', text: 'Missed collections or arrears were things the lender knew about.' },
    ],
    putRight: {
      title: 'Your doorstep loans, put right',
      rows: [['Interest and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Balance owed', 'Reduced', true], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'For each loan found unaffordable, you usually only repay what you borrowed. Interest and charges paid above that come back to you, with interest added.',
        'If the lender has collapsed, any money depends on whether it set up a redress scheme, and those schemes usually paid only part of what was owed.',
      ],
    },
    decisions: [
      { business: 'Morses Club', ref: 'DRN-3721065', outcome: 'Partly upheld', summary: 'By the fifth loan the borrower had owed money for over two years, the amounts had grown from £200 to £500, and each new loan followed soon after the last. That loan was upheld and removed from his credit file.', url: FOS('DRN-3721065') },
      { business: 'Mutual', ref: 'DRN-3023277', outcome: 'Partly upheld', summary: 'Eight loans between 2011 and 2019. By the sixth, a £1,000 loan in July 2017, the pattern had become unsustainable, so interest and charges on loans six to eight were refunded.', url: FOS('DRN-3023277') },
      { business: 'Provident', ref: 'DRN-2364026', outcome: 'Partly upheld', summary: 'The checks on the first doorstep loan were reasonable, but the second loan should not have been given. Interest and charges on it were refunded and related negative credit file entries removed.', url: FOS('DRN-2364026') },
    ],
    lendersHeading: 'Doorstep lenders we cover',
    extra: { id: 'closed', heading: 'If your lender has closed', paras: [
      'Several of the largest doorstep lenders have stopped lending. Provident closed its doorstep business in 2021, and others have entered schemes of arrangement or administration.',
      'Where a lender has collapsed, you usually can’t get a full refund. Some ran schemes with claim deadlines that have now passed. Our lender pages only cover doorstep lenders that are still trading.',
    ] },
    faqs: [
      { q: 'Can I claim if I paid every collection?', a: 'Yes. Keeping up with payments doesn’t mean the loans were affordable, especially if you kept borrowing again.' },
      { q: 'What if my agent offered the new loan?', a: 'Lending decisions are the lender’s responsibility, whoever made the offer.' },
      { q: 'What if the lender has closed?', a: 'You usually can’t get a full refund from a lender that has collapsed. Check whether it ran a redress scheme and whether its deadline has passed.' },
      { q: 'Can I claim for loans I’ve paid off?', a: 'Yes. Repaid loans can still be looked at, subject to the time limits.' },
      { q: 'How far back can I claim?', a: 'Usually six years from each loan, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the lender directly and for free. List the loans if you can, and say you want them reviewed for affordability.',
      'The lender has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA CP18/43: high-cost credit review (catalogue credit, store cards and home credit)', url: 'https://www.fca.org.uk/publication/consultation/cp18-43.pdf' },
      { label: 'Financial Ombudsman: home credit complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/home-credit' },
      { label: 'Financial Ombudsman: home credit (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/home-credit' },
      { label: 'FCA: response to Provident’s scheme being approved by the High Court', url: 'https://www.fca.org.uk/news/statements/fca-response-providents-scheme-being-approved-high-court' },
      { label: 'FCA: Morses Club and Shelby Finance enter administration', url: 'https://www.fca.org.uk/news/news-stories/morses-club-limited-shelby-finance-ltd-trading-dot-dot-loans-administration' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'logbook-loans',
    title: 'Logbook loan refund claims: loans secured on your car | CreditRights',
    description: 'Borrowed against your car with a logbook loan you couldn’t afford? You could get back what you paid above the loan. How logbook loan claims work.',
    h1: 'Logbook loan refund claims',
    answer: 'If a logbook lender didn’t properly check you could afford the repayments, you could get back everything you paid above the amount you borrowed, with interest. Upheld complaints have also seen the bill of sale cancelled.',
    borrow: 'loan',
    facts: [
      { label: 'Secured on', value: 'A car you already own' },
      { label: 'Signed', value: 'A bill of sale' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The lender, then the Financial Ombudsman' },
    ],
    intro: [
      'A logbook loan is borrowing secured against a vehicle you already own. You sign a credit agreement and a bill of sale, which means the lender owns the vehicle until the loan is repaid. You keep driving it, but if you don’t repay, the lender can take it and sell it.',
      'Logbook loans are expensive, with APRs that can run into the hundreds. Because they are secured, they fall outside the price cap on payday loans. The lender still had to check you could afford the repayments, in the same way as any other lender.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, logbook lenders must check you can afford the loan, in proportion to how much you borrow and your circumstances.' },
      { when: 'Nov 2018', text: 'More detailed affordability rules, covering income, essential outgoings and other debts.' },
      { when: 'Arrears', text: 'The ombudsman expects the lender to work with you if you fall behind, and to talk to you before taking and selling the vehicle.' },
    ],
    signs: [
      { title: 'The weekly or monthly payments were too much', text: 'If paying the loan left too little for rent, bills and food, it wasn’t affordable.' },
      { title: 'You had other debts or defaults', text: 'County Court Judgments, defaults or undeclared debts were things proper checks would have found.' },
      { title: 'Your income was irregular', text: 'Variable income means the lender should have looked harder at whether you could keep up.' },
      { title: 'You refinanced or took a second loan', text: 'Topping up a logbook loan before the first was repaid can show the borrowing had become a problem.' },
      { title: 'Your bank statements showed warning signs', text: 'Gambling, payday loans or returned payments were there to be seen if the lender looked.' },
    ],
    putRight: {
      title: 'Your logbook loan, put right',
      rows: [['Payments above the loan', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Bill of sale', 'Cancelled', true], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'If a complaint is upheld, you usually only repay what you borrowed. Anything you paid above that comes back to you, with interest added.',
        'In upheld decisions the lender has also been told to cancel the bill of sale, so it no longer has a claim on your vehicle, and to pay for distress caused where a car was taken.',
      ],
    },
    decisions: [
      { business: 'Logbook Money', ref: 'DRN-3027217', outcome: 'Upheld', summary: 'Bank statements showed undeclared debts, existing defaults and gambling, which should have led to more checks. The lender had to refund payments above the £750 borrowed, remove negative credit information and cancel the bill of sale.', url: FOS('DRN-3027217') },
      { business: 'Logbook Money', ref: 'DRN-3554979', outcome: 'Upheld', summary: 'A £1,000 loan repayable as £2,800 over 78 weeks. The checks weren’t proportionate and the loan was probably unaffordable. The lender wrote off the balance, refunded payments above the amount borrowed and paid £200 for the distress of the car being taken.', url: FOS('DRN-3554979') },
      { business: 'Loans 2 Go', ref: 'DRN-2725790', outcome: 'Upheld', summary: 'The lender ignored warning signs across several logbook loans, including an undeclared County Court Judgment, repeated refinancing and an attachment of earnings order.', url: FOS('DRN-2725790') },
    ],
    lendersHeading: 'Logbook lenders we cover',
    faqs: [
      { q: 'Can I claim if the lender took my car?', a: 'Yes. You can complain about the lending decision and about how the lender handled the arrears and repossession.' },
      { q: 'Can I claim if I’ve paid it off?', a: 'Yes. Repaid loans can still be looked at, subject to the time limits.' },
      { q: 'Is a logbook loan the same as car finance?', a: 'No. With car finance the lender pays for the car. With a logbook loan you already own the car and borrow against it. Both can be complained about if they weren’t affordable.' },
      { q: 'Why wasn’t my logbook loan covered by the payday price cap?', a: 'The cap only applies to unsecured high-cost short-term credit. A logbook loan is secured on your vehicle, so it falls outside it.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the loan, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the lender directly and for free. Give the loan details and say you want the lender’s affordability checks reviewed.',
      'The lender has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'Financial Ombudsman: logbook loan complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/logbook-loans' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'car-finance',
    title: 'Car finance affordability claims for HP and PCP | CreditRights',
    description: 'Monthly car payments you couldn’t afford? Car finance lenders had to check. How affordability claims on HP and PCP work, separate from commission claims.',
    h1: 'Car finance affordability claims',
    answer: 'If your car finance lender didn’t properly check you could afford the monthly payments, you could complain. If it’s upheld, you could get back some of what you paid and have negative entries removed from your credit file. This is separate from car finance commission claims.',
    borrow: 'car',
    facts: [
      { label: 'Covers', value: 'Hire purchase, PCP and conditional sale' },
      { label: 'Not about', value: 'Hidden commission' },
      { label: 'How far back', value: 'Usually 6 years' },
      { label: 'Complain to', value: 'The finance company, then the Financial Ombudsman' },
    ],
    intro: [
      'Car finance is credit, so the finance company had to check you could afford the monthly payments for the whole agreement, not just that you were likely to pay. A car deal often means hundreds of pounds a month over three or four years, so the checks should match that.',
      'Affordability claims tend to involve used cars bought on hire purchase or conditional sale from specialist lenders, but any car finance agreement can be looked at.',
    ],
    rules: [
      { when: 'Apr 2014', text: 'Under the FCA’s rules, car finance lenders must check you can afford the agreement, with more thorough checks for bigger payments and longer terms.' },
      { when: 'Nov 2018', text: 'More detailed rules: the lender must assess the risk to your finances, not just its own risk, looking at income and essential outgoings.' },
      { when: 'Ombudsman', text: 'If the checks weren’t proportionate, the ombudsman asks what proper checks would have shown. Relying on average living costs instead of your real spending isn’t always enough.' },
    ],
    signs: [
      { title: 'The payments left you short every month', text: 'If the car payment pushed you into your overdraft or onto other credit, it wasn’t affordable.' },
      { title: 'Nobody asked about your outgoings', text: 'A lender that only looked at your credit score or used averages may not have checked properly.' },
      { title: 'You fell behind soon after', text: 'Missed payments early in the agreement can show it was never sustainable.' },
      { title: 'You had other debts or defaults', text: 'Problems on your credit file when you applied were visible to the lender.' },
      { title: 'The car was handed back or taken', text: 'Ending an agreement early because you couldn’t keep up doesn’t stop you complaining about the lending decision.' },
    ],
    putRight: {
      title: 'Your car finance, put right',
      rows: [['Payments above a fair usage charge', 'Refunded', true], ['Deposit', 'Can be refunded', false], ['Interest on your refund', 'Added', false], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'Because you had use of the car, the lender can usually keep a fair amount for that use. In one upheld decision this was set at £230 a month. Anything you paid above that, including your deposit, comes back to you with interest.',
        'If you still have the car, the lender may be told to end the agreement and take the car back. If what you’ve paid is less than the fair usage amount, the difference goes on an affordable repayment plan.',
      ],
    },
    decisions: [
      { business: 'Advantage Finance', ref: 'DRN-3330407', outcome: 'Upheld', summary: 'Advantage never asked about the customer’s spending, and his bank statements showed too little spare income for about £235 a month on a used-car hire purchase deal. He got back his deposit and payments, less £230 a month for the 27 months he had the car, with interest.', url: FOS('DRN-3330407') },
      { business: 'Moneybarn', ref: 'DRN-4159548', outcome: 'Not upheld', summary: 'Moneybarn relied on average living costs instead of checking the customer’s real spending, so its checks didn’t go far enough. Her bank statements still showed she could afford the payments, so nothing was due.', url: FOS('DRN-4159548') },
    ],
    lendersHeading: 'Car finance lenders we cover',
    extra: { id: 'commission', heading: 'Affordability claims and commission claims', paras: [
      'You may have heard about car finance commission claims. Those are about hidden or high commission paid to the dealer, and the FCA has set up a redress scheme for them covering agreements from April 2007.',
      'An affordability claim is different. It’s about whether the lender should have lent to you at all. You can have one, the other, or both on the same agreement.',
    ] },
    faqs: [
      { q: 'Is this the same as the car finance commission claims?', a: 'No. Commission claims are about payments to the dealer. Affordability claims are about whether the lender checked you could afford the payments.' },
      { q: 'Can I claim if I still have the car?', a: 'Yes. If the complaint is upheld, the lender may end the agreement and take the car back, and refund anything you paid above a fair amount for using it.' },
      { q: 'Can I claim if the car was repossessed or I handed it back?', a: 'Yes. You can still complain about whether the lending was affordable in the first place.' },
      { q: 'Does PCP count?', a: 'Yes. Hire purchase, PCP and conditional sale are all covered by the affordability rules.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the agreement, or three years from when you realised you had cause to complain, whichever is later.' },
    ],
    complain: [
      'You can complain to the finance company directly and for free. That’s the company named on your agreement, not the dealer. Say you want its affordability checks reviewed.',
      'It has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'Financial Ombudsman: car finance complaints', url: 'https://financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/car-finance' },
      { label: 'Mayer Brown: FCA finalises motor finance redress scheme (April 2026)', url: 'https://www.mayerbrown.com/en/insights/publications/2026/04/fca-finalises-motor-finance-consumer-redress-scheme' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
  {
    slug: 'buy-now-pay-later',
    title: 'Buy now pay later complaints after July 2026 | CreditRights',
    description: 'BNPL became regulated on 15 July 2026. What that means for affordability complaints about Klarna, Clearpay and other pay-later plans, and what’s covered.',
    h1: 'Buy now pay later affordability complaints',
    answer: 'Interest-free buy now pay later plans became regulated on 15 July 2026. For plans taken out from that date, the provider has to check you can afford them, and you can complain to the Financial Ombudsman if it didn’t. Buy now pay later on a catalogue account has been covered for years.',
    borrow: 'other',
    facts: [
      { label: 'Regulated since', value: '15 July 2026' },
      { label: 'Covers plans from', value: '15 July 2026 on' },
      { label: 'Catalogue BNPL', value: 'Already covered' },
      { label: 'Complain to', value: 'The provider, then the Financial Ombudsman' },
    ],
    intro: [
      'Buy now pay later lets you split a purchase into interest-free payments. Plans from providers such as Klarna, Clearpay and PayPal were unregulated until 15 July 2026, the day the FCA started regulating them as “deferred payment credit”.',
      'Since then, providers have had to check you can afford each plan before agreeing it, even small ones, and help you if you get into difficulty. Plans taken out before 15 July 2026 stay unregulated, so the new rules and the ombudsman’s powers don’t reach them.',
    ],
    rules: [
      { when: '15 Jul 2026', text: 'Interest-free plans paid in 12 or fewer instalments within 12 months, from a third-party provider, became regulated by the FCA.' },
      { when: 'Each plan', text: 'The provider must check you can afford each plan before agreeing it, including plans under £50. It can skip a full look at income and spending only where there’s clearly no affordability risk, and must be able to justify that.' },
      { when: 'Difficulty', text: 'Providers must support people in or close to financial difficulty, and give notice and point to free debt advice before ending or enforcing a plan.' },
    ],
    signs: [
      { title: 'You had several plans running at once', text: 'Lots of overlapping plans add up, even if each one looks small.' },
      { title: 'You used it for essentials', text: 'Splitting the cost of food, bills or everyday shopping can show you were struggling.' },
      { title: 'You were charged for missed payments', text: 'Late fees on several plans can be a sign the provider should have looked harder.' },
      { title: 'You had other debts or missed payments', text: 'Problems on your credit file were something the provider could check.' },
      { title: 'You used BNPL on a catalogue account', text: 'That’s regulated credit already, so it can be looked at, subject to the usual time limits.' },
    ],
    putRight: {
      title: 'A complaint, put right',
      rows: [['Missed-payment charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Negative credit file entries', 'Removed', true]],
      paras: [
        'The ombudsman hasn’t published redress rules for buy now pay later yet. Its usual approach to unaffordable lending is to remove charges added, deduct what you paid, refund any overpayment with interest and remove negative entries from your credit file.',
        'Because these plans are interest-free, there’s usually less to refund than on other credit. The main gains are any charges and putting your credit file right.',
      ],
    },
    decisions: [],
    extra: { id: 'other-credit', heading: 'Older plans and other credit', paras: [
      'If your plans were taken out before 15 July 2026, they aren’t covered. But people who relied on buy now pay later often had other credit too. Overdrafts, credit cards, catalogue accounts and loans have been covered by affordability rules for years, and are often worth more.',
      'Buy now pay later offers on a catalogue account, such as Very or Littlewoods, are part of a regulated credit account, so they’re already covered.',
    ] },
    faqs: [
      { q: 'Can I complain about Klarna or Clearpay?', a: 'Yes, about plans taken out from 15 July 2026. Complain to the provider first, then the Financial Ombudsman if you’re unhappy with the answer.' },
      { q: 'What about plans from before July 2026?', a: 'They stay unregulated, so the ombudsman can’t look at affordability complaints about them. Your other credit may still be worth checking.' },
      { q: 'Do providers have to check I can afford it?', a: 'Yes, for plans from 15 July 2026, including small ones. The check can be lighter where there’s clearly no affordability risk.' },
      { q: 'Is BNPL on my catalogue account covered?', a: 'Yes. It’s part of a regulated credit account, so the affordability rules have applied for years.' },
      { q: 'Does BNPL go on my credit file?', a: 'The rules don’t require providers to report to credit reference agencies, but many report to some of them.' },
    ],
    complain: [
      'You can complain to the provider directly and for free. Say which plans you want reviewed and that you’re complaining about affordability.',
      'The provider has eight weeks to reply. If you’re unhappy with the answer, or it hasn’t replied in time, you can take it to the <a href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain">Financial Ombudsman</a>, normally within six months of the final response. That’s free too.',
    ],
    sources: [
      { label: 'FCA PS26/1: regulation of deferred payment credit', url: 'https://www.fca.org.uk/publications/policy-statements/ps26-1-regulation-deferred-payment-credit' },
      { label: 'FCA PS26/1 (full policy statement)', url: 'https://www.fca.org.uk/publication/policy/ps26-1.pdf' },
      { label: 'Financial Ombudsman: BNPL complaints from 15 July 2026', url: 'https://www.financial-ombudsman.org.uk/who-we-are/data-insight/news/bnpl-complaints-15-july' },
      { label: 'Financial Ombudsman: how it handles unaffordable lending complaints', url: 'https://www.financial-ombudsman.org.uk/businesses/complaints-deal/consumer-credit/unaffordable-lending' },
      { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
      { label: 'FCA PS18/19: assessing creditworthiness in consumer credit', url: 'https://www.fca.org.uk/publication/policy/ps18-19.pdf' },
      { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
    ],
    checked: '2026-10-16',
  },
];

export const claimType = (slug: string) => CLAIM_TYPES.find((c) => c.slug === slug);
