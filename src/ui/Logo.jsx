const sizes = {
  large: "w-64",
  small: "w-32",
};

function Logo({ size = "large" }) {
  return <img src="/logo-light.png" alt="Logo" className={sizes[size]} />;
}

export default Logo;
