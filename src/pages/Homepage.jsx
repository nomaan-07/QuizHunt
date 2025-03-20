import DarkModeToggle from "../features/DarkModeToggle";
import LanguageSwitch from "../features/LanguageSwitch";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Text from "../ui/Text";

function Homepage() {
  return (
    <div className="space-y-12 text-center">
      <div className="mx-auto w-fit">
        <Logo />
      </div>
      <Heading>{useTranslation("homepage.heading")}</Heading>
      <Text size="large">{useTranslation("homepage.title")}</Text>
      <div className="flex items-center justify-center gap-4">
        <DarkModeToggle />
        <LanguageSwitch />
      </div>
      <Button to="/quiz">{useTranslation("common.letsGo")}</Button>
    </div>
  );
}

export default Homepage;
