import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import Text from "../../ui/Text";

import { formatTime } from "../../utils/helpers";
import { decreaseTime, finishQuiz } from "../../slices/quizSlice";

function QuizTimer() {
  const remainingSeconds = useSelector((state) => state.quiz.remainingSeconds);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (remainingSeconds <= 0) {
      dispatch(finishQuiz());
      navigate("/app/result");
      return;
    }

    const timer = setInterval(() => {
      dispatch(decreaseTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, remainingSeconds, navigate]);

  return <Text size="small">{formatTime(remainingSeconds)}</Text>;
}

export default QuizTimer;
