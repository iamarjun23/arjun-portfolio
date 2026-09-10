import Image from "next/image";
import { hero, site } from "@/lib/content";

function PhotoPanel() {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-[linear-gradient(160deg,#20d3ee_0%,#087d8f_100%)]">
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-6 -right-1 select-none text-[clamp(52px,6vw,86px)] font-bold leading-none tracking-[-0.08em] text-black/20 [writing-mode:vertical-rl] [transform:rotate(180deg)]"
      >
        {site.name.toUpperCase()}
      </span>

      {site.photo ? (
        <Image
          src={site.photo}
          alt={`${site.name}, software engineer`}
          fill
          preload
          unoptimized
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover object-center"
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

function Mockup() {
  return (
    <div
      aria-hidden
      className="mb-8 h-[clamp(160px,27vh,220px)] -rotate-[4deg] overflow-hidden rounded-sm bg-[linear-gradient(145deg,#edf1f2,#777d7f)] p-4.5 shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
    >
      <div className="mb-4 h-2 w-[38%] rounded-full bg-[#20d3ee]" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-[68px] rounded-lg bg-white/75" />
        <div className="h-[68px] rounded-lg bg-white/75" />
        <div className="col-span-2 h-[38px] rounded-lg bg-white/75" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="shell grid gap-10 py-[clamp(42px,6vw,76px)] lg:grid-cols-12 lg:items-center lg:gap-0"
    >
      <div className="flex flex-col justify-center lg:col-span-4 lg:pr-[clamp(28px,4vw,72px)]">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.04em] text-brand2">
            {hero.kicker}
          </p>
          <h1 className="my-3 text-[clamp(58px,6vw,112px)] font-semibold leading-[0.9] tracking-[-0.075em]">
            {site.name}
          </h1>
          <p className="text-[clamp(20px,2.4vw,33px)] leading-[1.1] tracking-[-0.035em] text-muted">
            {hero.role[0]}
            <br />
            {hero.role[1]}
          </p>
        </div>

      </div>

      <div className="overflow-hidden border-line lg:col-span-4 lg:border-x">
        <div className="border-b border-line bg-s1 px-[clamp(22px,2.5vw,40px)] py-[clamp(22px,2.8vw,38px)]">
          <h2 className="mb-3 font-mono text-xs font-medium tracking-[0.05em] text-brand2">
            ABOUT ME
          </h2>
          <p className="max-w-[46ch] text-base leading-relaxed text-muted">
            {hero.about}
          </p>
        </div>
        <PhotoPanel />
      </div>

      <div className="flex flex-col justify-center lg:col-span-4 lg:pl-[clamp(28px,4vw,72px)] max-lg:gap-7 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Mockup />
        <div className="self-center">
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
    </section>
  );
}
