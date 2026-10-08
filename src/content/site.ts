/**
 * All of the site's words live in this folder, separate from layout code.
 * To update the site, edit these files; the components read from them.
 */

export const site = {
  name: "Joel Payippara Shibu",
  shortName: "Joel Shibu",
  url: "https://joelps.dev",
  role: "Software Developer",
  location: "Ontario, Canada",
  description:
    "Joel Payippara Shibu is a software developer in Ontario who builds the scheduling, tracking and display systems a manufacturing plant runs on.",
  /** Optional. Leave empty to hide the email link. */
  email: "",
  /** Optional. Link to a hosted PDF of your résumé. Leave empty to hide it. */
  resumeUrl: "",
  links: {
    github: "https://github.com/jpayippa",
    linkedin: "https://www.linkedin.com/in/joel-payippara-shibu",
  },
} as const;

export const hero = {
  title: "Software for the factory floor.",
  intro:
    "I'm Joel, a developer at Universal Fabricating North America. I build the tools our plant uses to plan, track and run production, most of them wired straight into the ERP.",
} as const;
