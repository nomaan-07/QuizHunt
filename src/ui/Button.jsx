import { Link } from "react-router";

const styles =
  "inline-block rounded-full border-2 border-sky-900 bg-sky-600 px-4 py-2 text-lg text-sky-50 shadow-md transition-all md:cursor-pointer md:hover:translate-y-px md:hover:bg-sky-700 md:hover:shadow-none";

function Button({ children, to }) {
  if (to)
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  return <button className={styles}>{children}</button>;
}

export default Button;
