import Image from "next/image";
import { LuDownload, LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { glance, highlights, intro, site } from "@/lib/content";
import { Button } from "./Button";
import { CopyEmail } from "./CopyEmail";
import { LocalTime } from "./LocalTime";

export function Intro() {
  return (
    <section id="top" aria-labelledby="intro-name" className="container-page pb-14 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 xl:col-span-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-muted">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-50 motion-reduce:hidden" />
              <span className="relative size-2 rounded-full bg-ok" />
            </span>
            {intro.status}
          </p>

          <h1 id="intro-name" className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-muted">
            {site.role} <span className="text-dim">·</span> Backend &amp; full-stack
          </p>

          <p className="mt-8 max-w-[34ch] text-2xl font-medium leading-snug tracking-tight sm:text-[28px]">
            {intro.headline}
          </p>
          <div className="mt-5 max-w-[64ch] space-y-4 text-[16px] leading-relaxed text-muted">
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 print:hidden">
            <Button variant="primary" href={site.resume} download="Arjun-L-Resume.pdf">
              <LuDownload aria-hidden className="size-4" />
              Download résumé
            </Button>
            <Button href={`mailto:${site.email}`}>
              <LuMail aria-hidden className="size-4" />
              Email me
            </Button>
            <CopyEmail email={site.email} />
            <span aria-hidden className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-md text-muted transition-colors hover:bg-sunken hover:text-ink"
            >
              <LuGithub className="size-[18px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-md text-muted transition-colors hover:bg-sunken hover:text-ink"
            >
              <LuLinkedin className="size-[18px]" />
            </a>
          </div>

          {/* Print-only contact line, since the buttons above are hidden on paper. */}
          <p className="mt-6 hidden text-sm print:block">
            {site.email} · {site.phone} · {site.github.replace("https://", "")} ·{" "}
            {site.linkedin.replace("https://", "")}
          </p>
        </div>

        <aside
          aria-label="At a glance"
          className="rounded-xl border border-line bg-surface lg:col-span-5 xl:col-span-4 print:hidden"
        >
          <div className="flex items-center gap-4 border-b border-line p-5">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-sunken">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                preload
                unoptimized
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-medium">{site.name}</p>
              <p className="text-sm text-muted">{site.role}</p>
              <p className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[13px] text-dim">
                <LuMapPin aria-hidden className="size-3.5 shrink-0" />
                Bangalore · <LocalTime timeZone={site.timeZone} /> IST
              </p>
            </div>
          </div>
          <dl className="divide-y divide-line px-5 text-sm">
            {glance.map((row) => (
              <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                <dt className="text-dim">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line p-5 text-sm">
            <p className="text-dim">Best way to reach me</p>
            <a href={`mailto:${site.email}`} className="link mt-0.5 inline-block break-all">
              {site.email}
            </a>
          </div>
        </aside>
      </div>

      <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-line gap-px md:grid-cols-4 lg:mt-20">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse gap-1 bg-bg p-5">
            <dt className="text-sm leading-snug text-muted">{h.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight tabular-nums">{h.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
