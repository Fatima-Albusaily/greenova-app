"use client";

import ar from "@/translations/ar";
import en from "@/translations/en";
import { createContext, useContext, useEffect, useState } from "react";



type Locale = "ar" | "en";

const translations = {
  ar,
  en,
};

type LanguageContextType = {
  locale: Locale;
  dir: "rtl" | "ltr";
  isRTL: boolean;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
  t: typeof ar;
};


const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>("ar");

  useEffect(() => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="));

  if (cookie) {
    setLocale(cookie.split("=")[1] as Locale);
    return;
  }

  const saved = localStorage.getItem("locale") as Locale | null;

  if (saved) {
    setLocale(saved);
  }
}, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir: locale === "ar" ? "rtl" : "ltr",
        isRTL: locale === "ar",
        setLocale,
        toggleLanguage,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}