import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { RevealOnView } from "./RevealOnView";

export function Contact() {
  const links = [
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: site.links.github, label: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-panel">
      <RevealOnView>
        <div className="reveal mx-auto max-w-[1024px] px-5 py-24 text-center sm:px-6 sm:py-32">
          <h2 id="contact-heading" className="display text-[40px] sm:text-[56px]">
            Let&apos;s talk.
          </h2>
          <p className="lead mx-auto mt-4 max-w-[560px]">
            Have a question about something here, or just want to say hi? I&apos;d like to hear from
            you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="bg-link rounded-full px-6 py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Email me
              </a>
            ) : null}
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="border-hairline bg-canvas hover:border-ink/30 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[17px] font-medium transition-colors"
              >
                <Icon className="size-[18px]" />
                {label}
              </a>
            ))}
            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                className="border-hairline bg-canvas hover:border-ink/30 inline-flex items-center rounded-full border px-6 py-3 text-[17px] font-medium transition-colors"
              >
                Résumé (PDF)
              </a>
            ) : null}
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}
