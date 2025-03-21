import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";

import { nextQuestion } from "../../slices/quizSlice";
import { useTranslation } from "../../hooks/useTranslation";

function NextQuizButton() {
  const answer = useSelector((state) => state.quiz.answer);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);
  const index = useSelector((state) => state.quiz.index);

  const dispatch = useDispatch();

  const isLastQuestion = index + 1 === numQuestions;
  const translatedText = useTranslation("common.next");

  function handleNextQuestion() {
    if (isLastQuestion) return;
    dispatch(nextQuestion());
  }

  if (!answer || isLastQuestion) return null;

  return (
    <Button size="small" onClick={handleNextQuestion}>
      {translatedText}
    </Button>
  );
}

export default NextQuizButton;
