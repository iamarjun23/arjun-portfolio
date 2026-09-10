/**
 * Single source of truth for every piece of copy on the page.
 * Edit here — no component needs to change.
 */

export const site = {
  // Set this to the real domain before deploying (also used for OG tags + sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arjun-l-engineer-portfolio.lyptron-6105.chatgpt.site",
  name: "Arjun L",
  role: "Software Engineer",
  title: "Arjun L — Software Engineer",
  description:
    "Backend, AI/RAG, and full-stack software engineer. Production products across web, mobile, desktop, and AI retrieval.",
  location: "Bangalore / Remote",
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
  kicker: "SOFTWARE ENGINEER · BANGALORE / REMOTE",
  role: ["Backend, AI &", "Full-stack Engineer"],
  about:
    "I build production-minded products across web, mobile, desktop, and AI retrieval. Currently looking for an SDE-1 role where I can go deep on backend systems.",
  featured: {
    kicker: "FEATURED PROJECT",
    title: "RAG Legal Assistant",
    blurb:
      "Natural-language search across legal case files, with grounded answers powered by retrieval and reranking.",
    tags: ["Demo coming soon", "Repository private"],
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
};

export const projects: Project[] = [
  {
    meta: "FULL-STACK OWNER · 2025 · LAW FIRM",
    title: "RAG Legal Assistant",
    problem: "Associates searched case PDFs manually.",
    built:
      "React + TypeScript client, Python retrieval service, LangChain chunking, Pinecone search, Express integration, and MongoDB history.",
    detail:
      "Added MMR reranking to reduce duplicate clauses and ground answers in source passages.",
    stack: ["React", "Python", "LangChain", "Pinecone", "Express", "MongoDB"],
    tags: ["Demo coming soon", "Repository private"],
  },
  {
    meta: "BACKEND LEAD · 2024 · CONSTRUCTION",
    title: "Nirman",
    problem: "Work completion and payments were reconciled manually.",
    built:
      "Backend for a 15-screen Flutter app with real-time state synchronization, role-based access, and Razorpay integration.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Razorpay"],
    tags: ["Demo coming soon", "Repository private"],
  },
  {
    meta: "BACKEND LEAD · 2024 · MUSIC EDUCATION",
    title: "Idyani",
    problem: "Students lacked structured feedback when learning Carnatic music.",
    built:
      "Electron + Node.js system mapping piano input to swara notation and scoring timing and note placement.",
    stack: ["Electron", "Node.js", "Firebase", "JavaScript"],
    tags: ["Demo coming soon", "Repository private"],
  },
];

export const metrics = [
  { value: "4", label: "products shipped for clients" },
  { value: "15", label: "Flutter screens in Nirman" },
  { value: "1,000+", label: "legal chunks indexed" },
  { value: "3+", label: "web, mobile, desktop" },
] as const;

export const skillGroups = [
  { label: "LANGUAGES", items: "JavaScript · TypeScript · Python · Dart" },
  { label: "BACKEND", items: "Node.js · Express · Flask · REST APIs" },
  { label: "FRONTEND", items: "React · Next.js · Flutter · Electron" },
  { label: "DATA", items: "MongoDB · Firebase · Firestore" },
  { label: "AI / RAG", items: "LangChain · Pinecone · Embeddings" },
  { label: "DELIVERY", items: "Auth · Payments · Real-time state" },
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
    time: "2024 — PRESENT",
    title: "Co-Founder & Lead Developer",
    org: "Lyptron",
    orgUrl: site.company.url,
    summary:
      "Product studio delivering websites, SaaS, mobile apps, and AI automation.",
    points: [
      "Led technical development as the sole developer.",
      "Scoped and shipped Nirman, Idyani, and Vriddhi Vastra for paying clients.",
    ],
  },
  {
    time: "OCT 2025 — PRESENT",
    title: "Customer Experience & Automation Contributor",
    org: "Supertails",
    summary:
      "Built a React + Flask internal tool using an AI image-detection API for claim review, then onboarded the agent team.",
  },
  {
    time: "2021 — 2025",
    title: "B.Tech, Mathematics and Computing",
    org: "MSRUAS",
    summary:
      "Relevant coursework: statistical methods, linear algebra, databases, probability, and operations research.",
  },
];

export const facts = [
  { label: "FOCUS", value: "Backend · AI/RAG" },
  { label: "EDUCATION", value: "B.Tech Math & Computing" },
  { label: "EXPERIENCE", value: "Client products since 2024" },
  { label: "WORK MODE", value: "Remote · Bangalore" },
] as const;
