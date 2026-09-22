"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { cs } from "@/lib/case-study";

type Node = (typeof cs.architecture.nodes)[number];

export function ArchitectureExplorer({ nodes }: { nodes: readonly Node[] }) {
  const [selected, setSelected] = useState<string>("supervisor");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const node = nodes.find((n) => n.id === selected)!;
  const flow = nodes.filter((n) => n.lane === "flow");
  const support = nodes.filter((n) => n.lane === "support");

  // Arrow keys move between components (WAI-ARIA tabs pattern, automatic activation).
  const onKey = (e: KeyboardEvent) => {
    const i = nodes.findIndex((n) => n.id === selected);
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (i + 1) % nodes.length
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i - 1 + nodes.length) % nodes.length
      : e.key === "Home" ? 0
      : e.key === "End" ? nodes.length - 1
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setSelected(nodes[next].id);
    tabs.current[next]?.focus();
  };

  const tab = (n: Node, arrow: boolean, step?: number) => {
    const index = nodes.indexOf(n);
    const on = n.id === selected;
    return (
      <li key={n.id} className="relative">
        <button
          ref={(el) => {
            tabs.current[index] = el;
          }}
          role="tab"
          id={`arch-tab-${n.id}`}
          aria-selected={on}
          aria-controls="arch-panel"
          tabIndex={on ? 0 : -1}
          onClick={() => setSelected(n.id)}
          className={`group h-full w-full rounded-lg border p-3 text-left transition-colors duration-200 ${
            on ? "border-brand bg-wash" : "border-line bg-s1 hover:border-brand/60"
          }`}
        >
          {step && <span className="block font-mono text-xs text-dim">0{step}</span>}
          <span className={`block text-[15px] font-medium ${on ? "text-ink" : "text-ink/90"}`}>{n.name}</span>
          <span className="mt-1 block text-[14px] leading-snug text-dim">{n.short}</span>
        </button>
        {arrow && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 px-0.5 text-dim max-xl:hidden"
          >
            →
          </span>
        )}
      </li>
    );
  };

  return (
    <div className="reveal grid gap-6">
      <div role="tablist" aria-label="System components" aria-orientation="horizontal" onKeyDown={onKey} className="grid gap-5">
        <div>
          <p className="mb-2.5 font-mono text-xs text-dim">REQUEST PATH</p>
          <ol className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3 xl:grid-cols-7 xl:gap-5">
            {flow.map((n, i) => tab(n, i < flow.length - 1, i + 1))}
          </ol>
        </div>
        <div>
          <p className="mb-2.5 font-mono text-xs text-dim">SHARED SERVICES</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">{support.map((n) => tab(n, false))}</ul>
        </div>
      </div>

      <section
        id="arch-panel"
        role="tabpanel"
        aria-labelledby={`arch-tab-${node.id}`}
        tabIndex={0}
        className="grid gap-6 rounded-xl border border-line bg-s1 p-[clamp(20px,3vw,36px)] lg:grid-cols-12"
      >
        <div className="lg:col-span-6">
          <p className="font-mono text-xs text-brand2">{node.file}</p>
          <h3 className="mb-3 mt-1 text-[clamp(24px,2.4vw,34px)] font-semibold tracking-[-0.04em]">{node.name}</h3>
          <p className="text-base text-ink/90">{node.role}</p>
          <p className="mt-4 text-base text-muted">
            <b className="font-medium text-ink">Why it exists: </b>
            {node.why}
          </p>
          <p className="mt-4 font-mono text-[14px] text-dim">{node.tech}</p>
        </div>
        <dl className="eng grid content-start gap-4 border-line text-[15px] lg:col-span-6 lg:border-l lg:pl-8">
          <div>
            <dt className="font-mono text-xs text-dim">INPUT</dt>
            <dd className="mt-1 font-mono text-[14px] text-muted">{node.input}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-dim">OUTPUT</dt>
            <dd className="mt-1 font-mono text-[14px] text-muted">{node.output}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-dim">EDGE CASES HANDLED</dt>
            <dd>
              <ul className="mt-1 grid gap-1.5 text-muted">
                {node.edges.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span aria-hidden className="text-brand2">—</span>
                    {e}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
