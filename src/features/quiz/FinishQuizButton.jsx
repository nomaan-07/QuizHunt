import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { finishQuiz } from "../../slices/quizSlice";
import { useTranslation } from "../../hooks/useTranslation";

function FinishQuizButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFinish() {
    dispatch(finishQuiz());
    navigate("/app/result", { replace: true });
  }

  return (
    <Button size="small" onClick={handleFinish} variation="secondary">
      {useTranslation("common.finishQuiz")}
    </Button>
  );
}

export default FinishQuizButton;
