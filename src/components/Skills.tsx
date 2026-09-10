import { skillGroups } from "@/lib/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="Tools used to build and ship the work above."
    >
      <dl className="reveal grid border-t border-line md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-[105px_1fr] items-baseline gap-3 border-b border-line py-5 text-[13px] md:odd:border-r md:odd:pr-8 md:even:pl-8 xl:border-r xl:px-8 xl:[&:nth-child(3n+1)]:pl-0 xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:pr-0 sm:grid-cols-[120px_1fr] sm:gap-5 sm:text-sm"
          >
            <dt className="font-mono text-[11px] leading-[1.5] tracking-[0.04em] text-brand2">
              {group.label}
            </dt>
            <dd className="m-0 leading-[1.65] text-muted">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
