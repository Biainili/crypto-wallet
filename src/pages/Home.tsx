import { Link, Navigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
// import { MarketUSDT } from "../components/MarketUSDT";
import { Sparkles, Activity, ShieldCheck } from "lucide-react";


export function HomePage() {
  const { isAuthed } = useAuth();
  const { t } = useLang();

  if (isAuthed) return <Navigate to="/profile" replace />;

  return (
    <div>
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h1 className="text-2xl font-semibold">{t("guestTitle")}</h1>
        <p className="mt-2 text-sm text-white/70">{t("guestText")}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to="/login"><Button type="button">{t("login")}</Button></Link>
          <Link to="/register"><Button variant="secondary" type="button">{t("register")}</Button></Link>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
          <div className="text-sm font-semibold text-white/90">{t("guestDescTitle")}</div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Feature
              icon={<Sparkles className="h-8 w-8 text-violet-200" />}
              title={t("guestDesc1Title")}
              text={t("guestDesc1Text")}
            />
            <Feature
              icon={<Activity className="h-8 w-8 text-emerald-200" />}
              title={t("guestDesc2Title")}
              text={t("guestDesc2Text")}
            />
            <Feature
              icon={<ShieldCheck className="h-8 w-8 text-sky-200" />}
              title={t("guestDesc3Title")}
              text={t("guestDesc3Text")}
            />
          </div>
        </div>

      </div>
      {/* <div className="mt-4">
        <MarketUSDT />
      </div> */}
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20">
          {icon}
        </div>
        <div className="text-sm font-semibold text-white/90">{title}</div>
      </div>

      <div className="mt-2 text-[12px] leading-relaxed text-white/70">
        {text}
      </div>
    </div>
  );
}

