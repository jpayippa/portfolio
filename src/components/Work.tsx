import { work } from "@/content/work";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Work() {
  return (
    <Section
      id="work"
      tone="panel"
      title="What I build at work."
      intro="At Universal Fabricating North America I write the internal software the plant runs on. Most of it talks directly to our Genius ERP, so the shop floor and the office see the same numbers."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {work.map((item) => (
          <article
            key={item.id}
            className={`bg-canvas flex flex-col rounded-[22px] p-7 sm:p-9 ${
              item.feature ? "md:col-span-3 md:grid md:grid-cols-[1.1fr_1fr] md:gap-12" : ""
            }`}
          >
            <div>
              <h3
                className={`display ${item.feature ? "text-[32px] sm:text-[40px]" : "text-[24px]"}`}
              >
                {item.title}
              </h3>
              <p className={`mt-3 ${item.feature ? "lead" : "text-muted"}`}>{item.summary}</p>
            </div>
            <div className={item.feature ? "mt-6 md:mt-1" : "mt-5 flex flex-1 flex-col"}>
              <ul className="space-y-2.5 text-[15px]">
                {item.details.map((d) => (
                  <li key={d} className="border-hairline border-t pt-2.5">
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Tags items={item.stack} label="Built with" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
