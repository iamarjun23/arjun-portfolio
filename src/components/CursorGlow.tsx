"use client";

import { useEffect, useRef, useState } from "react";

/** Brand cursor for precise desktop pointers. Touch and reduced-motion users
 * keep the native cursor so interaction remains predictable. */
export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const hover = window.matchMedia("(hover: hover)");
    const calm = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const sync = () => setEnabled(fine.matches && hover.matches && calm.matches);

    sync();
    fine.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    calm.addEventListener("change", sync);

    return () => {
      fine.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("has-brand-cursor");

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.dataset.visible = "true";
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.dataset.interactive = String(
          Boolean((event.target as Element | null)?.closest?.("a, button, [role='button']")),
        );
      }
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onDown = () => {
      if (cursorRef.current) cursorRef.current.dataset.pressed = "true";
    };
    const onUp = () => {
      if (cursorRef.current) cursorRef.current.dataset.pressed = "false";
    };
    const hide = () => {
      if (cursorRef.current) cursorRef.current.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerleave", hide);

    return () => {
      root.classList.remove("has-brand-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", hide);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      data-interactive="false"
      data-pressed="false"
      data-visible="false"
      className="brand-cursor"
    >
      <span className="brand-cursor__diamond" />
      <span className="brand-cursor__dot" />
    </div>
  );
}
