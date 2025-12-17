import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { SectionHeader } from "../../../components/common/SectionHeader";
import { howTheBetaWorksSteps } from "../data";
import bgImage2 from "../../../assets/images/how-it-works-bg.png";

export const HowBetaWorksSection = () => {
  return (
    <Section
      style={{
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <SectionHeader
          label="How the Beta Works"
          heading=" Your journey to early access"
        />

        {/* Steps Grid - 3 columns with connecting lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 my-20 max-w-[1300px] mx-auto">
          {howTheBetaWorksSteps.map((step, index) => (
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
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
