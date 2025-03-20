import Question from "../features/quiz/Question";
import QuizFooter from "../ui/QuizFooter";
import QuizHeader from "../ui/QuizHeader";

function Quiz() {
  return (
    <>
      <QuizHeader />
      <Question />
      <QuizFooter />
    </>
  );
}

export default Quiz;
