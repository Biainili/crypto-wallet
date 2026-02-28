import { useEffect, useRef, useState } from "react";

import trcUsdt from "../../assets/network-icons/trc_usdt.png";
import erc20Usdt from "../../assets/network-icons/erc20_usdt.png";
import eth from "../../assets/network-icons/eth.png";

export type Network = "TRC20-USDT" | "ERC20-USDT" | "ETH";

const OPTIONS: { value: Network; label: string }[] = [
    { value: "TRC20-USDT", label: "TRC20-USDT" },
    { value: "ERC20-USDT", label: "ERC20-USDT" },
    { value: "ETH", label: "ETH" },
];

const ICONS: Record<Network, string> = {
    "TRC20-USDT": trcUsdt,
    "ERC20-USDT": erc20Usdt,
    ETH: eth,
};

export function NetworkSelect({
    label,
    value,
    onChange,
}: {
    label: string;
    value: Network;
    onChange: (v: Network) => void;
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
        <div ref={ref} className="relative">
            <label className="mb-2 block text-xs text-white/60">{label}</label>

            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-left text-sm text-white/90
                   outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden">
                            <img
                                src={ICONS[value]}
                                alt={value}
                                className="h-8 w-8 object-cover"
                                loading="lazy"
                            />
                        </div>
                        <span className="font-semibold">{value}</span>
                    </div>
                    <span className="text-white/60">▾</span>
                </div>
            </button>

            {open && (
                <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-lg">
                    {OPTIONS.map((opt) => {
                        const active = opt.value === value;
                        return (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                    onChange(opt.value);
                                    setOpen(false);
                                }}
                                className={[
                                    "w-full px-3 py-3 text-left text-sm transition flex items-center justify-between",
                                    active ? "bg-violet-400/15" : "hover:bg-white/5",
                                ].join(" ")}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden">
                                        <img
                                            src={ICONS[opt.value]}
                                            alt={opt.value}
                                            className="h-8 w-8 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="font-semibold text-white/90">{opt.label}</span>
                                </div>

                                <div
                                    className={[
                                        "h-4 w-4 rounded-full border",
                                        active
                                            ? "border-violet-300 bg-violet-400/60"
                                            : "border-white/20 bg-transparent",
                                    ].join(" ")}
                                />
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}