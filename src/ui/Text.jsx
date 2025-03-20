const sizes = {
  large: "text-xl",
  medium: "text-lg",
  small: "",
};

function Text({ children, size = "large", className = "" }) {
  const styles = `${sizes[size]} ${className} text-emerald-900 dark:text-rose-100`;

  return <p className={styles}>{children}</p>;
}

export default Text;
