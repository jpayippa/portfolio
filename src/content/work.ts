export const workIntro =
  "Since March 2026 I've been a developer at Universal Fabricating North America, writing the internal software the plant runs on. Most of it connects to the company's ERP, so the shop floor and the office see the same numbers.";

export type WorkItem = { id: string; title: string; summary: string };

export const work: WorkItem[] = [
  {
    id: "scheduling",
    title: "Production scheduling",
    summary:
      "A web app every department plans from, with an auto-scheduler that works backward from due dates.",
  },
  {
    id: "tracking",
    title: "Production tracking",
    summary: "Follows each order from release to completion, with barcode labels and bin sheets.",
  },
  {
    id: "displays",
    title: "Factory displays",
    summary: "Screens around the plant, managed from one page and updated live.",
  },
  {
    id: "kiosks",
    title: "Shop-floor kiosks",
    summary: "Raspberry Pi stations so people on the floor can reach these tools without a desk.",
  },
];
