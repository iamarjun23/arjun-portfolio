import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArchitectureExplorer } from "@/components/case/ArchitectureExplorer";
import { CaseNav } from "@/components/case/CaseNav";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { cs } from "@/lib/case-study";
import { site } from "@/lib/content";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: cs.meta.title,
  description: cs.meta.description,
  alternates: { canonical: "/case-study" },
  openGraph: { type: "article", url: "/case-study", title: cs.meta.title, description: cs.meta.description },
  twitter: { card: "summary_large_image", title: cs.meta.title, description: cs.meta.description },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Renders `code` spans, and flags "[placeholder]" strings so unverified copy can't pass as fact. */
function Rich({ children }: { children: string }) {
  return children.split(/(`[^`]+`|\[[^\]]+\])/).map((part, i) =>
    part.startsWith("`") ? (
      <code key={i} className="rounded bg-s2 px-1 py-0.5 font-mono text-[0.9em] text-brand2">
        {part.slice(1, -1)}
      </code>
    ) : part.startsWith("[") ? (
      <span key={i} className="rounded border border-dashed border-amber-400/60 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-300">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-medium tracking-[0.06em] text-brand2">{children}</p>;
}

function More({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="group mt-4 border-t border-line pt-3">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-mono text-[14px] text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
        {summary}
        <span aria-hidden className="text-brand2 transition-transform duration-200 group-open:rotate-45">+</span>
      </summary>
      <div className="grid gap-3 pb-1 pt-2 text-[15px] text-muted">{children}</div>
    </details>
  );
}

function HeroDiagram() {
  const node = "rounded-lg border border-line bg-s1 px-3 py-2.5 text-center";
  const wire = "relative mx-auto h-7 w-px overflow-hidden bg-line";
  const pulse = <span className="absolute inset-x-0 top-0 h-1/2 bg-brand [animation:flow_1.8s_linear_infinite]" />;
  return (
    <figure
      aria-label="Request flow: question, Supervisor plan, three specialists, Audit check with at most one retry, cited answer"
      className="relative rounded-2xl border border-line bg-[radial-gradient(120%_80%_at_50%_0%,rgba(36,64,240,0.06),transparent_60%)] p-[clamp(18px,2.4vw,32px)]"
    >
      <div aria-hidden className="font-mono text-[14px]">
        <div className={`${node} border-brand/60 text-ink`}>“Is Zone 3 owed for drywall…?”</div>
        <div className={wire}>{pulse}</div>
        <div className={node}>
          <span className="text-ink">Supervisor</span> <span className="text-dim">· plans tasks</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Payment", "Contract", "Progress"].map((s, i) => (
            <div key={s}>
              <div className={wire}>{pulse}</div>
              <div className={`${node} px-1`}>
                <span className="block text-ink">{s}</span>
                <span className="text-dim">{i === 1 ? "pgvector" : "SQL"}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={wire}>{pulse}</div>
        <div className={`${node} flex items-center justify-center gap-2`}>
          <span className="text-ink">Audit</span> <span className="text-dim">· verifies each claim</span>
          <span className="rounded border border-brand/50 px-1.5 text-brand2">↺ ≤1</span>
        </div>
        <div className={wire}>{pulse}</div>
        <div className={`${node} border-brand bg-wash text-ink`}>Cited answer + evidence IDs</div>
      </div>
      <figcaption className="mt-4 font-mono text-xs text-dim">Request flow · src/supervisor/index.ts</figcaption>
    </figure>
  );
}

export default function CaseStudy() {
  const { hero, problem, ownership, results, challenge } = cs;

  return (
    <div id="cs-root" data-view="recruiter">
      <CaseNav sections={cs.sections} />

      <main id="main">
        {/* 1 · Hero */}
        <section aria-labelledby="cs-title" className="shell grid gap-12 py-[clamp(48px,7vw,104px)] lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <Label>{hero.kicker}</Label>
            <p className="mt-5 text-lg text-muted">
              <span className="font-semibold text-ink">{site.name}</span> · {hero.role}
            </p>
            <h1 id="cs-title" className="mt-3 text-[clamp(44px,6.4vw,100px)] font-semibold leading-[0.92] tracking-[-0.065em]">
              {hero.project}
            </h1>
            <p className="mt-6 max-w-[56ch] text-[clamp(18px,1.6vw,21px)] leading-relaxed text-muted">{hero.oneLiner}</p>

            <div className="mt-8 flex max-w-[560px] items-start gap-5 border-l-2 border-brand py-1 pl-5">
              <span className="text-[clamp(48px,5vw,72px)] font-semibold leading-none tracking-[-0.06em] text-brand2">
                {hero.outcome.value}
              </span>
              <p className="text-base text-ink/90">
                {hero.outcome.label}
                <span className="mt-1 block font-mono text-xs text-dim">{hero.outcome.source}</span>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {cs.demo ? (
                <Button variant="primary" href={cs.demo} {...ext}>
                  View live project <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
                </Button>
              ) : (
                <Button variant="primary" href={cs.quickstart} {...ext}>
                  Run it locally <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
                </Button>
              )}
              <Button href={cs.repo} {...ext}>
                View code <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
              </Button>
              <Button href="#contact">Contact me</Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroDiagram />
          </div>
        </section>

        {/* 2 · 15 seconds */}
        <Section id="summary" title="The project in 15 seconds">
          <dl className="reveal grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {cs.summary.map((s) => (
              <div key={s.k} className="bg-bg p-5">
                <dt className="font-mono text-xs text-brand2">{s.k.toUpperCase()}</dt>
                <dd className="mt-2 text-base text-ink/90">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 3 · Problem */}
        <Section id="problem" title="The problem" intro={problem.why}>
          <blockquote className="reveal mb-10 max-w-[64ch]">
            <p className="text-[clamp(22px,2.4vw,32px)] leading-snug tracking-[-0.03em] text-ink">{problem.lead}</p>
            <footer className="mt-3 text-base text-dim">{problem.leadNote}</footer>
          </blockquote>

          <div className="reveal grid gap-4 md:grid-cols-2">
            {[
              { t: "BEFORE · three lookups", items: problem.before, mark: "✕", tone: "text-dim", box: "border-line" },
              { t: "AFTER · one cited answer", items: problem.after, mark: "✓", tone: "text-brand2", box: "border-brand/50 bg-wash" },
            ].map((col) => (
              <div key={col.t} className={`rounded-xl border p-6 ${col.box}`}>
                <p className={`font-mono text-xs ${col.tone}`}>{col.t}</p>
                <ol className="mt-4 grid gap-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3 text-base text-ink/90">
                      <span aria-hidden className={`${col.tone} font-mono`}>{col.mark}</span>
                      {it}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 grid gap-8 lg:grid-cols-12">
            <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">
              {problem.insufficient.map((x) => (
                <div key={x.t}>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{x.t}</h3>
                  <p className="mt-2 text-base text-muted">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
              <h3 className="font-mono text-xs text-dim">CONSTRAINTS</h3>
              <ul className="mt-3 grid gap-2 text-base text-muted">
                {problem.constraints.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden className="text-brand2">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-base">
            <Rich>{problem.motivation}</Rich>
          </p>
        </Section>

        {/* 4 · Ownership */}
        <Section id="ownership" title="What I owned" intro={ownership.note}>
          <div className="reveal grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
            {ownership.columns.map((col) => (
              <div key={col.t} className="bg-bg p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  <span className="text-brand2">I </span>
                  {col.t.toLowerCase()}
                </h3>
                <ul className="mt-4 grid gap-2.5 text-base text-muted">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span aria-hidden className="text-dim">·</span>
                      <span>
                        <Rich>{it}</Rich>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal mt-6 text-base text-muted">
            <b className="font-medium text-ink">Collaborators: </b>
            {ownership.collaborators}
          </p>
        </Section>

        {/* 5 · Architecture */}
        <Section id="architecture" title="How it works" intro={cs.architecture.intro}>
          <ArchitectureExplorer nodes={cs.architecture.nodes} />
          <p className="mt-4 text-[15px] text-dim">
            Switch to <b className="font-medium text-muted">Engineer</b> view (top right) for inputs, outputs and edge cases.
          </p>
        </Section>

        {/* 6 · Data structures */}
        <Section
          id="structures"
          title="Data structures & algorithms"
          intro="Only structures that exist in the repository. Each one is tied to the operation it speeds up."
        >
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cs.structures.map((d) => (
              <li key={d.name} className="reveal flex flex-col rounded-xl border border-line bg-s1 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{d.name}</h3>
                <p className="mt-1 font-mono text-[14px] text-dim">{d.where}</p>
                <p className="mt-4 text-base text-ink/90">
                  <Rich>{d.why}</Rich>
                </p>
                <p className="mt-4 text-[15px] text-muted">
                  <b className="font-medium text-ink">Speeds up: </b>
                  {d.improves}
                </p>
                <p className="eng mt-3 rounded-md border border-brand/30 bg-wash px-3 py-2 font-mono text-[14px] text-brand2">{d.complexity}</p>
                <div className="mt-auto">
                  <More summary="Alternative · trade-off · at scale">
                    <p>
                      <b className="font-medium text-ink">Considered: </b>
                      {d.alternative}
                    </p>
                    <p>
                      <b className="font-medium text-ink">Accepted: </b>
                      {d.tradeoff}
                    </p>
                    <p>
                      <b className="font-medium text-ink">At scale: </b>
                      {d.scale}
                    </p>
                  </More>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* 7 · Decisions */}
        <Section id="decisions" title="Engineering decisions" intro="Four choices, with what they cost and what I’d change at ten times the scale.">
          <ol className="grid gap-4">
            {cs.decisions.map((d, i) => (
              <li key={d.title} className="reveal grid gap-6 rounded-xl border border-line p-[clamp(20px,3vw,36px)] lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-dim">DECISION 0{i + 1}</p>
                  <h3 className="mt-2 text-[clamp(22px,2vw,30px)] font-semibold leading-tight tracking-[-0.04em]">{d.title}</h3>
                  <p className="mt-3 text-base text-muted">{d.context}</p>
                </div>
                <div className="lg:col-span-8 lg:border-l lg:border-line lg:pl-8">
                  <dl className="grid gap-4 text-base">
                    <div>
                      <dt className="font-mono text-xs text-brand2">CHOSE</dt>
                      <dd className="mt-1 text-ink/90">{d.chosen}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs text-brand2">BECAUSE</dt>
                      <dd className="mt-1 text-ink/90">{d.reason}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs text-brand2">RESULT</dt>
                      <dd className="mt-1 text-ink/90">{d.result}</dd>
                    </div>
                  </dl>
                  <More summary="Options considered · cost accepted · at 10× scale">
                    <p>
                      <b className="font-medium text-ink">Options: </b>
                      {d.options.join(" · ")}
                    </p>
                    <p>
                      <b className="font-medium text-ink">Cost accepted: </b>
                      {d.cost}
                    </p>
                    <p>
                      <b className="font-medium text-ink">At 10×: </b>
                      {d.scale}
                    </p>
                  </More>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* 8 · Challenge */}
        <Section id="challenge" title="Hardest problem" intro={challenge.title}>
          <ol className="reveal relative grid gap-0 border-l border-line pl-6 sm:pl-8">
            {(
              [
                ["Risk", challenge.symptom],
                ["Root cause", challenge.cause],
                ["Investigation", challenge.investigation],
                ["Solution", challenge.solution],
                ["Verification", challenge.verification],
                ["Lesson", challenge.learned],
              ] as const
            ).map(([k, v], i) => (
              <li key={k} className="relative grid gap-1 pb-7 last:pb-0 md:grid-cols-12 md:gap-8">
                <span aria-hidden className={`absolute -left-[29px] top-1.5 size-2.5 rotate-45 sm:-left-[37px] ${i === 5 ? "bg-brand" : "border border-brand bg-bg"}`} />
                <h3 className="font-mono text-[14px] text-brand2 md:col-span-3">
                  0{i + 1} · {k.toUpperCase()}
                </h3>
                <p className={`text-base md:col-span-9 ${i === 5 ? "text-lg text-ink" : "text-ink/90"}`}>
                  <Rich>{v}</Rich>
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 9 · Results */}
        <Section id="results" title="Results & evidence" intro={results.honesty}>
          <dl className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {results.evidence.map((e) => (
              <div key={e.l} className="bg-bg p-5">
                <dd className="text-[clamp(40px,4.4vw,64px)] font-semibold leading-none tracking-[-0.06em] text-brand2">{e.v}</dd>
                <dt className="mt-3 text-base text-ink/90">{e.l}</dt>
                <p className="eng mt-2 font-mono text-xs text-dim">{e.src}</p>
              </div>
            ))}
          </dl>

          <div className="reveal mt-6 grid gap-4 lg:grid-cols-12">
            <figure className="overflow-hidden rounded-xl border border-line bg-s1 lg:col-span-7">
              <figcaption className="border-b border-line px-5 py-3 font-mono text-xs text-muted">{results.example.label}</figcaption>
              <dl className="grid gap-3 p-5 font-mono text-[14px] leading-relaxed">
                {results.example.lines.map((l) => (
                  <div key={l.k} className="grid gap-1 sm:grid-cols-[120px_1fr]">
                    <dt className="text-brand2">{l.k}</dt>
                    <dd className="text-ink/90">{l.v}</dd>
                  </div>
                ))}
              </dl>
            </figure>
            <div className="grid gap-4 lg:col-span-5">
              <div className="rounded-xl border border-dashed border-amber-400/40 p-5">
                <h3 className="font-medium">{results.pending.t}</h3>
                <p className="mt-2 text-base text-muted">{results.pending.d}</p>
                <p className="mt-3 text-base">
                  <Rich>{results.pending.placeholder}</Rich>
                </p>
              </div>
              <div className="rounded-xl border border-line p-5">
                <h3 className="font-mono text-xs text-dim">ALSO SHIPPED · IN DAILY USE</h3>
                <ul className="mt-3 grid gap-2 text-base text-muted">
                  {results.alsoShipped.map((s) => (
                    <li key={s.t}>
                      <b className="font-medium text-ink">{s.t}</b> — {s.d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 10 · Why hire me */}
        <Section id="hire" title="Why this matters for your team">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {cs.strengths.map((s) => (
              <li key={s.t} className="reveal bg-bg">
                <a href={s.href} className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-s1">
                  <span className="text-xl font-medium tracking-[-0.02em]">{s.t}</span>
                  <span className="text-base text-muted">{s.e}</span>
                  <span className="mt-auto pt-2 font-mono text-[14px] text-brand2">
                    See evidence <FiArrowRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em] transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* 11 · CTA */}
        <section id="contact" aria-labelledby="contact-heading" className="shell reveal border-t border-line py-[clamp(76px,9vw,140px)]">
          <Label>AVAILABLE FOR SDE-1</Label>
          <h2 id="contact-heading" className="mb-5 mt-3 max-w-[18ch] text-[clamp(40px,6vw,96px)] font-semibold leading-[0.98] tracking-[-0.065em]">
            {cs.cta.title}
          </h2>
          <p className="mb-8 max-w-[60ch] text-lg text-muted">{cs.cta.sub}</p>
          <div className="flex flex-wrap gap-2.5">
            <Button variant="primary" href={`mailto:${site.email}`}>
              {site.email} <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
            </Button>
            <Button href={site.resume} {...ext}>
              Resume <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
            </Button>
            <Button href={cs.demo ?? cs.quickstart} {...ext}>
              {cs.demo ? "Live demo" : "Run the demo"} <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
            </Button>
            <Button href={cs.repo} {...ext}>
              Repository <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
            </Button>
            <Button href={site.linkedin} {...ext}>
              LinkedIn <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
