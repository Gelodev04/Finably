export const Section = ({
  children,
  className = "",
  bgColor = "bg-[#FAFAFA]",
  borderColor = "border-[#E1E1E1]",
  ...props
}) => {
  const baseClasses = "border rounded-4xl p-6 md:p-8";

  return (
    <section
      className={`${baseClasses} ${bgColor} ${borderColor} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
