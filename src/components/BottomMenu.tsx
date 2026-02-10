import React from "react";
import { ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight, BadgeCheck } from "lucide-react";
import { useLang } from "../context/LangContext";

type Item = {
    key: "deposit" | "withdraw" | "transfer" | "upgrade";
    icon: React.ReactNode;
};

export function BottomMenu() {
    const { t } = useLang();

    const items: Item[] = [
        { key: "deposit", icon: <ArrowDownToLine className="h-6 w-6" /> },
        { key: "withdraw", icon: <ArrowUpFromLine className="h-6 w-6" /> },
        { key: "transfer", icon: <ArrowLeftRight className="h-6 w-6" /> },
        { key: "upgrade", icon: <BadgeCheck className="h-6 w-6" /> },
    ];

    return (
        <div className="grid grid-cols-4 gap-2">
            {items.map((it) => (
                <button
                    key={it.key}
                    type="button"
                    className="flex flex-col items-center justify-start  rounded-2xl px-2 py-3 transition
                         border border-transparent hover:border-white/10 hover:bg-white/5"
                >
                    {/* Icon box (одинаковый для всех) */}
                    <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl
                           border border-white/10 bg-black/20 text-white/100
                           hover:text-white transition bg-violet-400/40"
                    >
                        {it.icon}
                    </div>

                    {/* Label (переводы) */}
                    <div className="mt-2 text-center text-xs leading-tight text-white/100">
                        {t(`menu.${it.key}`)}
                    </div>
                </button>
            ))}
        </div>
    );
}
