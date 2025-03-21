import QuizTimer from "./QuizTimer";
import QuizPoints from "./QuizPoints";

function QuizHeader() {
  return (
    <header className="flex items-center justify-between">
      <QuizPoints />
      <QuizTimer />
    </header>
  );
}

export default QuizHeader;
