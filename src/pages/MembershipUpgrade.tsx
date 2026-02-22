import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Crown } from "lucide-react";
import { useLang } from "../context/LangContext";
import { VipBuyModal } from "../components/VipBuyModal";

type VipLevel = "VIP1" | "VIP2" | "VIP3" | "VIP4" | "VIP5" | "VIP6";

type VipCard = {
    level: VipLevel;
    deposit: string;
    dayLimit: string;
    monthLimit: string;
    tag?: "HOT";
};

const VIPS: VipCard[] = [
    { level: "VIP1", deposit: "51.00 USDT", dayLimit: "10.00 USDT", monthLimit: "50.00 USDT" },
    { level: "VIP2", deposit: "1498.5 USDT", dayLimit: "100.00 USDT", monthLimit: "3000.00 USDT" },
    { level: "VIP3", deposit: "3001.00 USDT", dayLimit: "30000.00 USDT", monthLimit: "900000.00 USDT", tag: "HOT" },
    { level: "VIP4", deposit: "29998.5 USDT", dayLimit: "100000.00 USDT", monthLimit: "3000000.00 USDT" },
    { level: "VIP5", deposit: "50001.00 USDT", dayLimit: "200000.00 USDT", monthLimit: "6000000.00 USDT" },
    { level: "VIP6", deposit: "99998.5 USDT", dayLimit: "2000000.00 USDT", monthLimit: "60000000.00 USDT" },
];

export function MembershipUpgradePage() {
    const nav = useNavigate();
    const { t } = useLang();

    const [buyOpen, setBuyOpen] = useState(false);
    const [selected, setSelected] = useState<VipCard | null>(null);

    return (
        <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                {/* top bar */}
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => nav(-1)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20
                       text-white/70 hover:text-white hover:bg-white/5 transition"
                        title={t("back")}
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <div className="text-sm font-semibold text-white/90">
                        {t("membershipUpgradeTitle")}
                    </div>

                    <div className="w-10" />
                </div>

                {/* hint */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    {t("membershipUpgradeHint")}
                </div>

                {/* cards */}
                <div className="mt-4 space-y-4">
                    {VIPS.map((v) => (
                        <VipRow
                            key={v.level}
                            data={v}
                            onBuy={() => {
                                setSelected(v);
                                setBuyOpen(true);
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* modal */}
            <VipBuyModal
                open={buyOpen}
                vip={selected}
                onClose={() => setBuyOpen(false)}
                onConfirm={({ vipLevel, keyPassword }) => {
                    console.log("VIP BUY:", { vipLevel, keyPassword });
                    setBuyOpen(false);
                }}
            />
        </div>
    );
}

function VipRow({ data, onBuy }: { data: VipCard; onBuy: () => void }) {
    const { t } = useLang();

    // аккуратные градиенты под уровень
    const bg =
        data.level === "VIP1"
            ? "from-slate-900/60 to-indigo-900/30"
            : data.level === "VIP2"
                ? "from-emerald-900/45 to-slate-900/40"
                : data.level === "VIP3"
                    ? "from-rose-900/45 to-slate-900/40"
                    : data.level === "VIP4"
                        ? "from-amber-900/40 to-slate-900/40"
                        : data.level === "VIP5"
                            ? "from-fuchsia-900/40 to-slate-900/40"
                            : "from-indigo-900/40 to-slate-900/40";

    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r ${bg} p-4`}
        >
            {/* HOT */}
            {data.tag === "HOT" && (
                <div className="absolute left-1 top-1 rounded-full bg-rose-500 px-2 py-0.5 text-[11px] font-bold text-white">
                    {data.tag}
                </div>
            )}

            {/* header */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="text-3xl font-extrabold text-white/90 tracking-wide">
                        {data.level.replace("VIP", "V")}
                    </div>

                    <div className="mt-2 space-y-1 text-sm text-white/75">
                        <div>
                            <span className="text-white/50">{t("vipDeposit")}: </span>
                            <span className="font-semibold text-white/85">{data.deposit}</span>
                        </div>

                        <div className="text-white/55">{t("vipCollectionLine")}</div>

                        <div>
                            <span className="text-white/50">{t("vipDayLimit")}: </span>
                            <span className="font-semibold text-white/85">{data.dayLimit}</span>
                        </div>
                        <div>
                            <span className="text-white/50">{t("vipMonthLimit")}: </span>
                            <span className="font-semibold text-white/85">{data.monthLimit}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                        <Crown className="h-6 w-6 text-violet-200" />
                    </div>

                    <button
                        type="button"
                        onClick={onBuy}
                        className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90
                       hover:bg-white/15 transition"
                    >
                        {t("purchase")}
                    </button>
                </div>
            </div>
        </div>
    );
}