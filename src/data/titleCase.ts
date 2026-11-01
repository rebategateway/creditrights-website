// Search titles in Title Case (Jack, 1 Nov 2026: Google showed a sentence-case title
// fragment, reordered, and it looked unfinished). Visible headings stay in sentence case.
// Words that already contain a capital (CreditRights, HSBC, PCP, McDonald) are left alone,
// as are brand names written in lower case on purpose.
const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'vs']);
const KEEP = new Set(['nextpay']);
export function titleCase(t: string): string {
  let first = true;
  return t.replace(/[A-Za-z][A-Za-z'’]*/g, (w, i: number) => {
    const prev = t.slice(0, i).trimEnd().slice(-1);
    const start = first || prev === '|' || prev === ':' || prev === '–' || prev === '-' && t[i - 1] === ' ';
    first = false;
    if (/[A-Z]/.test(w) || KEEP.has(w) || t[i - 1] === '-') return w;
    if (!start && SMALL.has(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
}
