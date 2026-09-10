import { nav, site } from "@/lib/content";
import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="shell grid h-[70px] grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-12">
        <Link
          href="#top"
          className="flex items-center gap-2.5 text-base font-semibold md:col-span-4"
        >
          <span
            aria-hidden
            className="size-2 rotate-45 bg-brand transition-transform duration-300 ease-out"
          />
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden justify-self-center gap-4 text-[13px] text-muted min-[640px]:flex sm:gap-6 sm:text-sm md:col-span-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.resume}
          className="justify-self-end rounded-md border border-line px-3 py-2 text-[13px] transition-colors duration-200 hover:border-brand hover:text-ink md:col-span-3"
        >
          Résumé <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
