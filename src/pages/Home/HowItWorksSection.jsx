import { Section, SectionHeader } from "../../components/common";
import { steps } from "./data/how-it-works";
import bgImage from "../../assets/images/how-it-works-bg.png";

export const HowItWorksSection = () => {
  return (
    <Section
      className=""
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          label="How it works?"
          heading="Manage money in 3 steps"
        />

        {/* Steps Grid - 3 columns with connecting lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 my-20 max-w-[1300px] mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`p-8 bg-white rounded-4xl relative border border-[#E0E0E0] ${
                index === 0
                  ? ""
                  : index === 1
                  ? "lg:translate-y-[60px]"
                  : "lg:translate-y-[100px]"
              }`}
            >
              <div
                className={`p-6 rounded-2xl h-full`}
                style={{ backgroundColor: step.bgColor }}
              >
                {/* Step Number */}
                <div
                  className={`text-4xl md:text-5xl font-medium mb-4 ${step.numberColor}`}
                >
                  {step.number}
                </div>
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium   mb-3">
                  {step.title}
                </h3>
                {/* Description */}
                <p className=" leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
