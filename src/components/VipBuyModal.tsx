import { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Button } from "./ui/Button";

type VipLevel = "VIP1" | "VIP2" | "VIP3" | "VIP4" | "VIP5" | "VIP6";

export function VipBuyModal({
    open,
    vip,
    onClose,
    onConfirm,
}: {
    open: boolean;
    vip: { level: VipLevel; deposit: string } | null;
    onClose: () => void;
    onConfirm: (data: { vipLevel: VipLevel; keyPassword: string }) => void;
}) {
    const { t } = useLang();
    const [keyPassword, setKeyPassword] = useState("");
    const [showKey, setShowKey] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            setKeyPassword("");
            setShowKey(false);
        }
    }, [open]);

    if (!open || !vip) return null;

    const disabled = !keyPassword;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <button
                type="button"
                onClick={onClose}
                className="absolute inset-0 bg-black/60"
                aria-label="close"
            />

            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-5 shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-white/90">
                        {t("purchase")} {vip.level}
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    <div>
                        <span className="text-white/50">{t("vipDeposit")}: </span>
                        <span className="font-semibold text-white/90">{vip.deposit}</span>
                    </div>
                    <div className="mt-2 text-white/50">{t("vipBuyHint")}</div>
                </div>

                <div className="mt-4 relative">
                    <label className="mb-1 block text-xs text-white/60">
                        {t("keyPassword")}
                    </label>
                    <input
                        type={showKey ? "text" : "password"}
                        value={keyPassword}
                        onChange={(e) => setKeyPassword(e.target.value)}
                        placeholder={t("pleaseEnterKeyPassword")}
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 pr-12 text-sm text-white/90 outline-none
                       focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />
                    <button
                        type="button"
                        onClick={() => setShowKey((v) => !v)}
                        className="absolute right-3 top-[27px] rounded-lg p-2 text-white/50 hover:text-white/80"
                        aria-label="toggle key"
                    >
                        {showKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>

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
                        onClick={() => onConfirm({ vipLevel: vip.level, keyPassword })}
                        className="flex-1"
                    >
                        {t("confirm")}
                    </Button>
                </div>
            </div>
        </div>
    );
}