# Arjun L — Portfolio

Next.js 16 (App Router) rebuild of `../arjun-portfolio-responsive.html`, kept as a
reference of the original single-file version.

Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · `next/font` (self-hosted Geist).

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm start
```

## Editing content

All copy lives in [`src/lib/content.ts`](src/lib/content.ts) — intro, at-a-glance facts,
experience, projects (including their architecture layers and engineering notes), skills,
education and links. Components only lay it out.

Before deploying, set `NEXT_PUBLIC_SITE_URL` (or `site.url`) to the real domain — it drives
OG tags, the canonical URL and the sitemap. The résumé is served from
`public/arjun-l-resume.pdf`; replace that file to update the download.

## Structure

| Section | Component |
| --- | --- |
| Sticky header, active-section nav, mobile menu | `Header.tsx` |
| Light / dark theme (follows the OS, remembers a manual choice) | `ThemeToggle.tsx` + inline script in `layout.tsx` |
| Intro, at-a-glance card, highlights | `Intro.tsx` |
| Experience · Projects · Skills · Education · Contact | one component each |

The site is a static export (`output: "export"`). Printing the page produces a clean,
single-column résumé: navigation and buttons are hidden and project notes are expanded.
