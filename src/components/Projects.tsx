import { LuArrowUpRight, LuChevronDown, LuGithub } from "react-icons/lu";
import { projects, type Layer, type Project } from "@/lib/content";
import { Button } from "./Button";
import { Section, Tag } from "./Section";

/** Request flow drawn top to bottom: each layer's nodes sit side by side, with
 * a connector into the next layer. Accented nodes are the control points. */
function Architecture({ layers }: { layers: Layer[] }) {
  return (
    <ol aria-label="Architecture, top to bottom" className="flex flex-col items-stretch">
      {layers.map((layer, i) => (
        <li key={i} className="flex flex-col items-center">
          {i > 0 && (
            <span aria-hidden className="flex h-6 flex-col items-center">
              <span className="w-px flex-1 bg-line-strong" />
              <span className="size-0 border-x-4 border-t-[5px] border-x-transparent border-t-line-strong" />
            </span>
          )}
          <ul className="flex w-full flex-wrap justify-center gap-2">
            {layer.map((node) => (
              <li
                key={node.name}
                className={`min-w-[8.5rem] flex-1 rounded-md border px-3 py-2 text-center ${
                  node.accent
                    ? "border-accent/40 bg-accent-soft"
                    : "border-line bg-surface"
                } ${layer.length === 1 ? "max-w-[16rem]" : "max-w-[12rem]"}`}
              >
                <span className={`block text-[13px] font-medium ${node.accent ? "text-accent" : ""}`}>
                  {node.name}
                </span>
                {node.note && <span className="block font-mono text-[11px] text-dim">{node.note}</span>}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const blocks = [
    { label: "Problem", text: project.problem },
    { label: "What I built", text: project.solution },
    { label: "Outcome", text: project.outcome },
  ];

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-line bg-surface"
    >
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[12px] text-dim">
              {String(index + 1).padStart(2, "0")} · {project.kind}
            </p>
            <h3 id={`${project.slug}-title`} className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[12px] text-muted">
            <span
              aria-hidden
              className={`size-1.5 rounded-full ${project.status.startsWith("In dev") ? "bg-dim" : "bg-ok"}`}
            />
            {project.status}
          </span>
        </div>

        <p className="mt-3 max-w-[68ch] text-[17px] leading-relaxed">{project.summary}</p>

        <dl className="mt-6 grid gap-5 border-t border-line pt-6 md:grid-cols-3 md:gap-6">
          {blocks.map((block) => (
            <div key={block.label}>
              <dt className="text-[13px] font-medium text-ink">{block.label}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{block.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>
          <div className="flex gap-2 print:hidden">
            {project.github && (
              <Button href={project.github} aria-label={`${project.title} source code on GitHub`}>
                <LuGithub aria-hidden className="size-4" />
                Code
              </Button>
            )}
            {project.live && (
              <Button variant="primary" href={project.live} aria-label={`Visit ${project.title} live site`}>
                Live site
                <LuArrowUpRight aria-hidden className="size-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <details className="group border-t border-line bg-sunken">
        <summary className="flex cursor-pointer select-none items-center justify-between gap-4 px-5 py-3.5 text-sm font-medium text-muted transition-colors hover:text-ink sm:px-7 print:hidden">
          Architecture &amp; engineering notes
          <LuChevronDown aria-hidden className="size-4 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className="grid gap-8 px-5 pb-7 pt-2 sm:px-7 md:grid-cols-2 md:gap-10">
          <div>
            <h4 className="mb-4 text-[13px] font-medium">Architecture</h4>
            <Architecture layers={project.architecture} />
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-medium">Engineering notes</h4>
            <ul className="space-y-3">
              {project.decisions.map((d) => (
                <li key={d} className="relative pl-5 text-[15px] leading-relaxed text-muted">
                  <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-line-strong" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="What each one solved, what I built, and how it's put together. Open the notes for architecture and design decisions."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
