function Heading({ children, type = "h1" }) {
  if (type === "h1")
    return <h1 className="text-3xl font-medium">{children}</h1>;
  if (type === "h2")
    return <h2 className="text-2xl font-medium">{children}</h2>;
  if (type === "h3") return <h3 className="text-xl font-medium">{children}</h3>;
}

export default Heading;
