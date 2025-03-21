import { useSelector } from "react-redux";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";
import Text from "../../ui/Text";
import DarkModeToggle from "../DarkModeToggle";
import LanguageSwitch from "../LanguageSwitch";

import { useTranslation } from "../../hooks/useTranslation";

function HomepageLayout() {
  const highScore = useSelector((state) => state.quiz.highScore);

  const translations = {
    heading: useTranslation("homepage.heading"),
    title: useTranslation("homepage.title"),
    highScore: useTranslation("homepage.highScore"),
    letsGo: useTranslation("common.letsGo"),
  };

  return (
    <div className="container my-20 space-y-8 text-center md:space-y-12">
      <Logo />
      <Heading>{translations.heading}</Heading>
      <Text size="large">{translations.title}</Text>

      {highScore > 0 && (
        <Text size="medium">
          {translations.highScore} <strong>{highScore}</strong>
        </Text>
      )}

      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-4">
        <DarkModeToggle />
        <LanguageSwitch />
      </div>
      <Button to="/app">{translations.letsGo}</Button>
    </div>
  );
}

export default HomepageLayout;
