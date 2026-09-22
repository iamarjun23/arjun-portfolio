"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 15_000);
  return () => clearInterval(id);
}

/** Current time in the given zone, e.g. "2:41 pm". Blank until hydrated so the
 * static HTML never shows a stale build-time clock. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", timeZone }).format(
        new Date(),
      ),
    () => "",
  );

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {time || "—"}
    </time>
  );
}
