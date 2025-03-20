import Heading from "../../ui/Heading";
import Answer from "./Answer";

function Question() {
  return (
    <div className="space-y-8 rounded-lg border border-slate-200 p-4 dark:border-slate-400">
      <Heading type="h3">this is a test question?</Heading>
      <div className="space-y-2">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
}

export default Question;
