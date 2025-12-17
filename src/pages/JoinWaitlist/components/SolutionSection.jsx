import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { SectionHeader } from "../../../components/common";
import { waitlistSolutions } from "../data/solutions";
import dashboard from "../../../assets/images/dashboard-image-background.png";
import dashboardMobile from "../../../assets/images/dashboard-image-mobile.png";

export const SolutionSection = () => {
  return (
    <Section noBg noBorder>
      <Container>
        <SectionHeader
          className="max-w-2xl mx-auto"
          label="Solution"
          heading={"Take control of your money before you spend it"}
          subheading="Most apps only tell you where your money went. Finably helps you plan where it should go — ahead of time."
        />
        {/* Solutions Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1300px] mx-auto">
          {waitlistSolutions.map((solution) => {
            return (
              <div
                key={solution.id}
                className="flex flex-col gap-15 items-center  text-center"
              >
                {/* Icon */}
                <div className="shrink-0 ">
                  <div className="w rounded-lg flex items-center justify-center">
                    <img
                      src={solution.icon}
                      alt={solution.title}
                      className="size-[100px]"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-5">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-15">
          <img src={dashboard} alt="dashboard" className="hidden md:block" />
          <img
            src={dashboardMobile}
            alt="dashboard"
            className="block md:hidden"
          />
        </div>
      </Container>
    </Section>
  );
};

