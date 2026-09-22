import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page grid min-h-[100svh] place-content-center text-center">
      <p className="font-mono text-sm text-dim">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">This page doesn&rsquo;t exist.</h1>
      <p className="mt-3 text-muted">The link may be old, or the address mistyped.</p>
      <Link
        href="/"
        className="mx-auto mt-8 inline-flex h-10 items-center rounded-md bg-ink px-4 text-sm font-medium text-bg hover:opacity-85"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
