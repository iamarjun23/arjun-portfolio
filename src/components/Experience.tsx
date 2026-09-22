import { LuArrowUpRight } from "react-icons/lu";
import { experience } from "@/lib/content";
import { Section, Tag } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Client product work at my own studio, alongside a support-automation role."
    >
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.org}>
            <article className="grid gap-x-8 gap-y-3 md:grid-cols-[10rem_1fr]">
              <p className="font-mono text-[13px] text-dim md:pt-1">
                {job.start} — {job.end}
              </p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}
                  <span className="font-normal text-dim"> at </span>
                  {job.orgUrl ? (
                    <a
                      href={job.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex items-center gap-0.5"
                    >
                      {job.org}
                      <LuArrowUpRight aria-hidden className="size-4 text-dim" />
                    </a>
                  ) : (
                    job.org
                  )}
                </h3>
                {job.location && <p className="mt-0.5 text-sm text-dim">{job.location}</p>}
                <p className="mt-3 max-w-[70ch] text-muted">{job.summary}</p>
                <ul className="mt-4 max-w-[70ch] space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-5 text-muted">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-line-strong" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
