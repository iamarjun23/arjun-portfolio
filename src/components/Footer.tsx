import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS —{" "}
          <a href={site.source} target="_blank" rel="noopener noreferrer" className="link text-muted">
            view source
          </a>
          .
        </p>
        <a href="#top" className="link self-start text-muted sm:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
