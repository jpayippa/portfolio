import type { CSSProperties } from "react";
import { earlier, experience } from "@/content/experience";
import { byRecency, formatRange } from "@/lib/dates";
import { RevealOnView } from "./RevealOnView";
import { Section } from "./Section";

export function Experience() {
  const roles = [...experience].sort(byRecency);
  return (
    <Section id="experience" title="Where I've been.">
      <RevealOnView>
        <ol className="border-hairline relative space-y-10 border-l pl-7 sm:pl-10">
          {roles.map((r, i) => (
            <li key={r.id} className="reveal relative" style={{ "--i": i } as CSSProperties}>
              <span
                aria-hidden="true"
                className={`absolute top-[0.55em] -left-[33px] size-[9px] rounded-full sm:-left-[45px] ${
                  r.end ? "bg-muted/50" : "bg-link"
                }`}
              />
              <p className="text-muted text-[14px]">
                <time dateTime={r.start}>{formatRange(r.start, r.end)}</time>
              </p>
              <h3 className="mt-1 text-[21px] font-semibold tracking-tight">{r.title}</h3>
              <p className="text-muted">{r.org}</p>
              <p className="mt-2 max-w-[600px]">{r.note}</p>
            </li>
          ))}
        </ol>
      </RevealOnView>
      <p className="text-muted mt-12 max-w-[600px]">{earlier}</p>
    </Section>
  );
}
