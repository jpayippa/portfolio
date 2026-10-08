import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ChevronIcon } from "./icons";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Projects() {
  return (
    <Section id="projects" title="Things I've made.">
      <div className="divide-hairline border-hairline divide-y border-y">
        {projects.map((p) => (
          <article key={p.id} className="grid gap-3 py-9 md:grid-cols-[240px_1fr] md:gap-12">
            <div>
              <h3 className="display text-[28px]">{p.title}</h3>
              <p className="text-muted mt-1 text-[14px]">{p.context}</p>
            </div>
            <div className="max-w-[620px]">
              <p>{p.summary}</p>
              <div className="mt-4">
                <Tags items={p.stack} label={`${p.title} is built with`} />
              </div>
              {p.href ? (
                <a href={p.href} className="text-link mt-4 inline-flex items-center gap-1.5">
                  View source <ChevronIcon className="h-[0.7em]" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10">
        <a href={site.links.github} className="text-link inline-flex items-center gap-1.5">
          More on GitHub <ChevronIcon className="h-[0.7em]" />
        </a>
      </p>
    </Section>
  );
}
