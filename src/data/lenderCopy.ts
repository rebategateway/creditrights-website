// Copy that depends on the kind of lending, shared by every lender page.
import type { LenderInfo, LenderType } from './lenders';
import { AVERAGES } from './site';

export const PRODUCT: Record<LenderType, { noun: string; titleNoun: string; borrow: string }> = {
  overdraft: { noun: 'overdraft', titleNoun: 'overdraft', borrow: 'overdraft' },
  loan: { noun: 'loan', titleNoun: 'loan', borrow: 'loan' },
  card: { noun: 'credit card', titleNoun: 'credit card', borrow: 'card' },
  catalogue: { noun: 'account', titleNoun: 'account', borrow: 'catalogue' },
};

export const AVERAGE: Partial<Record<LenderType, { label: string; value: string }>> = {
  overdraft: { label: 'Average overdraft claim', value: AVERAGES.overdraft },
  loan: { label: 'Average personal loan claim', value: AVERAGES.personalLoan },
  card: { label: 'Average credit card claim', value: AVERAGES.creditCard },
};

export const h1For = (l: LenderInfo) => l.h1 ?? `${l.name} ${PRODUCT[l.type].titleNoun} refund claims`;
export const titleFor = (l: LenderInfo) => l.title ?? `${l.name} ${PRODUCT[l.type].titleNoun} refund claims | CreditRights`;

export function descriptionFor(l: LenderInfo) {
  if (l.description) return l.description;
  switch (l.type) {
    case 'overdraft': return `Relied on your ${l.name} overdraft month after month, or had your limit raised while struggling? You could claim back the interest and charges.`;
    case 'loan': return `Did ${l.name} lend to you when you couldn’t afford it? You could claim back the interest and charges on unaffordable loans. Free to check.`;
    case 'card': return `Was your ${l.name} card limit raised while you were struggling? You could claim back interest and charges on unaffordable lending. Free to check.`;
    case 'catalogue': return `Did your ${l.name} account limit keep going up while you were struggling? You could claim back the interest and charges. Free to check.`;
  }
}

export function shortAnswer(l: LenderInfo) {
  const n = l.name;
  switch (l.type) {
    case 'overdraft': return `If you relied on your ${n} overdraft month after month, or your limit went up while you were struggling, you could be owed back the interest and charges. Complaints go to ${n} first, then to the Financial Ombudsman.`;
    case 'loan': return `If ${n} lent to you when the repayments weren’t affordable, or kept lending when you were already struggling, you could be owed back the interest and charges. Complaints go to ${n} first, then to the Financial Ombudsman.`;
    case 'card': return `If ${n} gave you a card or raised your limit when you couldn’t afford it, you could be owed back the interest and charges on that lending. Complaints go to ${n} first, then to the Financial Ombudsman.`;
    case 'catalogue': return `If ${n} kept raising your account limit while you were struggling to pay, you could be owed back the interest and charges. Complaints go to ${n} first, then to the Financial Ombudsman.`;
  }
}

export const SIGNS: Record<LenderType, string[]> = {
  overdraft: ['In your overdraft most of every month', 'Wages in, straight back into the red', 'Your limit went up while you were maxed out', 'Charges kept coming, and nobody got in touch'],
  loan: ['You borrowed again soon after paying off a loan', 'You had several loans running at once', 'You borrowed to pay bills or other debts', 'You already had missed payments or defaults'],
  card: ['Your limit went up while you were only making minimum payments', 'You maxed out the card soon after getting it', 'You were using it for everyday bills or cash', 'You were already struggling with other debts'],
  catalogue: ['Your limit went up while you were only making minimum payments', 'Your balance was always close to the limit', 'You were using it for essentials you couldn’t otherwise afford', 'You were already struggling with other debts'],
};

export const SIGNS_NOTE: Record<LenderType, string> = {
  overdraft: 'Limit increases count too. Each one was a lending decision, so each can be looked at.',
  loan: 'Each loan is looked at separately. Even if the first was fine, later ones may not have been.',
  card: 'Limit increases count too. Each one was a lending decision, so each can be looked at.',
  catalogue: 'Limit increases count too. Each one was a lending decision, so each can be looked at.',
};

export const PUT_RIGHT: Record<LenderType, [string, string, boolean][]> = {
  overdraft: [['Overdraft interest', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
  loan: [['Interest and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Balance owed', 'Reduced', true], ['Negative credit file entries', 'Removed', true]],
  card: [['Interest on unaffordable lending', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
  catalogue: [['Interest on unaffordable lending', 'Refunded', true], ['Fees and charges', 'Refunded', true], ['Interest on your refund', 'Added', false], ['Missed payment markers', 'Removed', true]],
};

export const PUT_RIGHT_NOTE: Record<LenderType, string> = {
  overdraft: 'Refunds usually run from when the bank should have stepped in. If you’re still overdrawn, a refund may reduce what you owe rather than being paid in cash.',
  loan: 'If a loan is found unaffordable, you usually only repay what you borrowed. Anything paid above that comes back to you, with interest.',
  card: 'Refunds usually cover interest and charges on the part of the balance that shouldn’t have been lent. If you still owe money, a refund may reduce your balance.',
  catalogue: 'Refunds usually cover interest and charges on the part of the balance that shouldn’t have been lent. If you still owe money, a refund may reduce your balance.',
};

export function typeFaqs(l: LenderInfo) {
  const n = l.name;
  const reply = { q: `How long does ${n} have to reply?`, a: `Eight weeks. If ${n} hasn’t sent a final response by then, or you’re unhappy with it, the complaint can go to the Financial Ombudsman, normally within six months of the final response.` };
  const time = { q: 'How far back can I claim?', a: 'Usually six years from the lending, or three years from when you realised you had cause to complain, whichever is later. Where an account is still running, the ombudsman has sometimes looked back further.' };
  switch (l.type) {
    case 'overdraft': return [
      { q: 'Can I claim if I’m still overdrawn?', a: 'Yes. If the complaint is upheld, the refund may reduce your balance rather than being paid to you in cash.' },
      { q: 'Will my overdraft be taken away?', a: 'It can be. If a complaint is upheld, the bank may reduce or remove the overdraft and agree an affordable way to repay what’s left.' },
      reply, time,
    ];
    case 'loan': return [
      { q: 'Can I claim if I’ve paid the loan off?', a: 'Yes. Repaid loans can still be looked at, subject to time limits.' },
      { q: 'What if my loan was sold to a debt collector?', a: `You still complain to ${n}, the lender that made the decision to lend.` },
      reply, time,
    ];
    case 'card':
    case 'catalogue': return [
      { q: 'Can I claim for limit increases?', a: `Yes. Each increase was a separate lending decision, so ${n} should have checked it was affordable each time.` },
      { q: 'Will my account be suspended?', a: 'Some lenders suspend the account while they look into an affordability complaint. Ask the lender if you’re unsure.' },
      reply, time,
    ];
  }
}
