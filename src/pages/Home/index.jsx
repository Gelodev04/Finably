import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { SolutionSection } from "./SolutionSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { PricingSection } from "./PricingSection";
import { ReviewsSection } from "./ReviewsSection";
import { CTASection } from "./CTASection";

export const HomePage = () => {
  return (
    <div className=" space-y-20 ">
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};
