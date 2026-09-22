import { skills } from "@/lib/content";
import { Section, Tag } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Everything here has been used in the projects above or in client work."
    >
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((row) => (
          <div key={row.group} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <dt className="text-sm font-medium sm:pt-0.5">{row.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {row.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
