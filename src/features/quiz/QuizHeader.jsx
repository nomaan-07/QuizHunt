import { useDispatch, useSelector } from "react-redux";
import Text from "../../ui/Text";
import { formatTime } from "../../utils/helpers";
import { useEffect } from "react";
import { decreaseTime, finishQuiz } from "../../slices/quizSlice";
import { useNavigate } from "react-router";
import { useTranslation } from "../../hooks/useTranslation";

function QuizHeader() {
  const remainingSeconds = useSelector((state) => state.quiz.remainingSeconds);
  const totalPoints = useSelector((state) => state.quiz.totalPoints);
  const points = useSelector((state) => state.quiz.points);

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

  return (
    <header className="flex items-center justify-between">
      <Text size="small">
        {points} {useTranslation("common.of")} {totalPoints}{" "}
        {useTranslation("common.points")}
      </Text>
      <Text size="small">{formatTime(remainingSeconds)}</Text>
    </header>
  );
}

export default QuizHeader;
