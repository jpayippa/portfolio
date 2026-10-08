import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-hairline bg-panel border-t">
      <div className="text-muted mx-auto flex max-w-[1024px] flex-col gap-2 px-5 py-6 text-[12px] sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js. Hosted on Firebase.</p>
      </div>
    </footer>
  );
}
