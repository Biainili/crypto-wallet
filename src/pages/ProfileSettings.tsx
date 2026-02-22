import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Save, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";
import { CountryCodeSelect } from "../components/ui/CountryCodeSelect";

// простое демо-хранилище профиля (потом заменим на API)
const PROFILE_KEY = "wallet_profile";

type ProfileData = {
    email: string;
    phoneCode: string;
    phone: string;
};

function loadProfile(defaultEmail: string): ProfileData {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) {
        return { email: defaultEmail, phoneCode: "+374", phone: "" };
    }
    try {
        return JSON.parse(raw) as ProfileData;
    } catch {
        return { email: defaultEmail, phoneCode: "+374", phone: "" };
    }
}

function saveProfile(p: ProfileData) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

export function ProfileSettingsPage() {
    const nav = useNavigate();
    const { t } = useLang();
    const { user } = useAuth();

    const initial = loadProfile(user?.email ?? "");

    // change email/phone
    const [email, setEmail] = useState(initial.email);
    const [phoneCode, setPhoneCode] = useState(initial.phoneCode);
    const [phone, setPhone] = useState(initial.phone);

    // change password
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    // confirm by key password
    const [keyPassword, setKeyPassword] = useState("");
    const [showKey, setShowKey] = useState(false);

    // toggles
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const passMismatch =
        newPassword.length > 0 &&
        confirmNewPassword.length > 0 &&
        newPassword !== confirmNewPassword;

    const disabled = useMemo(() => {
        if (!email) return true;
        if (!phone) return true;

        // если пользователь решил менять пароль — он должен совпасть
        if ((newPassword || confirmNewPassword) && passMismatch) return true;

        // key password обязателен всегда для подтверждения
        if (!keyPassword) return true;

        return false;
    }, [email, phone, newPassword, confirmNewPassword, passMismatch, keyPassword]);

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

                        <div>
                            <div className="text-lg font-semibold">{t("profileSettings")}</div>
                            <div className="text-sm text-white/60">{t("profileSettingsHint")}</div>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs text-white/50">
                        <span className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                            {t("confirmWithKeyPassword")}
                        </span>
                    </div>
                </div>

                {/* form */}
                <form
                    className="mt-6 grid gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (disabled) return;

                        // demo save
                        saveProfile({ email, phoneCode, phone });

                        // пароль пока никуда не отправляем — это UI этап
                        // тут позже будет API call: updateEmail/updatePhone/updatePassword

                        nav("/profile", { replace: true });
                    }}
                >
                    {/* Contact */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-sm font-semibold text-white/90">{t("contactInfo")}</div>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Input
                                label={t("email")}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className="flex gap-3">
                                <div className="w-[110px] top-[4px] relative">
                                    <CountryCodeSelect
                                        label={t("code")}
                                        value={phoneCode}
                                        onChange={setPhoneCode}
                                        
                                    />
                                </div>

                                <div className="flex-1">
                                    <Input
                                        label={t("phone")}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
                                        placeholder={t("pleaseEnterPhoneNumber")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-sm font-semibold text-white/90">{t("changePassword")}</div>
                        <div className="mt-1 text-xs text-white/50">
                            {t("changePasswordHint")}
                        </div>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <PasswordField
                                label={t("newPassword")}
                                value={newPassword}
                                onChange={setNewPassword}
                                show={showPass}
                                onToggle={() => setShowPass((v) => !v)}
                            />

                            <PasswordField
                                label={t("confirmPassword")}
                                value={confirmNewPassword}
                                onChange={setConfirmNewPassword}
                                show={showConfirmPass}
                                onToggle={() => setShowConfirmPass((v) => !v)}
                            />
                        </div>

                        {passMismatch && (
                            <div className="mt-3 text-sm text-rose-300">{t("passwordsDoNotMatch")}</div>
                        )}
                    </div>

                    {/* Key Password confirm */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-sm font-semibold text-white/90">{t("confirmChanges")}</div>
                        <div className="mt-1 text-xs text-white/50">{t("keyPasswordRequired")}</div>

                        <div className="mt-4">
                            <PasswordField
                                label={t("keyPassword")}
                                value={keyPassword}
                                onChange={setKeyPassword}
                                show={showKey}
                                onToggle={() => setShowKey((v) => !v)}
                            />
                        </div>
                    </div>

                    <Button type="submit" disabled={disabled}>
                        <span className="inline-flex items-center gap-2">
                            <Save className="h-4 w-4" />
                            {t("saveChanges")}
                        </span>
                    </Button>
                </form>
            </div>
        </div>
    );
}

function PasswordField({
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