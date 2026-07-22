import ar from "@/translations/ar";
import en from "@/translations/en";

export async function getTranslations(locale: "ar" | "en") {
  return locale === "ar" ? ar : en;
}