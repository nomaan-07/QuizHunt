import { useTranslation } from "../hooks/useTranslation";

import Button from "../ui/Button";
import Heading from "../ui/Heading";

function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5">
      <Heading type="h2">{useTranslation("errorPage.title")}</Heading>
      <Button to="/">{useTranslation("errorPage.tryAgain")}</Button>
    </div>
  );
}

export default ErrorPage;
