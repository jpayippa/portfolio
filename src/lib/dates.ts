const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** "2026-03" -> "Mar 2026". Throws on malformed input so bad content fails the build. */
export function formatYearMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) throw new Error(`Expected YYYY-MM, got "${value}"`);
  const [, year, month] = match;
  const name = MONTHS[Number(month) - 1];
  if (!name) throw new Error(`Invalid month in "${value}"`);
  return `${name} ${year}`;
}

/** "Mar 2026 – Present", or "May – Aug 2023" when both ends share a year. */
export function formatRange(start: string, end?: string): string {
  const from = formatYearMonth(start);
  if (!end) return `${from} – Present`;
  const to = formatYearMonth(end);
  const [fromMonth, fromYear] = from.split(" ");
  const [, toYear] = to.split(" ");
  return fromYear === toYear ? `${fromMonth} – ${to}` : `${from} – ${to}`;
}

/** Most recent first: ongoing roles, then by end date, then by start date. */
export function byRecency<T extends { start: string; end?: string }>(a: T, b: T): number {
  const aEnd = a.end ?? "9999-12";
  const bEnd = b.end ?? "9999-12";
  if (aEnd !== bEnd) return bEnd.localeCompare(aEnd);
  return b.start.localeCompare(a.start);
}
