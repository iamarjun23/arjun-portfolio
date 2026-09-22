import Image from "next/image";
import { hero, site } from "@/lib/content";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="shell pb-[clamp(40px,5vw,72px)] pt-[clamp(32px,4vw,56px)]">
      {/* Mobile keeps the desktop two-column read: text column flattens into the grid so the photo sits beside the greeting. */}
      <div className="grid grid-cols-[1fr_auto] gap-x-4 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="max-lg:contents lg:col-span-8">
          <p className="self-center text-[15px] leading-snug text-muted sm:text-lg">
            Hi, I&rsquo;m {site.name} — currently{" "}
            <span className="relative whitespace-nowrap text-ink">
              {hero.status}
              <span aria-hidden className="status-line absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-500" />
            </span>
          </p>

          <h1 className="mt-5 max-lg:col-span-2">
            <span className="block max-w-[18ch] text-[clamp(36px,4.4vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em]">
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

          <p className="mt-5 max-w-[60ch] text-base sm:text-lg max-lg:col-span-2 leading-relaxed text-muted">{hero.about}</p>

          <div className="mt-7 flex flex-wrap gap-2 sm:gap-3 max-lg:col-span-2">
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
          <figure className="col-start-2 row-start-1 w-24 sm:w-40 lg:col-span-4 lg:col-start-auto lg:row-start-auto lg:w-auto">
            <Image
              src={site.photo}
              alt={`${site.name}, software engineer`}
              width={1254}
              height={1254}
              preload
              unoptimized
              className="aspect-square w-full lg:max-h-[58vh] object-cover object-top grayscale-[35%]"
            />
            <figcaption className="mt-3 hidden lg:flex justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
              <span>{site.role}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
        )}
      </div>

      <dl className="mt-10 grid lg:mt-12 grid-cols-2 border-t border-line lg:grid-cols-4">
        {hero.highlights.map((h) => (
          <div key={h.label} className="border-line pt-4 pr-4 pb-2 max-lg:[&:nth-child(-n+2)]:pb-4 max-lg:even:border-l max-lg:even:pl-4 lg:pt-5 lg:pr-6 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">{h.label}</dt>
            <dd className="mt-2">
              <p className="font-medium">{h.value}</p>
              <p className="text-sm text-muted">{h.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
