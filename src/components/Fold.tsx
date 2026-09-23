import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

/**
 * Tap-to-open card below lg; always open on desktop (see `.fold` in globals.css).
 * Native <details>, so no JS and find-in-page still reaches the content.
 */
export function Fold({ title, preview, children }: { title: string; preview: string; children: ReactNode }) {
  return (
    <details className="fold group max-lg:rounded-xl max-lg:border max-lg:border-line max-lg:bg-card">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 lg:hidden [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <span className="block font-semibold tracking-[-0.02em] text-ink">{title}</span>
          <span className="mt-0.5 block truncate text-sm text-muted">{preview}</span>
        </span>
        <FiChevronDown aria-hidden className="size-4 shrink-0 text-dim transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="max-lg:border-t max-lg:border-line max-lg:p-4">{children}</div>
    </details>
  );
}
