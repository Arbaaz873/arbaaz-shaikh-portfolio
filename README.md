# Arbaaz Shaikh — Portfolio

A single-page portfolio for **Arbaaz Shaikh, Senior Vulnerability Management Engineer**, built
with Next.js (App Router) and Tailwind CSS.

## Design concept

The site is framed as a live **vulnerability scan report / SOC console** rather than a generic
"cards on a gradient" template — the natural visual language of the candidate's actual work:

- **Left console nav** (desktop) mimics a monitoring dashboard sidebar, with a live session
  indicator and numbered modules.
- **Hero** is styled as a completed scan report: a status line, then a "scan summary" data strip
  showing the resume's real metrics (76% faster remediation, 30K+ assets, 0 audit
  non-conformities).
- **Engagements** (the project/case-study section) is framed as tracked findings — each case
  study carries a finding ID, a severity badge (Critical / High / Medium / Resolved), context,
  actions taken, and a verified outcome, which mirrors how vulnerability management work is
  actually documented.
- **Palette**: near-black slate (`#0B0F14`), not pure black, with severity-coded accents used
  functionally (red = critical, amber = high, blue = informational, green = resolved) rather than
  decoratively.
- **Type**: a geometric grotesk for display headings, a humanist sans for body copy, and a
  monospace face for data labels, IDs, and timestamps — reinforcing the "report" framing.

All copy was rewritten from the source resume/LinkedIn PDFs into achievement-driven language; no
text was copied verbatim.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export–friendly)
- [Tailwind CSS](https://tailwindcss.com/) with a custom design-token theme
- TypeScript
- No external services, API keys, or environment variables required

## Project structure

```
app/
  layout.tsx        Root layout + global metadata
  page.tsx           Composes all sections
  globals.css         Base styles, font stack, grid/scanline texture
components/
  ConsoleNav.tsx       Sidebar / mobile nav with scroll-spy
  Hero.tsx             Scan-report-style hero + summary strip
  About.tsx            Summary, certifications, education
  Experience.tsx       Reverse-chronological role history
  Engagements.tsx      Case studies framed as tracked findings
  Capabilities.tsx     Skills grouped by domain
  Contact.tsx          Contact details + footer
data/
  resume.ts            All content (single source of truth)
```

To update content (roles, metrics, case studies, skills), edit `data/resume.ts` — nothing else
needs to change.

## Local setup

Requires Node.js 18.18+ (or 20+) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Notes on fonts

To keep the build independent of network access, the site ships with a robust **system font
stack** (no external font fetch at build time). If you have internet access at build time and
want the exact typefaces the design was planned around, swap `app/layout.tsx` and
`app/globals.css` to use `next/font/google` with **Space Grotesk** (display), **IBM Plex Sans**
(body), and **IBM Plex Mono** (data/labels) — the CSS variable names (`--font-display`,
`--font-body`, `--font-mono`) are already wired through `tailwind.config.ts`, so no other changes
are needed.
