export type Role = {
  id: string;
  title: string;
  org: string;
  /** ISO year-month, used for sorting and the <time> element. */
  start: string;
  end?: string;
  note: string;
};

export const experience: Role[] = [
  {
    id: "ufna",
    title: "IT Developer",
    org: "Universal Fabricating North America",
    start: "2026-03",
    note: "Building the plant's internal software: scheduling, production tracking, displays and kiosks.",
  },
  {
    id: "western",
    title: "Bachelor of Engineering, Software Engineering",
    org: "Western University",
    start: "2020-09",
    end: "2025-04",
    note: "Capstone: WE.AI, an AI assistant for the university.",
  },
  {
    id: "summit",
    title: "Full-stack Web App Intern",
    org: "Summit SKS Limited",
    start: "2023-05",
    end: "2023-08",
    note: "Built React features and Firebase and API integrations for a web app, working remotely.",
  },
];

export const earlier =
  "Before and during university I worked in retail and food service, including three years at Tim Hortons where I ran shifts as a supervisor.";

export const outsideWork =
  "Outside of work I'm usually tinkering with something, whether that's a 3D printer or a new piece of self-hosted software.";

export const stack: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Front end", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
  { label: "Back end", items: ["Node.js", "Express", "Flask", "Socket.IO", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "SQL Server", "Prisma", "SQLite", "Firebase"] },
  {
    label: "Infrastructure",
    items: ["Docker", "nginx", "Linux", "Google Cloud", "GitHub Actions"],
  },
];
