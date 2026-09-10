import { experience } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Commercial product work alongside a mathematics and computing degree."
    >
      <ol className="grid">
        {experience.map((job) => (
          <li
            key={job.title}
            className="reveal grid gap-1.5 border-b border-line py-8 first:border-t md:grid-cols-12 md:gap-x-8"
          >
            <p className="font-mono text-xs text-dim md:col-span-3">
              <time>{job.time}</time>
            </p>
            <div className="md:col-span-9 md:grid md:grid-cols-9 md:gap-8">
              <h3 className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 text-xl tracking-[-0.025em] md:col-span-4">
                <span>
                  {job.title} · {job.org}
                </span>
                {job.orgUrl && (
                  <a
                    href={job.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-brand pb-0.5 font-mono text-xs text-brand2 transition-colors duration-200 hover:text-ink"
                  >
                    Visit {job.org} <span aria-hidden>↗</span>
                  </a>
                )}
              </h3>
              <div className="md:col-span-5">
              <p className="max-w-[75ch] text-base text-muted">{job.summary}</p>
              {job.points && (
                <ul className="mt-2.5 list-disc pl-[18px] text-base text-muted marker:text-line">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
