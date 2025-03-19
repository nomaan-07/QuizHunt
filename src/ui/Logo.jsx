import { useDarkMode } from "../hooks/useDarkMode";

const sizes = {
  large: "w-64",
  small: "w-32",
};

function Logo({ size = "large" }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return <img src={src} alt="Logo" className={sizes[size]} />;
}

export default Logo;
