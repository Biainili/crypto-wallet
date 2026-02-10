import React, { createContext, useContext, useMemo, useState } from "react";
import { labels, type Lang } from "../i18n/dict";

const KEY = "wallet_lang";

type LangState = {
  lang: Lang;
  t: (key: string) => string;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangState | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(KEY) as Lang | null;
    return saved ?? "en";
  });

  const value = useMemo<LangState>(() => {
    return {
      lang,
      setLang: (l) => {
        localStorage.setItem(KEY, l);
        setLangState(l);
      },
      t: (key) => labels[lang][key] ?? key,
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
