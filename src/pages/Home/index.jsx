import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { SolutionSection } from "./SolutionSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { PricingSection } from "./PricingSection";
import { ReviewsSection } from "./ReviewsSection";

export const HomePage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-3 md:px-10 space-y-20 ">
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <ReviewsSection />
      <div className="min-h-screen"></div>
    </div>
  );
};
