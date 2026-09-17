/**
 * Single source of truth for every piece of copy on the page.
 * Edit here — no component needs to change.
 */

export const site = {
  // Set this to the real domain before deploying (also used for OG tags + sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arjunl.com",
  name: "Arjun L",
  role: "Software Development Engineer",
  title: "Arjun L — Software Development Engineer",
  description:
    "Backend-leaning full-stack engineer building multi-agent AI systems and production products across web, mobile, and desktop.",
  location: "Bangalore / Remote",
  phone: "+91 9513399668",
  email: "arjun23021@gmail.com",
  github: "https://github.com/iamarjun23",
  linkedin: "https://linkedin.com/in/arjun-l-929410219",
  company: { name: "Lyptron", url: "https://lyptron.com/" },
  // Drop the PDF at portfolio/public/arjun-l-resume.pdf and this button goes live.
  resume: "/arjun-l-resume.pdf",
  photo: "/arjun-headshot.png" as string | null,
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  kicker: "SOFTWARE DEVELOPMENT ENGINEER · BANGALORE / REMOTE",
  role: ["Backend, AI &", "Full-stack Engineer"],
  about:
    "I'm a backend-leaning full-stack engineer who likes shipping things people actually use, not just prototypes. Outside client work, I spend a lot of time on multi-agent AI systems built with LangChain. Currently looking for an SDE-1 role in backend or full-stack engineering.",
  featured: {
    kicker: "FEATURED PROJECT",
    title: "Construction Ops Multi-Agent System",
    blurb:
      "A supervisor-based multi-agent RAG system with domain-specialist agents, an audit agent that verifies every claim against evidence, and zone-based access control enforced at the tool layer.",
    tags: ["Personal project", "Multi-agent architecture"],
  },
} as const;

export type Project = {
  meta: string;
  title: string;
  problem: string;
  built: string;
  detail?: string;
  stack: string[];
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    meta: "MULTI-AGENT ARCHITECTURE & BACKEND · PERSONAL PROJECT",
    title: "Construction Ops Multi-Agent System",
    problem:
      "A single vector-search pipeline couldn't handle access control or verify its own answers.",
    built:
      "A supervisor-based multi-agent RAG system with three domain-specialist agents (Payment, Contract, Progress) that each retrieve through typed, access-controlled tools instead of open-ended prompts. A Supervisor agent decomposes questions and merges evidence; an Audit agent verifies every claim and triggers targeted retries.",
    detail:
      "Enforced zone-based access control via parameterized SQL, streamed full request tracing to a React UI over SSE, and built an evaluation harness benchmarking against plain-RAG and single-agent baselines on citation correctness and unsupported-claim rate.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    tags: ["Demo coming soon"],
    github: "https://github.com/iamarjun23/construction-ops-multi-agent",
  },
  {
    meta: "BACKEND LEAD · CLIENT PROJECT (VIA LYPTRON) · CONSTRUCTION",
    title: "Nirman",
    problem: "Work-progress and payment status were reconciled manually across construction sites.",
    built:
      "Backend for a 15-screen Flutter app tying work-progress logs directly to payment status, with Provider-based state management keeping data synchronized in real time and project-code-based, role-based access control.",
    detail:
      "Now used daily by 30+ contractors and workers across 3 client construction firms, with Firebase Auth and Razorpay giving every business a single auditable source of truth for progress-to-payment matching.",
    stack: ["Flutter", "Dart", "Firebase", "Razorpay"],
    tags: ["Demo coming soon"],
    github: "https://github.com/VARITHSA/nirman",
  },
  {
    meta: "BACKEND LEAD · CLIENT PROJECT (VIA LYPTRON) · MUSIC EDUCATION",
    title: "Idyani",
    problem: "Piano-trained students lacked structured feedback when learning Carnatic music.",
    built:
      "Electron + Node.js backend converting Western piano input into Carnatic swara notation in real time, with a note-evaluation system scoring timing accuracy and note placement for structured, note-by-note feedback.",
    detail:
      "Supports 50+ students, 5 teachers, and 3 composers, with Firebase Auth and session handling for student-teacher bookings, payments, and a teacher dashboard tracking individual progress.",
    stack: ["Electron", "Node.js", "Firebase", "JavaScript"],
    tags: ["Demo coming soon"],
    github: "https://github.com/iamarjun23/IYDANI-SCORER",
  },
  {
    meta: "FULL-STACK · CLIENT PROJECT (VIA LYPTRON) · PORTFOLIO SITE",
    title: "MadhuPortfolio",
    problem: "A client needed a professional, responsive site to showcase their work and background.",
    built:
      "A personal portfolio website built with Next.js and a custom, responsive front end, covering everything from content structure to layout and deployment.",
    detail: "Live in production for the client at nmadhukumar.com.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Live site"],
    github: "https://github.com/iamarjun23/MadhuPortfolio",
    live: "https://nmadhukumar.com",
  },
];

export const metrics = [
  { value: "5", label: "products shipped for clients & self" },
  { value: "85+", label: "users served across Nirman & Idyani" },
  { value: "15", label: "Flutter screens in Nirman" },
  { value: "3", label: "specialist agents in one system" },
] as const;

export const skillGroups = [
  { label: "LANGUAGES", items: "JavaScript · TypeScript · Python · Dart" },
  { label: "FRONTEND", items: "React · Flutter · Electron" },
  { label: "BACKEND", items: "Node.js · Express.js · REST APIs · Firebase" },
  { label: "DATABASES", items: "MongoDB · Firestore · PostgreSQL (pgvector) · Pinecone" },
  { label: "AI / RAG", items: "LangChain · Multi-Agent Systems · RAG · Embeddings · Vector Search · Prompt Engineering" },
  { label: "TOOLS", items: "Git · GitHub · Docker · Postman · VS Code" },
] as const;

export type Job = {
  time: string;
  title: string;
  org: string;
  orgUrl?: string;
  summary: string;
  points?: string[];
};

export const experience: Job[] = [
  {
    time: "APR 2026 — PRESENT",
    title: "Co-Founder & Lead Developer",
    org: "Lyptron",
    orgUrl: site.company.url,
    summary:
      "Product studio delivering websites, SaaS, mobile apps, and AI automation for founders. Lead all technical development as the sole developer.",
    points: [
      "Delivered Vriddhi Vastra (Next.js, MongoDB), a full e-commerce site for a silk-saree retailer with a WhatsApp-based order flow in place of a payment gateway.",
      "Built MadhuPortfolio, a personal portfolio website for a client, live at nmadhukumar.com.",
      "Delivered Nirman and Idyani, which together now serve 85+ users across construction and music education.",
    ],
  },
  {
    time: "OCT 2025 — PRESENT",
    title: "Customer Experience & Automation",
    org: "Supertails",
    summary:
      "Supported Supertails' customer-support chatbot by tagging queries with the correct intent and reviewing responses for accuracy and tone.",
    points: [
      "Built a standalone tool (React frontend, Flask backend calling a third-party AI-image-detection API) letting agents verify whether a refund/damage claim image is AI-generated before approving a claim.",
      "Helped onboard other agents onto the claim-image tool when it launched.",
    ],
  },
  {
    time: "2021 — 2025",
    title: "B.Tech, Mathematics and Computing",
    org: "MSRUAS",
    summary:
      "Relevant coursework: statistical methods, linear algebra, database systems, probability theory, and operations research.",
  },
];

export const facts = [
  { label: "FOCUS", value: "Backend · Multi-Agent AI" },
  { label: "EDUCATION", value: "B.Tech Math & Computing" },
  { label: "EXPERIENCE", value: "Client products since 2026" },
  { label: "WORK MODE", value: "Remote · Bangalore" },
] as const;
