import type { ReactNode } from "react";
import { RevealOnView } from "./RevealOnView";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  tone?: "canvas" | "panel";
  children: ReactNode;
};

export function Section({ id, title, intro, tone = "canvas", children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={tone === "panel" ? "bg-panel" : "bg-canvas"}
    >
      <div className="mx-auto max-w-[1024px] px-5 py-24 sm:px-6 sm:py-32">
        <RevealOnView>
          <header className="reveal mb-12 max-w-[680px] sm:mb-16">
            <h2 id={headingId} className="display text-[40px] sm:text-[56px]">
              {title}
            </h2>
            {intro ? <p className="lead mt-4">{intro}</p> : null}
          </header>
        </RevealOnView>
        {children}
      </div>
    </section>
  );
}
