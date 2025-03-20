import Heading from "../ui/Heading";
import Button from "../ui/Button";
import QuizTypeSelector from "../features/settings/QuizTypeSelector";
import QuestionNumberSelector from "../features/settings/QuestionNumberSelector";

import { useTranslation } from "../hooks/useTranslation";

function Setting() {
  return (
    <>
      <Heading type="h2">{useTranslation("settings.title")}</Heading>
      <QuizTypeSelector />
      <QuestionNumberSelector />
      <Button className="mx-auto" to="/app/quiz">
        {useTranslation("common.startQuiz")}
      </Button>
    </>
  );
}

export default Setting;
