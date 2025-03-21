const basicStyles = "rounded-md p-4";

function QuestionOption({ option, correctAnswer, onClick, answer }) {
  if (!answer) {
    return (
      <p
        className={`bg-slate-600 text-slate-50 outline-offset-1 outline-emerald-500 md:cursor-pointer md:hover:outline ${basicStyles}`}
        onClick={() => onClick(option)}
      >
        {option}
      </p>
    );
  }

  if (option === correctAnswer)
    return (
      <p className={`bg-emerald-500 text-emerald-50 ${basicStyles}`}>
        {option}
      </p>
    );

  if (option === answer && option !== correctAnswer)
    return (
      <p className={`bg-pink-600 text-pink-50 ${basicStyles}`}>{option}</p>
    );

  return (
    <p className={`bg-slate-600 text-slate-50 ${basicStyles}`}>{option}</p>
  );
}

export default QuestionOption;
