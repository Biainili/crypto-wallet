import { useEffect, useRef, useState } from "react";
import bnbUsdt from "../../assets/network-icons/bnb_usdt.png";
import bscUsdc from "../../assets/network-icons/bsc_usdc.png";
import bscUsdt from "../../assets/network-icons/bsc_usdt.png";
import erc20Usdc from "../../assets/network-icons/erc20_usdc.png";
import erc20Usdt from "../../assets/network-icons/erc20_usdt.png";
import eth from "../../assets/network-icons/eth.png";
import trcUsdt from "../../assets/network-icons/trc_usdt.png";

export type DepositAsset =
    | "ERC20-USDT"
    | "BEP20-USDT"
    | "BEP20-USDC"
    | "BNB"
    | "ERC20-USDC"
    | "ETH"
    | "TRC20-USDT";

const OPTIONS: { value: DepositAsset; label: string }[] = [
    { value: "ERC20-USDT", label: "ERC20-USDT" },
    { value: "BEP20-USDT", label: "BEP20-USDT" },
    { value: "BEP20-USDC", label: "BEP20-USDC" },
    { value: "BNB", label: "BNB" },
    { value: "ERC20-USDC", label: "ERC20-USDC" },
    { value: "ETH", label: "ETH" },
    { value: "TRC20-USDT", label: "TRC20-USDT" },
];

const ICONS: Record<DepositAsset, string> = {
    "ERC20-USDT": erc20Usdt,
    "BEP20-USDT": bscUsdt,
    "BEP20-USDC": bscUsdc,
    BNB: bnbUsdt,
    "ERC20-USDC": erc20Usdc,
    ETH: eth,
    "TRC20-USDT": trcUsdt,
};


export function DepositAssetSelect({
    value,
    onChange,
}: {
    value: DepositAsset;
    onChange: (v: DepositAsset) => void;
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
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-left text-sm text-white/90
                   outline-none focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden">
                            <img
                                src={ICONS[value]}
                                alt={value}
                                className="h-10 w-10 object-cover"
                                loading="lazy"
                            />
                        </div>
                        <span className="text-base font-semibold">{value}</span>
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
                                    "w-full px-4 py-4 text-left transition flex items-center justify-between",
                                    active ? "bg-violet-400/15" : "hover:bg-white/5",
                                ].join(" ")}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden">
                                        <img
                                            src={ICONS[opt.value]}
                                            alt={opt.value}
                                            className="h-10 w-10 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-base font-semibold text-white/90">
                                        {opt.label}
                                    </span>
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