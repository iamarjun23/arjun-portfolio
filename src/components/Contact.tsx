import type { IconType } from "react-icons";
import { LuArrowUpRight, LuFileText, LuGithub, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { site } from "@/lib/content";
import { CopyEmail } from "./CopyEmail";
import { Section } from "./Section";

const channels: { Icon: IconType; label: string; value: string; href: string; download?: string }[] = [
  { Icon: LuMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { Icon: LuPhone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  {
    Icon: LuLinkedin,
    label: "LinkedIn",
    value: site.linkedin.replace("https://", ""),
    href: site.linkedin,
  },
  { Icon: LuGithub, label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
  {
    Icon: LuFileText,
    label: "Résumé",
    value: "PDF, one page",
    href: site.resume,
    download: "Arjun-L-Resume.pdf",
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-2xl font-medium leading-snug tracking-tight">
            I&rsquo;m looking for an SDE-1 role in backend or full-stack engineering.
          </p>
          <p className="mt-4 text-muted">
            Based in Bangalore and open to remote work or relocation. Email is the fastest way to
            reach me — I&rsquo;m happy to walk through any of the projects above in more depth.
          </p>
          <div className="mt-6 print:hidden">
            <CopyEmail email={site.email} />
          </div>
        </div>

        <ul className="min-w-0 divide-y divide-line self-start rounded-xl border border-line bg-surface md:col-span-3">
          {channels.map(({ Icon, label, value, href, download }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  download={download}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-sunken"
                >
                  <Icon aria-hidden className="size-[18px] shrink-0 text-dim" />
                  <span className="w-20 shrink-0 text-sm text-dim">{label}</span>
                  <span className="min-w-0 flex-1 truncate text-[15px]">{value}</span>
                  <LuArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
