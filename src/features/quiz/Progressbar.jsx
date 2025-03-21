import { useSelector } from "react-redux";
import Text from "../../ui/Text";

function Progressbar() {
  const numQuestions = useSelector((state) => state.quiz.numQuestions);
  const index = useSelector((state) => state.quiz.index);

  return (
    <div className="flex items-center gap-2">
      <Text size="small">{index + 1}</Text>
      <progress
        value={index + 1}
        max={numQuestions}
        className="progress-bar"
      ></progress>
      <Text size="small">{numQuestions}</Text>
    </div>
  );
}

export default Progressbar;
