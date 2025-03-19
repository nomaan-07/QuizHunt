import { createContext, useEffect } from "react";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode",
  );

  useEffect(() => {
    if (isDarkMode) return document.documentElement.classList.add("dark");

    document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((darkMode) => !darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };
