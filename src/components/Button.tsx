import type { ComponentProps } from "react";

const base =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium " +
  "transition-[background-color,border-color,color,opacity] duration-150";

const variants = {
  primary: "bg-ink text-bg hover:opacity-85",
  secondary: "border border-line bg-surface text-ink hover:border-line-strong",
} as const;

type Props = ComponentProps<"a"> & { variant?: keyof typeof variants };

/** Anchor styled as a button. External links open in a new tab automatically. */
export function Button({ variant = "secondary", className = "", href = "", ...props }: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
