import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
import Button from "../ui/Button";
import { useEffect } from "react";
import { switchLanguage } from "../slices/languageSlice";

function LanguageSwitch({ variation = "secondary" }) {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const translatedText = useTranslation("common.changeLanguage");
  const transLatedLanguage = useTranslation("common.language");

  useEffect(() => {
    if (language === "fa-IR" || language === "fa") {
      document.documentElement.setAttribute("lang", "fa");
      document.documentElement.setAttribute("dir", "rtl");
      localStorage.setItem("language", "fa");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
      localStorage.setItem("language", "en");
    }
  }, [language]);

  return (
    <Button
      variation={variation}
      size="small"
      onClick={() => dispatch(switchLanguage())}
    >
      {variation === "header" ? transLatedLanguage : translatedText}
    </Button>
  );
}

export default LanguageSwitch;
