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

All copy lives in [`src/lib/content.ts`](src/lib/content.ts) — projects, skills,
experience, metrics, links. Components read from it, so text changes never touch JSX.

Three things to fill in before you ship:

| What | Where |
| --- | --- |
| Real domain | `site.url` in `src/lib/content.ts` (or `NEXT_PUBLIC_SITE_URL`) — drives OG tags, canonical, sitemap |
| Résumé PDF | drop at `public/arjun-l-resume.pdf` |
| Headshot | drop at `public/arjun.jpg`, then set `site.photo = "/arjun.jpg"` — the placeholder panel swaps for an optimized `next/image` automatically |

## What changed from the single-file version

- **Structure.** The original built itself at runtime: 9 `<style>` and 5 `<script>` blocks
  appended *after* `</html>`, with the hero, skills list and code card written in JS and
  ~60 `!important` overrides layered on. All of that is now plain server-rendered markup.
- **Zero client JS for layout and reveals.** Scroll reveals use CSS scroll-driven
  animations (`animation-timeline: view()`) instead of an IntersectionObserver, and are
  visible by default — so they degrade correctly with JS off, in unsupported browsers,
  and under `prefers-reduced-motion`.
- **Accessibility.** Skip link, `:focus-visible` rings, a reduced-motion block, one `h1`
  with an ordered heading outline, real footer links, `--dim` raised to clear WCAG AA,
  and the custom cursor no longer hides the system pointer.
- **SEO.** Full metadata, canonical, generated `opengraph-image`, `icon`, `robots.txt`,
  `sitemap.xml`, and Person JSON-LD.
- **Auto layout.** Skills and metrics use `auto-fit`/`minmax` grids and fluid `clamp()`
  type, so they reflow by available space rather than by hardcoded breakpoints.

## Deploy

Every route prerenders as static content, so any static host works:

```bash
npx vercel        # or: connect the repo on Vercel / Netlify / Cloudflare Pages
```
