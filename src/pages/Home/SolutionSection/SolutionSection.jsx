import { solutions } from "./lib/solutions";
import { Section, SectionHeader } from "../../../components/common";

export const SolutionSection = () => {
  return (
    <Section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {solutions.map((solution) => {
            return (
              <div
                key={solution.id}
                className="flex flex-col gap-15 items-start "
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={solution.icon}
                      alt={solution.title}
                      className="size-[94px]"
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
      </div>
    </Section>
  );
};
