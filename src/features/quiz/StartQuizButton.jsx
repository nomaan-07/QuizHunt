import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../ui/Button";

import { useTranslation } from "../../hooks/useTranslation";
import { questions } from "../../data/questions";
import { startQuiz } from "../../slices/quizSlice";
import { getRandomItems } from "../../utils/helpers";
import { SEC_PER_QUESTION } from "../../utils/constants";

function StartQuizButton() {
  const localLanguage = useSelector((state) => state.language.language);
  const quizType = useSelector((state) => state.quiz.quizType);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const language = localLanguage.startsWith("fa") ? "fa" : "en";

  const translatedText = useTranslation("common.startQuiz");

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
      {translatedText}
    </Button>
  );
}

export default StartQuizButton;
