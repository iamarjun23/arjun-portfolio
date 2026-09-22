"use client";

import { useEffect, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure context or permissions): fall back to mail client.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
      title="Copy email address"
      className={`inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm text-muted transition-colors duration-150 hover:border-line-strong hover:text-ink ${className}`}
    >
      {copied ? (
        <LuCheck aria-hidden className="size-4 text-ok" />
      ) : (
        <LuCopy aria-hidden className="size-4" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
