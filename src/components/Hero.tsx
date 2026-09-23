import Image from "next/image";
import { hero, site } from "@/lib/content";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="shell pb-[clamp(40px,5vw,72px)] pt-[clamp(32px,4vw,56px)]">
      {/* Below lg the text column flattens into the grid: photo + name/role form a profile header, the rest spans both columns. */}
      <div className="grid grid-cols-[auto_1fr] gap-x-3.5 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="max-lg:contents lg:col-span-8">
          <div className="col-start-2 row-start-1 self-center lg:hidden">
            <p className="text-lg font-semibold leading-tight tracking-[-0.03em]">{site.name}</p>
            <p className="mt-0.5 text-sm text-muted">
              {site.role} · Co-founder, {site.company.name}
            </p>
          </div>

          <ul className="col-span-2 mt-4 flex flex-wrap gap-1.5 text-xs lg:hidden">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-wash px-2.5 py-1 text-brand">
              <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />
              {hero.status[0].toUpperCase() + hero.status.slice(1)}
            </li>
            <li className="rounded-full bg-wash px-2.5 py-1 text-brand">{site.location}</li>
          </ul>

          <p className="self-center max-lg:hidden text-sm leading-snug text-muted sm:text-lg">
            Hi, I&rsquo;m {site.name} — currently{" "}
            <span className="relative whitespace-nowrap text-ink">
              {hero.status}
              <span aria-hidden className="status-line absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-500" />
            </span>
          </p>

          <h1 className="mt-4 max-lg:col-span-2 lg:mt-5">
            <span className="block max-w-[18ch] text-[clamp(28px,4.4vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em]">
              I build backends and AI systems, and run engineering at{" "}
              <a
                href={site.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand decoration-2 underline-offset-[0.12em] hover:underline"
              >
                Lyptron
              </a>
              .
            </span>
          </h1>

          <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted max-lg:col-span-2 sm:text-lg lg:mt-5">{hero.about}</p>

          <p className="col-span-2 mt-4 flex gap-5 text-sm font-medium lg:hidden">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink">
              <FiGithub aria-hidden className="size-4" /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink">
              <FiLinkedin aria-hidden className="size-4" /> LinkedIn
            </a>
            <a href="/case-study" className="ml-auto text-brand">
              Case study →
            </a>
          </p>

          <div className="mt-7 flex flex-wrap gap-3 max-lg:hidden">
            <Button variant="primary" href={`mailto:${site.email}`}>
              Email me
            </Button>
            <Button href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </Button>
            <Button href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </Button>
          </div>
        </div>

        {site.photo && (
          <figure className="col-start-1 row-start-1 w-14 sm:w-20 lg:col-span-4 lg:col-start-auto lg:row-start-auto lg:w-auto">
            <Image
              src={site.photo}
              alt={`${site.name}, software engineer`}
              width={1254}
              height={1254}
              preload
              unoptimized
              className="aspect-square w-full rounded-[14px] lg:rounded-none lg:max-h-[58vh] object-cover object-top grayscale-[35%]"
            />
            <figcaption className="mt-3 hidden lg:flex justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
              <span>{site.role}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
        )}
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-2 lg:mt-12 lg:gap-0 lg:border-t lg:border-line lg:grid-cols-4">
        {hero.highlights.map((h) => (
          <div key={h.label} className="border-line max-lg:rounded-xl max-lg:border max-lg:bg-card max-lg:p-3.5 lg:pt-5 lg:pr-6 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">{h.label}</dt>
            <dd className="mt-1.5 lg:mt-2">
              <p className="font-medium">{h.value}</p>
              <p className="text-sm text-muted">{h.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
