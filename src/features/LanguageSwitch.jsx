import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";

function LanguageSwitch({ variation = "secondary" }) {
  const { switchLanguage } = useLanguage();
  const translatedText = useTranslation("common.changeLanguage");
  const transLatedLanguage = useTranslation("common.language");

  return (
    <Button variation={variation} size="small" onClick={switchLanguage}>
      {variation === "header" ? transLatedLanguage : translatedText}
    </Button>
  );
}

export default LanguageSwitch;
