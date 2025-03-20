import { useTranslation } from "../../hooks/useTranslation";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";

function LanguageOption({ quiz }) {
  const { id, name, icon, color } = quiz;

  return (
    <button
      className={`flex w-fit items-center grayscale transition-all md:cursor-pointer md:hover:grayscale-25`}
    >
      <div className="flex size-6 items-center justify-center bg-white dark:bg-slate-200">
        <Icon className="size-5" icon={icon} />
      </div>
      <Text
        size="small"
        className={`w-28 text-center text-slate-50 dark:text-slate-50 ${color}`}
      >
        {useTranslation(`quizTypes.${name}`)}
      </Text>
    </button>
  );
}

export default LanguageOption;
