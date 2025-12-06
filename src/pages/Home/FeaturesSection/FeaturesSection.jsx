import { features } from "./lib/features";
import { Section, SectionHeader } from "../../../components/common";
import { ArrowUpRight } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <Section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Features"
          heading="Smarter Features. Stronger Finances."
          subheading="Everything you need to stay in control of your money — in one place"
        />

        {/* Features Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 md:p-8 transition-shadow border border-[#E1E1E1]"
            >
              {/* Feature Image/Visual */}
              <div className=" p-4 h-[200px] md:h-[300px] flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl md:text-[24px] font-medium mb-3 text-center">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* "And A Lot More Features" Link */}
        <div className="flex justify-center">
          <a
            href="#"
            className="text-primary text-lg font-medium hover:text-primary-600 flex items-center gap-2"
          >
            And A Lot More Features
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
};
