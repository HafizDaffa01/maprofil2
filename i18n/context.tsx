"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import en from "@/i18n/translations/en";
import id from "@/i18n/translations/id";

type Locale = "en" | "id";

// Use a mutable version of the English type so both EN and ID are assignable
type MutableDeep<T> = {
  -readonly [K in keyof T]: T[K] extends object ? MutableDeep<T[K]> : T[K];
};

type Translations = MutableDeep<typeof en>;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const translations = { en, id };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as Translations, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
