import {
  FeatureHeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/core-features-bg/seamlesss-bank-bg.png";
import { seamlessBankIntegrationSubFeatures } from "./data/subFeatures";

export const SeamlessBankIntegrationPage = () => {
  return (
    <>
      <FeatureHeroSection
        label="Core Features"
        title="Seamless Bank Integration"
        description="Link your banks in seconds and trust your budget with clean, secure data."
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="Finably connects directly to your financial institutions, so your budgeting is always based on up-to-date, accurate information. With reliable data syncing and bank-level security, you can trust that your finances are both current and protected."
      />
      <SubFeaturesSection features={seamlessBankIntegrationSubFeatures} />
      <TextSection
        className="pt-0!"
        title=""
        description="Together, these features ensure that your budget is always accurate, up-to-date, and safe. By combining clean transaction data, reliable connectivity, and industry-standard security, Finably gives you a clear and trustworthy picture of your finances—all in one place."
      />
      <CTASection
        title="Get Started with Safe Syncing"
        buttonText="Start Now"
      />
    </>
  );
};
