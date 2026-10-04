// What the check asks. Question 1 is ours (it tailors the copy and tells us
// which campaigns work); questions 2 to 4 mirror our legal partner's own
// eligibility questions, so nobody passes ours and fails theirs.

export const BORROW = [
  { id: 'overdraft', label: 'Bank overdraft', tag: 'Most common' },
  { id: 'card', label: 'Credit or store card' },
  { id: 'loan', label: 'Payday or personal loan' },
  { id: 'catalogue', label: 'Catalogue account' },
  { id: 'guarantor', label: 'Guarantor or doorstep loan' },
  { id: 'other', label: 'Something else or not sure' },
] as const;

export const ELIGIBILITY = [
  { id: 'uk', q: 'Are you a UK resident?', out: 'Our legal partner can only take on claims from UK residents.' },
  { id: 'adult', q: 'Are you 18 or over?', out: 'Our legal partner can only take on claims from people aged 18 or over.' },
  { id: 'account', q: 'Do you have a UK current account?', out: 'Our legal partner checks your claim through your UK current account, so it needs you to have one.' },
] as const;
