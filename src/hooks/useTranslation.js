import { useSelector } from "react-redux";
import { translations } from "../data/translations";

export function useTranslation(key) {
  const localLanguage = useSelector((state) => state.language.language);

  const keys = key.split(".");

  const language =
    localLanguage === "fa" || localLanguage === "fa-IR" ? "fa" : "en";

  return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
}
