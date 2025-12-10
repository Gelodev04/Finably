import { Section } from "./Section";
import { LabelPill } from "./LabelPill";
import { Container } from "./Container";
import { Button } from "./Button";

export const HeroSection = ({
  label,
  title,
  description,
  backgroundImage,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <Section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <Container className="relative z-10  ">
        <div className="max-w-2xl mx-auto text-center space-y-10 ">
          {/* Label */}
          <LabelPill>{label}</LabelPill>

          {/* Title */}
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-center ">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-black ">{description}</p>
          )}

          {/* Button */}
          {buttonText && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="primary"
                className="py-3 px-6"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </div>
          )}

          {/* Children (for any other custom content) */}
          {children}
        </div>
      </Container>
    </Section>
  );
};
