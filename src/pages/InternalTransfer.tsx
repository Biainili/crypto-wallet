import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Button } from "../components/ui/Button";

export function InternalTransferPage() {
    const nav = useNavigate();
    const { t } = useLang();

    // demo
    const balanceText = "0.00 tether(USDT)";

    const [account, setAccount] = useState(""); // receiver username/email/phone
    const [amount, setAmount] = useState("");

    const amountNum = Number(amount);
    const disabled =
        !account || !amount || !Number.isFinite(amountNum) || amountNum <= 0;

    const limits = [
        { vip: "VIP1", value: "10.00 USDT" },
        { vip: "VIP2", value: "100.00 USDT" },
        { vip: "VIP3", value: "30000.00 USDT" },
        { vip: "VIP4", value: "100000.00 USDT" },
        { vip: "VIP5", value: "200000.00 USDT" },
        { vip: "VIP6", value: "2000000.00 USDT" },
    ];

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
                        {t("internalTransferTitle")}
                    </div>

                    <div className="w-10" />
                </div>

                {/* top card with 3 rows (как на рефе) */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20">
                    {/* Balance row */}
                    <div className="flex items-center gap-4 px-4 py-4 border-b border-white/10">
                        <div className="w-[90px] text-white/90 font-semibold">{t("balance")}</div>
                        <div className="text-white/80">{balanceText}</div>
                    </div>

                    {/* Account row */}
                    <div className="flex items-center gap-4 px-4 py-4 border-b border-white/10">
                        <div className="w-[90px] text-white/90 font-semibold">{t("account")}</div>
                        <input
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            placeholder={t("transferAccountPlaceholder")}
                            className="w-full bg-transparent text-white/80 outline-none placeholder:text-white/35"
                        />
                    </div>

                    {/* Amount row */}
                    <div className="flex items-center gap-4 px-4 py-4">
                        <div className="w-[90px] text-white/90 font-semibold">{t("amount")}</div>
                        <input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                            placeholder={t("transferAmountPlaceholder")}
                            className="w-full bg-transparent text-white/80 outline-none placeholder:text-white/35"
                        />
                    </div>
                </div>

                {/* button */}
                <div className="mt-10 flex justify-center">
                    <Button
                        type="button"
                        disabled={disabled}
                        className="w-full sm:w-[360px]"
                        onClick={() => {
                            console.log("TRANSFER:", { account, amount: amountNum });
                        }}
                    >
                        {t("internalTransferBtn")}
                    </Button>
                </div>

                {/* red note */}
                <div className="mt-6 text-sm text-rose-300">
                    {t("transferVipNote")}
                </div>

                {/* limits */}
                <div className="mt-6">
                    <div className="text-lg font-semibold text-white/90">
                        {t("transferLimitsTitle")}
                    </div>

                    <div className="mt-4 space-y-3">
                        {limits.map((x) => (
                            <div key={x.vip} className="text-white/70 font-semibold">
                                {x.vip} <span className="text-white/60">({x.value})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}