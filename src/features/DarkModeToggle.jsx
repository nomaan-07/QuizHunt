import { useDarkMode } from "../hooks/useDarkMode";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const text = isDarkMode ? "theme.light" : "theme.dark";

  return (
    <Button variation="theme" size="small" onClick={toggleDarkMode}>
      {useTranslation(text)}
    </Button>
  );
}

export default DarkModeToggle;
