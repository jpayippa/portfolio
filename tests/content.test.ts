import { interests, stack, story } from "@/content/about";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { formatYearMonth } from "@/lib/dates";

const isHttps = (url: string) => new URL(url).protocol === "https:";

describe("site content", () => {
  it("uses https for every outbound link", () => {
    const urls = [
      site.url,
      ...Object.values(site.links),
      ...(site.resumeUrl ? [site.resumeUrl] : []),
      ...projects.flatMap((p) => (p.href ? [p.href] : [])),
    ];
    urls.forEach((url) => expect(isHttps(url)).toBe(true));
  });

  it("has unique ids within each list", () => {
    for (const list of [work, projects, experience]) {
      const ids = list.map((item) => item.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("has valid dates on every role, with end after start", () => {
    for (const role of experience) {
      expect(() => formatYearMonth(role.start)).not.toThrow();
      if (role.end) {
        expect(() => formatYearMonth(role.end!)).not.toThrow();
        expect(role.end >= role.start).toBe(true);
      }
    }
  });

  it("has no empty text", () => {
    const strings = [
      ...story,
      ...interests.flatMap((i) => [i.title, i.text]),
      ...work.flatMap((w) => [w.title, w.summary]),
      ...projects.flatMap((p) => [p.title, p.summary, p.context, ...p.stack]),
      ...stack.flatMap((g) => [g.label, ...g.items]),
    ];
    strings.forEach((s) => expect(s.trim()).not.toBe(""));
  });
});
