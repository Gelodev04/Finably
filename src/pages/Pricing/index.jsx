import { useState } from "react";
import {
  HeroSection,
  CTASection,
  IconGrid,
  PricingCard,
  SegmentedControl,
} from "../../components/common";
import { Section } from "../../components/common/Section";
import { Container } from "../../components/common/Container";
import { LabelPill } from "../../components/common/LabelPill";
import { Plus, Minus } from "lucide-react";
import {
  benefits,
  pricingPlans,
  comparisonFeatures,
  faqs,
} from "./data/pricing";
import heroBg from "../../assets/images/company/about-us/hero-bg.png";
import faqBg from "../../assets/images/faq-bg.png";
import { toggleOptions } from "../../constants/pricing";

export const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection
        label="Pricing"
        title="Flexible Pricing That Grows With You"
        description="Choose the plan that matches your needs. Upgrade, downgrade, or cancel anytime."
        backgroundImage={heroBg}
      />

      {/* Key Benefits Section */}
      <Section noBg noBorder>
        <Container>
          <IconGrid items={benefits} />
        </Container>
      </Section>

      {/* Pricing Plans Section */}
      <Section noBg noBorder>
        <Container>
          <SegmentedControl
            options={toggleOptions}
            value={isYearly}
            onChange={setIsYearly}
            className="mb-12"
          />

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                subtitle={plan.subtitle}
                monthlyPrice={plan.monthlyPrice}
                yearlyPrice={plan.yearlyPrice}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Compare Plans Section */}
      <Section noBg noBorder>
        <Container>
          <div className="mx-auto">
            <div className="flex justify-center mb-12">
              <LabelPill>Compare plans</LabelPill>
            </div>
            <div className="border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#dbefff]">
                    <th className="text-left  p-6 font-medium text-black">
                      Features
                    </th>
                    <th className="text-center  p-6 font-medium text-black">
                      Basic
                    </th>
                    <th className="text-center  p-6 font-medium text-black">
                      Pro
                    </th>
                    <th className="text-center  p-6 font-medium text-black">
                      Advanced
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="bg-white font-medium ">
                      <td className=" p-6 font-medium text-black">
                        {item.feature}
                      </td>
                      <td className=" text-center ">
                        {item.basic === "✓" ? (
                          <span className="text-primary">{item.basic}</span>
                        ) : (
                          item.basic
                        )}
                      </td>
                      <td className=" text-center ">
                        {item.pro === "✓" ? (
                          <span className="text-primary">{item.pro}</span>
                        ) : (
                          item.pro
                        )}
                      </td>
                      <td className=" text-center ">
                        {item.advanced === "✓" ? (
                          <span className="text-primary">{item.advanced}</span>
                        ) : (
                          item.advanced
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section backgroundImage={faqBg}>
        <Container className=" ">
            <div className="flex justify-center mb-12">
              <LabelPill>FAQ</LabelPill>
            </div>
            <div className="space-y-4 max-w-6xl mx-auto w-full flex flex-col  justify-center h-[500px] md:h-[400px]">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-[#E1E1E1] rounded-xl p-6 bg-white "
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-medium text-black">
                      {faq.question}
                    </h3>
                    {openFaq === faq.id ? (
                      <Minus size={20} className="text-primary shrink-0" />
                    ) : (
                      <Plus size={20} className="text-primary shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        className="mt-24"
        title="Ready To Take Control Of Your Finances?"
        description="Choose the plan that fits your needs and start managing money with clarity today."
        buttonText="Get Started"
        buttonText2="Contact Us"
      />
    </div>
  );
};
