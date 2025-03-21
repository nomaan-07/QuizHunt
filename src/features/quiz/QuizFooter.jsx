import FinishQuizButton from "./FinishQuizButton";
import NextQuizButton from "./NextQuizButton";

function QuizFooter() {
  return (
    <footer className="flex items-center justify-between">
      <FinishQuizButton />
      <NextQuizButton />
    </footer>
  );
}

export default QuizFooter;
