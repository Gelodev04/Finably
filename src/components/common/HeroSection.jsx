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
  backdropBlur = false,
  textWhite = false,
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
      <Container
        className={`relative z-10  ${backdropBlur ? "backdrop-blur-md py-10 max-w-7xl rounded-3xl" : ""}`}
      >
        <div className={` mx-auto text-center space-y-10 ${backdropBlur ? "max-w-7xl " : "max-w-2xl"}`}>
          {/* Label */}
          <LabelPill>{label}</LabelPill>

          {/* Title */}
          {title && (
            <h1
              className={`text-4xl md:text-5xl lg:text-[56px] font-medium text-center ${
                textWhite ? "text-white leading-normal" : ""
              }`}
            >
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p
              className={`text-lg md:text-xl ${
                textWhite ? "text-white" : "text-black"
              }`}
            >
              {description}
            </p>
          )}

          {/* Button */}
          {buttonText && (
            <div className="mt-10 flex justify-center">
              <Button
                type="ani1"
                variant="primary"
                className="py-3 px-6 w-full lg:w-auto! "
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
