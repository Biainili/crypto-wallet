import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className = "", ...props }: Props) {
  return (
    <label className="block">
      <div className="mb-1 text-sm text-white/80">{label}</div>
      <input
        className={
          "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-base text-white placeholder:text-white/40 " +
          "focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 " +
          className
        }
        {...props}
      />
    </label>
  );
}
