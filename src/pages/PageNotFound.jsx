import { useTranslation } from "../hooks/useTranslation";

import Button from "../ui/Button";
import Heading from "../ui/Heading";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5">
      <Heading type="h2">{useTranslation("pageNotFound.title")}</Heading>
      <Button to="/">{useTranslation("pageNotFound.back")}</Button>
    </div>
  );
}

export default PageNotFound;
