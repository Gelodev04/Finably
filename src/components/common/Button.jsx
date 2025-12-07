export const Button = ({
  variant = "outline",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    outline: "border border-primary text-primary hover:bg-primary-50",
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "text-primary hover:bg-primary-50",
    cta: "bg-white text-primary hover:bg-gray-100",
  };

  const baseClasses =
    "px-4 py-2 rounded-[8px] cursor-pointer font-medium transition-colors";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
