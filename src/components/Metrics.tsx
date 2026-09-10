import { metrics } from "@/lib/content";

export function Metrics() {
  return (
    <section
      aria-label="Impact at a glance"
      className="shell border-t border-line py-[clamp(62px,8vw,104px)]"
    >
      <dl className="reveal grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={[
              "border-line px-[clamp(14px,3vw,58px)] py-3",
              "max-md:px-0 max-md:[&:nth-child(even)]:border-l max-md:[&:nth-child(even)]:pl-4",
              "md:border-r md:last:border-r-0 md:first:pl-0",
              i === 0 ? "max-md:pl-0" : "",
            ].join(" ")}
          >
            <dd className="mb-3 text-[clamp(40px,5vw,82px)] font-semibold leading-none tracking-[-0.06em] first-letter:text-brand2">
              {metric.value}
            </dd>
            <dt className="max-w-[22ch] font-mono text-[11px] leading-[1.5] text-dim sm:text-sm">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
