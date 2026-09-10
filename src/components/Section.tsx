import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
  labelledBy,
}: {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const headingId = id ? `${id}-heading` : labelledBy;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className="shell border-t border-line py-[clamp(68px,7vw,116px)]"
    >
      {title && (
        <div className="reveal mb-8 grid gap-4 border-b border-line pb-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2
            id={headingId}
            className="text-[clamp(32px,3.4vw,52px)] font-semibold tracking-[-0.055em] lg:col-span-5"
          >
            {title}
          </h2>
          {intro && <p className="max-w-[58ch] text-base text-muted lg:col-span-7 lg:justify-self-end">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
