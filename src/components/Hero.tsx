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

/** Coverage map for the featured project: each circle is what one specialist
 * agent can answer on its own, overlaps are questions that need more than one
 * (the supervisor's job), and the dashed ring is the audit pass every answer
 * goes through. The caption under it spells this out. */
function AgentVenn() {
  const circles = [
    { cx: 120, cy: 142, label: "PAYMENT", lx: 93, ly: 116 },
    { cx: 200, cy: 142, label: "CONTRACT", lx: 227, ly: 116 },
    { cx: 160, cy: 214, label: "PROGRESS", lx: 160, ly: 252 },
  ];

  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Coverage map: three circles for the payment, contract and progress agents. Where they overlap, a question needs more than one agent and the supervisor merges their evidence. A dashed ring around all three marks the audit pass."
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="venn-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx={160}
        cy={170}
        r={140}
        fill="none"
        stroke="#0f8fa3"
        strokeWidth={1}
        strokeDasharray="4 6"
        opacity={0.6}
      />
      <text
        x={160}
        y={18}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="1.6"
        fill="#0f8fa3"
      >
        AUDIT PASS
      </text>

      {circles.map((c) => (
        <circle
          key={c.label}
          cx={c.cx}
          cy={c.cy}
          r={74}
          fill="#20d3ee"
          fillOpacity={0.1}
          stroke="#20d3ee"
          strokeOpacity={0.55}
          strokeWidth={1.25}
        />
      ))}

      {circles.map((c) => (
        <text
          key={c.label}
          x={c.lx}
          y={c.ly}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="13"
          letterSpacing="0.8"
          fill="#b5babb"
        >
          {c.label}
        </text>
      ))}

      <rect
        x={151}
        y={157}
        width={18}
        height={18}
        rx={1.5}
        fill="#20d3ee"
        filter="url(#venn-glow)"
        transform="rotate(45 160 166)"
      />
      <text
        x={160}
        y={199}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="1"
        fill="#72e6f5"
      >
        SUPERVISOR
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
          <div className="aspect-square h-[clamp(170px,28vh,280px)] shrink-0 max-lg:mx-auto max-lg:h-auto max-lg:w-full max-lg:max-w-[280px] lg:mb-4">
            <AgentVenn />
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
