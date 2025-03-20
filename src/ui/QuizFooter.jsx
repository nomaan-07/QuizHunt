import Button from "./Button";

function QuizFooter() {
  return (
    <header className="flex items-center justify-between">
      <Button size="small" to="/app/results">
        Finish Quiz
      </Button>
      <Button size="small" variation="secondary">
        Next
      </Button>
    </header>
  );
}

export default QuizFooter;
