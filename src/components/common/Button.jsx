export const Button = ({
  variant = "outline",
  children,
  className = "",
  href,
  type,
  ...props
}) => {
  const variants = {
    outline: "border border-primary! text-primary hover:bg-primary-50 bg-white",
    outline2: "border border-primary text-white hover:bg-white/10",
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "text-primary hover:bg-primary-50",
    cta: "bg-white text-primary hover:bg-primary-50",
    filled: "bg-white text-primary hover:bg-primary-50",
  };

  const baseClasses =
    "px-5 py-3 rounded-[8px] cursor-pointer font-medium transition-colors whitespace-nowrap text-center w-full relative block";

  const animationClasses =
    type === "ani1"
      ? "btn-ani1"
      : type === "ani2"
      ? "btn-ani2"
      : type === "ani3"
      ? "btn-ani3"
      : "";
  const combinedClasses = `${baseClasses} ${variants[variant]} ${animationClasses} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={combinedClasses} {...props}>
      <span className="btn-content">{children}</span>
    </button>
  );
};
