import {
  HeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/security-bg/data-protection.png";
import { complianceSubFeatures } from "./data/subFeatures";

export const CompliancePage = () => {
  return (
    <>
      <HeroSection
        label="Security & Reliability"
        title="Built On Modern Financial Compliance Standards"
        description=""
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="Finably follows industry regulations and best practices to keep your finances protected and compliant — so you can trust every step."
      />
      <SubFeaturesSection features={complianceSubFeatures} />
      <TextSection
        className="pt-0!"
        title=""
        description="Finably continuously reviews its policies and systems to stay up to date with changing regulations — so your data is always handled responsibly."
      />
      <CTASection
        title="Start Planning With Peace Of Mind"
        buttonText="Try Finably Now"
      />
    </>
  );
};
