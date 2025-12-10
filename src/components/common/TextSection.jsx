import { Section } from "./Section";
import { Container } from "./Container";

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
    <Section noBg={noBg} noBorder={noBorder} className={`${className} `}>
      <Container>
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
              dangerouslySetInnerHTML={
                typeof description === "string" && description.includes("<br")
                  ? { __html: description }
                  : undefined
              }
            >
              {typeof description === "string" && description.includes("<br")
                ? null
                : description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
};
