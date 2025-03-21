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
  const stateQuestions = useSelector((state) => state.quiz.questions);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!stateQuestions?.length) navigate("/app/settings");
  }, [stateQuestions, navigate]);

  if (!stateQuestions?.length) return null;

  const {
    question,
    options,
    answer: correctAnswer,
    points,
  } = stateQuestions[index];

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
    <div className="relative space-y-8 rounded-lg border border-slate-200 p-4 dark:border-slate-400">
      <div className="absolute -top-11 right-0 left-0 flex items-center justify-center">
        <Icon icon={quizType} className="size-12" />
      </div>

      <Heading type="h3" className="h-14">
        {question}
      </Heading>
      <div className="space-y-2">
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
