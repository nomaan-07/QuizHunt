import { useState } from "react";

function QuestionNumberSlider() {
  const [value, setValue] = useState(10);
  return (
    <>
      <input
        type="range"
        min={10}
        max={20}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range-input h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-400"
      ></input>
    </>
  );
}

export default QuestionNumberSlider;
