# Arjun L — Portfolio

The personal website of **Arjun L**, a software engineer based in Bangalore (open to remote), working on backend, AI/RAG and full-stack products.

🌐 **Live:** https://arjun-l-engineer-portfolio.lyptron-6105.chatgpt.site
📄 **Résumé:** [`public/arjun-l-resume.pdf`](public/arjun-l-resume.pdf)

---

## About me

I co-founded [**Lyptron**](https://lyptron.com/), a product studio that builds websites, SaaS, mobile apps and AI automation for clients. I've been its only developer since April 2026. I take each client product from the first call to production: scope, data model, APIs, apps, deployment and support.

- **Now:** Co-founder & Lead Developer at Lyptron (Apr 2026 – present)
- **Also:** Customer Experience & Automation Contributor at Supertails. I built a React + Flask claim-review tool that uses an AI image-detection API.
- **Education:** B.Tech in Mathematics & Computing, MSRUAS (2021 – 2025)
- **Shipped:** 4 products across web, mobile and desktop, used by 85+ people
- **Looking for:** SDE-1 roles

### Selected work

| Project | What it is | Stack |
| --- | --- | --- |
| **Construction Ops Multi-Agent System** | A Supervisor agent sends each question to Payment, Contract and Progress agents. An Audit agent then checks every claim in the answer. 11 tests show that zone-level access control is enforced in SQL. [Code](https://github.com/iamarjun23/construction-ops-multi-agent) | TypeScript, Node, Express, PostgreSQL, React, Docker |
| **RAG Legal Assistant** | Retrieval-grounded search over a law firm's case PDFs, with 1,000+ indexed chunks and MMR reranking. | React, Python, LangChain, Pinecone, MongoDB |
| **Nirman** | Construction work and payments app. Used daily by 30+ contractors across 3 firms. [Code](https://github.com/VARITHSA/nirman) | Flutter, Firebase, Razorpay |
| **Idyani** | Carnatic music practice tool that maps piano input to swara notation and scores the timing. Used by 50+ students. [Code](https://github.com/iamarjun23/IYDANI-SCORER) | Electron, Node.js, Firebase |

### Contact

- Email: arjun23021@gmail.com
- GitHub: [@iamarjun23](https://github.com/iamarjun23)
- LinkedIn: [arjun-l-929410219](https://linkedin.com/in/arjun-l-929410219)

---

## About this website

It's a single-page portfolio with one extra page, a case study.

- **`/`**: the home page, with sections for Hero, Lyptron, Work, Experience, Skills and Contact
- **`/case-study`**: a deep dive into the Construction Ops Multi-Agent System (problem, architecture, access control and tests), with an interactive architecture explorer

### Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `react-icons`

- Every route is prerendered as static HTML, so it can run on any static host.
- It has a light/dark theme toggle.
- Scroll reveals are CSS-only and respect `prefers-reduced-motion`.
- For SEO it includes metadata, a generated Open Graph image, a sitemap, robots.txt and Person JSON-LD.

### Project structure

```
src/
  app/            routes: page.tsx, case-study/, OG image, icon, sitemap, robots
  components/     page sections (Hero, Work, Experience, …) + case/ for the case study
  lib/
    content.ts    all home-page copy: profile, projects, skills, experience, links
    case-study.ts all case-study copy
public/           headshot, résumé PDF
```

**To change any text, edit `src/lib/content.ts` or `src/lib/case-study.ts`.** The components only render the data, so you don't need to touch any JSX.

### Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` (or `site.url` in `content.ts`) to the real domain. It controls the canonical URL, the OG tags and the sitemap.

### Deploy

Push to Vercel, Netlify or Cloudflare Pages. No server is required.
