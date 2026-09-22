import { site } from "@/lib/content";
import { Button } from "./Button";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="shell reveal grid gap-8 border-t border-line py-[clamp(76px,9vw,140px)] lg:grid-cols-12 lg:items-end"
    >
      <div className="lg:col-span-8">
        <p className="text-sm text-dim">
          Available for SDE-1 roles
        </p>
        <h2
          id="contact-heading"
          className="mb-4 mt-3 max-w-[1050px] text-[clamp(40px,5.6vw,88px)] leading-[1] font-semibold tracking-[-0.04em]"
        >
          Let&rsquo;s talk about what I can <span className="text-brand">build with your team.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
        <p className="mb-7 max-w-[44ch] text-base text-muted">
          Backend or full-stack roles · Bangalore, remote, or open to relocation
        </p>
        <div className="flex flex-wrap gap-2.5">
        <Button variant="primary" href={`mailto:${site.email}`}>
          {site.email} <span aria-hidden>↗</span>
        </Button>
        <Button href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <span aria-hidden>↗</span>
        </Button>
        <Button href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden>↗</span>
        </Button>
        </div>
      </div>
    </section>
  );
}
