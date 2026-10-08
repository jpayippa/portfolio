import { render } from "@testing-library/react";
import { StarField } from "@/components/StarField";

describe("StarField", () => {
  it("is decorative and hidden from assistive tech", () => {
    const { container } = render(<StarField />);
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });

  it("renders a stable, non-empty set of small stars", () => {
    const { container } = render(<StarField />);
    const stars = container.querySelectorAll(".star");
    expect(stars.length).toBeGreaterThan(0);
    stars.forEach((star) => {
      const width = parseFloat((star as HTMLElement).style.width);
      expect(width).toBeLessThanOrEqual(3);
    });
  });
});
