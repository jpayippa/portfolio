import type { CSSProperties } from "react";
import { work, workIntro } from "@/content/work";
import { RevealOnView } from "./RevealOnView";
import { ScheduleBoard } from "./ScheduleBoard";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" tone="panel" title="My day job." intro={workIntro}>
      <RevealOnView>
        <ScheduleBoard />
      </RevealOnView>
      <RevealOnView>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {work.map((item, i) => (
            <li
              key={item.id}
              className="reveal border-hairline border-t pt-5"
              style={{ "--i": i } as CSSProperties}
            >
              <h3 className="text-[19px] font-semibold tracking-tight">{item.title}</h3>
              <p className="text-muted mt-1.5">{item.summary}</p>
            </li>
          ))}
        </ul>
      </RevealOnView>
    </Section>
  );
}
