import { useDispatch, useSelector } from "react-redux";

import { answerQuestion } from "../../slices/quizSlice";

import QuestionOption from "./QuestionOption";
import Heading from "../../ui/Heading";
import Icon from "../../ui/Icon";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Question() {
  const index = useSelector((state) => state.quiz.index);
  const answer = useSelector((state) => state.quiz.answer);
  const quizType = useSelector((state) => state.quiz.quizType);
  const questions = useSelector((state) => state.quiz.questions);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questions?.length) navigate("/app/settings");
  }, [questions.length, navigate]);

  if (!questions?.length) return null;

  const { question, options, answer: correctAnswer, points } = questions[index];

  function handleClick(answer) {
    dispatch(
      answerQuestion({
        points: answer === correctAnswer ? points : 0,
        answer: answer,
        isCorrect: answer === correctAnswer,
      }),
    );
  }

  return (
    <div className="relative rounded-lg border-y border-slate-200 py-3 md:border-x md:p-4 dark:border-slate-500">
      <div className="absolute -top-8 right-0 left-0 flex items-center justify-center md:-top-11">
        <Icon icon={quizType} className="size-8 md:size-12" />
      </div>

      <Heading type="h3" className="mb-6 min-h-14 md:mb-8">
        {question}
      </Heading>
      <div className="space-y-3">
        {options.map((option) => (
          <QuestionOption
            key={option}
            option={option}
            correctAnswer={correctAnswer}
            answer={answer}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
