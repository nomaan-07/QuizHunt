import LanguageOption from "./LanguageOption";
import Heading from "../../ui/Heading";
import { useTranslation } from "../../hooks/useTranslation";

const quizTypes = [
  {
    id: 1,
    name: "html",
    icon: "html",
    color: "bg-orange-500",
  },

  {
    id: 2,
    name: "css",
    icon: "css",
    color: "bg-sky-600",
  },

  {
    id: 3,
    name: "javascript",
    icon: "js",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    name: "react",
    icon: "react",
    color: "bg-cyan-400",
  },
];

function QuizTypeSelector() {
  return (
    <div>
      <Heading type="h3">{useTranslation("settings.quizTypeTitle")}</Heading>
      <div className="mt-5 flex gap-8">
        {quizTypes.map((quiz) => (
          <LanguageOption quiz={quiz} key={quiz.id} />
        ))}
      </div>
    </div>
  );
}

export default QuizTypeSelector;
