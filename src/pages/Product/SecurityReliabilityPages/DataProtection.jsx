import {
  FeatureHeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/security-bg/data-protection.png";
import { dataProtectionSubFeatures } from "./data/subFeatures";

export const DataProtectionPage = () => {
  return (
    <>
      <FeatureHeroSection
        label="Security & Reliability"
        title="Your Data, Always Protected"
        description="Finably keeps your financial information safe with enterprise-grade security and privacy standards"
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title="Your trust is our top priority."
        description="We use bank-level encryption, strict access controls, and industry best practices to ensure your personal and financial data stays safe — at every step."
      />
      <SubFeaturesSection features={dataProtectionSubFeatures} />
      <TextSection
        className="pt-0!"
        title="Compliance Note"
        description="Finably follows modern privacy and security standards, including GDPR and PSD2/Open Banking guidelines, to give you peace of mind.<br /><br />
        With Finably, you stay in control of your data. You can disconnect accounts or delete your data at any time."
      />
      <CTASection title="Start Tracking with Confidence" buttonText="Try Finably Now" />
    </>
  );
};
