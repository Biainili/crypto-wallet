import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, CircleDollarSign } from "lucide-react";
import { useLang } from "../context/LangContext";

type LinkItem = {
  key: string;
  title: string;
  url: string;
};

export function QuickBuyPage() {
  const nav = useNavigate();
  const { t } = useLang();

  const links: LinkItem[] = [
    { key: "paxful", title: t("qbPaxful"), url: "https://paxful.com/" },
    { key: "changenow", title: t("qbChangeNow"), url: "https://changenow.io/" },
    { key: "changelly", title: t("qbChangelly"), url: "https://changelly.com/" },
    { key: "binance", title: t("qbBinance"), url: "https://www.binance.com/en" },
    { key: "bybit", title: t("qbBybit"), url: "https://www.bybit.com/en/" },
    { key: "okx", title: t("qbOKX"), url: "https://www.okx.com/" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      {/* warning */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-14 p-2 items-center justify-center rounded-xl border border-white/10 bg-black/20">
            <CircleDollarSign className="h-6 w-6 text-sky-300" />
          </div>
          <div className="text-sm text-white/70 leading-relaxed">
            {t("qbWarning")}
          </div>
        </div>
      </div>

      {/* header */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
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

          <div className="text-sm font-semibold text-white/90">{t("quickBuy")}</div>

          <div className="w-10" />
        </div>

        {/* list */}
        <div className="mt-5 space-y-3">
          {links.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4
                         hover:bg-white/5 transition"
            >
              <div className="text-white/90 font-semibold">
                {item.title}
              </div>
              <ChevronRight className="h-5 w-5 text-white/40" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}