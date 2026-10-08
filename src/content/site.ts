/**
 * All of the site's words live in this folder, separate from layout code.
 * To update the site, edit these files; the components read from them.
 */

export const site = {
  name: "Joel Payippara Shibu",
  shortName: "Joel Shibu",
  url: "https://joelps.dev",
  role: "Software Engineer",
  location: "Ontario, Canada",
  description:
    "Joel Payippara Shibu is a software engineer in Ontario who likes building things, from web apps and self-hosted tools to whatever is on the 3D printer.",
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
  greeting: "Hi, I'm Joel.",
  intro:
    "I'm a software engineer in Ontario. I like making things people actually use, whether that's a web app, a self-hosted tool for home, or whatever's on the 3D printer this week.",
} as const;
