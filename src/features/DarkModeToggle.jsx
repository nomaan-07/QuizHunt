import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkModeSlice";

import Button from "../ui/Button";

import { useTranslation } from "../hooks/useTranslation";

function DarkModeToggle({ variation = "dark" }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDarkMode", "false");
    }
  }, [isDarkMode]);

  const text = isDarkMode ? "theme.light" : "theme.dark";
  const translatedText = useTranslation(text);

  return (
    <Button
      variation={variation}
      size="small"
      onClick={() => dispatch(toggleDarkMode())}
    >
      {variation === "header" ? (isDarkMode ? "🌞" : "🌛") : translatedText}
    </Button>
  );
}

export default DarkModeToggle;
