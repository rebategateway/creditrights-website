#!/usr/bin/env python3
"""Prepare a CreditRights mailing file (copied from Report Repair, 17 Oct 2026). See CLAUDE.md "Letter mailings".

Takes the mailing file Jack sends (CSV or XLSX: one row per person), and:
  1. drops anyone on the stop-our-letters list (opt_outs: surname + postcode, or a reference
     whose letter went to that surname + postcode), duplicates within the file, and rows
     without a first address line or a valid postcode;
  2. gives everyone else a random 8-digit reference (never sequential, never one already used);
  3. writes, in --out:
       <batch>-mailhouse.csv  the file for the mailhouse: the original columns plus REF (CR-48203917)
       <batch>-load-N.sql     inserts for Supabase table "letters", in chunks for the SQL editor
       <batch>-excluded.csv   who was left out, and why
     and prints a summary.

Before running, export from Supabase (SQL editor or MCP) to CSV:
  used refs:  select ref from letters;
  opt-outs:   select o.ref, o.name, o.postcode, l.surname as letter_surname, l.postcode as letter_postcode
              from opt_outs o left join letters l on l.ref = o.ref;

  python3 scripts/mailing.py MAILING.xlsx --batch 2026-10-a --mailed-on 2026-10-20 \
      --used used-refs.csv --optouts opt-outs.csv --out OUTDIR
"""
import argparse, csv, os, re, secrets, sys

PC = re.compile(r'^([A-Z]{1,2}[0-9][A-Z0-9]?)\s*([0-9][A-Z]{2})$')
RESERVED = {'48203917', '73519046'}  # the example on /received-a-letter/ and the test record
CHUNK = 1000  # rows per SQL file

# Header names we recognise (lower case, spaces and punctuation removed).
COLS = {
    'title': ['title', 'salutation', 'prefix'],
    'first': ['firstname', 'forename', 'forenames', 'first', 'givenname'],
    'surname': ['surname', 'lastname', 'familyname', 'last'],
    'full': ['name', 'fullname', 'contactname'],
    'town': ['town', 'city', 'posttown', 'towncity'],
    'county': ['county'],
    'postcode': ['postcode', 'postalcode', 'pcode', 'zip'],
}
ADDR = re.compile(r'^(address|addr|add|line)(line)?([1-9])$')


def norm_head(h):
    return re.sub(r'[^a-z0-9]', '', (h or '').lower())


def read_rows(path):
    if path.lower().endswith(('.xlsx', '.xlsm')):
        try:
            import openpyxl
        except ImportError:
            sys.exit('openpyxl is needed for .xlsx files: pip install openpyxl')
        ws = openpyxl.load_workbook(path, read_only=True, data_only=True).active
        it = ws.iter_rows(values_only=True)
        head = [str(h or '').strip() for h in next(it)]
        rows = [['' if v is None else str(v).strip() for v in r] for r in it]
    else:
        with open(path, newline='', encoding='utf-8-sig') as f:
            rd = csv.reader(f)
            head = [h.strip() for h in next(rd)]
            rows = [[v.strip() for v in r] for r in rd]
    rows = [r + [''] * (len(head) - len(r)) for r in rows if any(v for v in r)]
    return head, rows


def map_columns(head):
    keys = [norm_head(h) for h in head]
    found = {}
    for field, names in COLS.items():
        for i, k in enumerate(keys):
            if k in names and field not in found:
                found[field] = i
    addr = sorted(((int(m.group(3)), i) for i, k in enumerate(keys) if (m := ADDR.match(k))))
    if not addr:
        addr = [(1, i) for i, k in enumerate(keys) if k in ('address', 'street')]
    found['addr'] = [i for _, i in addr]
    if 'postcode' not in found or not found['addr'] or not ('surname' in found or 'full' in found):
        sys.exit(f'Could not find the columns needed (surname or name, address lines, postcode). Headers: {head}')
    return found


def postcode(v):
    m = PC.match(re.sub(r'\s+', ' ', (v or '').upper().strip()))
    return f'{m.group(1)} {m.group(2)}' if m else None


def squash(v):
    return re.sub(r'[^a-z0-9]', '', (v or '').lower())


def tidy(v):
    """Address text in capitals ("1 TEST ROAD") as "1 Test Road"; mixed case left as sent."""
    v = re.sub(r'\s+', ' ', (v or '').strip())
    return v.title().replace("'S ", "'s ") if v.isupper() else v


def person(row, c):
    g = lambda k: row[c[k]].strip() if k in c else ''
    title, first, surname = g('title'), g('first'), g('surname')
    if not surname and g('full'):  # "Mrs Jane Example" → title, first, surname
        parts = g('full').split()
        if parts and squash(parts[0]) in ('mr', 'mrs', 'miss', 'ms', 'mx', 'dr', 'rev', 'prof', 'sir', 'lady', 'lord'):
            title = title or parts.pop(0)
        surname = parts[-1] if parts else ''
        first = first or ' '.join(parts[:-1])
    lines = [tidy(row[i]) for i in c['addr'] if row[i].strip()]
    town = g('town')
    if not town and len(lines) > 1:
        town = lines.pop()  # last address line as the town when there is no town column
    return {
        'title': title.rstrip('.').title() if title else '',
        'first_name': first.title() if first.isupper() or first.islower() else first,
        'surname': surname.title() if surname.isupper() or surname.islower() else surname,
        'address1': lines[0] if lines else '',
        'address2': ', '.join(lines[1:]),
        'town': tidy(town),
        'postcode': postcode(g('postcode')),
    }


def read_csv(path, col):
    if not path:
        return []
    with open(path, newline='', encoding='utf-8-sig') as f:
        return [{(k or '').strip().lower(): (v or '').strip() for k, v in r.items()} for r in csv.DictReader(f)]


def sql_str(v):
    return 'null' if v in (None, '') else "'" + str(v).replace("'", "''") + "'"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('file')
    ap.add_argument('--batch', required=True, help='name for this mailing, e.g. 2026-10-a')
    ap.add_argument('--mailed-on', help='date the letters go out, YYYY-MM-DD')
    ap.add_argument('--used', help='CSV with a "ref" column: references already in letters')
    ap.add_argument('--optouts', help='CSV export of opt_outs (see above)')
    ap.add_argument('--out', default='.')
    a = ap.parse_args()
    if not re.match(r'^[\w-]{1,40}$', a.batch):
        sys.exit('--batch: letters, numbers, - and _ only')
    if a.mailed_on and not re.match(r'^\d{4}-\d{2}-\d{2}$', a.mailed_on):
        sys.exit('--mailed-on: YYYY-MM-DD')
    if not a.used or not a.optouts:
        sys.exit('--used and --optouts are both required: every mailing is checked against opt_outs, and references must never repeat.')

    head, rows = read_rows(a.file)
    c = map_columns(head)
    used = {r.get('ref', '') for r in read_csv(a.used, 'ref')} | RESERVED
    stop = set()
    for o in read_csv(a.optouts, None):
        for name, pc in ((o.get('name', ''), o.get('postcode', '')), (o.get('letter_surname', ''), o.get('letter_postcode', ''))):
            p = postcode(pc)
            if name and p:
                stop.add((squash(name.split()[-1]), p))

    keep, out, seen = [], [], set()
    for n, row in enumerate(rows, start=2):
        p = person(row, c)
        why = None
        if not p['address1']:
            why = 'no first address line'
        elif not p['postcode']:
            why = f'postcode not valid: {row[c["postcode"]]!r}'
        elif not p['surname']:
            why = 'no surname'
        elif (squash(p['surname']), p['postcode']) in stop:
            why = 'asked us to stop writing (opt_outs)'
        else:
            k = (squash(p['surname']), squash(p['first_name'])[:1], squash(p['address1']), p['postcode'])
            if k in seen:
                why = 'duplicate in this file'
            seen.add(k)
        if why:
            out.append((n, why, row))
            continue
        while True:
            ref = str(10_000_000 + secrets.randbelow(90_000_000))
            if ref not in used:
                used.add(ref)
                break
        keep.append((ref, p, row))

    os.makedirs(a.out, exist_ok=True)
    mh = os.path.join(a.out, f'{a.batch}-mailhouse.csv')
    with open(mh, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(head + ['REF'])
        for ref, _, row in keep:
            w.writerow(row + [f'CR-{ref}'])
    ex = os.path.join(a.out, f'{a.batch}-excluded.csv')
    with open(ex, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['row', 'reason'] + head)
        for n, why, row in out:
            w.writerow([n, why] + row)
    sqls = []
    for i in range(0, len(keep), CHUNK):
        part = keep[i:i + CHUNK]
        path = os.path.join(a.out, f'{a.batch}-load-{i // CHUNK + 1}.sql')
        vals = ',\n'.join('(' + ', '.join(sql_str(v) for v in (ref, p['title'], p['first_name'], p['surname'], p['address1'], p['address2'], p['town'], p['postcode'], a.batch, a.mailed_on)) + ')' for ref, p, _ in part)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(f'-- {a.batch}: rows {i + 1}-{i + len(part)} of {len(keep)}\n'
                    'insert into public.letters (ref, title, first_name, surname, address1, address2, town, postcode, batch, mailed_on) values\n'
                    f'{vals};\n')
        sqls.append(path)

    reasons = {}
    for _, why, _ in out:
        reasons[why.split(':')[0]] = reasons.get(why.split(':')[0], 0) + 1
    print(f'{len(rows)} rows read · {len(keep)} to mail · {len(out)} left out')
    for k, v in sorted(reasons.items(), key=lambda x: -x[1]):
        print(f'  {v:>6}  {k}')
    print(f'Columns used: ' + ', '.join(f'{k}={head[v]}' if isinstance(v, int) else f'{k}={[head[i] for i in v]}' for k, v in c.items()))
    print('Files:', mh, ex, *sqls, sep='\n  ')


if __name__ == '__main__':
    main()
