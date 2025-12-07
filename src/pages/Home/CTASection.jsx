import { Section, Button } from "../../components/common";
import ctaBg from "../../assets/images/cta-section-bg.png";

export const CTASection = () => {
  return (
    <div
      className="py-16 md:py-24 relative overflow-hidden -mx-3 md:-mx-10 w-[calc(100%+24px)] md:w-[calc(100%+80px)]"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
            Ready To Take Control Of Your Finances?
          </h2>

          {/* CTA Button */}
          <Button variant="cta" className="py-3 px-6">Start Now</Button>
        </div>
      </div>
    </div>
  );
};
