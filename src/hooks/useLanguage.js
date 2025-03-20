import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of DarkModeProvider");
  return context;
}
