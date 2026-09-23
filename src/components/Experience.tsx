import { experience } from "@/lib/content";
import { Section } from "./Section";
import { FiArrowUpRight } from "react-icons/fi";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      preview={experience.map((job) => job.org).join(" · ")} intro="Client product work, in-house tooling, and a mathematics and computing degree.">
      <ol className="relative ml-1.5 border-l border-line">
        {experience.map((job) => (
          <li key={job.title} className="reveal relative pb-10 pl-6 last:pb-0 sm:pb-12 sm:pl-10">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-1.5 size-3.5 border-2 border-bg ${job.current ? "bg-brand" : "bg-line"}`}
            />
            <div className="grid gap-2 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim md:col-span-3 md:pt-1 md:font-sans md:text-sm md:normal-case md:tracking-normal">
                <time>{job.time}</time>
              </p>
              <div className="md:col-span-9">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-lg font-semibold sm:text-2xl tracking-[-0.03em]">{job.org}</span>
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
                    {job.orgUrl.replace(/^https?:\/\/|\/$/g, "")} <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
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
