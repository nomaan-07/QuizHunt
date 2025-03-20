import { translations } from "../data/translations";
import { useLanguage } from "./useLanguage";

export function useTranslation(key) {
  const { language: localLanguage } = useLanguage();

  const keys = key.split(".");

  const language =
    localLanguage === "fa" || localLanguage === "fa-IR" ? "fa" : "en";

  return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
}
