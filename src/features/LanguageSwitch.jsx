import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";

function LanguageSwitch() {
  const { switchLanguage } = useLanguage();

  return (
    <Button variation="secondary" size="small" onClick={switchLanguage}>
      {useTranslation("common.changeLanguage")}
    </Button>
  );
}

export default LanguageSwitch;
