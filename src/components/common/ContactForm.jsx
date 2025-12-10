import { useState } from "react";
import { Button } from "./Button";

export const ContactForm = ({ onSubmit, topics = [], className = "" }) => {
  const [formData, setFormData] = useState({
    topic: "",
    fullName: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 w-full ${className}`}>
      {/* Topic Dropdown */}
      <div>
        <label
          htmlFor="topic"
          className="block  font-medium text-gray-700 mb-2"
        >
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          <option value="">Select a topic</option>
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block  font-medium text-gray-700 mb-2"
        >
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block  font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block  font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          required
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="size-5 cursor-pointer"
          required
        />
        <label htmlFor="agreeToTerms" className=" text-gray-600">
          I agree to the terms and conditions.
        </label>
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" className="w-full py-3">
        Send
      </Button>
    </form>
  );
};
