import { site } from "@/lib/content";

/* Phones only: the two things a recruiter reaches for, always one tap away. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/85 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-card text-sm font-medium"
        >
          Resume ↗
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ink text-sm font-medium text-bg"
        >
          Email me
        </a>
      </div>
    </div>
  );
}
