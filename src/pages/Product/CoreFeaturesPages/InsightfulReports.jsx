import {
  FeatureHeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/core-features-bg/insights-bg.png";
import { insightfulReportsSubFeatures } from "./data/subFeatures";

export const InsightfulReportsPage = () => {
  return (
    <>
      <FeatureHeroSection
        label="Core Features"
        title="Insightful Reports"
        description="Get a clear picture of your finances with powerful, customizable reports."
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="Finably gives you real-time insights into where your money goes. Track your progress by envelopes, categories, or custom rules — and adjust your plan instantly. With accurate, up-to-date data and interactive visuals, you can make smarter financial decisions every day."
      />
      <SubFeaturesSection features={insightfulReportsSubFeatures} />
      <TextSection
        className="pt-0!"
        title=""
        description="With Finably, your financial data becomes a clear, actionable story. Whether you’re a casual saver or a detailed planner, Insightful Reports help you understand where your money goes — and how to make it work better for you."
      />
      <CTASection title="Start tracking smarter today" buttonText="Start Now" />
    </>
  );
};
