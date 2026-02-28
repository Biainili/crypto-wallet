import { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Button } from "./ui/Button";
import { NetworkSelect, type Network } from "./ui/NetworkSelect";



export function RefundModal({
    open,
    onClose,
    onConfirm,
}: {
    open: boolean;
    onClose: () => void;
    onConfirm: (data: { amount: number; network: Network; keyPassword: string }) => void;
}) {
    const { t } = useLang();

    const [amount, setAmount] = useState("");
    const [network, setNetwork] = useState<Network>("TRC20-USDT");
    const [keyPassword, setKeyPassword] = useState("");
    const [showKey, setShowKey] = useState(false);

    // esc + lock scroll
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    const amountNum = Number(amount);
    const disabled = !amount || !Number.isFinite(amountNum) || amountNum <= 0 || !keyPassword;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* overlay */}
            <button
                type="button"
                onClick={onClose}
                className="absolute inset-0 bg-black/60"
                aria-label="close"
            />

            {/* modal */}
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-5 shadow-xl">
                {/* header */}
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-white/90">{t("refundTitle")}</div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* amount */}
                <div className="mt-4">
                    <label className="mb-1 block text-xs text-white/60">{t("amount")}</label>
                    <input
                        value={amount}
                        onChange={(e) => {
                            // разрешаем цифры и точку
                            const v = e.target.value.replace(/[^0-9.]/g, "");
                            setAmount(v);
                        }}
                        placeholder="0.00"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-base text-white/90 outline-none
                       focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />
                </div>

                {/* network */}
                <div className="mt-4">
                    <NetworkSelect
                        label={t("network")}
                        value={network}
                        onChange={setNetwork}
                    />
                </div>

                {/* key password */}
                <div className="mt-4 relative">
                    <label className="mb-1 block text-xs text-white/60">{t("keyPassword")}</label>
                    <input
                        type={showKey ? "text" : "password"}
                        value={keyPassword}
                        onChange={(e) => setKeyPassword(e.target.value)}
                        placeholder={t("pleaseEnterKeyPassword")}
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 pr-12 text-base text-white/90 outline-none
                       focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />

                    <button
                        type="button"
                        onClick={() => setShowKey((v) => !v)}
                        className="absolute right-3 top-[30px] rounded-lg p-2 text-white/50 hover:text-white/80"
                        aria-label="toggle key"
                    >
                        {showKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>

                {/* actions */}
                <div className="mt-5 flex gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/5 transition"
                    >
                        {t("cancel")}
                    </button>

                    <Button
                        type="button"
                        disabled={disabled}
                        onClick={() => onConfirm({ amount: amountNum, network, keyPassword })}
                        className="flex-1"
                    >
                        {t("confirm")}
                    </Button>
                </div>

                <div className="mt-3 text-xs text-white/40 leading-relaxed">
                    {t("refundHint")}
                </div>
            </div>
        </div>
    );
}

