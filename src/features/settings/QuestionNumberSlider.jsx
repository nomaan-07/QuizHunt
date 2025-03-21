import { useDispatch, useSelector } from "react-redux";
import { changeNumQuestions } from "../../slices/quizSlice";

function QuestionNumberSlider() {
  const minNumQuestions = useSelector((state) => state.quiz.minNumQuestions);
  const maxNumQuestions = useSelector((state) => state.quiz.maxNumQuestions);
  const numQuestions = useSelector((state) => state.quiz.numQuestions);

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(changeNumQuestions(Number(e.target.value)));
  }

  return (
    <>
      <input
        type="range"
        min={minNumQuestions}
        max={maxNumQuestions}
        value={numQuestions}
        onChange={handleChange}
        className="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-400"
      ></input>
    </>
  );
}

export default QuestionNumberSlider;
