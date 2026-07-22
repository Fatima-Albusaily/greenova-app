"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-semibold
        transition
        text-[#F8F8F5]
        hover:bg-dark-main
      "
    >
      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
}