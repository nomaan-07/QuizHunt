import Button from "../../ui/Button";

function QuizFooter() {
  return (
    <header className="flex items-center justify-between">
      <Button size="small" to="/app/results" variation="secondary">
        Finish Quiz
      </Button>
      <Button size="small">Next</Button>
    </header>
  );
}

export default QuizFooter;
