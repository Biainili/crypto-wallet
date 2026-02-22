import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Button } from "../components/ui/Button";
import { DepositAssetSelect, type DepositAsset } from "../components/ui/DepositAssetSelect";

export function DepositPage() {
    const nav = useNavigate();
    const { t } = useLang();

    const [asset, setAsset] = useState<DepositAsset>("ERC20-USDT");
    const [amount, setAmount] = useState("");
    const [keyPassword, setKeyPassword] = useState("");
    const [showKey, setShowKey] = useState(false);

    const amountNum = Number(amount);
    const disabled =
        !amount || !Number.isFinite(amountNum) || amountNum <= 0 || !keyPassword;

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
                        {t("depositTitle")}
                    </div>

                    <button
                        type="button"
                        className="text-sm text-violet-400/90 hover:text-violet-400/70 transition"
                        onClick={() => nav("/deposit-records")}
                    >
                        {t("records")}
                    </button>
                </div>

                {/* selector */}
                <div className="mt-4">
                    <DepositAssetSelect value={asset} onChange={setAsset} />
                </div>

                {/* red warning */}
                <div className="mt-3 text-sm text-rose-300">{t("depositTopWarning")}</div>

                {/* Amount (как в RefundModal) */}
                <div className="mt-5">
                    <label className="mb-1 block text-xs text-white/60">{t("amount")}</label>
                    <input
                        value={amount}
                        onChange={(e) => {
                            const v = e.target.value.replace(/[^0-9.]/g, "");
                            setAmount(v);
                        }}
                        placeholder={t("depositAmountPlaceholder")}
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white/90 outline-none
                       focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20"
                    />
                </div>

                {/* Key Password (как в RefundModal) */}
                <div className="mt-5 relative">
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
                        {showKey ? (
                            <EyeOff className="h-5 w-5" />
                        ) : (
                            <Eye className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* hints */}
                <div className="mt-6 text-sm text-white/70 leading-relaxed">
                    {t("depositHint")}
                </div>
                <div className="mt-2 text-sm text-rose-300 leading-relaxed">
                    {t("depositBottomWarning")}
                </div>

                {/* submit */}
                <div className="mt-8 flex justify-center">
                    <Button
                        type="button"
                        disabled={disabled}
                        className="w-full sm:w-[320px]"
                        onClick={() => {
                            console.log("DEPOSIT:", { asset, amount: amountNum, keyPassword });
                        }}
                    >
                        {t("send")}
                    </Button>
                </div>
            </div>
        </div>
    );
}