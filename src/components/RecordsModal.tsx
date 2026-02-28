import { useEffect } from "react";
import { X } from "lucide-react";
import { useLang } from "../context/LangContext";

export type RecordKind = "deposit" | "withdraw";

type RecordRow = {
    id: string;
    kind: RecordKind;
    amount: string;     // "120.00 USDT"
    network: string;    // "TRC20-USDT"
    time: string;       // "Today 12:30"
    status: "Success" | "Pending" | "Failed";
};

export function RecordsModal({
    open,
    onClose,
    title,
    items,
}: {
    open: boolean;
    onClose: () => void;
    title: string;
    items: RecordRow[];
}) {
    const { t } = useLang();

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
                    <div className="text-lg font-semibold text-white/90">{title}</div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="mt-4 space-y-3">
                    {items.map((r) => (
                        <div
                            key={r.id}
                            className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="text-sm font-semibold text-white/90">
                                        {r.amount}
                                        <span className="ml-2 text-xs text-white/40">{r.network}</span>
                                    </div>
                                    <div className="mt-1 text-xs text-white/50">{r.time}</div>
                                </div>

                                <StatusBadge status={r.status} />
                            </div>
                        </div>
                    ))}

                    {!items.length && (
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
                            {t("noRecordsYet")}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: "Success" | "Pending" | "Failed" }) {
    const cls =
        status === "Success"
            ? "border-emerald-400/20 bg-emerald-400/15 text-emerald-200"
            : status === "Pending"
                ? "border-amber-400/20 bg-amber-400/15 text-amber-200"
                : "border-rose-400/20 bg-rose-400/15 text-rose-200";

    return (
        <div className={`shrink-0 rounded-xl border px-3 py-1 text-xs font-semibold ${cls}`}>
            {status}
        </div>
    );
}