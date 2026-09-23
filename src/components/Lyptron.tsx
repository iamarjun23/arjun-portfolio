import { lyptron, site } from "@/lib/content";
import { Fold } from "./Fold";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

export function Lyptron() {
  return (
    <section id="lyptron" aria-labelledby="lyptron-heading" className="lg:mt-[clamp(24px,4vw,48px)] lg:border-y lg:border-line lg:bg-s1">
      <div className="shell max-lg:py-1.5 lg:py-[clamp(64px,8vw,120px)]">
      <Fold title="Lyptron" preview={`${lyptron.role} · Now`}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <p className="text-sm text-dim max-lg:hidden">Where I work now</p>
          <h2 id="lyptron-heading" className="mt-3 max-lg:sr-only text-[clamp(38px,6.4vw,96px)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Lyptron
          </h2>
          <p className="text-base text-ink max-lg:hidden sm:text-lg lg:mt-5">
            {lyptron.role} <span className="text-dim">· {lyptron.since}</span>
          </p>
          <p className="max-w-[42ch] text-muted lg:mt-4">{lyptron.pitch}</p>
          <a
            href={site.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-brand pb-0.5 text-sm text-brand hover:text-ink"
          >
            lyptron.com <FiArrowUpRight aria-hidden className="inline size-[1em] shrink-0 align-[-0.125em]" />
          </a>
        </div>

        <div className="reveal lg:col-span-7">
          <p className="max-w-[56ch] text-[clamp(17px,2vw,27px)] font-medium leading-snug tracking-[-0.02em] text-ink">{lyptron.body}</p>

          <h3 className="mt-12 text-sm text-dim">What I own</h3>
          <ol className="mt-4 grid grid-cols-2 border-t border-line">
            {lyptron.owns.map((item, i) => (
              <li key={item.title} className="border-b border-line py-4 odd:border-r odd:pr-3 even:pl-3 sm:py-5 sm:odd:pr-6 sm:even:pl-6">
                <p className="text-ink">
                  <span className="mr-2 text-dim">0{i + 1}</span>
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted sm:text-[15px]">{item.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-sm text-dim">Shipped for clients</h3>
          <ul className="mt-4 border-t border-line">
            {lyptron.shipped.map((p) => {
              const row = (
                <>
                  <span className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">{p.name}</span>
                  <span className="text-right text-sm text-muted sm:text-[15px]">
                    {p.note}
                    {"href" in p && <FiArrowDown aria-hidden className="ml-2 inline size-[1em] shrink-0 align-[-0.125em] text-dim transition-colors group-hover:text-brand" />}
                  </span>
                </>
              );
              return (
                <li key={p.name} className="border-b border-line">
                  {"href" in p ? (
                    <a href={p.href} className="group flex items-baseline justify-between gap-6 py-4">
                      {row}
                    </a>
                  ) : (
                    <div className="flex items-baseline justify-between gap-6 py-4">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </Fold>
      </div>
    </section>
  );
}
