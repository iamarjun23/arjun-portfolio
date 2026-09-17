import type { ReactNode } from "react";

/**
 * Hand-drawn, diagram-style preview + architecture graphics per project.
 * Inline SVG (no binary assets) so they stay crisp, themeable, and diff-able.
 */

const LINE = "#262b31";
const BRAND = "#20d3ee";
const BRAND2 = "#0f8fa3";
const INK = "#f4f5f8";
const MUTED = "#8b9199";

function Frame({ children, viewBox = "0 0 400 240" }: { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      className="h-full w-full"
      role="img"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function BrowserChrome({ x = 0, y = 0, w = 400, h = 240, accent = BRAND }: { x?: number; y?: number; w?: number; h?: number; accent?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="#0c0e11" stroke={LINE} />
      <rect x={x} y={y} width={w} height={26} rx={10} fill="#12151a" />
      <rect x={x} y={y + 20} width={w} height={6} fill="#12151a" />
      <circle cx={x + 16} cy={y + 13} r={3.5} fill="#3a4048" />
      <circle cx={x + 28} cy={y + 13} r={3.5} fill="#3a4048" />
      <circle cx={x + 40} cy={y + 13} r={3.5} fill="#3a4048" />
      <rect x={x + 60} y={y + 8} width={w - 90} height={10} rx={5} fill="#181c21" />
      <rect x={x + 60} y={y + 8} width={40} height={10} rx={5} fill={accent} opacity={0.25} />
    </g>
  );
}

/* ---------------- Preview cards ---------------- */

function ConstructionOpsPreview() {
  return (
    <Frame>
      <BrowserChrome />
      {[
        { label: "PAYMENT", x: 20 },
        { label: "CONTRACT", x: 148 },
        { label: "PROGRESS", x: 276 },
      ].map((agent) => (
        <g key={agent.label}>
          <rect x={agent.x} y={44} width={104} height={70} rx={6} fill="#12151a" stroke={LINE} />
          <circle cx={agent.x + 14} cy={58} r={3} fill={BRAND} />
          <text x={agent.x + 24} y={61} fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="0.5">
            {agent.label}
          </text>
          <rect x={agent.x + 10} y={72} width={84} height={5} rx={2.5} fill="#22262c" />
          <rect x={agent.x + 10} y={83} width={64} height={5} rx={2.5} fill="#22262c" />
          <rect x={agent.x + 10} y={94} width={72} height={5} rx={2.5} fill="#22262c" />
        </g>
      ))}
      <rect x={20} y={128} width={360} height={30} rx={6} fill="#0f8fa3" opacity={0.12} stroke={BRAND2} strokeDasharray="3 3" />
      <text x={34} y={147} fontFamily="monospace" fontSize="9" fill={BRAND} letterSpacing="0.4">
        SUPERVISOR — merging evidence from 3 agents
      </text>
      <rect x={20} y={170} width={360} height={5} rx={2.5} fill="#22262c" />
      <rect x={20} y={182} width={280} height={5} rx={2.5} fill="#22262c" />
      <rect x={20} y={194} width={320} height={5} rx={2.5} fill="#22262c" />
      <rect x={20} y={206} width={2} height={16} fill={BRAND} />
      <text x={30} y={216} fontFamily="monospace" fontSize="8" fill={MUTED}>
        AUDIT — claim verified against source
      </text>
    </Frame>
  );
}

function NirmanPreview() {
  return (
    <Frame>
      <rect x={0} y={0} width={400} height={240} rx={10} fill="#0c0e11" stroke={LINE} />
      {/* phone frame */}
      <rect x={140} y={14} width={120} height={212} rx={16} fill="#12151a" stroke={LINE} strokeWidth={1.5} />
      <rect x={150} y={30} width={100} height={10} rx={2} fill="#20d3ee" opacity={0.2} />
      <text x={154} y={38} fontFamily="monospace" fontSize="6.5" fill={BRAND}>
        NIRMAN
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(150, ${52 + i * 42})`}>
          <rect width={100} height={34} rx={5} fill="#181c21" stroke={LINE} />
          <rect x={8} y={8} width={50} height={5} rx={2.5} fill="#2a2f36" />
          <rect x={8} y={18} width={34} height={5} rx={2.5} fill="#2a2f36" />
          <rect x={66} y={9} width={26} height={14} rx={4} fill={i % 2 === 0 ? BRAND2 : "#3a4048"} opacity={i % 2 === 0 ? 0.35 : 0.6} />
        </g>
      ))}
      <text x={40} y={40} fontFamily="monospace" fontSize="8" fill={MUTED}>
        WORK LOG
      </text>
      <rect x={40} y={50} width={70} height={5} rx={2.5} fill="#22262c" />
      <rect x={40} y={62} width={54} height={5} rx={2.5} fill="#22262c" />
      <text x={40} y={130} fontFamily="monospace" fontSize="8" fill={MUTED}>
        PAYMENTS
      </text>
      <circle cx={60} cy={150} r={18} fill="none" stroke={BRAND} strokeWidth={3} strokeDasharray="80 33" transform="rotate(-90 60 150)" />
      <text x={51} y={154} fontFamily="monospace" fontSize="8" fill={BRAND}>
        70%
      </text>
      <text x={286} y={40} fontFamily="monospace" fontSize="8" fill={MUTED}>
        3 FIRMS
      </text>
      <text x={286} y={54} fontFamily="monospace" fontSize="8" fill={MUTED}>
        30+ USERS
      </text>
    </Frame>
  );
}

function IdyaniPreview() {
  return (
    <Frame>
      <BrowserChrome accent="#20d3ee" />
      {/* staff lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={24} y1={54 + i * 10} x2={376} y2={54 + i * 10} stroke={LINE} strokeWidth={1} />
      ))}
      {/* notes */}
      {[48, 92, 140, 188, 232, 276, 320].map((x, i) => (
        <ellipse key={x} cx={x} cy={54 + ((i * 7) % 40)} rx={6} ry={4.5} fill={i % 3 === 0 ? BRAND : INK} opacity={i % 3 === 0 ? 1 : 0.7} />
      ))}
      <text x={24} y={120} fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="0.4">
        SWARA: S R G M P D N
      </text>
      {/* piano keys */}
      <g transform="translate(24, 140)">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={i * 25.4} y={0} width={24} height={70} rx={2} fill="#181c21" stroke={LINE} />
        ))}
        {[1, 2, 4, 5, 6, 8, 9, 11, 12, 13].map((i) => (
          <rect key={i} x={i * 25.4 - 8} y={0} width={16} height={42} rx={2} fill="#0c0e11" stroke={LINE} />
        ))}
        <rect x={4 * 25.4} y={0} width={24} height={70} rx={2} fill={BRAND2} opacity={0.4} />
      </g>
      <text x={310} y={222} fontFamily="monospace" fontSize="8" fill={BRAND}>
        98% timing
      </text>
    </Frame>
  );
}

function MadhuPortfolioPreview() {
  return (
    <Frame>
      <BrowserChrome />
      <rect x={20} y={46} width={200} height={14} rx={3} fill="#22262c" />
      <rect x={20} y={68} width={140} height={8} rx={3} fill="#181c21" />
      <rect x={20} y={82} width={110} height={8} rx={3} fill="#181c21" />
      <rect x={20} y={104} width={70} height={22} rx={5} fill={BRAND} opacity={0.85} />
      <rect x={260} y={40} width={120} height={90} rx={8} fill="#181c21" stroke={LINE} />
      <circle cx={320} cy={72} r={18} fill={BRAND2} opacity={0.5} />
      <rect x={280} y={100} width={80} height={6} rx={3} fill="#2a2f36" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={20 + i * 128} y={150} width={112} height={70} rx={7} fill="#12151a" stroke={LINE} />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={32 + i * 128} y={160} width={88} height={36} rx={4} fill="#20d3ee" opacity={0.12} />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={32 + i * 128} y={202} width={60} height={5} rx={2.5} fill="#2a2f36" />
      ))}
    </Frame>
  );
}

export const projectPreviews: Partial<Record<string, () => ReactNode>> = {
  "Construction Ops Multi-Agent System": ConstructionOpsPreview,
  Nirman: NirmanPreview,
  Idyani: IdyaniPreview,
  MadhuPortfolio: MadhuPortfolioPreview,
};

/* ---------------- Architecture diagrams ---------------- */

function Node({ x, y, w, h, label, sub, accent }: { x: number; y: number; w: number; h: number; label: string; sub?: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={accent ? "#0f8fa3" : "#12151a"} fillOpacity={accent ? 0.18 : 1} stroke={accent ? BRAND2 : LINE} strokeDasharray={accent ? "3 3" : undefined} />
      <text x={x + w / 2} y={y + h / 2 + (sub ? -2 : 4)} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={accent ? BRAND : INK}>
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={LINE} strokeWidth={1.25} markerEnd="url(#arrowhead)" />
  );
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill={MUTED} />
      </marker>
    </defs>
  );
}

function ConstructionOpsArchitecture() {
  return (
    <Frame viewBox="0 0 400 210">
      <ArrowDefs />
      <Node x={20} y={14} w={108} h={30} label="React UI" sub="Server-Sent Events" />
      <Arrow x1={128} y1={29} x2={163} y2={29} />
      <Node x={166} y={14} w={112} h={30} label="Supervisor" sub="decomposes + merges" accent />
      <Arrow x1={92} y1={44} x2={78} y2={64} />
      <Arrow x1={222} y1={44} x2={200} y2={64} />
      <Arrow x1={222} y1={44} x2={322} y2={64} />
      {["Payment", "Contract", "Progress"].map((label, i) => (
        <Node key={label} x={20 + i * 130} y={70} w={110} h={30} label={`${label} agent`} sub="typed tools" />
      ))}
      <Arrow x1={78} y1={100} x2={155} y2={122} />
      <Arrow x1={200} y1={100} x2={200} y2={122} />
      <Arrow x1={322} y1={100} x2={245} y2={122} />
      <Node x={120} y={128} w={160} h={30} label="Audit agent" sub="verifies every claim" accent />
      <Arrow x1={200} y1={158} x2={200} y2={172} />
      <Node x={130} y={172} w={140} h={30} label="PostgreSQL" sub="pgvector + traces" />
    </Frame>
  );
}

function NirmanArchitecture() {
  return (
    <Frame viewBox="0 0 400 220">
      <ArrowDefs />
      <Node x={26} y={24} w={110} h={32} label="Flutter app" sub="15 screens · Provider" />
      <Arrow x1={136} y1={40} x2={172} y2={40} />
      <Node x={175} y={24} w={110} h={32} label="Firebase Auth" sub="contractor / worker" />
      <Arrow x1={230} y1={56} x2={230} y2={90} />
      <Node x={175} y={96} w={110} h={32} label="Firestore" sub="progress + roles" accent />
      <Arrow x1={136} y1={40} x2={90} y2={90} />
      <Node x={40} y={96} w={110} h={32} label="Razorpay" sub="payment gateway" />
      <Arrow x1={95} y1={128} x2={200} y2={160} />
      <Arrow x1={230} y1={128} x2={220} y2={160} />
      <Node x={130} y={166} w={140} h={32} label="Progress ↔ payment" sub="single source of truth" accent />
    </Frame>
  );
}

function IdyaniArchitecture() {
  return (
    <Frame viewBox="0 0 400 220">
      <ArrowDefs />
      <Node x={20} y={24} w={110} h={32} label="Piano / MIDI" sub="western input" />
      <Arrow x1={130} y1={40} x2={166} y2={40} />
      <Node x={168} y={24} w={120} h={32} label="Electron app" sub="Node.js runtime" accent />
      <Arrow x1={228} y1={56} x2={228} y2={88} />
      <Node x={168} y={94} w={120} h={32} label="Notation engine" sub="swara + timing score" />
      <Arrow x1={168} y1={110} x2={40} y2={110} />
      <Node x={20} y={94} w={130} h={32} label="Firebase" sub="bookings · payments" />
      <Arrow x1={228} y1={126} x2={228} y2={160} />
      <Node x={168} y={166} w={140} h={32} label="Teacher dashboard" sub="5 teachers · 50+ students" accent />
    </Frame>
  );
}

function MadhuPortfolioArchitecture() {
  return (
    <Frame viewBox="0 0 400 220">
      <ArrowDefs />
      <Node x={20} y={90} w={100} h={32} label="Content" sub="copy + media" />
      <Arrow x1={120} y1={106} x2={156} y2={106} />
      <Node x={158} y={90} w={110} h={32} label="Next.js" sub="static generation" accent />
      <Arrow x1={268} y1={106} x2={304} y2={106} />
      <Node x={306} y={90} w={80} h={32} label="Deployed" sub="nmadhukumar.com" />
      <Arrow x1={213} y1={90} x2={213} y2={54} />
      <Node x={158} y={20} w={110} h={32} label="Tailwind UI" sub="responsive layout" />
    </Frame>
  );
}

export const projectArchitectures: Partial<Record<string, () => ReactNode>> = {
  "Construction Ops Multi-Agent System": ConstructionOpsArchitecture,
  Nirman: NirmanArchitecture,
  Idyani: IdyaniArchitecture,
  MadhuPortfolio: MadhuPortfolioArchitecture,
};
