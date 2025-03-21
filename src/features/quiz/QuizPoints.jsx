import Text from "../../ui/Text";

import { useTranslation } from "../../hooks/useTranslation";
import { useSelector } from "react-redux";

function QuizPoints() {
  const totalPoints = useSelector((state) => state.quiz.totalPoints);
  const points = useSelector((state) => state.quiz.points);

  const translations = {
    of: useTranslation("common.of"),
    points: useTranslation("common.points"),
  };

  return (
    <Text size="small">
      {points} {translations.of} {totalPoints} {translations.points}
    </Text>
  );
}

export default QuizPoints;
