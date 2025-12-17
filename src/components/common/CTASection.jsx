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
  showInput = false,
  inputPlaceholder = "example@gmail.com",
  onInputChange,
  inputValue,
  children,
  href,
  href2,
  isSubmitting = false,
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

          {/* Input Form */}
          {showInput ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (onButtonClick) {
                  onButtonClick(e);
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={onInputChange}
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 text-white placeholder:text-white/70"
              />
              {buttonText && (
                <Button
                  type="ani1"
                  variant="filled"
                  className="px-8 py-3 w-auto! hover:text-white bg-white!"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : buttonText}
                </Button>
              )}
            </form>
          ) : (
            /* CTA Buttons */
            (buttonText || buttonText2) && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-[400px] mx-auto">
                {buttonText && (
                  <Button
                    variant="cta"
                    type="ani3"
                    className={`py-3 px-6 bg-white! hover:text-white ${
                      buttonText && buttonText2 ? "" : "w-auto!"
                    }`}
                    onClick={onButtonClick}
                    href={href}
                  >
                    {buttonText}
                  </Button>
                )}
                {buttonText2 && (
                  <Button
                    type="ani2"
                    variant="outline2"
                    className="py-3 px-6  "
                    onClick={onButton2Click}
                    href={href2}
                  >
                    {buttonText2}
                  </Button>
                )}
              </div>
            )
          )}

          {/* Children (for additional content like links) */}
          {children}
        </div>
      </Container>
    </div>
  );
};
