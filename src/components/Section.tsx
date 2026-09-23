import type { ReactNode } from "react";
import { Fold } from "./Fold";

export function Section({
  id,
  title,
  intro,
  preview,
  children,
  labelledBy,
}: {
  id?: string;
  title?: string;
  intro?: string;
  /** One-line summary shown on the collapsed phone card; makes the section tap-to-open below lg. */
  preview?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const headingId = id ? `${id}-heading` : labelledBy;

  const body = (
    <>
      {title && (
        <div className={`reveal mb-8 grid gap-3 lg:mb-10 lg:grid-cols-12 lg:items-end lg:gap-8 ${preview ? "max-lg:sr-only" : ""}`}>
          <h2
            id={headingId}
            className="text-[clamp(26px,4vw,60px)] leading-none font-semibold tracking-[-0.04em] lg:col-span-5"
          >
            {title}
          </h2>
          {intro && <p className="max-w-[58ch] text-base text-muted lg:col-span-7 lg:justify-self-end">{intro}</p>}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`shell lg:border-t lg:border-line lg:py-[clamp(68px,7vw,116px)] ${preview ? "max-lg:py-1.5" : "max-lg:border-t max-lg:border-line max-lg:py-12"}`}
    >
      {preview && title ? (
        <Fold title={title} preview={preview}>
          {body}
        </Fold>
      ) : (
        body
      )}
    </section>
  );
}
