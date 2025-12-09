import {
  HeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/core-features-bg/powerful-automation-bg.png";
import { powerfulAutomationSubFeatures } from "./data/subFeatures";

export const PowerfulAutomationPage = () => {
  return (
    <>
      <HeroSection
        label="Core Features"
        title="Powerful Automation"
        description="Automation makes budgeting effortless. Instead of manually moving money into envelopes, Finably does it for you—based on the budget you set."
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="Finably takes the routine out of budgeting. With automation, your money gets allocated into the right envelopes without constant manual effort. You decide your budget once, and the system makes sure it’s followed every time you get paid. For advanced users, custom rules will give even more control and flexibility."
      />
      <SubFeaturesSection features={powerfulAutomationSubFeatures} />
      <CTASection
        title="Let Finably Handle The Routine"
        buttonText="Start Now"
      />
    </>
  );
};
