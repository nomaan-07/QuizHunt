import { useSelector } from "react-redux";

const sizes = {
  small: "w-20",
  large: "w-48 md:w-64",
};

function Logo({ size = "large" }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const src = `${import.meta.env.BASE_URL}logo-${isDarkMode ? "dark" : "light"}.png`;

  return <img src={src} alt="Logo" className={sizes[size]} />;
}

export default Logo;
