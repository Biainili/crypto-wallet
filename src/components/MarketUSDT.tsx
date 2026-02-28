import { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../context/LangContext";

type Row = {
    symbol: string;        // BTCUSDT
    base: string;          // BTC
    lastPrice: number;     // 70150.21
    priceChangePercent: number; // 0.04
};

const DEFAULT_SYMBOLS = [
    "USDCUSDT",
    "BTCUSDT",
    "ETHUSDT",
    "SOLUSDT",
    "XRPUSDT",
    "BNBUSDT",
    "TRXUSDT",
    "LTCUSDT",
    "TONUSDT",
    "EURIUSDT",
];

function fmtPrice(n: number) {
    if (!Number.isFinite(n)) return "—";
    // немного "умно": мелкие цены показываем точнее
    if (n < 1) return n.toFixed(6);
    if (n < 100) return n.toFixed(2);
    return n.toFixed(2);
}
const ICON_MAP: Record<string, string> = {
    BTC: "bitcoin-btc-logo.png",
    ETH: "ethereum-eth-logo.png",
    SOL: "solana-sol-logo.png",
    XRP: "xrp-xrp-logo.png",
    BNB: "bnb-bnb-logo.png",
    TRX: "tron-trx-logo.png",
    LTC: "litecoin-ltc-logo.png",
    TON: "toncoin-ton-logo.png",
    USDC: "usd-coin-usdc-logo.png",
    EURI: "euro-coin-euroc-logo.png",
};

function coinIconUrl(base: string) {
    const file = ICON_MAP[base.toUpperCase()];
    if (!file) return null;
    return `https://cryptologos.cc/logos/${file}?v=040`;
}

function fmtPct(n: number) {
    if (!Number.isFinite(n)) return "—";
    const s = n > 0 ? `+${n.toFixed(2)}%` : `${n.toFixed(2)}%`;
    return s;
}

export function MarketUSDT({

    symbols = DEFAULT_SYMBOLS,
}: {
    symbols?: string[];
}) {
    const [rows, setRows] = useState<Row[]>([]);
    const wsRef = useRef<WebSocket | null>(null);

    const symbolsSet = useMemo(() => new Set(symbols.map((s) => s.toUpperCase())), [symbols]);

    // 1) initial load (REST)
    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");
                const data = (await res.json()) as any[];

                if (cancelled) return;

                const mapped: Row[] = data
                    .filter((x) => symbolsSet.has(String(x.symbol).toUpperCase()))
                    .map((x) => ({
                        symbol: String(x.symbol).toUpperCase(),
                        base: String(x.symbol).toUpperCase().replace("USDT", ""),
                        lastPrice: Number(x.lastPrice),
                        priceChangePercent: Number(x.priceChangePercent),
                    }));

                // сохраняем в нужном порядке symbols
                const ordered = symbols
                    .map((s) => mapped.find((m) => m.symbol === s.toUpperCase()))
                    .filter(Boolean) as Row[];

                setRows(ordered);
            } catch (e) {
                // если REST недоступен — просто не падаем
                console.error("Market REST load failed:", e);
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [symbols, symbolsSet]);

    // 2) realtime updates (WebSocket)
    useEffect(() => {
        // stream по конкретным символам
        const streams = symbols.map((s) => `${s.toLowerCase()}@ticker`).join("/");
        const url = `wss://stream.binance.com:9443/stream?streams=${streams}`;

        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onmessage = (ev) => {
            try {
                const msg = JSON.parse(ev.data as string);
                // формат: { stream: "btcusdt@ticker", data: {...} }
                const d = msg?.data;
                if (!d?.s) return;

                const symbol = String(d.s).toUpperCase();
                const lastPrice = Number(d.c); // last price
                const priceChangePercent = Number(d.P); // 24h change %

                setRows((prev) => {
                    if (!prev.length) return prev;

                    const next = prev.map((r) =>
                        r.symbol === symbol
                            ? { ...r, lastPrice, priceChangePercent }
                            : r
                    );

                    return next;
                });
            } catch {
                // ignore bad frames
            }
        };

        ws.onerror = () => {
            // если сокет упал — не крашим UI
        };

        return () => {
            ws.close();
            wsRef.current = null;
        };
    }, [symbols]);

    const { t } = useLang();
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-lg font-semibold text-white/90">{t("usdtMarket")}</div>

            {/* header */}
            <div className="mt-4 grid grid-cols-[1.3fr_1fr_0.9fr] text-sm text-white/40">
                <div>{t("currency")}</div>
                <div className="text-center">{t("latestPrice")}</div>
                <div className="text-right">{t("change24h")}</div>
            </div>

            <div className="mt-2 space-y-2">
                {rows.map((r) => {
                    const up = r.priceChangePercent > 0;
                    const down = r.priceChangePercent < 0;

                    return (
                        <div
                            key={r.symbol}
                            className="grid grid-cols-[1.3fr_1fr_0.9fr] items-center rounded-2xl border border-white/10 bg-black/20 px-3 py-3"
                        >
                            {/* left: icon + pair */}
                            <div className="flex items-center gap-3 min-w-0">
                                <CoinIcon base={r.base} />
                                <div className="min-w-0">
                                    <div className="truncate ss:text-lg text-sm font-semibold text-white">{r.base}/USDT</div>
                                </div>
                            </div>

                            {/* center: price */}
                            <div
                                className={[
                                    "text-center ss:text-lg text-sm font-semibold",
                                    up ? "text-emerald-300" : down ? "text-rose-400" : "text-white/80",
                                ].join(" ")}
                            >
                                {fmtPrice(r.lastPrice)}
                            </div>

                            {/* right: change badge */}
                            <div className="flex justify-end">
                                <div
                                    className={[
                                        "rounded-xl px-4 py-2 ss:text-lg ss:text-lg text-sm font-semibold",
                                        up
                                            ? "bg-emerald-400/15 text-emerald-200 border border-emerald-400/20"
                                            : down
                                                ? "bg-rose-400/15 text-rose-200 border border-rose-400/20"
                                                : "bg-white/5 text-white/70 border border-white/10",
                                    ].join(" ")}
                                >
                                    {fmtPct(r.priceChangePercent)}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {!rows.length && (
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
                        {t("loadingMarket")}
                    </div>
                )}
            </div>
        </div>
    );
}

function CoinIcon({ base }: { base: string }) {
    const [broken, setBroken] = useState(false);
    const url = coinIconUrl(base);

    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden">
            {url && !broken ? (
                <img
                    src={url}
                    alt={base}
                    className="h-10 w-10 object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setBroken(true)}
                />
            ) : (
                <span className="text-sm font-semibold text-white/80">
                    {base.slice(0, 1)}
                </span>
            )}
        </div>
    );
}