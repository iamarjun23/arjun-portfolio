import { projects } from "@/lib/content";
import type { IconType } from "react-icons";
import {
  SiDart,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiRazorpay,
  SiReact,
} from "react-icons/si";
import { Section } from "./Section";

const techIcons: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  Python: { Icon: SiPython, color: "#FFD43B" },
  LangChain: { Icon: SiLangchain, color: "#FFFFFF" },
  Express: { Icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Flutter: { Icon: SiFlutter, color: "#54C5F8" },
  Dart: { Icon: SiDart, color: "#0175C2" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Firestore: { Icon: SiFirebase, color: "#FFCA28" },
  Razorpay: { Icon: SiRazorpay, color: "#3395FF" },
  Electron: { Icon: SiElectron, color: "#9FEAF9" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
};

export function Work() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Three products where I owned meaningful parts of the system from repository to delivery."
    >
      <ul className="grid">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className="reveal grid gap-x-8 gap-y-5 border-b border-line py-10 lg:grid-cols-12"
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
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
