"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type AdminLang = "en" | "jp";
const STORAGE_KEY = "sanjana-admin-lang";

interface AdminLangContextValue {
  lang: AdminLang;
  setLang: (lang: AdminLang) => void;
  t: (en: string, jp: string) => string;
}

const AdminLangContext = createContext<AdminLangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function AdminLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<AdminLang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "jp") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync persisted admin language
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (next: AdminLang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const t = (en: string, jp: string) => (lang === "jp" ? jp : en);

  return (
    <AdminLangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </AdminLangContext.Provider>
  );
}

export function useAdminLang() {
  return useContext(AdminLangContext);
}

export function T({ en, jp }: { en: string; jp: string }) {
  const { t } = useAdminLang();
  return <>{t(en, jp)}</>;
}
