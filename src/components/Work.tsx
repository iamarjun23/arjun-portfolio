import { projects } from "@/lib/content";
import { Section } from "./Section";
import { TechChip } from "./TechIcon";

export function Work() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Four products where I owned meaningful parts of the system, from repository to delivery."
    >
      <ol className="grid gap-5">
        {projects.map((p, i) => {
          const rows = [
            ["Problem", p.problem],
            ["What I built", p.built],
            ["Outcome", p.outcome],
            ["Stack", p.stack.join(" · ")],
          ].filter(([, text]) => text);

          return (
            <li key={p.id} id={p.id} className="reveal scroll-mt-24 rounded-2xl border border-line bg-card p-[clamp(20px,3vw,36px)]">
              <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4 border-b border-line pb-6">
                <div>
                  <p className="font-mono text-xs text-dim">0{i + 1}</p>
                  <h3 className="mt-1.5 text-[clamp(24px,2.4vw,32px)] font-semibold leading-tight tracking-[-0.035em]">{p.title}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-muted">
                    <span>
                      {p.role} · {p.client} · {p.year}
                    </span>
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
                {p.links && (
                  <ul className="flex flex-wrap gap-2">
                    {p.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                          className="inline-flex min-h-9 items-center rounded-lg border border-line px-3 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </header>

              <dl className="divide-y divide-line">
                {rows.map(([label, text]) => (
                  <div key={label} className="grid gap-1 py-4 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="text-sm text-dim">{label}</dt>
                    <dd
                      className={
                        label === "Outcome"
                          ? "font-medium text-ink"
                          : "text-muted"
                      }
                    >
                      {text}
                    </dd>
                  </div>
                ))}
                <div className="grid gap-1 py-4 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <dt className="text-sm text-dim">Stack</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s}>
                          <TechChip name={s} />
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
