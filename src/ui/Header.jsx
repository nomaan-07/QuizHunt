import DarkModeToggle from "../features/DarkModeToggle";
import LanguageSwitch from "../features/LanguageSwitch";

import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between gap-40 md:gap-80">
      <Logo size="small" />
      <div className="flex items-center gap-2">
        <DarkModeToggle variation="header" />
        <LanguageSwitch variation="header" />
      </div>
    </div>
  );
}

export default Header;
