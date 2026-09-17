import { projects } from "@/lib/content";
import type { IconType } from "react-icons";
import {
  SiDart,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRazorpay,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Button } from "./Button";
import { Section } from "./Section";
import { projectArchitectures, projectPreviews } from "./work/ProjectVisuals";

const techIcons: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Python: { Icon: SiPython, color: "#FFD43B" },
  LangChain: { Icon: SiLangchain, color: "#FFFFFF" },
  Express: { Icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Flutter: { Icon: SiFlutter, color: "#54C5F8" },
  Dart: { Icon: SiDart, color: "#0175C2" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Firestore: { Icon: SiFirebase, color: "#FFCA28" },
  Razorpay: { Icon: SiRazorpay, color: "#3395FF" },
  Electron: { Icon: SiElectron, color: "#9FEAF9" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
};

export function Work() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Four products where I owned meaningful parts of the system from repository to delivery."
    >
      <ul className="grid">
        {projects.map((project, index) => {
          const Preview = projectPreviews[project.title];
          const Architecture = projectArchitectures[project.title];

          return (
          <li
            key={project.title}
            className="reveal grid gap-x-8 gap-y-6 border-b border-line py-10 lg:grid-cols-12"
          >
            <p className="font-mono text-xs text-dim lg:col-span-1 lg:pt-1">
              0{index + 1}
            </p>
            <div className="lg:col-span-7">
              <p className="mb-3 font-mono text-[11px] text-brand2">{project.meta}</p>
              <h3 className="mb-3 text-[clamp(26px,2.6vw,42px)] tracking-[-0.045em]">{project.title}</h3>
              <p className="max-w-[78ch] text-base text-muted">
                <b className="font-medium text-ink">Problem:</b> {project.problem}{" "}
                <b className="font-medium text-ink">Built:</b> {project.built}
                {project.detail && (
                  <>
                    {" "}
                    <b className="font-medium text-ink">Detail:</b> {project.detail}
                  </>
                )}
              </p>
            </div>

            <div className="border-line pt-4 max-lg:border-t lg:col-span-4 lg:border-l lg:pl-8 lg:pt-0">
              <h4 className="mb-2.5 font-mono text-xs text-dim">STACK</h4>
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {project.stack.map((tech) => {
                  const icon = techIcons[tech];

                  return (
                    <li
                      key={tech}
                      className="flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-200 hover:text-ink"
                    >
                      {icon && (
                        <icon.Icon
                          aria-hidden
                          className="size-[18px] shrink-0"
                          style={{ color: icon.color }}
                        />
                      )}
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-[5px] border border-dashed border-line px-1.5 py-1 font-mono text-[11px] text-dim"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub aria-hidden className="size-[14px]" /> Code
                  </Button>
                )}
                {project.live && (
                  <Button variant="primary" href={project.live} target="_blank" rel="noopener noreferrer">
                    Visit site <span aria-hidden>↗</span>
                  </Button>
                )}
              </div>
            </div>

            {(Preview || Architecture) && (
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-11 lg:col-start-2">
                {Preview && (
                  <div className="overflow-hidden rounded-[10px] border border-line bg-s1">
                    <p className="border-b border-line px-3.5 py-2.5 font-mono text-[10px] tracking-[0.06em] text-dim">
                      PREVIEW
                    </p>
                    <div className="aspect-[5/3] w-full">
                      <Preview />
                    </div>
                  </div>
                )}
                {Architecture && (
                  <div className="overflow-hidden rounded-[10px] border border-line bg-s1">
                    <p className="border-b border-line px-3.5 py-2.5 font-mono text-[10px] tracking-[0.06em] text-dim">
                      ARCHITECTURE
                    </p>
                    <div className="aspect-[5/3] w-full">
                      <Architecture />
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
          );
        })}
      </ul>
    </Section>
  );
}
