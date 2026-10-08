export type Project = {
  id: string;
  title: string;
  context: string;
  summary: string;
  stack: string[];
  /** Optional link to source code or a live demo. */
  href?: string;
};

export const projects: Project[] = [
  {
    id: "we-ai",
    title: "WE.AI",
    context: "Capstone, Western University",
    summary:
      "An AI assistant that answers questions about Western using the university's own web pages. I led the backend: fine-tuning Mistral 7B, building the retrieval pipeline, and serving it from Google Cloud.",
    stack: ["Python", "Mistral 7B", "RAG", "Vertex AI", "Node.js"],
  },
  {
    id: "fuelledger",
    title: "FuelLedger",
    context: "Personal project",
    summary:
      "A self-hosted app for tracking fuel spending across the family's cars. Snap a receipt, it reads it with OCR, you check the numbers, and it's logged and ready to export to Excel.",
    stack: ["Python", "Flask", "Tesseract OCR", "SQLite", "Docker"],
  },
  {
    id: "this-site",
    title: "This site",
    context: "Personal project",
    summary:
      "Statically exported with Next.js and served from Firebase Hosting. Every change is linted, type-checked and tested in CI before it deploys.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "GitHub Actions"],
    href: "https://github.com/jpayippa/portfolio",
  },
];
