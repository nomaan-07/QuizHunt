import { Link } from "react-router";

const baseStyles =
  "block transition-all md:cursor-pointer rounded-full border-2 shadow-md dark:shadow-slate-700 md:hover:translate-y-px md:hover:shadow-none max-w-fit";

const variations = {
  primary:
    "border-sky-900 bg-sky-700 text-sky-50 md:hover:bg-sky-800 dark:border-sky-500 dark:bg-sky-600 dark:text-sky-100 dark:md:hover:bg-sky-500",
  secondary:
    "border-pink-900 bg-pink-700 text-pink-50 md:hover:bg-pink-800 dark:border-pink-500 dark:bg-pink-600 dark:text-pink-100 dark:md:hover:bg-pink-500",
  dark: "border-slate-900 bg-slate-700 text-slate-50 md:hover:bg-slate-800 dark:border-slate-500 dark:bg-slate-600 dark:text-slate-100 dark:md:hover:bg-slate-500",
  header:
    "flex items-center justify-center size-10 transition-all md:cursor-pointer shadow border-slate-200 bg-slate-50 md:hover:bg-slate-100 dark:border-slate-500 dark:bg-slate-500 dark:text-slate-50 dark:md:hover:bg-slate-400 rounded-sm",
};

const sizes = {
  small: "px-3 py-1.5",
  large: "px-4 py-2 text-lg",
};

function Button({
  children,
  to,
  variation = "primary",
  size = "large",
  onClick,
  className = "",
}) {
  const styles =
    variation === "header"
      ? `${variations[variation]} ${className}`
      : `${baseStyles} ${variations[variation]} ${sizes[size]} ${className}`;

  if (to)
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
