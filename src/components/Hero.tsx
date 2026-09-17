import Image from "next/image";
import { hero, site } from "@/lib/content";

function PhotoPanel() {
  return (
    <div className="relative aspect-square max-h-[min(380px,44vh)] w-full overflow-hidden bg-[linear-gradient(160deg,#20d3ee_0%,#087d8f_100%)] lg:aspect-auto lg:max-h-none lg:min-h-0 lg:flex-1">
      {site.photo ? (
        <Image
          src={site.photo}
          alt={`${site.name}, software engineer`}
          fill
          preload
          unoptimized
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover object-[50%_28%]"
        />
      ) : (
        <>
          <span className="absolute left-6 top-6 font-mono text-[11px] tracking-[0.08em] text-white/70">
            YOUR PHOTO
          </span>
          <div className="grid h-[310px] w-[210px] max-h-[70%] place-items-center rounded-t-[106px] border border-dashed border-[rgba(244,245,248,0.65)] bg-[linear-gradient(150deg,rgba(244,245,248,0.75),rgba(244,245,248,0.23))] font-mono text-xs text-[rgba(244,245,248,0.88)]">
            PHOTO PLACEHOLDER
          </div>
        </>
      )}
    </div>
  );
}

/** The featured project at a glance: three domain specialists, their shared
 * ground in the middle, and the audit layer that wraps every answer. */
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
      aria-label="Three specialist agents — payment, contract and progress — overlapping around a shared supervisor, wrapped by an audit layer"
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
        AUDIT LAYER
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
          <div>
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
          </div>
        </div>

        <div className="flex flex-col overflow-hidden border-line lg:col-span-4 lg:h-full lg:border-x">
          <div className="shrink-0 border-b border-line bg-s1 px-[clamp(22px,2.5vw,40px)] py-[clamp(14px,2.6vh,38px)]">
            <h2 className="mb-3 font-mono text-xs font-medium tracking-[0.05em] text-brand2">
              ABOUT ME
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-muted">
              {hero.about}
            </p>
          </div>
          <PhotoPanel />
        </div>

        <div className="flex flex-col justify-center lg:col-span-4 lg:items-start lg:pl-[clamp(28px,4vw,72px)] max-lg:grid max-lg:grid-cols-2 max-lg:items-center max-lg:gap-7 max-sm:grid-cols-1">
          <div className="aspect-square h-[clamp(180px,31vh,300px)] shrink-0 max-lg:mx-auto max-lg:h-auto max-lg:w-full max-lg:max-w-[300px] lg:mb-7">
            <AgentVenn />
          </div>
          <div>
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
