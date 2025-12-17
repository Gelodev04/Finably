import {
  HeroSection,
  TextSection,
  SubFeaturesSection,
  CTASection,
} from "../../../components/common";
import heroImage from "../../../assets/images/security-bg/uptime.png";
import { uptimeMonitoringSubFeatures } from "./data/subFeatures";

export const UptimeMonitoringPage = () => {
  return (
    <>
      <HeroSection
        label="Security & Reliability"
        title="Always On, Always Reliable"
        description="Finably is monitored 24/7 to ensure your financial data is available whenever you need it."
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="We track the health of our systems in real time. From API performance to database availability, every part of Finably is monitored — so you can count on it working whenever you log in."
      />
      <SubFeaturesSection features={uptimeMonitoringSubFeatures} />
      <TextSection
        className="pt-0!"
        title=""
        description="Whether you're planning a budget late at night or checking expenses on the go, Finably is always ready — no waiting, no interruptions."
      />
      <CTASection
        title="Experience Reliable Finance Tracking"
        buttonText="Try Finably Now"
        href="/join-waitlist"
      />
    </>
  );
};
