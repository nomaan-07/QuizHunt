import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import { changeQuizType } from "../../slices/quizSlice";

function LanguageOption({ quiz }) {
  const quizType = useSelector((state) => state.quiz.quizType);
  const { name, icon, color } = quiz;
  const isActive = quizType === name;

  const dispatch = useDispatch();

  const handleClick = () => dispatch(changeQuizType(name));

  return (
    <button
      className={`flex w-fit items-center transition-all ${isActive ? "" : "grayscale md:cursor-pointer md:hover:grayscale-25"}`}
      disabled={isActive}
      onClick={handleClick}
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
