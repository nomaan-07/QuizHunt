import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { restartQuiz } from "../../slices/quizSlice";

import Button from "../../ui/Button";
import { useTranslation } from "../../hooks/useTranslation";

function RestartQuizButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const translatedText = useTranslation("common.restartQuiz");

  function handleClick() {
    dispatch(restartQuiz());
    navigate("/", { replace: true });
  }

  return (
    <Button className="mx-auto" onClick={handleClick}>
      {translatedText}
    </Button>
  );
}

export default RestartQuizButton;
