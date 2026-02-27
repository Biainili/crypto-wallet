import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { LanguageSelect } from "./ui/LanguageSelect";
import { Settings, LogOut } from "lucide-react";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export function AppShell() {
    const nav = useNavigate();
    const { isAuthed, logout } = useAuth();
    const { lang, setLang, t } = useLang();

    return (
        <div className="min-h-screen">
            <header className="border-b border-white/10 bg-black/20 backdrop-blur">
                <div className="container-app flex h-14 items-center justify-between">
                    {/* <Link to="/" className="text-lg font-semibold tracking-wide text-violet-400">
                        C-Wallet
                    </Link> */}

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-lg font-semibold tracking-wide"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl
                   border border-white/40 bg-violet-400/50
                   shadow-[0_0_0_1px_rgba(167,139,250,0.10)]">
                            <span className="text-white/90">C</span>
                        </span>
                        <span className="text-violet-400/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.40)] drop-shadow-[0_0_10px_rgba(167,139,250,0.60)]">
                            Wallet
                            <span className="ml-1 text-white/90 text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.60)]">•</span>
                        </span>

                    </Link>

                    <div className="flex items-center gap-3">
                        {/* показываем только если авторизован */}
                        {isAuthed && (
                            <nav className="hidden sm:flex items-center gap-3 text-sm text-white/80">
                                <Link to="/profile" className="hover:text-white">
                                    {t("profile")}
                                </Link>
                                <button
                                    className="hover:text-white"
                                    onClick={() => {
                                        logout();
                                        nav("/", { replace: true });
                                    }}
                                >
                                    {t("logout")}
                                </button>
                            </nav>
                        )}

                        {/* dropdown языка всегда */}
                        <LanguageSelect lang={lang} onChange={setLang} />
                    </div>
                </div>
            </header>

            <main className="container-app py-8">
                {/* mobile: Profile/Logout только если авторизован */}
                {isAuthed && (
                    <div className="mb-4 flex gap-3 sm:hidden">
                        {/* 80% */}
                        <Link
                            to="/profile-settings"
                            className="flex-[4] flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2 text-center text-sm"
                        >
                            <Settings className="h-4 w-4" />
                            <span>{t("profileSettings")}</span>
                        </Link>

                        {/* 20% */}
                        <button
                            className="flex-[1] flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2 text-sm"
                            onClick={() => {
                                logout();
                                nav("/", { replace: true });
                            }}
                            aria-label={t("logout")}
                            title={t("logout")}
                        >
                            <LogOut className="h-4 w-4" />
                        </button>
                    </div>
                )}

                <Outlet />
            </main>

            {/* <footer className="container-app pb-8 text-xs text-white/40">
                Demo UI • Stage 2
            </footer> */}
            <ScrollToTopButton />
        </div>
    );
}
