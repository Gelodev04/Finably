import { useState } from "react";
import {
  Section,
  SectionHeader,
  Button,
  SegmentedControl,
} from "../../components/common";
import { pricingPlans } from "./data/pricing";
import { Check, ArrowUpRight } from "lucide-react";

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleOptions = [
    { label: "Monthly", value: false },
    { label: "Yearly", value: true },
  ];

  return (
    <Section noBorder className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader label="Pricing" heading="Simple pricing plans" />

        {/* Toggle Switch - Segmented Control */}
        <SegmentedControl
          options={toggleOptions}
          value={isYearly}
          onChange={setIsYearly}
          className="mb-12"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-8 max-w-[1300px] mx-auto ">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 md:p-8 border flex flex-col ${
                plan.highlighted
                  ? "bg-primary text-white min-h-[600px] md:min-h-[600px]"
                  : "bg-white border-[#E0E0E0] self-center"
              }`}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="absolute -top-8 -right-16 size-34  overflow-hidden">
                  <img
                    src={plan.badge}
                    alt="Badge"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-xl md:text-2xl font-medium mb-2 ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Subtitle for highlighted plan */}
              {plan.subtitle && (
                <p className="text-blue-200 mb-4 ">{plan.subtitle}</p>
              )}

              {/* Price */}
              <div className="mt-10 mb-6 ">
                <span
                  className={`text-4xl md:text-5xl font-medium ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-lg ml-1 ${
                    plan.highlighted ? "text-blue-200" : "text-gray-600"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Get Started Button */}
              <Button
                variant={plan.highlighted ? "outline" : "primary"}
                className={`w-full py-3 rounded-lg mb-6 ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-gray-100 border-white"
                    : ""
                }`}
              >
                {plan.buttonText}
              </Button>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check
                      size={20}
                      className={
                        plan.highlighted
                          ? "text-white shrink-0"
                          : "text-gray-600 shrink-0"
                      }
                    />
                    <span className={plan.highlighted ? "text-white" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              {plan.learnMore && (
                <a
                  href="#"
                  className={`flex items-center gap-2 mt-auto ${
                    plan.highlighted
                      ? "text-blue-200 hover:text-white"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Cancel Anytime Text */}
        <p className="text-center text-gray-400 ">Cancel anytime</p>
      </div>
    </Section>
  );
};
