import DarkModeToggle from "../features/DarkModeToggle";
import LanguageSwitch from "../features/LanguageSwitch";

import Logo from "./Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <Logo size="small" />
      <div className="flex items-center gap-2">
        <DarkModeToggle variation="header" />
        <LanguageSwitch variation="header" />
      </div>
    </header>
  );
}

export default Header;
