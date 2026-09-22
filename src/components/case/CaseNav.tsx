"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type View = "recruiter" | "engineer";

/** Sticky section nav: highlights the section in view, shows scroll progress,
 * and switches the page between the recruiter summary and engineering depth. */
export function CaseNav({ sections }: { sections: readonly { id: string; label: string }[] }) {
  const [active, setActive] = useState<string>("");
  const [view, setView] = useState<View>("recruiter");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const root = document.getElementById("cs-root");
    if (!root) return;
    root.dataset.view = view;
    // Engineer view opens every expandable explanation; recruiter view folds them back.
    root.querySelectorAll("details").forEach((d) => (d.open = view === "engineer"));
  }, [view]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-semibold">
          <span aria-hidden className="size-2 rotate-45 bg-brand" />
          Arjun L
        </Link>

        <nav aria-label="Case study sections" className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]">
          <ul className="flex gap-1 whitespace-nowrap">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "location" : undefined}
                  className="block rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-ink aria-[current]:bg-wash aria-[current]:text-brand2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div role="group" aria-label="Reading mode" className="flex shrink-0 rounded-lg border border-line p-0.5">
          {(["recruiter", "engineer"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              title={v === "recruiter" ? "The 90-second story" : "Adds I/O, complexity, edge cases and trade-offs"}
              className="min-h-9 rounded-md px-2.5 font-mono text-xs capitalize text-muted transition-colors hover:text-ink aria-pressed:bg-brand aria-pressed:text-white"
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <div aria-hidden className="scroll-progress h-0.5 origin-left bg-brand" />
    </header>
  );
}
