// Question pages, /claim-types/<guide>/<slug>/: one page per search question that
// the guide itself doesn't answer (Search Console, 1 Nov 2026). Built by
// src/pages/claim-types/[slug]/[q].astro. Every fact has a source in `sources`.
// Plain text only, except `html: true` paragraphs, which may hold internal links.

export interface QuestionSection {
  id: string;
  heading: string;
  paras: string[];
  /** Numbered points under the paragraphs. */
  points?: { title: string; text: string }[];
}

export interface QuestionPage {
  /** Slug of the parent guide in claimTypes.ts. */
  guide: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Short label for links and breadcrumbs. */
  label: string;
  answer: string;
  /** Option pre-selected in the check widget. */
  borrow: string;
  sections: QuestionSection[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  checked: string;
}

const SRC = {
  conc5d3: { label: 'FCA Handbook CONC 5D.3: what banks must do for repeat overdraft users', url: 'https://handbook.fca.org.uk/handbook/CONC/5D/3.html' },
  repeatUse: { label: 'FCA: overdraft repeat use, good practice and areas of concern', url: 'https://fca.org.uk/publications/good-practice-areas-concern/overdraft-repeat-use' },
  conc73: { label: 'FCA Handbook CONC 7.3: treating customers in arrears or default fairly', url: 'https://handbook.fca.org.uk/handbook/CONC/7/3.html' },
  april2020: { label: 'FCA: overdraft rule changes (April 2020)', url: 'https://fca.org.uk/news/press-releases/millions-customers-together-save-nearly-1billion-due-overdraft-rule-changes' },
  fos: { label: 'Financial Ombudsman: unaffordable lending (consumer guide)', url: 'https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/credit-borrowing-money/unaffordable-lending' },
  disp: { label: 'FCA Handbook DISP 2.8: time limits for taking a complaint to the ombudsman', url: 'https://handbook.fca.org.uk/handbook/DISP/2/8.html' },
  uksc: { label: 'Supreme Court: OFT v Abbey National plc [2009] UKSC 6, press summary', url: 'https://caselaw.nationalarchives.gov.uk/uksc/2009/6/press-summary' },
  santander: { label: 'Santander: pre-contract information for arranged overdrafts', url: 'https://www.santander.co.uk/assets/s3fs-public/AD_documents/Pre_Contractual_Information_BANK0479MAY26PUBCDT.pdf' },
  experian: { label: 'Experian: how long a default stays on your credit file', url: 'https://www.experian.co.uk/consumer/questions/credit-and-debt.html' },
};

export const QUESTIONS: QuestionPage[] = [
  {
    guide: 'overdrafts',
    slug: 'claim-back-overdraft-charges',
    title: 'How to claim back overdraft charges and fees | CreditRights',
    description: 'How to get overdraft charges and fees refunded: when your bank should have stepped in, what the 2009 bank charges ruling changed, and how to claim.',
    h1: 'How to claim back overdraft charges',
    label: 'Claim back overdraft charges',
    answer: 'You can claim back overdraft interest and charges if your bank should have seen the borrowing had become a problem: you were overdrawn most of every month, your limit went up while you were struggling, or charges kept building and nobody offered help. Finding the charges high isn’t enough on its own; the Supreme Court settled that in 2009.',
    borrow: 'overdraft',
    sections: [
      {
        id: 'when',
        heading: 'When you can get overdraft charges back',
        paras: [
          'An overdraft is credit, so your bank has to lend responsibly. Since December 2019 banks have also had to watch how each customer uses their overdraft, spot repeat use and step in when someone shows signs of financial difficulty.',
          'Refunds come from that duty. If the bank kept charging you when it should have stepped in, or raised your limit when it shouldn’t have, the interest and charges from that point can be refunded. These are the patterns that most often lead to a refund:',
        ],
        points: [
          { title: 'You were in your overdraft most of every month', text: 'Your balance only went above zero for a day or two after payday, month after month.' },
          { title: 'Your limit went up while you were already using it all', text: 'Each increase was a new lending decision the bank had to get right.' },
          { title: 'Charges kept coming and nobody got in touch', text: 'A growing balance, more days overdrawn and refused payments are signs the bank should act on.' },
          { title: 'Your statements showed you were struggling', text: 'Payday loans, gambling or returned direct debits were all visible to the bank.' },
        ],
      },
      {
        id: 'fees',
        heading: 'Unarranged overdraft fees and the 2009 ruling',
        paras: [
          'In the late 2000s thousands of people tried to reclaim unarranged overdraft and returned payment fees as unfair. On 25 November 2009 the Supreme Court ruled that those charges were part of the price of a current account, so their fairness couldn’t be challenged that way. Claims made only on the grounds that the fees were too high stopped there.',
          'The rules have changed since. From April 2020 banks could no longer charge fixed daily or monthly overdraft fees, and an unarranged overdraft can cost no more than an arranged one. Claims today are about something the 2009 ruling didn’t cover: whether your bank lent responsibly and stepped in when it should have.',
        ],
      },
      {
        id: 'how',
        heading: 'How to get overdraft charges refunded',
        paras: [
          'There are two ways to claim. You can complain to your bank yourself, or use our check and we introduce your claim to a specialist who makes the complaint for you.',
        ],
        points: [
          { title: 'Work out when the problem started', text: 'Roughly when you started living in your overdraft, or when the limit went up. You don’t need statements: the bank holds them.' },
          { title: 'Complain to your bank', text: 'Say you relied on the overdraft, from when, and that you want the interest and charges refunded from the point the bank should have stepped in.' },
          { title: 'Wait up to eight weeks', text: 'The bank has eight weeks to send its final response.' },
          { title: 'Take it to the Financial Ombudsman', text: 'If you disagree with the answer, or it’s late, the ombudsman can look at it. You normally have six months from the final response.' },
        ],
      },
      {
        id: 'back',
        heading: 'What an overdraft refund looks like',
        paras: [
          'If your complaint is upheld, the bank usually refunds the interest and charges from the date it should have stepped in or shouldn’t have raised the limit, and adds interest to money paid back to you.',
          'If you’re still overdrawn, the refund normally comes off your balance first. Negative marks the bank added to your credit file because of that borrowing can be removed.',
        ],
      },
      {
        id: 'struggling',
        heading: 'If you’re struggling with your overdraft now',
        paras: [
          'Tell your bank. When a customer is in financial difficulty, the FCA expects banks to consider options such as reducing or waiving interest and charges. Our guide to what happens if you can’t pay back your overdraft explains what your bank has to do.',
        ],
      },
    ],
    faqs: [
      { q: 'What is an overdraft refund?', a: 'A refund of overdraft interest and charges your bank shouldn’t have taken, usually because it kept lending when it should have seen the overdraft had become a problem.' },
      { q: 'Can I get unarranged overdraft fees back?', a: 'Not just because they were high: the Supreme Court ruled in 2009 that their fairness couldn’t be challenged that way. They can be refunded as part of a claim that your bank should have stepped in.' },
      { q: 'Can I ask my bank to reverse overdraft fees?', a: 'Yes, you can ask at any time. If you’re in financial difficulty, the FCA expects banks to consider reducing or waiving interest and charges.' },
      { q: 'How far back can I claim overdraft charges?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later.' },
      { q: 'Can I claim for an account I’ve closed?', a: 'Yes. Closed accounts can still be looked at, subject to the same time limits.' },
      { q: 'Do I need my bank statements?', a: 'No. The bank holds your statements and looks at them when it reviews the complaint.' },
    ],
    sources: [SRC.repeatUse, SRC.conc5d3, SRC.uksc, SRC.april2020, SRC.conc73, SRC.fos, SRC.disp],
    checked: '2026-11-01',
  },
  {
    guide: 'overdrafts',
    slug: 'cant-pay-overdraft',
    title: 'Can’t pay back your overdraft? What happens next | CreditRights',
    description: 'What happens if you can’t pay back your overdraft, how overdrafts are repaid, what your bank must do to help, and when you can claim back the charges.',
    h1: 'Can’t pay back your overdraft?',
    label: 'Can’t pay back your overdraft',
    answer: 'An overdraft has no fixed repayment date, but your bank can ask for it back. If you can’t clear it, tell your bank: it has to treat you fairly and consider options such as reducing or waiving interest and charges. If you were stuck in your overdraft for months and the bank didn’t step in, you could also claim back the interest and charges.',
    borrow: 'overdraft',
    sections: [
      {
        id: 'repaid',
        heading: 'How an overdraft is paid back',
        paras: [
          'There are no monthly instalments. Money you pay into the account reduces what you owe, and interest is charged on the balance while you’re overdrawn. Since April 2020 each overdraft has had a single interest rate and no fixed fees.',
          'Overdrafts are usually repayable on demand. Santander’s terms, for example, say it can ask for the full amount back at any time, and that it normally gives 30 days’ notice before reducing or removing a limit. Your own bank’s overdraft terms set out what it does.',
        ],
      },
      {
        id: 'dont-pay',
        heading: 'What happens if you don’t pay your overdraft',
        paras: [
          'If you stay over your limit, or don’t repay when the bank asks, things usually escalate step by step:',
        ],
        points: [
          { title: 'The bank contacts you', text: 'It writes, texts or calls about the balance and may reduce your limit or stop further borrowing.' },
          { title: 'The account can be defaulted', text: 'A default stays on your credit file for six years from the date of default, even if you pay it off.' },
          { title: 'The debt can be passed on', text: 'The bank may pass or sell the debt to a collection agency, which then asks you to pay.' },
          { title: 'Court action is possible', text: 'As with any unpaid debt, the bank or the agency can go to court for the money.' },
        ],
      },
      {
        id: 'bank-must',
        heading: 'What your bank has to do',
        paras: [
          'FCA rules require banks to spot customers who use their overdraft repeatedly and those showing signs of financial difficulty. The bank has to tell you about the pattern, encourage you to get in touch, give you details of free debt advice and, if it carries on, set out options to reduce your use.',
          'Those options can include reducing or waiving interest and charges. A bank shouldn’t cut or remove a repeat user’s overdraft if that would cause them financial hardship.',
        ],
      },
      {
        id: 'claim',
        heading: 'You could claim back the interest and charges',
        paras: [
          'If you were overdrawn most of every month, your limit went up while you were struggling, or the bank never got in touch, the interest and charges from the point it should have stepped in can be refunded.',
          'You can claim while you still owe the overdraft. If the claim succeeds, the refund normally comes off your balance first, which can clear part or all of what you owe.',
        ],
      },
    ],
    faqs: [
      { q: 'What happens if I can’t pay my overdraft?', a: 'Tell your bank. It has to consider options such as reducing or waiving interest and charges. If the balance isn’t repaid, the account can be defaulted and the debt passed to a collection agency.' },
      { q: 'When do you have to pay back an overdraft?', a: 'There’s no fixed date, but overdrafts are usually repayable on demand. Banks normally give notice before reducing or removing a limit.' },
      { q: 'Can my bank take my overdraft away?', a: 'Yes. If you’re a repeat user, it shouldn’t remove or cut the overdraft in a way that causes you financial hardship.' },
      { q: 'How long does an overdraft default stay on my credit file?', a: 'Six years from the date of default, even if you pay the debt off.' },
      { q: 'Can I claim if I still owe money on my overdraft?', a: 'Yes. If the claim succeeds, the refund normally reduces your balance first.' },
    ],
    sources: [SRC.conc5d3, SRC.repeatUse, SRC.conc73, SRC.april2020, SRC.santander, SRC.experian, SRC.fos],
    checked: '2026-11-01',
  },
];

export const questionHref = (q: QuestionPage) => `/claim-types/${q.guide}/${q.slug}/`;
export const questionsFor = (guide: string) => QUESTIONS.filter((q) => q.guide === guide);
