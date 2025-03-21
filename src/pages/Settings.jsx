import Heading from "../ui/Heading";
import QuizTypeSelector from "../features/settings/QuizTypeSelector";
import QuestionNumberSelector from "../features/settings/QuestionNumberSelector";

import { useTranslation } from "../hooks/useTranslation";
import StartQuizButton from "../features/quiz/StartQuizButton";

function Setting() {
  return (
    <>
      <Heading type="h2">{useTranslation("settings.title")}</Heading>
      <QuizTypeSelector />
      <QuestionNumberSelector />
      <StartQuizButton />
    </>
  );
}

export default Setting;
