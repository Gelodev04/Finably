import { Section } from "./Section";

export const TextSection = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  noBg = true,
  noBorder = true,
}) => {
  return (
    <Section noBg={noBg} noBorder={noBorder} className={className}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {title && (
            <h2
              className={`text-2xl font-medium text-black mb-2 ${titleClassName}`}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={`text-lg text-black leading-relaxed ${descriptionClassName}`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};
