import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronDown } from "lucide-react";
import { useLang } from "../context/LangContext";

type Faq = {
  id: string;
  q: string;
  a: string;
};

export function HelpCenterPage() {
  const nav = useNavigate();
  const { t } = useLang();
  const [openId, setOpenId] = useState<string>("");

  const faqs: Faq[] = useMemo(
    () => [
      { id: "usage", q: t("faqUsageQ"), a: t("faqUsageA") },
      { id: "vip", q: t("faqVipQ"), a: t("faqVipA") },
      { id: "vipTransfer", q: t("faqVipTransferQ"), a: t("faqVipTransferA") },
      { id: "store", q: t("faqStoreQ"), a: t("faqStoreA") },
      { id: "withdraw", q: t("faqWithdrawQ"), a: t("faqWithdrawA") },
      { id: "forgetKey", q: t("faqForgetKeyQ"), a: t("faqForgetKeyA") },
      { id: "change", q: t("faqChangeQ"), a: t("faqChangeA") },
      { id: "register", q: t("faqRegisterQ"), a: t("faqRegisterA") },
      { id: "invest", q: t("faqInvestQ"), a: t("faqInvestA") },
      { id: "vipFees", q: t("faqVipFeesQ"), a: t("faqVipFeesA") },
    ],
    [t]
  );

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => nav(-1)}
              className="flex h-10 w-10 p-2 items-center justify-center rounded-xl border border-white/10 bg-black/20
                         text-white/70 hover:text-white hover:bg-white/5 transition"
              title={t("back")}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 p-2 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                <HelpCircle className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <div className="text-lg font-semibold">{t("helpCenter")}</div>
                <div className="text-sm text-white/60">{t("helpCenterHint")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="mt-6 space-y-3">
          {faqs.map((f) => {
            const open = openId === f.id;
            return (
              <div
                key={f.id}
                className="rounded-2xl border border-white/10 bg-black/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? "" : f.id)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <div className="text-sm font-semibold text-white/90">
                    {f.q}
                  </div>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-white/40 transition",
                      open ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {open && (
                  <div className="px-4 pb-4 text-sm text-white/70 leading-relaxed whitespace-pre-line">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}