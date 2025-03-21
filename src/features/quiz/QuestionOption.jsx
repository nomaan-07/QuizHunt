const basicStyles = "rounded-md py-5 px-4 md:p-4 text-sm md:text-base";

function QuestionOption({ option, correctAnswer, onClick, answer }) {
  let className = `bg-slate-600 text-slate-50 ${basicStyles}`;

  if (!answer) {
    className +=
      " outline-offset-1 outline-emerald-500 md:cursor-pointer md:hover:outline";
  } else if (option === correctAnswer) {
    className = `bg-emerald-500 text-emerald-50 ${basicStyles}`;
  } else if (option === answer && option !== correctAnswer) {
    className = `bg-pink-600 text-pink-50 ${basicStyles}`;
  }

  return (
    <p
      className={className}
      onClick={!answer ? () => onClick(option) : undefined}
    >
      {option}
    </p>
  );
}

export default QuestionOption;
