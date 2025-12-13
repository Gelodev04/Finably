import { Button } from "../../../../components/common";

export const RegistrationForm = ({
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E1E1E1] p-6 md:p-8 sticky top-8">
      <h2 className="text-2xl md:text-4xl font-medium mb-6 text-gray-900 text-center">
        Register for the webinar
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full name (optional)
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Questions */}
        <div>
          <label
            htmlFor="questions"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Questions for the speakers (optional)
          </label>
          <textarea
            id="questions"
            name="questions"
            value={formData.questions}
            onChange={handleInputChange}
            rows={4}
            placeholder="Anything you'd like us to cover?"
            className="w-full px-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToCommunications"
            name="agreeToCommunications"
            checked={formData.agreeToCommunications}
            onChange={handleInputChange}
            required
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label
            htmlFor="agreeToCommunications"
            className="text-sm text-gray-700"
          >
            I agree to receive communications about this webinar and related
            product updates.
          </label>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-full py-3">
          Register
        </Button>

        {/* Terms Text */}
        <p className="text-xs text-gray-500 text-center">
          By registering, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};
