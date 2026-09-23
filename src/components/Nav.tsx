import { nav, site } from "@/lib/content";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="shell grid h-13 grid-cols-[auto_1fr_auto] items-center gap-x-4 max-[380px]:gap-x-3 md:h-[70px] md:grid-cols-12 md:gap-x-6">
        <Link
          href="#top"
          className="flex items-center md:col-span-3"
        >
          <span className="text-base font-semibold md:text-lg tracking-[-0.03em]">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="flex min-w-0 gap-3.5 overflow-x-auto max-[380px]:gap-2.5 max-[380px]:text-xs [&>:first-child]:ml-auto text-[13px] text-muted [scrollbar-width:none] md:col-span-6 md:gap-6 md:text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-ink ${item.href.startsWith("/") ? "max-md:hidden" : ""}`}
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
          className="hidden h-9 items-center gap-1.5 rounded-md border lg:inline-flex border-line bg-card px-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-brand hover:bg-wash"
        >
          Resume <span aria-hidden>↗</span>
        </a>
        </div>
      </div>
    </header>
  );
}
