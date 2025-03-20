import Text from "../../ui/Text";

function QuizHeader() {
  return (
    <header className="flex items-center justify-between">
      <Text size="small">130 of 750 points</Text>
      <Text size="small">24:08</Text>
    </header>
  );
}

export default QuizHeader;
