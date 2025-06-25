export default function Button({
  onClick,
  disabled = false,
  className = "",
  children,
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
