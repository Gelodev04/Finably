import { Section, SectionHeader } from "../../components/common";
import { steps } from "./data/how-it-works";

export const HowItWorksSection = () => {
  return (
    <Section noBorder className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="How it works?"
          heading="Manage money in 3 steps"
        />

        {/* Steps Grid - 3 columns with connecting lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Dashed connecting lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 border-t-2 border-dashed border-gray-300 -translate-y-1/2" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`${step.bgColor} rounded-2xl p-6 md:p-8 relative`}
            >
              {/* Step Number */}
              <div
                className={`text-4xl md:text-5xl font-bold mb-4 ${step.numberColor}`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
