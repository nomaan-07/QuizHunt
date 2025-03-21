function Icon({ className = "", icon }) {
  return (
    <svg className={className}>
      <use href={`${import.meta.env.BASE_URL}sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;
