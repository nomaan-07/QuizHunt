import DarkModeToggle from "../features/theme/DarkModeToggle";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Text from "../ui/Text";

function Homepage() {
  return (
    <div className="space-y-12 text-center">
      <div className="mx-auto w-fit">
        <Logo />
      </div>
      <Heading>Welcome to Quiz Hunt!</Heading>
      <Text size="large">
        Test your knowledge with our fun and challenging quizzes!😉
      </Text>
      <div className="flex items-center justify-center gap-4">
        <DarkModeToggle />
        <Button variation="secondary" size="small">
          Persian
        </Button>
      </div>
      <Button to="/quiz">Let's Go</Button>
    </div>
  );
}

export default Homepage;
