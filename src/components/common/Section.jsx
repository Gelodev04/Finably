export const Section = ({
  children,
  className = "",
  bgColor = "bg-[#FAFAFA]",
  borderColor = "border-[#E1E1E1]",
  noBorder = false,
  noBg = false,
  ...props
}) => {
  const baseClasses = noBorder
    ? "rounded-4xl py-16 md:py-24"
    : "border rounded-4xl py-16 md:py-24";

  const borderClass = noBorder ? "" : borderColor;
  const backgroundClass = noBg ? "" : bgColor;

  return (
    <section
      className={`${baseClasses} ${backgroundClass} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
