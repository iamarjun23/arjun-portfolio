import type { ReactNode } from "react";

/** Two-column section: the heading holds its place in the left gutter while
 * the content scrolls past on the right. Stacks on small screens. */
export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line">
      <div className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-dim">{description}</p>
            )}
          </div>
        </header>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

/** Small rounded label for a technology. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-sunken px-2 py-0.5 font-mono text-[12px] text-muted">
      {children}
    </li>
  );
}
