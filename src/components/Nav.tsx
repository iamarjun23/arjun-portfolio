import { nav, site } from "@/lib/content";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="shell grid grid-cols-[1fr_auto] items-center gap-x-6 py-3 md:h-[70px] md:py-0 md:grid-cols-12">
        <Link
          href="#top"
          className="flex items-center md:col-span-3"
        >
          <span className="text-lg font-semibold tracking-[-0.03em]">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="col-span-2 row-start-2 -mb-1 flex justify-between gap-3 overflow-x-auto pt-3 text-[13px] [scrollbar-width:none] text-muted md:col-span-6 md:row-start-auto md:mb-0 md:justify-self-end md:justify-start md:gap-6 md:pt-0 md:text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end md:col-span-3">
        <ThemeToggle />
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line bg-card px-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-brand hover:bg-wash"
        >
          Resume <span aria-hidden>↗</span>
        </a>
        </div>
      </div>
    </header>
  );
}
