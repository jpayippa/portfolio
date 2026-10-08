import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import { hero, site } from "@/content/site";
import { ChevronIcon } from "./icons";
import { StarField } from "./StarField";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-canvas relative overflow-hidden">
      <StarField />
      <div className="relative mx-auto grid max-w-[1024px] items-center gap-12 px-5 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 md:grid-cols-[1fr_340px] md:gap-16">
        <div className="text-center md:text-left">
          <p className="text-muted text-[17px] font-semibold sm:text-[19px]">{site.name}</p>
          <h1 id="hero-heading" className="display mt-2 text-[56px] sm:text-[88px]">
            {hero.greeting}
          </h1>
          <p className="lead mx-auto mt-6 max-w-[560px] md:mx-0">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[17px] sm:text-[19px] md:justify-start">
            <a href="#projects" className="text-link inline-flex items-center gap-1.5">
              See my projects <ChevronIcon className="h-[0.7em]" />
            </a>
            <a href="#contact" className="text-link inline-flex items-center gap-1.5">
              Get in touch <ChevronIcon className="h-[0.7em]" />
            </a>
          </div>
        </div>
        <div className="order-first mx-auto w-56 sm:w-64 md:order-none md:w-full">
          <Image
            src={headshot}
            alt="Portrait of Joel Payippara Shibu"
            width={324}
            height={375}
            priority
            sizes="(min-width: 768px) 340px, 256px"
            className="window-shadow aspect-[324/375] h-auto w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
