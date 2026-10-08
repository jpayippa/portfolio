# joelps.dev

Personal site of Joel Payippara Shibu. Built with Next.js, exported as static files, and hosted on Firebase Hosting.

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
```

## Editing content

All of the words on the site live in `src/content/`. Components only handle layout, so most updates are a change to one of these files:

| File                        | What it holds                                            |
| --------------------------- | -------------------------------------------------------- |
| `src/content/site.ts`       | Name, links, hero text, optional email and résumé link   |
| `src/content/work.ts`       | The "What I build at work" tiles                         |
| `src/content/projects.ts`   | Side and school projects                                 |
| `src/content/experience.ts` | Roles and education, the stack list, and the about lines |

The email button and résumé link stay hidden until `email` or `resumeUrl` in `site.ts` is filled in.

## Scripts

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Local dev server                                  |
| `npm run build`     | Static export to `out/`                           |
| `npm run preview`   | Serve `out/` locally                              |
| `npm run lint`      | ESLint with the Next.js rules                     |
| `npm run typecheck` | TypeScript in strict mode                         |
| `npm test`          | Unit tests (Vitest and Testing Library)           |
| `npm run check`     | Everything CI runs, except the build              |
| `npm run deploy`    | Build and deploy from your machine (Firebase CLI) |

## Deployment

`.github/workflows/ci.yml` runs on every push and pull request:

1. Lint, typecheck, format check, tests, and build.
2. If all of that passes, the built site is deployed to Firebase Hosting. Pushes to `main` go live; pull requests get a temporary preview URL posted on the PR.

The workflow needs one repository secret, `FIREBASE_SERVICE_ACCOUNT_JPS_PORTFOLIO_J15E12`. It already exists on the old `portfolio-archive` repo, but secrets don't copy between repos. Create a new one with `firebase init hosting:github`, or generate a key for the service account in Google Cloud and add it under **Settings → Secrets and variables → Actions**.

`firebase.json` also redirects the old site's `/about`, `/projects` and `/resume` pages to the matching sections, so existing links keep working.

## Project structure

```
src/
  app/          Routes, metadata, global styles, sitemap and robots
  components/   Page sections
  content/      Site copy and data
  lib/          Small helpers (date formatting)
tests/          Unit tests
```
