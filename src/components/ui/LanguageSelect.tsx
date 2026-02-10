import type { Lang } from "../../i18n/dict";

export function LanguageSelect({
    lang,
    onChange,
}: {
    lang: Lang;
    onChange: (l: Lang) => void;
}) {
    return (
        <select
            value={lang}
            onChange={(e) => onChange(e.target.value as Lang)}
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white
           outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
        >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="de">Deutsch</option>
        </select>
    );
}
