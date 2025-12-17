import { useState } from "react";
import {
  HeroSection,
  BetaTestingSection,
  FeaturesSection,
  SolutionSection,
  HowToStartSection,
  BottomCTASection,
} from "./components";
import { Toast } from "../../components/common/Toast";
import { SuccessModal } from "../../components/common/SuccessModal";

export const JoinWaitlistPage = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [betaEmail, setBetaEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    if (!waitlistEmail.trim()) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    setIsSubmitting(true);
    // Add timeout to prevent infinite loading
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: waitlistEmail }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMessage = "Failed to join waitlist";
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
      setWaitlistEmail("");
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Waitlist submission error:", error);
      if (error.name === "AbortError") {
        showToast("Request timed out. Please try again.", "error");
      } else {
        showToast("Failed to join waitlist. Please try again later.", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBetaSubmit = (e) => {
    e.preventDefault();
    // Redirect to beta test page
    window.location.href = "/beta-test";
  };

  const handleBottomWaitlistSubmit = async (e) => {
    e.preventDefault();
    await handleWaitlistSubmit(e);
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
        message="Thanks for joining the Finably waitlist. We'll email you when we launch."
      />
      <div className="space-y-16 md:space-y-24">
        <HeroSection
          waitlistEmail={waitlistEmail}
          setWaitlistEmail={setWaitlistEmail}
          handleWaitlistSubmit={handleWaitlistSubmit}
          isSubmitting={isSubmitting}
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
          isSubmitting={isSubmitting}
        />
      </div>
    </>
  );
};
