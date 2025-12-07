export const Section = ({
  children,
  className = "",
  bgColor = "bg-[#FAFAFA]",
  borderColor = "border-[#E1E1E1]",
  noBorder = false,
  ...props
}) => {
  const baseClasses = noBorder
    ? "rounded-4xl py-16 md:py-24"
    : "border rounded-4xl py-16 md:py-24";

  const borderClass = noBorder ? "" : borderColor;

  return (
    <section
      className={`${baseClasses} ${bgColor} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
