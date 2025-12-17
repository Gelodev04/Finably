import { useState } from "react";
import { Section } from "../../components/common/Section";
import { Container } from "../../components/common/Container";
import { FAQAccordion } from "../../components/common/FAQAccordion";
import { CTASection } from "../../components/common/CTASection";
import { faqs } from "./data";
import {
  HeroSection,
  BetaApplicationForm,
  WhyJoinSection,
  QuoteSection,
  HowBetaWorksSection,
  DataProtectionSection,
} from "./components";

export const BetaTestPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    platforms: [],
    financePlanning: "",
    agreeToEmails: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlatformChange = (platform) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle beta application submission
    console.log("Beta application submission:", formData);
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <BetaApplicationForm
        formData={formData}
        handleInputChange={handleInputChange}
        handlePlatformChange={handlePlatformChange}
        handleSubmit={handleSubmit}
      />

      <WhyJoinSection />

      <QuoteSection />

      <HowBetaWorksSection />

      {/* FAQ Section */}
      <Section noBg noBorder>
        <Container>
          <FAQAccordion faqs={faqs} defaultOpen={4} />
        </Container>
      </Section>

      <DataProtectionSection />

      {/* CTA Section */}
      <CTASection
        title="Ready To Help Us Build Finably?"
        description="Join our beta today and get priority access to the future of finance planning."
        buttonText="Apply"
        onButtonClick={() => {
          const formSection = document.getElementById("beta-form");
          if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </div>
  );
};
