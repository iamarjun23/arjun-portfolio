import { projects } from "@/lib/content";
import { Section } from "./Section";
import { TechChip } from "./TechIcon";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export function Work() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Four products where I owned meaningful parts of the system, from repository to delivery."
    >
      <p className="-mt-5 mb-4 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-dim lg:hidden">Swipe for more <FiArrowRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" /></p>
      <ol className="flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] max-lg:-mx-6 max-lg:scroll-px-6 max-lg:px-6 lg:grid lg:gap-5 lg:overflow-visible">
        {projects.map((p, i) => {
          const rows = [
            ["Problem", p.problem],
            ["What I built", p.built],
            ["Outcome", p.outcome],
          ].filter(([, text]) => text);

          return (
            <li key={p.id} id={p.id} className="reveal w-[calc(100%-1rem)] shrink-0 snap-start scroll-mt-24 rounded-2xl border border-line bg-card p-[clamp(18px,3vw,36px)] lg:w-auto">
              <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4 pb-6">
                <div>
                  <p className="font-mono text-xs text-dim">
                    0{i + 1}
                    <span className="lg:hidden"> / 0{projects.length}</span>
                  </p>
                  <h3 className="mt-1.5 text-[clamp(20px,2.4vw,32px)] font-semibold leading-tight tracking-[-0.035em]">{p.title}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted sm:text-[15px]">
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
                          className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-line px-3 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
                        >
                          {link.label} <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </header>

              <dl className="flex flex-col">
                {rows.map(([label, text]) => (
                  <div key={label} className={`${label === "Outcome" ? "max-lg:order-first max-lg:mb-2 max-lg:rounded-xl max-lg:border-0 max-lg:bg-wash max-lg:p-4 " : ""}grid gap-1.5 border-t border-line py-4 last:pb-0 lg:grid-cols-[140px_1fr] lg:gap-6`}>
                    <dt className="font-mono text-xs uppercase tracking-[0.08em] text-dim lg:pt-0.5 lg:font-sans lg:text-sm lg:normal-case lg:tracking-normal">{label}</dt>
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
                <div className="grid gap-1.5 border-t border-line py-4 last:pb-0 lg:grid-cols-[140px_1fr] lg:gap-6">
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-dim lg:pt-0.5 lg:font-sans lg:text-sm lg:normal-case lg:tracking-normal">Stack</dt>
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
