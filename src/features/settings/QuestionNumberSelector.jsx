import { useSelector } from "react-redux";

import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import QuestionNumberSlider from "./QuestionNumberSlider";

import { useTranslation } from "../../hooks/useTranslation";

function QuestionNumberSelector() {
  const minNumQuestions = useSelector((state) => state.quiz.minNumQuestions);
  const maxNumQuestions = useSelector((state) => state.quiz.maxNumQuestions);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);

  const translatedTitle = useTranslation("settings.quizNumberTitle");

  return (
    <div>
      <Heading type="h3">
        {translatedTitle} <span>{numQuestions}</span>
      </Heading>
      <div className="mt-5 flex items-center gap-2">
        <Text size="small">{minNumQuestions}</Text>
        <QuestionNumberSlider />
        <Text size="small">{maxNumQuestions}</Text>
      </div>
    </div>
  );
}

export default QuestionNumberSelector;
