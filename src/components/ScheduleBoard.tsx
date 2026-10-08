import type { CSSProperties } from "react";

/**
 * An illustration of the kind of production schedule Joel builds: one job
 * (highlighted) cascading through each department, with other work around it.
 * Pure markup and CSS, so it renders statically and costs no JavaScript.
 * Job numbers and loads are made up.
 */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const SLOTS = DAYS.length * 2; // half-day columns

type Dept = { name: string; color: string };

const DEPTS: Dept[] = [
  { name: "Cutting", color: "var(--color-dept-blue)" },
  { name: "Forming", color: "var(--color-dept-teal)" },
  { name: "Welding", color: "var(--color-dept-orange)" },
  { name: "Paint", color: "var(--color-dept-purple)" },
  { name: "Assembly", color: "var(--color-dept-green)" },
  { name: "Shipping", color: "var(--color-dept-pink)" },
];

type Bar = { row: number; start: number; length: number; job: string; focus?: boolean };

const BARS: Bar[] = [
  // The highlighted job, scheduled backward from its Friday due date.
  { row: 0, start: 0, length: 1.5, job: "J-2418", focus: true },
  { row: 1, start: 1.5, length: 1.5, job: "J-2418", focus: true },
  { row: 2, start: 3, length: 2.5, job: "J-2418", focus: true },
  { row: 3, start: 5.5, length: 1.5, job: "J-2418", focus: true },
  { row: 4, start: 7, length: 1.5, job: "J-2418", focus: true },
  { row: 5, start: 8.5, length: 1, job: "J-2418", focus: true },
  // Surrounding work.
  { row: 0, start: 2, length: 2, job: "J-2421" },
  { row: 0, start: 4.5, length: 3, job: "J-2425" },
  { row: 1, start: 3.5, length: 2.5, job: "J-2421" },
  { row: 1, start: 6.5, length: 2, job: "J-2409" },
  { row: 2, start: 0, length: 2.5, job: "J-2409" },
  { row: 2, start: 6, length: 2.5, job: "J-2421" },
  { row: 3, start: 0.5, length: 2, job: "J-2397" },
  { row: 3, start: 3, length: 2, job: "J-2409" },
  { row: 4, start: 1, length: 3, job: "J-2397" },
  { row: 4, start: 9, length: 1, job: "J-2409" },
  { row: 5, start: 2.5, length: 1.5, job: "J-2397" },
  { row: 5, start: 5, length: 2, job: "J-2390" },
];

const TODAY = 3.6; // in half-day slots

const pct = (slots: number) => `${(slots / SLOTS) * 100}%`;

export function ScheduleBoard() {
  const order = [...BARS].sort((a, b) => a.start - b.start || a.row - b.row);

  return (
    <figure
      className="window-shadow border-hairline bg-canvas mx-auto w-full max-w-[920px] overflow-hidden rounded-[22px] border text-left"
      aria-label="Illustration of a weekly production schedule, with one job moving through cutting, forming, welding, paint, assembly and shipping before its Friday due date."
      role="img"
    >
      <div aria-hidden="true">
        <div className="border-hairline bg-panel flex items-center justify-between gap-4 border-b px-4 py-3 sm:px-5">
          <span className="text-[13px] font-semibold">Production schedule</span>
          <span className="bg-ink/[0.06] flex rounded-lg p-0.5 text-[11px] font-medium sm:text-[12px]">
            <span className="text-muted px-2.5 py-0.5">Day</span>
            <span className="bg-canvas rounded-[6px] px-2.5 py-0.5 shadow-sm">Week</span>
            <span className="text-muted px-2.5 py-0.5">Month</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="px-3 pt-3 pb-5 sm:min-w-[600px] sm:px-5">
            {/* Day headings */}
            <div className="text-muted grid grid-cols-[68px_1fr] text-[11px] sm:grid-cols-[92px_1fr]">
              <span />
              <div className="grid grid-cols-5">
                {DAYS.map((d) => (
                  <span key={d} className="pb-2 pl-1.5">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-[68px_1fr] sm:grid-cols-[92px_1fr]">
              <div>
                {DEPTS.map((dept) => (
                  <div
                    key={dept.name}
                    className="flex h-11 items-center gap-1.5 text-[11px] sm:gap-2 sm:text-[12px]"
                  >
                    <span className="size-2 rounded-full" style={{ background: dept.color }} />
                    {dept.name}
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Day grid lines */}
                <div className="absolute inset-0 grid grid-cols-5">
                  {DAYS.map((d) => (
                    <span key={d} className="border-hairline border-l" />
                  ))}
                </div>

                {DEPTS.map((dept, row) => (
                  <div
                    key={dept.name}
                    className="border-hairline relative h-11 border-b last:border-b-0"
                  >
                    {BARS.filter((b) => b.row === row).map((b) => (
                      <span
                        key={`${b.job}-${b.start}`}
                        className="bar absolute top-1/2 flex h-6 -translate-y-1/2 items-center overflow-hidden rounded-md px-2 text-[0px] font-medium whitespace-nowrap sm:h-7 sm:text-[11px]"
                        style={
                          {
                            left: `calc(${pct(b.start)} + 2px)`,
                            width: `calc(${pct(b.length)} - 4px)`,
                            "--i": order.indexOf(b),
                            background: b.focus
                              ? dept.color
                              : `color-mix(in srgb, ${dept.color} 16%, transparent)`,
                            color: b.focus ? "#fff" : "var(--ink)",
                          } as CSSProperties
                        }
                      >
                        {b.job}
                      </span>
                    ))}
                  </div>
                ))}

                {/* Today marker */}
                <div
                  className="today pointer-events-none absolute -top-2 bottom-0 w-px bg-[#ff3b30]"
                  style={{ left: pct(TODAY) }}
                >
                  <span className="absolute -top-1 -left-[3px] size-[7px] rounded-full bg-[#ff3b30]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
