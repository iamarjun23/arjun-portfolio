"use client";

import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { nav, site } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

/** Tracks which section is under the middle of the viewport. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = nav.map((item) => item.id);

export function Header() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md print:hidden">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-md bg-ink text-[13px] font-semibold text-bg"
          >
            AL
          </span>
          {site.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {nav.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? "true" : undefined}
                    className={`rounded-md px-3 py-1.5 transition-colors duration-150 ${
                      current ? "bg-sunken text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.resume}
            download="Arjun-L-Resume.pdf"
            className="hidden h-9 items-center gap-2 rounded-md bg-ink px-3.5 text-sm font-medium text-bg transition-opacity duration-150 hover:opacity-85 sm:inline-flex"
          >
            <LuDownload aria-hidden className="size-4" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-ink md:hidden"
          >
            {open ? <LuX className="size-4" /> : <LuMenu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t border-line md:hidden">
          <ul className="container-page grid py-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line py-3 text-[15px] ${
                    active === item.id ? "text-ink" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                download="Arjun-L-Resume.pdf"
                onClick={() => setOpen(false)}
                className="my-3 flex h-10 items-center justify-center gap-2 rounded-md bg-ink text-sm font-medium text-bg"
              >
                <LuDownload aria-hidden className="size-4" />
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
