/**
 * Every piece of copy on the site lives here. Components only lay it out, so
 * updating the résumé never means touching JSX.
 */

export const site = {
  // Set NEXT_PUBLIC_SITE_URL to the real domain before deploying (OG tags, canonical, sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arjunl.com",
  name: "Arjun L",
  role: "Software Development Engineer",
  title: "Arjun L — Software Development Engineer",
  description:
    "Backend-leaning full-stack engineer. I've shipped client products used daily across construction and music education, and I build multi-agent AI systems on the side.",
  location: "Bangalore, India",
  timeZone: "Asia/Kolkata",
  phone: "+91 95133 99668",
  email: "arjun23021@gmail.com",
  github: "https://github.com/iamarjun23",
  linkedin: "https://linkedin.com/in/arjun-l-929410219",
  source: "https://github.com/iamarjun23/arjun-portfolio",
  company: { name: "Lyptron", url: "https://lyptron.com/" },
  resume: "/arjun-l-resume.pdf",
  photo: "/arjun-headshot.png",
} as const;

export const nav = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const intro = {
  status: "Open to SDE-1 roles · Backend or full-stack",
  headline: "I build backends that hold up in production, and the products on top of them.",
  paragraphs: [
    "I'm a software engineer in Bangalore. I co-founded Lyptron, a small product studio, and lead all of its development — taking client products from first schema to daily use. Two of them, Nirman and Idyani, now serve 85+ people across construction and music education.",
    "Most of my work sits on the backend: data models, auth and access control, payments, and the APIs that keep a mobile or desktop client in sync. Outside client work I build multi-agent retrieval systems with a focus on the unglamorous parts — access control, verification, and evaluation.",
  ],
};

/** The recruiter's checklist, answered up front. */
export const glance = [
  { label: "Looking for", value: "SDE-1 · Backend or full-stack" },
  { label: "Location", value: "Bangalore · Remote or relocation" },
  { label: "Currently", value: "Co-founder & Lead Developer, Lyptron" },
  { label: "Education", value: "B.Tech, Mathematics & Computing, 2025" },
  { label: "Core stack", value: "TypeScript · Node.js · React · PostgreSQL" },
] as const;

export const highlights = [
  { value: "85+", label: "people using software I built, every day" },
  { value: "4", label: "client products shipped through Lyptron" },
  { value: "3", label: "construction firms running on Nirman" },
  { value: "2", label: "platforms beyond web: Flutter and Electron" },
] as const;

export type Job = {
  role: string;
  org: string;
  orgUrl?: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Co-Founder & Lead Developer",
    org: "Lyptron",
    orgUrl: site.company.url,
    start: "Apr 2026",
    end: "Present",
    location: "Bangalore · Remote",
    summary:
      "Product studio building websites, SaaS, mobile apps and AI automation for founders. I lead all technical work as the sole developer — scoping, architecture, build, deployment and support.",
    points: [
      "Led the backend for Nirman, a Flutter app that ties construction work-progress logs to payment status; used daily by 30+ contractors and workers across 3 firms.",
      "Built the Electron + Node.js backend for Idyani, converting piano input to Carnatic swara notation in real time for 50+ students and 5 teachers.",
      "Delivered Vriddhi Vastra, a Next.js + MongoDB storefront for a silk-saree retailer, with a WhatsApp-based order flow in place of a payment gateway.",
      "Designed and shipped MadhuPortfolio, a client portfolio site now live at nmadhukumar.com.",
    ],
    stack: ["Node.js", "TypeScript", "Flutter", "Firebase", "Next.js", "MongoDB", "Electron"],
  },
  {
    role: "Customer Experience & Automation",
    org: "Supertails",
    start: "Oct 2025",
    end: "Present",
    summary:
      "Support operations for a pet-care e-commerce company, working alongside its customer-support chatbot.",
    points: [
      "Built an internal tool (React frontend, Flask backend calling a third-party AI-image-detection API) that lets agents check whether a refund or damage-claim photo is AI-generated before approving the claim.",
      "Onboarded other support agents onto the tool when it launched.",
      "Tagged chatbot queries with the correct intent and reviewed responses for accuracy and tone.",
    ],
    stack: ["React", "Python", "Flask", "REST APIs"],
  },
];

export const education = {
  degree: "B.Tech, Mathematics and Computing",
  school: "M. S. Ramaiah University of Applied Sciences (MSRUAS)",
  start: "2021",
  end: "2025",
  location: "Bangalore",
  coursework: [
    "Database Systems",
    "Linear Algebra",
    "Probability Theory",
    "Statistical Methods",
    "Operations Research",
  ],
};

/** One layer of an architecture diagram — nodes that sit side by side. */
export type Layer = { name: string; note?: string; accent?: boolean }[];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  decisions: string[];
  architecture: Layer[];
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "construction-ops",
    title: "Construction Ops Multi-Agent System",
    kind: "Personal project · Multi-agent RAG",
    status: "In development · demo soon",
    summary:
      "A question-answering system over construction contracts, payments and site progress, where every answer is checked against its sources before it is returned.",
    problem:
      "A single vector-search pipeline over project documents couldn't enforce who is allowed to see which site, and had no way to catch its own unsupported claims.",
    solution:
      "A supervisor agent decomposes each question and routes the parts to three domain agents — Payment, Contract and Progress. Each retrieves through typed, access-controlled tools rather than open-ended prompts. An audit agent checks every claim in the merged answer against the evidence and triggers targeted retries for anything unsupported.",
    outcome:
      "An evaluation harness benchmarks the system against plain-RAG and single-agent baselines on citation correctness and unsupported-claim rate, so changes are measured, not eyeballed.",
    decisions: [
      "Zone-based access control is enforced in parameterised SQL inside each tool, so a prompt can't talk its way past it.",
      "Retrieval runs on PostgreSQL with pgvector, keeping documents, permissions and traces in one database.",
      "Every agent step is traced and streamed to the React UI over Server-Sent Events, which makes failures debuggable.",
      "Audit failures retry only the unsupported claim, not the whole pipeline.",
    ],
    architecture: [
      [{ name: "React UI", note: "streams traces over SSE" }],
      [{ name: "Supervisor", note: "decomposes · merges", accent: true }],
      [
        { name: "Payment agent", note: "typed tools" },
        { name: "Contract agent", note: "typed tools" },
        { name: "Progress agent", note: "typed tools" },
      ],
      [{ name: "Audit agent", note: "verifies every claim", accent: true }],
      [{ name: "PostgreSQL + pgvector", note: "documents · access zones · traces" }],
    ],
    stack: ["TypeScript", "Node.js", "Express", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/iamarjun23/construction-ops-multi-agent",
  },
  {
    slug: "nirman",
    title: "Nirman",
    kind: "Client project via Lyptron · Construction",
    status: "In production",
    summary:
      "A mobile app that links what was built on site to what has been paid for, for contractors and their workers.",
    problem:
      "Construction firms were reconciling work progress against payments by hand, across sites, with no shared record of who approved what.",
    solution:
      "I led the backend for a 15-screen Flutter app that ties every work-progress log directly to its payment status. Provider-based state keeps the app in sync with Firestore in real time, and project-code-based, role-based access control separates contractors from workers.",
    outcome:
      "Used daily by 30+ contractors and workers across 3 client firms, giving each business one auditable record for matching progress to payment.",
    decisions: [
      "Work-progress logs are tied directly to payment status, so reconciliation happens in the app instead of by hand.",
      "Access control is keyed on project code and role, separating what contractors and workers can see and do.",
      "Provider-based state management keeps all 15 screens in sync with Firestore in real time.",
      "Firebase Auth and Razorpay kept identity and payments on managed services, keeping the operational surface small.",
    ],
    architecture: [
      [{ name: "Flutter app", note: "15 screens · Provider" }],
      [
        { name: "Firebase Auth", note: "contractor · worker" },
        { name: "Razorpay", note: "payments" },
      ],
      [{ name: "Firestore", note: "progress ↔ payment · roles", accent: true }],
    ],
    stack: ["Flutter", "Dart", "Firebase", "Razorpay"],
    github: "https://github.com/VARITHSA/nirman",
  },
  {
    slug: "idyani",
    title: "Idyani",
    kind: "Client project via Lyptron · Music education",
    status: "In production",
    summary:
      "A desktop app that teaches Carnatic music to piano-trained students, with note-by-note feedback on what they play.",
    problem:
      "Students trained on Western piano had no structured feedback when learning Carnatic music outside a lesson.",
    solution:
      "An Electron + Node.js backend converts Western piano input into Carnatic swara notation in real time. A note-evaluation system scores timing accuracy and note placement, and Firebase handles auth, sessions, student–teacher bookings and payments.",
    outcome:
      "Supports 50+ students, 5 teachers and 3 composers, with a teacher dashboard that tracks each student's progress.",
    decisions: [
      "Piano input is converted to swara notation as it is played, inside the Electron + Node.js backend.",
      "The evaluator scores timing accuracy and note placement per note, which is what makes the feedback structured.",
      "Firebase Auth and session handling cover student–teacher bookings and payments alongside progress tracking.",
    ],
    architecture: [
      [{ name: "Piano / MIDI input" }],
      [{ name: "Electron app", note: "Node.js runtime", accent: true }],
      [
        { name: "Notation engine", note: "swara conversion" },
        { name: "Evaluator", note: "timing · placement" },
      ],
      [
        { name: "Firebase", note: "auth · bookings · payments" },
        { name: "Teacher dashboard", note: "per-student progress" },
      ],
    ],
    stack: ["Electron", "Node.js", "JavaScript", "Firebase"],
    github: "https://github.com/iamarjun23/IYDANI-SCORER",
  },
  {
    slug: "madhu-portfolio",
    title: "MadhuPortfolio",
    kind: "Client project via Lyptron · Website",
    status: "Live",
    summary: "A personal portfolio site for a client, from content structure to deployment.",
    problem: "The client needed a professional, fast site to present their work and background.",
    solution:
      "A statically generated Next.js site with a custom, responsive Tailwind front end. I handled the content structure, layout, build and deployment.",
    outcome: "Live in production at nmadhukumar.com.",
    decisions: [
      "Statically generated, so there is no server to maintain after handover.",
      "Custom responsive layout built with Tailwind rather than a template.",
    ],
    architecture: [
      [
        { name: "Content", note: "copy + media" },
        { name: "Tailwind UI", note: "responsive layout" },
      ],
      [{ name: "Next.js", note: "static generation", accent: true }],
      [{ name: "nmadhukumar.com" }],
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/iamarjun23/MadhuPortfolio",
    live: "https://nmadhukumar.com",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Dart", "SQL"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Flask", "REST APIs", "Server-Sent Events", "Firebase"],
  },
  {
    group: "Frontend & apps",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter", "Electron"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "pgvector", "MongoDB", "Firestore", "Pinecone"],
  },
  {
    group: "AI / retrieval",
    items: ["LangChain", "Multi-agent systems", "RAG", "Embeddings", "Evaluation harnesses"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub", "Docker", "Postman", "Razorpay"],
  },
] as const;
