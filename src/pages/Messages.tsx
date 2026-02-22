import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell } from "lucide-react";
import { useLang } from "../context/LangContext";

type Msg = {
    id: string;
    title: string;
    text: string;
    time: string;
    unread?: boolean;
};

export function MessagesPage() {
    const nav = useNavigate();
    const { t } = useLang();

    const messages: Msg[] = [
        {
            id: "1",
            title: t("msgWelcomeTitle"),
            text: t("msgWelcomeText"),
            time: t("msgJustNow"),
            unread: true,
        },
        {
            id: "2",
            title: t("msgSecurityTitle"),
            text: t("msgSecurityText"),
            time: t("msgToday"),
        },
    ];


    return (
        <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                {/* header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => nav(-1)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20
                         text-white/70 hover:text-white hover:bg-white/5 transition"
                            title={t("back")}
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>

                        <div className="flex items-center gap-2 ">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                                <Bell className="h-6 w-6 text-emerald-300" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold">{t("messages")}</div>
                                <div className="text-sm text-white/60">{t("messagesHint")}</div>
                            </div>
                        </div>
                    </div>

                    <SourceBadge source="system" />
                </div>

                {/* list */}
                <div className="mt-6 space-y-3">
                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <div className="text-sm font-semibold text-white/90">
                                            {m.title}
                                        </div>
                                        {m.unread && (
                                            <span className="h-2 w-2 rounded-full bg-violet-400" />
                                        )}
                                    </div>
                                    <div className="mt-1 text-sm text-white/70">{m.text}</div>
                                </div>

                                <div className="text-xs text-white/50 whitespace-nowrap">
                                    {m.time}
                                </div>
                            </div>
                        </div>
                    ))}

                    {!messages.length && (
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/60">
                            {t("messagesEmpty")}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SourceBadge({ source }: { source: "system" | "support" | "admin" }) {
    const { t } = useLang();

    const map = {
        system: "border-violet-400/20 bg-violet-400/10 text-violet-200",
        support: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
        admin: "border-sky-400/20 bg-sky-400/10 text-sky-200",
    }[source];

    const label = {
        system: t("fromCWallet"),
        support: t("fromSupport"),
        admin: t("fromAdmin"),
    }[source];

    return (
        <div className={`shrink-0 whitespace-nowrap inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${map}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
            {label}
        </div>
    );
}