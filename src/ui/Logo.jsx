import { useDarkMode } from "../hooks/useDarkMode";

const sizes = {
  small: "w-20",
  large: "w-64",
};

function Logo({ size = "large" }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return <img src={src} alt="Logo" className={sizes[size]} />;
}

export default Logo;
