import { Button } from "./Button";
import ctaBg from "../../assets/images/cta-section-bg.png";
import { Container } from "./Container";

export const CTASection = ({
  title = "Ready To Take Control Of Your Finances?",
  description,
  buttonText = "Start Now",
  buttonText2,
  backgroundImage = ctaBg,
  onButtonClick,
  onButton2Click,
  className = "",
}) => {
  return (
    <div
      className={`py-16 md:py-24 relative overflow-hidden -mx-3 md:-mx-10 w-[calc(100%+24px)] md:w-[calc(100%+80px)] ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className=" relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 capitalize ">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-white mb-8 text-lg">{description}</p>
          )}

          {/* CTA Buttons */}
          {(buttonText || buttonText2) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttonText && (
                <Button
                  variant="cta"
                  className="py-3 px-6"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              )}
              {buttonText2 && (
                <Button
                  variant="outline2"
                  className="py-3 px-6"
                  onClick={onButton2Click}
                >
                  {buttonText2}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
