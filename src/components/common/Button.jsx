export const Button = ({
  variant = "outline",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    outline: "border border-primary! text-primary hover:bg-primary-50",
    outline2: "border border-primary text-white hover:bg-white/10",
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "text-primary hover:bg-primary-50",
    cta: "bg-white text-primary hover:bg-primary-50",
    filled: "bg-white text-primary hover:bg-primary-50"
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
