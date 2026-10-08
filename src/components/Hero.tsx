import { hero, site } from "@/content/site";
import { ChevronIcon } from "./icons";
import { ScheduleBoard } from "./ScheduleBoard";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-canvas overflow-hidden">
      <div className="mx-auto max-w-[1024px] px-5 pt-20 pb-24 text-center sm:px-6 sm:pt-28 sm:pb-32">
        <p className="text-[17px] font-semibold sm:text-[21px]">{site.name}</p>
        <h1
          id="hero-heading"
          className="display mx-auto mt-3 max-w-[820px] text-[48px] sm:text-[80px]"
        >
          {hero.title}
        </h1>
        <p className="lead mx-auto mt-6 max-w-[640px]">{hero.intro}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[17px] sm:text-[19px]">
          <a href="#work" className="text-link inline-flex items-center gap-1.5">
            See what I build <ChevronIcon className="h-[0.7em]" />
          </a>
          <a href="#contact" className="text-link inline-flex items-center gap-1.5">
            Get in touch <ChevronIcon className="h-[0.7em]" />
          </a>
        </div>
        <div className="mt-16 sm:mt-20">
          <ScheduleBoard />
        </div>
      </div>
    </section>
  );
}
