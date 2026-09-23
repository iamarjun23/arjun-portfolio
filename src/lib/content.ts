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
  photo: "/arjun-headshot.webp" as string | null,
} as const;

export const nav = [
  { href: "#lyptron", label: "Lyptron" },
  { href: "#work", label: "Work" },
  { href: "/case-study", label: "Case study" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  status: "open to SDE-1 roles",
  about:
    "I'm the only developer at Lyptron, the product studio I co-founded — I take client products from the first call to production: data model, APIs, apps and delivery. My work is used daily by contractors, music students and a law firm.",
  highlights: [
    { label: "Now", value: "Co-founder, Lyptron", note: "Lead developer since Apr 2026" },
    { label: "Shipped", value: "4 products", note: "Web, mobile and desktop" },
    { label: "In use", value: "85+ people", note: "Across Nirman and Idyani" },
    { label: "Education", value: "B.Tech, MSRUAS", note: "Mathematics & Computing, 2025" },
  ],
} as const;

export const lyptron = {
  role: "Co-founder & Lead Developer",
  since: "April 2026 — present",
  pitch: "A product studio delivering websites, SaaS, mobile apps and AI automation for clients.",
  body: "There's no engineering team behind me. I sit in the client call, write the scope, design the database and APIs, build the app, deploy it, and pick up the phone when something breaks.",
  owns: [
    { title: "Scoping", text: "Turn a client problem into a written scope, estimate and milestones." },
    { title: "Architecture", text: "Data model, auth, roles, payments and API design." },
    { title: "Build", text: "Web, mobile (Flutter) and desktop (Electron) apps." },
    { title: "Delivery", text: "Deploy, hand over, and support in production." },
  ],
  shipped: [
    { name: "Nirman", note: "Construction work & payments app", href: "#nirman" },
    { name: "Idyani", note: "Carnatic music practice & scoring", href: "#idyani" },
    { name: "Vriddhi Vastra", note: "Client product" },
  ],
} as const;

export type Project = {
  id: string;
  title: string;
  role: string;
  year: string;
  client: string;
  problem: string;
  built: string;
  outcome?: string;
  stack: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "multi-agent",
    title: "Construction Ops Multi-Agent System",
    role: "Solo",
    year: "2026",
    client: "Personal project",
    problem: "Payment disputes need payments, contract terms and site logs cross-checked by hand.",
    built:
      "A Supervisor that plans the work, Payment, Contract and Progress agents with typed, access-controlled tools, and an Audit agent that verifies every claim with at most one retry.",
    outcome: "Zone access enforced in parameterized SQL and proven by 11 tests. Live agent trace streamed over SSE.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Docker"],
    tags: ["Synthetic seed data"],
    links: [
      { label: "Case study", href: "/case-study" },
      { label: "Code", href: "https://github.com/iamarjun23/construction-ops-multi-agent" },
    ],
  },
  {
    id: "rag-legal",
    title: "RAG Legal Assistant",
    role: "Full-stack owner",
    year: "2025",
    client: "Law firm",
    problem: "Associates searched case PDFs manually.",
    built:
      "React + TypeScript client, Python retrieval service, LangChain chunking, Pinecone search, Express integration and MongoDB chat history.",
    outcome: "1,000+ legal chunks indexed. MMR reranking reduces duplicate clauses and keeps answers grounded in source passages.",
    stack: ["React", "Python", "LangChain", "Pinecone", "Express", "MongoDB"],
    tags: ["Demo coming soon", "Repository private"],
  },
  {
    id: "nirman",
    title: "Nirman",
    role: "Backend lead",
    year: "2024",
    client: "Construction",
    problem: "Work completion and payments were reconciled manually.",
    built: "Backend for a 15-screen Flutter app with real-time state sync, role-based access and Razorpay payments.",
    outcome: "Used daily by 30+ contractors and workers across 3 construction firms.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Razorpay"],
    tags: ["In daily use"],
    links: [{ label: "Code", href: "https://github.com/VARITHSA/nirman" }],
  },
  {
    id: "idyani",
    title: "Idyani",
    role: "Backend lead",
    year: "2024",
    client: "Music education",
    problem: "Students lacked structured feedback when learning Carnatic music.",
    built: "Electron + Node.js system that maps piano input to swara notation and scores timing and note placement.",
    outcome: "Supports 50+ students, 5 teachers and 3 composers.",
    stack: ["Electron", "Node.js", "Firebase", "JavaScript"],
    tags: ["In use"],
    links: [{ label: "Code", href: "https://github.com/iamarjun23/IYDANI-SCORER" }],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Dart"] },
  { label: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs", "SSE"] },
  { label: "Frontend", items: ["React", "Next.js", "Flutter", "Electron"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Firebase", "Firestore"] },
  { label: "AI / RAG", items: ["LangChain", "Pinecone", "Embeddings", "Multi-agent"] },
  { label: "Shipping", items: ["Docker", "Auth & roles", "Razorpay", "Real-time sync"] },
] as const;

export type Job = {
  time: string;
  current?: boolean;
  title: string;
  org: string;
  orgUrl?: string;
  summary: string;
  points?: string[];
};

export const experience: Job[] = [
  {
    time: "Apr 2026 — Present",
    current: true,
    title: "Co-Founder & Lead Developer",
    org: "Lyptron",
    orgUrl: site.company.url,
    summary: "Product studio delivering websites, SaaS, mobile apps and AI automation.",
    points: [
      "Sole developer — own scoping, architecture, build and delivery.",
      "Shipped Nirman, Idyani and Vriddhi Vastra for paying clients.",
    ],
  },
  {
    time: "Oct 2025 — Present",
    current: true,
    title: "Customer Experience & Automation Contributor",
    org: "Supertails",
    summary: "Internal tooling for the customer-experience team.",
    points: [
      "Built a React + Flask claim-review tool using an AI image-detection API.",
      "Onboarded the agent team onto the tool.",
    ],
  },
  {
    time: "2021 — 2025",
    title: "B.Tech, Mathematics and Computing",
    org: "MSRUAS",
    summary:
      "Relevant coursework: statistical methods, linear algebra, databases, probability, and operations research.",
  },
];
