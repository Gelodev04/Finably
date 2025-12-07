import { HeroSection } from "./HeroSection/HeroSection";
import { FeaturesSection } from "./FeaturesSection/FeaturesSection";
import { SolutionSection } from "./SolutionSection/SolutionSection";

export const HomePage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10 space-y-20 ">
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <div className="min-h-screen"></div>
    </div>
  );
};
