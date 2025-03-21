import { useSelector } from "react-redux";

import Text from "../../ui/Text";
import Heading from "../../ui/Heading";
import Icon from "../../ui/Icon";

import { useTranslation } from "../../hooks/useTranslation";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ResultInfo() {
  const navigate = useNavigate();

  const highScore = useSelector((state) => state.quiz.highScore);
  const correctAnswersCount = useSelector(
    (state) => state.quiz.correctAnswersCount,
  );
  const numQuestions = useSelector((state) => state.quiz.numQuestions);
  const totalPoints = useSelector((state) => state.quiz.totalPoints);
  const points = useSelector((state) => state.quiz.points);
  const quizType = useSelector((state) => state.quiz.quizType);
  const language = useSelector((state) => state.language.language);

  const correctAnswersPercentage = Math.round(
    (correctAnswersCount / numQuestions) * 100,
  );

  const pointsPercentage = Math.round((points / totalPoints) * 100);

  const titleText = useTranslation(`quizTypes.${quizType}`);

  useEffect(() => {
    if (!totalPoints) navigate("/app/settings");
  }, [navigate, totalPoints]);

  if (!totalPoints) return null;

  if (language.startsWith("fa"))
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Icon icon={quizType} className="size-8" />
          <Heading type="h3">
            نتیجه آزمون <strong>{titleText}</strong>
          </Heading>
        </div>
        {highScore === points && <Text>تبریک میگم رکورد قبلیتو زدی 🎉🥳</Text>}
        <Text>
          تو <strong>{correctAnswersCount}</strong> سوال از{" "}
          <strong>{numQuestions}</strong> سوالو درست جواب دادی. (
          {correctAnswersPercentage}%)
        </Text>
        <Text>
          تو <strong>{points}</strong> امتیاز از <strong>{totalPoints}</strong>{" "}
          امتیاز گرفتی. ({pointsPercentage}%)
        </Text>
        <Text>
          بالاترین امتیازت: <strong>{highScore}</strong>.
        </Text>
      </div>
    );

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon icon={quizType} className="size-8" />
        <Heading type="h3">
          Your result in <strong>{titleText}</strong> quiz
        </Heading>
      </div>
      {highScore === points && (
        <Text>Congratulations you broke your record! 🎉🥳</Text>
      )}
      <Text>
        You answered <strong>{correctAnswersCount}</strong> out of{" "}
        <strong>{numQuestions}</strong> questions correctly. (
        {correctAnswersPercentage}%)
      </Text>
      <Text>
        You achieved <strong>{points}</strong> points of total{" "}
        <strong>{totalPoints}</strong> points. ({pointsPercentage}%)
      </Text>
      <Text>
        Your highest score is <strong>{highScore}</strong>.
      </Text>
    </div>
  );
}

export default ResultInfo;
