// Average claim figures supplied by Recoup. Shown with a footnote marker
// that points to SOURCE_NOTE in the footer. Kept in their own module so
// claimTypes.ts can use them without a circular import through site.ts.
// TODO before launch: Recoup's written permission to use these figures.
export const AVERAGES = {
  overdraft: '£2,023',
  creditCard: '£2,043',
  personalLoan: '£881',
} as const;
