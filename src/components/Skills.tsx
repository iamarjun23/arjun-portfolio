import { skillGroups } from "@/lib/content";
import { Section } from "./Section";
import { TechChip } from "./TechIcon";

const allSkills = skillGroups.flatMap((g) => g.items);

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      preview={`${allSkills.slice(0, 4).join(" · ")} · +${allSkills.length - 4}`} intro="Everything here is used in a project above.">
      <div className="reveal grid gap-px overflow-hidden grid-cols-2 max-lg:gap-x-4 max-lg:gap-y-5 lg:rounded-2xl lg:border lg:border-line lg:bg-line lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="lg:bg-card lg:p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">{group.label}</h3>
            <ul className="mt-3 flex lg:mt-4 flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <TechChip name={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
