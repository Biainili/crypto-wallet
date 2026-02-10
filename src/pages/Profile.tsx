import React from "react";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { User, Bell, CircleDollarSign, HelpCircle } from "lucide-react";
import { BottomMenu } from "../components/BottomMenu";
import { MarketUSDT } from "../components/MarketUSDT";


export function ProfilePage() {
  const { user } = useAuth();
  const { t } = useLang();

  const username = user?.name ?? user?.email ?? "User";

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        {/* Header row: left Profile icon + text, right quick actions */}
        <div className="flex items-center justify-between gap-3">
          {/* LEFT: profile icon + title */}
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl
                border border-violet-400/50 bg-black/20
                ring-1 ring-violet-400/10 shadow-[0_0_0_1px_rgba(167,139,250,0.08)]">
              <User className="h-5 w-5 text-violet-200" />
            </div>
            {/* <h1 className="text-xl font-semibold">{t("profile")}</h1> */}
          </div>

          {/* RIGHT: quick actions horizontal */}
          <div className="flex items-center gap-2">
            <QuickAction
              icon={<Bell className="h-4 w-4 text-emerald-300" />}
              label="Message"
              subLabel="Notification"
            />
            <QuickAction
              icon={<CircleDollarSign className="h-4 w-4 text-sky-300" />}
              label="Quick"
              subLabel="Buy"
            />
            <QuickAction
              icon={<HelpCircle className="h-4 w-4 text-violet-300" />}
              label="Help"
              subLabel="Center"
            />
          </div>
        </div>

        {/* Welcome row: highlight username */}
        <p className="mt-3 text-sm text-white/70">
          {t("welcome")},{" "}
          <span className="font-semibold text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.35)]">{username}</span>
        </p>

        {/* Cards */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-3">
            <div className="text-sm text-white/60">{t("myassetsUSDT")}</div>
            <div className="mt-2 text-lg font-semibold">0.00</div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-3">
            <div className="text-sm text-white/60">{t("depositUSDT")}</div>
            <div className="h-[40px]">
              <div className="mt-2 text-lg font-semibold text-right relative top-[-1px]">0</div>
              <button className="relative left-[15px] top-[-5px] mt-2 text-sm text-white/100 rounded-xl
                border border-violet-400/50 bg-violet-400/50
                ring-1 ring-violet-400/10 shadow-[0_0_0_1px_rgba(167,139,250,0.08)] py-[2px] px-[12px]">{t("applyforrefund")}</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 rounded-2xl border border-white/10 border-pulse-violet bg-white/5 p-2"> */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-2">
        <BottomMenu />
      </div>

      <div className="mt-4">
        <MarketUSDT />
      </div>

      <div className="mt-4">
        Our Partners 
      </div>

    </div>
  );
}

function QuickAction({
  icon,
  label,
  subLabel,
}: {
  icon: React.ReactNode;
  label: string;
  subLabel: string;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20
                 px-2.5 py-2 hover:bg-white/10 transition"
      aria-label={`${label} ${subLabel}`}
      title={`${label} ${subLabel}`}
    >
      {/* иконка всегда */}
      <div className="flex h-7 w-6 items-center justify-center rounded-xl bg-white/5">
        {icon}
      </div>

      {/* текст только от 390px и выше */}
      <div className="hidden xs:block leading-tight text-left">
        <div className="text-[8px] font-semibold text-white">{label}</div>
        <div className="text-[7px] text-white/60">{subLabel}</div>
      </div>
    </button>
  );
}