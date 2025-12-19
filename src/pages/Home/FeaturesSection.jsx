import { features } from "./data/features";
import { Section, SectionHeader } from "../../components/common";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../../components/common/Container";
import { Link } from "react-router-dom";

export const FeaturesSection = () => {
  return (
    <Section>
      <Container>
        <SectionHeader
          label="Features"
          heading="Smarter Features. Stronger Finances."
          subheading="Everything you need to stay in control of your money — in one place"
        />

        {/* Features Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-12">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              to={feature.route}
              className="group bg-white rounded-2xl p-6 md:p-10 transition-all duration-300 border border-[#E1E1E1] hover:shadow-xl hover:scale-[1.02] hover:border-primary/20 cursor-pointer animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Feature Image/Visual */}
              <div className="h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl md:text-[24px] font-medium mb-3 text-center transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="leading-relaxed text-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </Link>
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
      </Container>
    </Section>
  );
};
