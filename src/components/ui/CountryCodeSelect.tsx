import { useEffect, useRef, useState } from "react";

const CODES = ["+1", "+7", "+49", "+374"] as const;

export function CountryCodeSelect({
  value,
  onChange,
  label = "Code",
}: {
  value: string;
  onChange: (v: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative top-[-1px]">
      <label className="mb-1 block text-sm text-white/80">{label}</label>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-left text-sm text-white/90
                   outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold">{value}</span>
          <span className="text-white/60">▾</span>
        </div>
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-lg">
          {CODES.map((c) => {
            const active = c === value;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
                className={[
                  "w-full px-3 py-2 text-left text-sm transition",
                  active ? "bg-violet-400/15 text-violet-200" : "text-white/80 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
