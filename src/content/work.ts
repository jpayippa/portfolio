export type WorkItem = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  /** Feature tiles span the full width of the grid. */
  feature?: boolean;
};

export const work: WorkItem[] = [
  {
    id: "scheduling",
    title: "Production scheduling",
    summary:
      "The plant's schedule used to live in a no-code tool. I rebuilt it as a proper web app that every department works from.",
    details: [
      "Job and task management with a board for each department",
      "An auto-scheduler that plans backward from due dates using each department's capacity, and previews overloads before anything is committed",
      "Employee sign-in checked against ERP records, with role-based access",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript"],
    feature: true,
  },
  {
    id: "tracking",
    title: "Production tracking",
    summary:
      "An extension to the ERP that follows each order from release to completion on the shop floor.",
    details: [
      "Work orders, routings and multi-level BOMs",
      "Operator queues, barcode labels and printable bin sheets",
      "Header orders split automatically into child orders with hours allocated",
    ],
    stack: ["PostgreSQL", "Docker", "nginx"],
  },
  {
    id: "displays",
    title: "Factory displays",
    summary:
      "The screens around the plant. Content is managed from one admin page and updates on every display instantly.",
    details: [
      "Drag-and-drop content library and screen assignments",
      "Live updates over WebSockets, no refresh needed",
    ],
    stack: ["React", "Socket.IO", "Prisma", "Tailwind"],
  },
  {
    id: "kiosks",
    title: "Shop-floor kiosks",
    summary:
      "Small Raspberry Pi kiosks placed around the facility so people on the floor can reach these tools without a desk.",
    details: ["Raspberry Pi Zero 2 W running FullPageOS", "Managed and updated remotely"],
    stack: ["Raspberry Pi", "Linux"],
  },
];
