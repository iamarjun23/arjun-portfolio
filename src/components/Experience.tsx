import { experience } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Client product work, in-house tooling, and a mathematics and computing degree.">
      <ol className="relative ml-1.5 border-l border-line">
        {experience.map((job) => (
          <li key={job.title} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-1.5 size-3.5 border-2 border-bg ${job.current ? "bg-brand" : "bg-line"}`}
            />
            <div className="grid gap-3 md:grid-cols-12 md:gap-8">
              <p className="text-sm text-dim md:col-span-3 md:pt-1">
                <time>{job.time}</time>
              </p>
              <div className="md:col-span-9">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-2xl font-semibold tracking-[-0.03em]">{job.org}</span>
                  {job.current && (
                    <span className="tag text-brand">Current</span>
                  )}
                </h3>
                <p className="mt-1 font-medium text-ink/80">{job.title}</p>
                <p className="mt-3 max-w-[70ch] text-muted">{job.summary}</p>
                {job.points && (
                  <ul className="mt-3 grid gap-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-muted">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-dim" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {job.orgUrl && (
                  <a
                    href={job.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
                  >
                    {job.orgUrl.replace(/^https?:\/\/|\/$/g, "")} ↗
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
