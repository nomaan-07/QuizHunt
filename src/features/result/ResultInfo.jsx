import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import Text from "../../ui/Text";
import Heading from "../../ui/Heading";
import Icon from "../../ui/Icon";

import { useTranslation } from "../../hooks/useTranslation";

function ResultInfo() {
  const navigate = useNavigate();
  const {
    highScore,
    correctAnswersCount,
    numQuestions,
    totalPoints,
    points,
    quizType,
  } = useSelector((state) => state.quiz);

  const translations = {
    title: useTranslation("result.title"),
    recordBreak: useTranslation("result.recordBreak"),
    answered: useTranslation("result.answered"),
    outOf: useTranslation("result.outOf"),
    correctly: useTranslation("result.correctly"),
    pointsAchieved: useTranslation("result.pointsAchieved"),
    pointsOfTotal: useTranslation("result.pointsOfTotal"),
    pointsGot: useTranslation("result.pointsGot"),
    highScoreText: useTranslation("homepage.highScore"),
    quizTitle: useTranslation(`quizTypes.${quizType}`),
  };

  useEffect(() => {
    if (!totalPoints) navigate("/");
  }, [navigate, totalPoints]);

  const correctAnswersPercentage = Math.round(
    (correctAnswersCount / numQuestions) * 100,
  );

  const pointsPercentage = Math.round((points / totalPoints) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon icon={quizType} className="size-8" />
        <Heading type="h3">
          {translations.title} <strong>{translations.quizTitle}</strong>
        </Heading>
      </div>
      {points >= highScore && points !== 0 && (
        <Text>{translations.recordBreak}</Text>
      )}
      <Text>
        {translations.answered} <strong>{correctAnswersCount}</strong>{" "}
        {translations.outOf} <strong>{numQuestions}</strong>{" "}
        {translations.correctly} ({correctAnswersPercentage}%)
      </Text>
      <Text>
        {translations.pointsAchieved} <strong>{points}</strong>{" "}
        {translations.pointsOfTotal} <strong>{totalPoints}</strong>{" "}
        {translations.pointsGot} ({pointsPercentage}%)
      </Text>
      <Text>
        {translations.highScoreText} <strong>{highScore}</strong>.
      </Text>
    </div>
  );
}

export default ResultInfo;
