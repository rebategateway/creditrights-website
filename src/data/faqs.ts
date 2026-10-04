export interface Faq { q: string; a: string; link?: { label: string; kind: string; href: string } }

export const HOME_FAQS: Faq[] = [
  { q: 'Can I claim for my bank overdraft?', a: 'You could, if you relied on it month after month or your limit went up while you were struggling.', link: { kind: 'Guide', label: 'When should your bank have stepped in?', href: '/guides/' } },
  { q: 'Can I claim if I’ve paid it off?', a: 'Yes. Repaid and closed accounts can still be claimed for, subject to time limits.' },
  { q: 'Will claiming affect my credit file?', a: 'Checking doesn’t search your credit file. If a claim is upheld, wrong markers can be removed.', link: { kind: 'Guide', label: 'Claims and your credit file', href: '/guides/' } },
  { q: 'What if my lender has gone bust?', a: 'It depends on the lender. Each lender page explains where it stands.', link: { kind: 'Lenders', label: 'Find your bank or lender', href: '/banks-and-lenders/' } },
  { q: 'Do I have to use a claims company?', a: 'No. You can complain to your bank or lender, then the Financial Ombudsman, yourself for free.' },
];

export const faqSchema = (faqs: Faq[], pageUrl: string) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
