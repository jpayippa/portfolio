import { approach, interests, stack, story } from "@/content/about";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" tone="panel" title="A bit about me.">
      <div className="max-w-[680px] space-y-5">
        {story.map((p, i) => (
          <p key={p} className={i === 0 ? "lead !text-ink" : undefined}>
            {p}
          </p>
        ))}
      </div>

      <h3 className="display mt-16 text-[28px]">When I&apos;m not at work</h3>
      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {interests.map((item) => (
          <li key={item.title} className="bg-canvas rounded-[22px] p-7">
            <p className="text-[19px] font-semibold tracking-tight">{item.title}</p>
            <p className="text-muted mt-2">{item.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="display mt-16 text-[28px]">What I work with</h3>
      <p className="text-muted mt-3 max-w-[680px]">{approach}</p>
      <dl className="divide-hairline border-hairline mt-6 max-w-[760px] divide-y border-y">
        {stack.map((group) => (
          <div key={group.label} className="grid gap-1 py-3.5 sm:grid-cols-[160px_1fr]">
            <dt className="text-[15px] font-semibold">{group.label}</dt>
            <dd className="text-muted text-[15px]">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
