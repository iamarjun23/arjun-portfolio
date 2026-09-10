import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-line px-4 text-sm font-medium " +
  "transition-[transform,border-color,background-color,color] duration-200 ease-out " +
  "hover:-translate-y-px hover:border-brand focus-visible:-translate-y-px motion-reduce:hover:translate-y-0";

const variants = {
  default: "text-ink hover:bg-wash",
  primary: "border-brand bg-brand text-[#031014] hover:bg-brand2 hover:border-brand2",
} as const;

type Props = ComponentProps<typeof Link> & { variant?: keyof typeof variants };

export function Button({ variant = "default", className = "", ...props }: Props) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
