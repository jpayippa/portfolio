import { byRecency, formatRange, formatYearMonth } from "@/lib/dates";

describe("formatYearMonth", () => {
  it("formats a year-month", () => {
    expect(formatYearMonth("2026-03")).toBe("Mar 2026");
  });

  it("rejects malformed input", () => {
    expect(() => formatYearMonth("March 2026")).toThrow();
    expect(() => formatYearMonth("2026-13")).toThrow();
  });
});

describe("formatRange", () => {
  it("marks ongoing roles as present", () => {
    expect(formatRange("2026-03")).toBe("Mar 2026 – Present");
  });

  it("drops the repeated year within the same year", () => {
    expect(formatRange("2023-05", "2023-08")).toBe("May – Aug 2023");
  });

  it("keeps both years across years", () => {
    expect(formatRange("2020-09", "2025-04")).toBe("Sep 2020 – Apr 2025");
  });
});

describe("byRecency", () => {
  it("puts ongoing roles first, then the most recently ended", () => {
    const roles = [
      { id: "a", start: "2023-05", end: "2023-08" },
      { id: "b", start: "2026-03" },
      { id: "c", start: "2020-09", end: "2025-04" },
    ];
    expect([...roles].sort(byRecency).map((r) => r.id)).toEqual(["b", "c", "a"]);
  });
});
