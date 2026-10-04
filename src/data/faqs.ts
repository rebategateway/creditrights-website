export interface Faq { q: string; a: string; link?: { label: string; kind: string; href: string } }

export const HOME_FAQS: Faq[] = [
  { q: 'Can I claim for my bank overdraft?', a: 'You could, if you relied on it month after month or your limit went up while you were struggling.', link: { kind: 'More', label: 'Overdraft claims explained', href: '/claim-types/#overdrafts' } },
  { q: 'Can I claim if I’ve paid it off?', a: 'Yes. Repaid and closed accounts can still be claimed for, subject to time limits.' },
  { q: 'Will claiming affect my credit file?', a: 'Checking doesn’t search your credit file. If a claim is upheld, wrong markers can be removed.', link: { kind: 'FAQs', label: 'Claims and your credit file', href: '/faq/#credit-file' } },
  { q: 'What if my lender has gone bust?', a: 'It depends on the lender. Each lender page explains where it stands.', link: { kind: 'Lenders', label: 'Find your bank or lender', href: '/banks-and-lenders/' } },
  { q: 'Do I have to use a claims company?', a: 'No. You can complain to your bank or lender, then the Financial Ombudsman, yourself for free.' },
];

export const faqSchema = (faqs: Faq[], pageUrl: string) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

// The full FAQ page, grouped. Answers stay short and factual: no promises
// about outcomes, and the free route is stated where it matters.
export const FAQ_GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: 'claiming', title: 'About claiming',
    faqs: [
      { q: 'What is an irresponsible lending claim?', a: 'A complaint that a bank or lender lent to you when it shouldn’t have: it didn’t check you could afford it, or carried on lending or charging when it could see you were struggling. If the complaint is upheld, the lender has to put things right.' },
      { q: 'What can I claim for?', a: 'Bank overdrafts, credit and store cards, payday and personal loans, catalogue accounts, and guarantor, doorstep and logbook loans. Credit limit increases count too: each one was a lending decision.' },
      { q: 'Can I claim for my bank overdraft?', a: 'You could, if you relied on it month after month, your limit went up while you were struggling, or the bank kept charging without getting in touch. Since December 2019 banks have had to spot repeat overdraft use and offer help.', link: { kind: 'More', label: 'Overdraft claims explained', href: '/claim-types/#overdrafts' } },
      { q: 'How do I know if the lending was unaffordable?', a: 'Common signs are being in your overdraft most of the time, borrowing to repay other borrowing, several loans at once, missed payments, or limits that kept going up. Our legal partner looks at your actual transactions to check.' },
      { q: 'Can I claim if I’ve paid it off or closed the account?', a: 'Yes. Repaid loans and closed accounts can still be claimed for, subject to time limits.' },
      { q: 'Can I claim if I still owe money?', a: 'Yes. If your complaint is upheld, the refund may reduce or clear what you owe rather than being paid to you in cash.' },
      { q: 'How far back can I claim?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later. For an account that is still running, the ombudsman has sometimes looked back further.' },
      { q: 'What if my debt was sold to a debt collector?', a: 'You still complain to the original lender, because it made the decision to lend.' },
      { q: 'What if my lender has gone bust?', a: 'It depends on the lender. Consumer lending generally isn’t covered by the Financial Services Compensation Scheme, and some firms in administration run their own claims process. Each lender page explains where that lender stands.', link: { kind: 'Lenders', label: 'Find your bank or lender', href: '/banks-and-lenders/' } },
      { q: 'Can I claim if I’m in an IVA, debt management plan or bankruptcy?', a: 'You may still be able to complain, but any refund may have to go to your insolvency practitioner or creditors. Check with your IVA supervisor, trustee or debt adviser first.' },
    ],
  },
  {
    id: 'process', title: 'How it works',
    faqs: [
      { q: 'How does CreditRights work?', a: 'You answer four questions. If you’re eligible to check, we introduce you to our legal partner, who checks your bank transactions, makes the complaint and takes it to the Financial Ombudsman if needed.', link: { kind: 'Page', label: 'How a claim works', href: '/how-it-works/' } },
      { q: 'How long does it take?', a: 'The check takes about a minute. Lenders have eight weeks to reply to a complaint. If it goes to the Financial Ombudsman, that can take several months more.' },
      { q: 'Do I need any documents?', a: 'No. Our legal partner uses secure, read-only open banking to look at your transactions, so you don’t need statements to start.' },
      { q: 'Is connecting my bank safe?', a: 'Open banking is regulated by the FCA. You log in on your bank’s own screen, so your login is never shared. Access is read-only and you can withdraw it at any time.' },
      { q: 'Who is your legal partner?', a: 'Recoup, a trading style of Clear Legal Limited, a firm of solicitors regulated by the Solicitors Regulation Authority (SRA 469975). They handle your claim under their own agreement with you.' },
    ],
  },
  {
    id: 'credit-file', title: 'Your credit file',
    faqs: [
      { q: 'Will checking affect my credit score?', a: 'Our check doesn’t search your credit file. Our legal partner’s open banking check reads your transactions; it isn’t a credit search.' },
      { q: 'Will claiming affect my credit file?', a: 'If a complaint is upheld, the lender is usually told to remove negative information about the lending that shouldn’t have happened. If an overdraft is removed and a balance is left to repay, how you repay it may still be reported.' },
    ],
  },
  {
    id: 'money', title: 'Money and fees',
    faqs: [
      { q: 'How much could I get back?', a: 'It depends on how much interest and charges you paid on lending that shouldn’t have happened. Our partner’s average claims are £2,023 for overdrafts, £2,043 for credit cards and £881 for personal loans, but every claim is different and you may get back more, less or nothing.' },
      { q: 'What does it cost?', a: 'The check is free and CreditRights never charges you. If your claim succeeds, our legal partner charges a percentage of what you get back, capped by the regulator. If it doesn’t succeed, you pay nothing.', link: { kind: 'Page', label: 'See the fee table', href: '/fees/' } },
      { q: 'Do I pay anything upfront?', a: 'No.' },
      { q: 'Why does your legal partner pay you?', a: 'We find and introduce people who may have a claim, and our legal partners pay us for each introduction. It doesn’t come out of your refund.' },
      { q: 'Do I have to use a claims company?', a: 'No. You can complain to your bank or lender yourself, and then to the Financial Ombudsman, for free.' },
      { q: 'Is a refund taxed?', a: 'Refunded interest and charges aren’t taxed, but tax may be taken off any interest the lender adds on top.' },
    ],
  },
];
