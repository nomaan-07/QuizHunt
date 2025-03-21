import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import { questions } from "../../data/questions";
import { startQuiz } from "../../slices/quizSlice";
import { SEC_PER_QUESTION } from "../../utils/constants";

import Button from "../../ui/Button";
import { getRandomItems } from "../../utils/helpers";
import { useNavigate } from "react-router";

function StartQuizButton() {
  const localLanguage = useSelector((state) => state.language.language);
  const quizType = useSelector((state) => state.quiz.quizType);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const language = localLanguage.startsWith("fa") ? "fa" : "en";

  const finalQuestions = getRandomItems(
    questions[language][quizType],
    numQuestions,
  );

  function handleClick() {
    const options = {
      questions: finalQuestions,
      remainingSeconds: SEC_PER_QUESTION * numQuestions,
    };

    dispatch(startQuiz(options));
    navigate("/app/quiz");
  }

  return (
    <Button className="mx-auto" onClick={handleClick}>
      {useTranslation("common.startQuiz")}
    </Button>
  );
}

export default StartQuizButton;
