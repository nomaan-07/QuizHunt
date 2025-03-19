const sizes = {
  large: "text-xl",
  medium: "text-lg",
  small: "",
};

function Text({ children, size = "large" }) {
  const styles = `text-emerald-900 ${sizes[size]}`;

  return <p className={styles}>{children}</p>;
}

export default Text;
