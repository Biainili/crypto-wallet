import type React from "react";
import { ExternalLink } from "lucide-react";
import { useLang } from "../context/LangContext";
import { ExchangeBinance, ExchangeBybit, WalletCoinbase } from "@web3icons/react";

type Partner = {
    name: string;
    url: string;
    renderLogo: () => React.ReactNode;
    domain: string;
};

export function Partners() {
    const { t } = useLang();

    const partners: Partner[] = [
        {
            name: "Binance",
            url: "https://www.binance.com/",
            domain: "binance.com",
            renderLogo: () => <ExchangeBinance variant="branded" size={28} />,
        },
        {
            name: "Bybit",
            url: "https://www.bybit.com/",
            domain: "bybit.com",
            renderLogo: () => <ExchangeBybit variant="branded" size={28} />,
        },
        {
            name: "Coinbase",
            url: "https://www.coinbase.com/",
            domain: "coinbase.com",
            renderLogo: () => <WalletCoinbase variant="branded" size={28} />,
        },
    ];

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-white/90">{t("ourPartners")}</div>
                <div className="text-xs text-white/40">{t("trustedExchanges")}</div>
            </div>

            <div className="mt-4 grid gap-3">
                {partners.map((p) => (
                    <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4
                       hover:bg-white/5 transition"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                {p.renderLogo()}
                            </div>

                            <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-white/90">{p.name}</div>
                                <div className="text-xs text-white/50 truncate">{p.domain}</div>
                            </div>
                        </div>

                        <ExternalLink className="h-4 w-4 text-white/30 group-hover:text-white/60 transition" />
                    </a>
                ))}
            </div>
        </div>
    );
}