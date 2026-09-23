import { site } from "@/lib/content";

const links = [
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="shell flex flex-wrap items-center justify-between gap-3 border-t border-line py-8 text-sm text-dim max-lg:pb-28">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
