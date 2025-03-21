import { useLocation } from "react-router";
import DarkModeToggle from "../features/DarkModeToggle";
import LanguageSwitch from "../features/LanguageSwitch";

import Logo from "./Logo";

function Header() {
  const location = useLocation();

  return (
    <header className="flex w-full items-center justify-between">
      <Logo size="small" />
      <div className="flex items-center gap-2">
        <DarkModeToggle variation="header" />
        {location.pathname !== "/app/quiz" && (
          <LanguageSwitch variation="header" />
        )}
      </div>
    </header>
  );
}

export default Header;
