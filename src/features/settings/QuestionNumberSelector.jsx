import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import QuestionNumberSlider from "./QuestionNumberSlider";

function QuestionNumberSelector() {
  const minNumQuestions = useSelector((state) => state.quiz.minNumQuestions);
  const maxNumQuestions = useSelector((state) => state.quiz.maxNumQuestions);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);

  return (
    <div>
      <Heading type="h3">
        {useTranslation("settings.quizNumberTitle")} <span>{numQuestions}</span>
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
