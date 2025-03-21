import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { restartQuiz } from "../../slices/quizSlice";

import Button from "../../ui/Button";
import { useTranslation } from "../../hooks/useTranslation";

function RestartQuizButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(restartQuiz());
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 0);
  }

  return (
    <Button className="mx-auto" onClick={handleClick}>
      {useTranslation("common.restartQuiz")}
    </Button>
  );
}

export default RestartQuizButton;
