import { render, screen, within } from "@testing-library/react";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

describe("page sections", () => {
  it("renders a single h1 in the hero", () => {
    render(<Hero />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("describes the schedule illustration for screen readers", () => {
    render(<Hero />);
    expect(screen.getByRole("img", { name: /production schedule/i })).toBeInTheDocument();
  });

  it("links every nav item to a section on the page", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    within(nav)
      .getAllByRole("link")
      .forEach((link) => expect(link.getAttribute("href")).toMatch(/^#/));
  });

  it("lists the current role first", () => {
    render(<Experience />);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("Present");
  });

  it("shows LinkedIn and GitHub contact links", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute("href");
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute("href");
  });
});
