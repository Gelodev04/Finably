import {
  FeatureHeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../../components/common";
import heroImage from "../../../../assets/images/core-features-bg/envelope-budgeting-bg.png";
import { envelopeBudgetingSubFeatures } from "../data/subFeatures";

export const PowerfulAutomationPage = () => {
  return (
    <>
      <FeatureHeroSection
        label="Core Features"
        title="Envelope Budgeting"
        description="Stay ahead of your spending — plan your money with envelopes and see your budget in action."
        backgroundImage={heroImage}
      />
      <TextSection
        title="Control your money with purpose."
        description="Envelope budgeting helps you assign every dollar to a specific need, so you're never caught off guard. Instead of reacting when the bills arrive, you'll already have money set aside for them."
      />
      <SubFeaturesSection features={envelopeBudgetingSubFeatures} />
      <CTASection title="Stay Ahead of your Spendings" buttonText="Start Now" />
    </>
  );
};
