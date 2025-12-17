import { useState } from "react";
import {
  HeroSection,
  BetaTestingSection,
  FeaturesSection,
  SolutionSection,
  HowToStartSection,
  BottomCTASection,
} from "./components";

export const JoinWaitlistPage = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [betaEmail, setBetaEmail] = useState("");

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle waitlist submission
    console.log("Waitlist submission:", waitlistEmail);
    setWaitlistEmail("");
  };

  const handleBetaSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle beta application submission
    console.log("Beta application submission:", betaEmail);
    setBetaEmail("");
  };

  const handleBottomWaitlistSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle waitlist submission
    console.log("Bottom waitlist submission:", waitlistEmail);
    setWaitlistEmail("");
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection
        waitlistEmail={waitlistEmail}
        setWaitlistEmail={setWaitlistEmail}
        handleWaitlistSubmit={handleWaitlistSubmit}
      />

      <BetaTestingSection handleBetaSubmit={handleBetaSubmit} />

      <FeaturesSection />

      <SolutionSection />

      <HowToStartSection />

      <BottomCTASection
        waitlistEmail={waitlistEmail}
        setWaitlistEmail={setWaitlistEmail}
        handleBottomWaitlistSubmit={handleBottomWaitlistSubmit}
        handleBetaSubmit={handleBetaSubmit}
      />
    </div>
  );
};
