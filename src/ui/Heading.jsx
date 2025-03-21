function Heading({ children, type = "h1", className = "" }) {
  const basicStyles = `font-medium ${className}`;
  if (type === "h1")
    return <h1 className={`text-3xl ${basicStyles}`}>{children}</h1>;
  if (type === "h2")
    return <h2 className={`text-2xl ${basicStyles}`}>{children}</h2>;
  if (type === "h3")
    return <h3 className={`text-xl ${basicStyles}`}>{children}</h3>;
}

export default Heading;
