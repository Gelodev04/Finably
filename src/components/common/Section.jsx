export const Section = ({
  children,
  className = "",
  bgColor = "bg-[#FAFAFA]",
  borderColor = "border-[#E1E1E1]",
  noBorder = false,
  noBg = false,
  backgroundImage,
  ...props
}) => {
  const baseClasses = noBorder
    ? "md:rounded-[48px] py-16 md:py-24"
    : "border md:rounded-[48px] py-16 md:py-24";

  const borderClass = noBorder ? "" : borderColor;
  const backgroundClass = noBg || backgroundImage ? "" : bgColor;

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={`${baseClasses} ${backgroundClass} ${borderClass} ${className}`}
      style={sectionStyle}
      {...props}
    >
      {children}
    </section>
  );
};
