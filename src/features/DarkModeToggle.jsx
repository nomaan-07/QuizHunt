import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";

function DarkModeToggle({ variation = "dark" }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const text = isDarkMode ? "theme.light" : "theme.dark";
  const translatedText = useTranslation(text);

  return (
    <Button variation={variation} size="small" onClick={toggleDarkMode}>
      {variation === "header" ? (isDarkMode ? "🌞" : "🌛") : translatedText}
    </Button>
  );
}

export default DarkModeToggle;
