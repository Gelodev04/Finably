import { LabelPill } from "./LabelPill";

export const SectionHeader = ({
  label,
  heading,
  subheading,
  className = "",
  labelClassName = "",
  headingClassName = "",
  subheadingClassName = "",
}) => {
  return (
    <div className={`${className}`}>
      {/* Label/Button Pill */}
      {label && (
        <div className="mb-10">
          <LabelPill className={labelClassName}>{label}</LabelPill>
        </div>
      )}

      {/* Main Heading */}
      {heading && (
        <h2
          className={`text-3xl md:text-4xl lg:text-[40px] font-medium text-center mb-6 ${headingClassName}`}
          dangerouslySetInnerHTML={
            typeof heading === "string" ? { __html: heading } : undefined
          }
        >
          {typeof heading !== "string" ? heading : null}
        </h2>
      )}

      {/* Subheading */}
      {subheading && (
        <p
          className={`text-lg  text-center text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto ${subheadingClassName}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
};
