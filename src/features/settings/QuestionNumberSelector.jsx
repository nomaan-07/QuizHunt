import { useTranslation } from "../../hooks/useTranslation";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import QuestionNumberSlider from "./QuestionNumberSlider";

function QuestionNumberSelector() {
  return (
    <div>
      <Heading type="h3">
        {useTranslation("settings.quizNumberTitle")} <span>14</span>
      </Heading>
      <div className="mt-5 flex items-center gap-2">
        <Text size="small">10</Text>
        <QuestionNumberSlider />
        <Text size="small">20</Text>
      </div>
    </div>
  );
}

export default QuestionNumberSelector;
