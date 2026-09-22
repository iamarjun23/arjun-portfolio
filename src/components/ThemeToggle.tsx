"use client";

import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

type Theme = "light" | "dark";

const media = () => window.matchMedia("(prefers-color-scheme: dark)");

function subscribe(onChange: () => void) {
  const mq = media();
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  mq.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    mq.removeEventListener("change", onChange);
  };
}

/** The theme actually on screen: an explicit choice, else the OS preference. */
function current(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return media().matches ? "dark" : "light";
}

export function ThemeToggle() {
  // null on the server, so the button renders without guessing an icon.
  const theme = useSyncExternalStore<Theme | null>(subscribe, current, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="grid size-9 place-items-center rounded-md border border-line text-muted transition-colors duration-150 hover:text-ink"
    >
      {theme === "dark" ? <LuSun className="size-4" /> : theme === "light" ? <LuMoon className="size-4" /> : null}
    </button>
  );
}
