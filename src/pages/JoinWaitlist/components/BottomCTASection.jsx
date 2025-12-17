import { CTASection } from "../../../components/common/CTASection";
import { ArrowUpRight } from "lucide-react";

export const BottomCTASection = ({
  waitlistEmail,
  setWaitlistEmail,
  handleBottomWaitlistSubmit,
  handleBetaSubmit,
  isSubmitting = false,
}) => {
  return (
    <CTASection
      title="Join The Waitlist Today"
      description="Be among the first to try Finably when we launch — and get priority access."
      buttonText="Join Waitlist"
      showInput={true}
      inputPlaceholder="example@gmail.com"
      inputValue={waitlistEmail}
      onInputChange={(e) => setWaitlistEmail(e.target.value)}
      onButtonClick={handleBottomWaitlistSubmit}
      isSubmitting={isSubmitting}
    >
      {/* Beta Testing Link */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
        >
          <a href="/beta-test">Join Beta Testing</a>
          <ArrowUpRight size={20} />
        </button>
      </div>
    </CTASection>
  );
};
