import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-violet-400/60 hover:bg-violet-400/80 text-white"
      : "bg-white/10 hover:bg-white/15 text-white border border-white/10";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
