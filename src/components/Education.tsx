import { education } from "@/lib/content";
import { Section, Tag } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <article className="grid gap-x-8 gap-y-3 md:grid-cols-[10rem_1fr]">
        <p className="font-mono text-[13px] text-dim md:pt-1">
          {education.start} — {education.end}
        </p>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{education.degree}</h3>
          <p className="mt-0.5 text-muted">
            {education.school} <span className="text-dim">· {education.location}</span>
          </p>
          <p className="mt-4 text-sm text-dim">Relevant coursework</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
