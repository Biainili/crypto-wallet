import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { Eye, EyeOff } from "lucide-react";
import { CountryCodeSelect } from "../components/ui/CountryCodeSelect";

function makeCaptcha() {
  // простая капча: 4 цифры
  return String(Math.floor(1000 + Math.random() * 9000));
}

export function RegisterPage() {
  const nav = useNavigate();
  const { register } = useAuth();
  const { t } = useLang();

  // fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [keyPassword, setKeyPassword] = useState("");
  const [confirmKeyPassword, setConfirmKeyPassword] = useState("");

  const [captcha, setCaptcha] = useState(makeCaptcha());
  const [verification, setVerification] = useState("");

  // toggles
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showKeyPass, setShowKeyPass] = useState(false);
  const [showConfirmKeyPass, setShowConfirmKeyPass] = useState(false);

  const passMismatch = password && confirmPassword && password !== confirmPassword;
  const keyMismatch = keyPassword && confirmKeyPassword && keyPassword !== confirmKeyPassword;

  const captchaOk =
    verification.trim().length > 0 && verification.trim() === captcha;

  const disabled = useMemo(() => {
    if (!username) return true;
    if (!email) return true;
    if (!phone) return true;
    if (!password || !confirmPassword) return true;
    if (password !== confirmPassword) return true;
    if (!keyPassword || !confirmKeyPassword) return true;
    if (keyPassword !== confirmKeyPassword) return true;
    if (!captchaOk) return true;
    return false;
  }, [
    username,
    email,
    phone,
    password,
    confirmPassword,
    keyPassword,
    confirmKeyPassword,
    captchaOk,
  ]);

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
      <h1 className="text-xl font-semibold">{t("createAccount")}</h1>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (disabled) return;

          // пока register принимает (name,email,password) — передаем username
          register(username, email, password);
          nav("/profile", { replace: true });
        }}
      >
        {/* Username */}
        <Input
          label={t("pleaseEnterUsername")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email */}
        <Input
          label={t("pleaseEnterEmail")}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Phone: country code + number */}
        <div className="flex gap-3">
          <div className="w-[92px]">
            <div className="w-[92px]">
              <CountryCodeSelect
                label={t("code")}
                value={countryCode}
                onChange={setCountryCode}
              />
            </div>
          </div>

          <div className="flex-1">
            <Input
              label={t("pleaseEnterPhoneNumber")}
              value={phone}
              onChange={(e) => {
                // только цифры
                const v = e.target.value.replace(/[^\d]/g, "");
                setPhone(v);
              }}
            />
          </div>
        </div>

        {/* Password */}
        <PasswordInput
          label={t("pleaseEnterPassword")}
          value={password}
          onChange={setPassword}
          show={showPass}
          onToggle={() => setShowPass((v) => !v)}
        />

        {/* Confirm Password */}
        <PasswordInput
          label={t("pleaseConfirmPasswordAgain")}
          value={confirmPassword}
          onChange={setConfirmPassword}
          show={showConfirmPass}
          onToggle={() => setShowConfirmPass((v) => !v)}
        />

        {/* Key Password */}
        <PasswordInput
          label={t("pleaseEnterKeyPassword")}
          value={keyPassword}
          onChange={setKeyPassword}
          show={showKeyPass}
          onToggle={() => setShowKeyPass((v) => !v)}
        />

        {/* Note */}
        <div className="text-[10px] text-rose-300 leading-relaxed">
          {t("keyPasswordNote")}
        </div>

        {/* Confirm Key Password */}
        <PasswordInput
          label={t("pleaseConfirmKeyPasswordAgain")}
          value={confirmKeyPassword}
          onChange={setConfirmKeyPassword}
          show={showConfirmKeyPass}
          onToggle={() => setShowConfirmKeyPass((v) => !v)}
        />

        {/* Verification + captcha */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              label={t("pleaseEnterVerification")}
              value={verification}
              onChange={(e) => setVerification(e.target.value.replace(/[^\d]/g, ""))}
            />
          </div>

          {/* "captcha image" */}
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
          {t("register")}
        </Button>

        <div className="text-sm text-white/70">
            {t("goToLogin").split(" ").slice(0, -1).join(" ")}{" "}
          <Link className="text-violet-400/90 hover:text-violet-400/70" to="/login">
            {t("login")}
          </Link>
        </div>
      </form>

      {/* errors */}
      {passMismatch && (
        <div className="mt-3 text-sm text-rose-300">{t("passwordsDoNotMatch")}</div>
      )}
      {keyMismatch && (
        <div className="mt-2 text-sm text-rose-300">{t("keyPasswordsDoNotMatch")}</div>
      )}
      {verification && !captchaOk && (
        <div className="mt-2 text-sm text-rose-300">{t("verificationIncorrect")}</div>
      )}
    </div>
  );
}

function PasswordInput({
  label,
  value,
  onChange,
  show,
  onToggle,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <Input
        label={label}
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-[27px] rounded-lg p-2 text-white/50 hover:text-white/80"
        aria-label="toggle password"
      >
        {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  );
}
