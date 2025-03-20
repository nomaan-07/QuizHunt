import Progressbar from "../features/quiz/Progressbar";
import Question from "../features/quiz/Question";
import QuizFooter from "../features/quiz/QuizFooter";
import QuizHeader from "../features/quiz/QuizHeader";

function Quiz() {
  return (
    <>
      <QuizHeader />
      <Question />
      <Progressbar />
      <QuizFooter />
    </>
  );
}

export default Quiz;
