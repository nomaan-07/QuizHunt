import { Link } from "react-router";

const baseStyles =
  "inline-block rounded-full border-2 shadow-md dark:shadow-slate-700 transition-all md:cursor-pointer md:hover:translate-y-px md:hover:shadow-none";

const variations = {
  primary:
    "border-sky-900 bg-sky-700 text-sky-50 md:hover:bg-sky-800 dark:border-sky-500 dark:bg-sky-600 dark:text-sky-100 dark:md:hover:bg-sky-500",
  secondary:
    "border-pink-900 bg-pink-700 text-pink-50 md:hover:bg-pink-800 dark:border-pink-500 dark:bg-pink-600 dark:text-pink-100 dark:md:hover:bg-pink-500",
  theme:
    "border-slate-900 bg-slate-700 text-slate-50 md:hover:bg-slate-800 dark:border-slate-500 dark:bg-slate-600 dark:text-slate-100 dark:md:hover:bg-slate-500",
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
}) {
  const styles = `${baseStyles} ${variations[variation]} ${sizes[size]}`;
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
