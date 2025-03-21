import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../ui/Button";

import { useTranslation } from "../../hooks/useTranslation";
import { finishQuiz } from "../../slices/quizSlice";

function FinishQuizButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const translatedText = useTranslation("common.finishQuiz");

  function handleFinish() {
    dispatch(finishQuiz());
    navigate("/app/result", { replace: true });
  }

  return (
    <Button size="small" onClick={handleFinish} variation="secondary">
      {translatedText}
    </Button>
  );
}

export default FinishQuizButton;
