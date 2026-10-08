import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import { outsideWork, stack } from "@/content/experience";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="A bit about me.">
      <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-16">
        <Image
          src={headshot}
          alt="Joel Payippara Shibu"
          width={220}
          height={255}
          className="h-auto w-40 rounded-[22px] object-cover md:w-full"
          placeholder="blur"
        />
        <div className="max-w-[640px] space-y-5">
          <p className="lead !text-ink">
            I studied Software Engineering at Western University and now spend my days close to the
            shop floor, turning spreadsheets and manual steps into software people actually use.
          </p>
          <p>
            I like building on what already works instead of starting over, and I pay attention to
            what things cost to run. {outsideWork}
          </p>

          <dl className="divide-hairline border-hairline !mt-10 divide-y border-y">
            {stack.map((group) => (
              <div key={group.label} className="grid gap-1 py-3.5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[15px] font-semibold">{group.label}</dt>
                <dd className="text-muted text-[15px]">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
