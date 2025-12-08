import {
  FeatureHeroSection,
  TextSection,
  CTASection,
} from "../../../../components/common";
import heroImage from "../../../../assets/images/core-features-bg/supported-bg.png";

export const SupportedBanksPage = () => {
  return (
    <>
      <FeatureHeroSection
        label="Integrations"
        title="Supported Banks & Institutions"
        description="Finably connects to thousands of banks and credit unions through secure open-banking technology."
        backgroundImage={heroImage}
      />
      <TextSection
        title=""
        description="Connections are powered by Quiltt and use industry-standard encryption. Finably never sees or stores your login credentials."
      />
      <CTASection title="Start planning today — connect your bank in minutes" buttonText="Connect Bank" />
    </>
  );
};
