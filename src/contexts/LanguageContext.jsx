import { createContext, useEffect } from "react";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorageState(
    navigator.language || navigator.userLanguage,
    "language",
  );

  useEffect(() => {
    if (language === "fa-IR" || language === "fa") {
      document.documentElement.setAttribute("lang", "fa");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  function switchLanguage() {
    setLanguage((language) =>
      language === "fa-IR" || language === "fa" ? "en" : "fa",
    );
  }
  return (
    <LanguageContext.Provider value={{ switchLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
