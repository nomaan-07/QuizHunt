function Icon({ className = "", icon }) {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;
