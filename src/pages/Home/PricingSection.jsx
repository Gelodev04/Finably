import { useState } from "react";
import {
  Section,
  SectionHeader,
  SegmentedControl,
  PricingCard,
} from "../../components/common";
import { pricingPlans } from "./data/pricing";
import { Container } from "../../components/common/Container";
import { toggleOptions } from "../../constants/pricing";

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section noBorder className="py-16 md:py-24 overflow-hidden">
      <Container>
        <SectionHeader label="Pricing" heading="Simple pricing plans" />

        {/* Toggle Switch - Segmented Control */}
        <SegmentedControl
          options={toggleOptions}
          value={isYearly}
          onChange={setIsYearly}
          className="mb-12"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-8 max-w-6xl mx-auto ">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              subtitle={plan.subtitle}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonText={plan.buttonText}
              learnMore={plan.learnMore}
              highlighted={plan.highlighted}
              badge={plan.badge}
            />
          ))}
        </div>

        {/* Cancel Anytime Text */}
        <p className="text-center text-gray-400 ">Cancel anytime</p>
      </Container>
    </Section>
  );
};
