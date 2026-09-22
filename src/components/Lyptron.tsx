import { lyptron, site } from "@/lib/content";

export function Lyptron() {
  return (
    <section id="lyptron" aria-labelledby="lyptron-heading" className="mt-[clamp(24px,4vw,48px)] border-y border-line bg-s1">
      <div className="shell grid gap-12 py-[clamp(64px,8vw,120px)] lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <p className="text-sm text-dim">Where I work now</p>
          <h2 id="lyptron-heading" className="mt-3 text-[clamp(52px,6.4vw,96px)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Lyptron
          </h2>
          <p className="mt-5 text-lg text-ink">
            {lyptron.role} <span className="text-dim">· {lyptron.since}</span>
          </p>
          <p className="mt-4 max-w-[42ch] text-muted">{lyptron.pitch}</p>
          <a
            href={site.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-brand pb-0.5 text-sm text-brand hover:text-ink"
          >
            lyptron.com ↗
          </a>
        </div>

        <div className="reveal lg:col-span-7">
          <p className="max-w-[56ch] text-[clamp(21px,2vw,27px)] font-medium leading-snug tracking-[-0.02em] text-ink">{lyptron.body}</p>

          <h3 className="mt-12 text-sm text-dim">What I own</h3>
          <ol className="mt-4 grid border-t border-line sm:grid-cols-2">
            {lyptron.owns.map((item, i) => (
              <li key={item.title} className="border-b border-line py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                <p className="text-ink">
                  <span className="mr-2 text-dim">0{i + 1}</span>
                  {item.title}
                </p>
                <p className="mt-1 text-[15px] text-muted">{item.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-sm text-dim">Shipped for clients</h3>
          <ul className="mt-4 border-t border-line">
            {lyptron.shipped.map((p) => {
              const row = (
                <>
                  <span className="text-xl font-semibold tracking-[-0.02em] text-ink">{p.name}</span>
                  <span className="text-right text-[15px] text-muted">
                    {p.note}
                    {"href" in p && <span aria-hidden className="ml-2 text-dim transition-colors group-hover:text-brand">↓</span>}
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
    </section>
  );
}
