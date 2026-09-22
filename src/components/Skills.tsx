import { skillGroups } from "@/lib/content";
import { Section } from "./Section";
import { TechChip } from "./TechIcon";

export function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Everything here is used in a project above.">
      <div className="reveal grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-card p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
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
