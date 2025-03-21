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
    icon: "javascript",
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
  const translatedTitle = useTranslation("settings.quizTypeTitle");

  return (
    <div>
      <Heading type="h3">{translatedTitle}</Heading>
      <div className="mt-5 flex flex-wrap gap-8">
        {quizTypes.map((quiz) => (
          <LanguageOption quiz={quiz} key={quiz.id} />
        ))}
      </div>
    </div>
  );
}

export default QuizTypeSelector;
