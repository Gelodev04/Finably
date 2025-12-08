import { Button } from "./Button";
import ctaBg from "../../assets/images/cta-section-bg.png";

export const CTASection = ({
  title = "Ready To Take Control Of Your Finances?",
  buttonText = "Start Now",
  backgroundImage = ctaBg,
  onButtonClick,
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 capitalize ">
              {title}
            </h2>
          )}

          {/* CTA Button */}
          {buttonText && (
            <Button variant="cta" className="py-3 px-6" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
