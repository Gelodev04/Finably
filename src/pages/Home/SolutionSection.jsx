import { solutions } from "./data/solutions";
import { SectionHeader } from "../../components/common";
import dashboard from "../../assets/images/dashboard-image-background.png";
import dashboardMobile from "../../assets/images/dashboard-image-mobile.png";
import { Container } from "../../components/common/Container";

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          label="Solution"
          heading={
            <>
              Finally, see your entire financial <br /> picture in one place
            </>
          }
          subheading="From chaos to clarity — we make money management simple."
        />
        {/* Solutions Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1300px] mx-auto">
          {solutions.map((solution) => {
            return (
              <div
                key={solution.id}
                className="flex flex-col gap-15 items-center md:items-start "
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
          <img src={dashboardMobile} alt="dashboard" className="block md:hidden" />
        </div>
      </Container>
    </section>
  );
};
