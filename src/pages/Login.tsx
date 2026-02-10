import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { Eye, EyeOff } from "lucide-react";

function makeCaptcha() {
    return String(Math.floor(1000 + Math.random() * 9000));
}

export function LoginPage() {
    const nav = useNavigate();
    const { login } = useAuth();
    const { t } = useLang();

    const [loginId, setLoginId] = useState(""); // username or email
    const [password, setPassword] = useState("");

    const [captcha, setCaptcha] = useState(makeCaptcha());
    const [verification, setVerification] = useState("");

    const [showPass, setShowPass] = useState(false);

    const captchaOk = verification.trim() && verification.trim() === captcha;

    const disabled = useMemo(() => {
        if (!loginId) return true;
        if (!password) return true;
        if (!captchaOk) return true;
        return false;
    }, [loginId, password, captchaOk]);

    return (
        <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
            <h1 className="text-xl font-semibold">{t("signIn")}</h1>

            <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (disabled) return;
                    login(loginId, password);
                    nav("/profile", { replace: true });
                }}
            >
                {/* Username or Email */}
                <Input
                    label={t("pleaseEnterUsernameOrEmail")}
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />

                {/* Password with eye */}
                <div className="relative">
                    <Input
                        label={t("pleaseEnterPassword")}
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPass((v) => !v)}
                        className="absolute right-3 top-[27px] rounded-lg p-2 text-white/50 hover:text-white/80"
                        aria-label="toggle password"
                    >
                        {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>

                {/* Verification + captcha */}
                <div className="flex gap-3">
                    <div className="flex-1">
                        <Input
                            label={t("pleaseEnterVerification")}
                            value={verification}
                            onChange={(e) => setVerification(e.target.value.replace(/[^\d]/g, ""))}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            setCaptcha(makeCaptcha());
                            setVerification("");
                        }}
                        className="mt-[22px] h-[46px] w-[120px] rounded-2xl border border-white/10 bg-white/90
                       text-xl font-black tracking-widest text-black/80"
                        title={t("refreshCaptcha")}
                    >
                        {captcha}
                    </button>
                </div>

                <Button type="submit" disabled={disabled}>
                    {t("login")}
                </Button>

                <div className="text-sm text-white/70">
                    {t("goToRegister").split(" ").slice(0, -1).join(" ")}{" "}
                    <Link className="text-violet-400/90 hover:text-violet-400/70" to="/register">
                        {t("register")}
                    </Link>
                </div>
            </form>

            {/* errors */}
            {verification && !captchaOk && (
                <div className="mt-3 text-sm text-rose-300">{t("verificationIncorrect")}</div>
            )}
        </div>
    );
}
