"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = (root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle night mode"
      className="grid size-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-brand hover:text-ink"
    >
      <FiMoon aria-hidden className="theme-moon size-4" />
      <FiSun aria-hidden className="theme-sun size-4" />
    </button>
  );
}
