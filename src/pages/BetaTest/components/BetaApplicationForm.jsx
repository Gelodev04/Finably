import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { Button } from "../../../components/common/Button";

export const BetaApplicationForm = ({
  formData,
  handleInputChange,
  handlePlatformChange,
  handleSubmit,
  isSubmitting = false,
}) => {
  return (
    <Section noBg noBorder id="beta-form">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl border  p-6 md:p-8 lg:p-12 ">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
                Apply to join Beta
              </h2>
              {/* Introductory Text */}
              <p className="text-gray-600 mb-8">
                We're admitting testers in waves. It takes under a minute to
                apply.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name (optional)"
                  className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                />
                <p className="text-sm text-gray-500 mt-2">
                  We'll only use this email for beta updates.
                </p>
              </div>

              {/* Platform Selection */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Select the platform
                </h3>
                <div className="space-y-3">
                  {["IOS", "Android", "Web"].map((platform) => (
                    <div key={platform} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={platform}
                        checked={formData.platforms.includes(platform)}
                        onChange={() => handlePlatformChange(platform)}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label
                        htmlFor={platform}
                        className="text-gray-700 cursor-pointer"
                      >
                        {platform}
                      </label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Your choice will not limit the platforms available to you.
                </p>
              </div>

              {/* Finance Planning Text Area */}
              <div>
                <textarea
                  name="financePlanning"
                  value={formData.financePlanning}
                  onChange={handleInputChange}
                  placeholder="How do you plan your finances today? (optional)"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900 resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToEmails"
                  id="agreeToEmails"
                  checked={formData.agreeToEmails}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label
                  htmlFor="agreeToEmails"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I agree to receive beta-related emails and understand i can
                  unsubscribe anytime.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button
                  type="submit"
                  variant="primary"
                  className="px-8 py-3 whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Apply To Beta"}
                </Button>
                <p className="text-sm text-gray-500">
                  We'll only email you about beta.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};
