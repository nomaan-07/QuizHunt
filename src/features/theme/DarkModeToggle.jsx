import { useDarkMode } from "../../hooks/useDarkMode";
import Button from "../../ui/Button";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button variation="theme" size="small" onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
    </Button>
  );
}

export default DarkModeToggle;
