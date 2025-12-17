import { useState } from "react";
import { Section } from "../../components/common/Section";
import { Container } from "../../components/common/Container";
import { FAQAccordion } from "../../components/common/FAQAccordion";
import { CTASection } from "../../components/common/CTASection";
import { Toast } from "../../components/common/Toast";
import { SuccessModal } from "../../components/common/SuccessModal";
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
  const [toast, setToast] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.email || !formData.email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    if (!formData.agreeToEmails) {
      showToast("Please agree to receive beta-related emails", "error");
      return;
    }

    setIsSubmitting(true);
    // Add timeout to prevent infinite loading
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch("/api/beta-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMessage = "Failed to submit beta application";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = `Error: ${response.status} ${response.statusText}`;
        }
        showToast(errorMessage, "error");
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();

      // Show success modal
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        platforms: [],
        financePlanning: "",
        agreeToEmails: false,
      });
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Beta application submission error:", error);
      if (error.name === "AbortError") {
        showToast("Request timed out. Please try again.", "error");
      } else {
        showToast(
          "Failed to submit beta application. Please try again later.",
          "error"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && toast.type === "error" && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="You're on the list!"
        message="Thanks for applying to the Finably beta. We'll email you when the next wave opens."
      />
      <div className="space-y-16 md:space-y-24">
        <HeroSection />

        <BetaApplicationForm
          formData={formData}
          handleInputChange={handleInputChange}
          handlePlatformChange={handlePlatformChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
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
    </>
  );
};
