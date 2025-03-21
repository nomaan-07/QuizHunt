import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";
import Text from "../../ui/Text";
import DarkModeToggle from "../DarkModeToggle";
import LanguageSwitch from "../LanguageSwitch";

function HomepageLayout() {
  const highScore = useSelector((state) => state.quiz.highScore);

  const highScoreText = useTranslation("homepage.highScore");
  return (
    <div className="container my-20 space-y-12 text-center">
      <Logo />
      <Heading>{useTranslation("homepage.heading")}</Heading>
      <Text size="large">{useTranslation("homepage.title")}</Text>
      {highScore > 0 && (
        <Text size="medium">
          {highScoreText} <strong>{highScore}</strong>
        </Text>
      )}
      <div className="flex items-center justify-center gap-4">
        <DarkModeToggle />
        <LanguageSwitch />
      </div>
      <Button to="app">{useTranslation("common.letsGo")}</Button>
    </div>
  );
}

export default HomepageLayout;
