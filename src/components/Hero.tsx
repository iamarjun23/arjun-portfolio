import Image from "next/image";
import { hero, site } from "@/lib/content";

/** Square panel matching the source photo's aspect, so the portrait is shown
 * whole — never cropped and never letterboxed. Capped against viewport height
 * so it still fits a single screen on short windows. */
function PhotoPanel() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,58vh)] overflow-hidden bg-s1">
      {site.photo ? (
        <Image
          src={site.photo}
          alt={`${site.name}, software engineer`}
          fill
          preload
          unoptimized
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[linear-gradient(160deg,#20d3ee_0%,#087d8f_100%)]">
          <span className="font-mono text-xs text-[rgba(244,245,248,0.88)]">
            PHOTO PLACEHOLDER
          </span>
        </div>
      )}
    </div>
  );
}

/* Theme tokens, inlined so the SVG can paint with them. */
const LINE = "#2a2d2e";
const PANEL = "#0b0b0b";
const BAR = "#232627";
const BRAND = "#20d3ee";
const BRAND2 = "#0f8fa3";
const MUTED = "#b5babb";
const DIM = "#858b8c";

const agents = [
  { label: "PAYMENT", x: 4 },
  { label: "CONTRACT", x: 112 },
  { label: "PROGRESS", x: 220 },
];

/** Solid frame for a step that is code, dashed accent for a step that is a
 * checkpoint — same language as the project architecture diagrams. */
const Box = ({
  x,
  y,
  w,
  h,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx={4}
    fill={accent ? BRAND2 : PANEL}
    fillOpacity={accent ? 0.14 : 1}
    stroke={accent ? BRAND2 : LINE}
    strokeDasharray={accent ? "3 3" : undefined}
  />
);

/** The featured project drawn the way the rest of the site draws systems: a
 * wireframe of the path one question takes — supervisor splits it across the
 * agents that can answer it, the audit agent checks every claim against its
 * evidence, and only then does the answer ship. The caption under it says the
 * same thing in words. */
function AgentFlow() {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Wireframe of the question path: a question goes to the supervisor, which splits it across the payment, contract and progress agents; their evidence goes to an audit agent that verifies every claim before the cited answer is returned."
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="hero-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill={DIM} />
        </marker>
      </defs>

      <g
        stroke={LINE}
        strokeWidth={1.25}
        markerEnd="url(#hero-arrow)"
        fill="none"
      >
        <line x1={160} y1={40} x2={160} y2={52} />
        <path d="M160 88 L160 96 L52 96 L52 108" />
        <path d="M160 88 L160 108" />
        <path d="M160 88 L160 96 L268 96 L268 108" />
        <path d="M52 166 L52 178 L160 178 L160 188" />
        <path d="M160 166 L160 188" />
        <path d="M268 166 L268 178 L160 178 L160 188" />
        <line x1={160} y1={224} x2={160} y2={236} />
      </g>

      {/* Question — a wireframe input bar, where every answer starts. */}
      <Box x={52} y={10} w={216} h={28} />
      <circle cx={68} cy={24} r={3} fill={BRAND} />
      <text
        x={80}
        y={27}
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="0.6"
        fill={MUTED}
      >
        QUESTION
      </text>
      <rect x={150} y={21} width={104} height={5} rx={2.5} fill={BAR} />

      {/* Supervisor — splits the question, merges what comes back. */}
      <Box x={40} y={56} w={240} h={32} accent />
      <text
        x={160}
        y={72}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="0.8"
        fill={BRAND}
      >
        SUPERVISOR
      </text>
      <text
        x={160}
        y={83}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8.5"
        fill={DIM}
      >
        splits the question · merges the evidence
      </text>

      {/* One box per specialist agent, each retrieving through typed tools. */}
      {agents.map((agent) => (
        <g key={agent.label}>
          <Box x={agent.x} y={110} w={96} h={56} />
          <circle cx={agent.x + 14} cy={126} r={3} fill={BRAND} />
          <text
            x={agent.x + 24}
            y={129}
            fontFamily="monospace"
            fontSize="8.5"
            letterSpacing="0.4"
            fill={MUTED}
          >
            {agent.label}
          </text>
          {[76, 60, 44].map((w, i) => (
            <rect
              key={w}
              x={agent.x + 10}
              y={138 + i * 11}
              width={w}
              height={5}
              rx={2.5}
              fill={BAR}
            />
          ))}
        </g>
      ))}

      {/* Audit — nothing ships until every claim matches its source. */}
      <Box x={40} y={190} w={240} h={34} accent />
      <text
        x={160}
        y={206}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="0.8"
        fill={BRAND}
      >
        AUDIT
      </text>
      <text
        x={160}
        y={218}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="8.5"
        fill={DIM}
      >
        every claim checked against its source
      </text>

      {/* Answer — wireframe text block with the citation that backs it. */}
      <Box x={40} y={238} w={240} h={72} />
      <text
        x={54}
        y={257}
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="0.6"
        fill={MUTED}
      >
        ANSWER
      </text>
      <rect x={54} y={266} width={212} height={5} rx={2.5} fill={BAR} />
      <rect x={54} y={277} width={168} height={5} rx={2.5} fill={BAR} />
      <rect x={54} y={292} width={2} height={12} fill={BRAND} />
      <text x={64} y={302} fontFamily="monospace" fontSize="8.5" fill={BRAND}>
        cited · verified
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="shell relative flex flex-col py-[clamp(16px,3vh,40px)] lg:h-[calc(100svh-70px)] lg:overflow-hidden lg:pb-[clamp(56px,9vh,92px)]"
    >
      <div className="grid gap-[clamp(20px,4vh,40px)] lg:min-h-0 lg:flex-1 lg:grid-cols-12 lg:gap-0">
        <div className="flex flex-col justify-center lg:col-span-4 lg:pr-[clamp(28px,4vw,72px)]">
          <p className="font-mono text-xs font-medium tracking-[0.04em] text-brand2">
            {hero.kicker}
          </p>
          <h1 className="my-3 text-[clamp(40px,min(6vw,10vh),112px)] font-semibold leading-[0.9] tracking-[-0.075em]">
            {site.name}
          </h1>
          <p className="text-[clamp(18px,min(2.4vw,4vh),33px)] leading-[1.1] tracking-[-0.035em] text-muted">
            {hero.role[0]}
            <br />
            {hero.role[1]}
          </p>

          <div className="mt-[clamp(20px,3.5vh,36px)] border-t border-line pt-[clamp(14px,2.4vh,24px)]">
            <h2 className="mb-2.5 font-mono text-xs font-medium tracking-[0.05em] text-brand2">
              ABOUT ME
            </h2>
            <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted">
              {hero.about}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center border-line lg:col-span-4 lg:h-full lg:border-x lg:px-[clamp(20px,2.5vw,44px)]">
          <PhotoPanel />
        </div>

        <div className="flex flex-col justify-center lg:col-span-4 lg:items-start lg:pl-[clamp(28px,4vw,72px)] max-lg:grid max-lg:grid-cols-2 max-lg:items-center max-lg:gap-7 max-sm:grid-cols-1">
          <div className="aspect-square h-[clamp(190px,30vh,300px)] shrink-0 max-lg:mx-auto max-lg:h-auto max-lg:w-full max-lg:max-w-[300px] lg:mb-4">
            <AgentFlow />
          </div>
          <div>
            <p className="mb-[clamp(16px,2.4vh,26px)] max-w-[46ch] font-mono text-[11px] leading-[1.7] text-dim">
              {hero.featured.diagramNote}
            </p>
            <p className="font-mono text-xs font-medium tracking-[0.04em] text-brand2">
              {hero.featured.kicker}
            </p>
            <h2 className="mb-2 mt-1.5 text-xl tracking-[-0.035em]">
              {hero.featured.title}
            </h2>
            <p className="mb-4 max-w-[48ch] text-[15px] text-muted">
              {hero.featured.blurb}
            </p>
            <ul className="flex flex-wrap gap-2">
              {hero.featured.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-dashed border-line px-2.5 py-1.5 font-mono text-[11px] text-dim"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="group absolute inset-x-0 bottom-3 mx-auto hidden w-fit flex-col items-center gap-2 [@media(min-height:640px)]:lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.15em] text-dim transition-colors duration-200 group-hover:text-brand2">
          SCROLL
        </span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-line pt-1.5 transition-colors duration-200 group-hover:border-brand2">
          <span className="size-1 animate-bounce rounded-full bg-brand2" />
        </span>
      </a>
    </section>
  );
}
