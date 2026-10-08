import { site } from "@/content/site";

const sections = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
];

export function Nav() {
  return (
    <header className="nav-glass border-hairline sticky top-0 z-50 border-b">
      <nav
        aria-label="Main"
        className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-5 text-[13px] sm:px-6"
      >
        <a href="#top" className="text-ink font-semibold tracking-tight">
          {site.shortName}
        </a>
        <ul className="flex items-center gap-5 sm:gap-7">
          {sections.map((s) => (
            <li key={s.href} className="hidden sm:block">
              <a href={s.href} className="text-ink/80 hover:text-ink transition-colors">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-link rounded-full px-3 py-1 font-medium text-white transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
