import { Section } from "./Section";

const numberColors = [
  "text-[#E6EDF5]", // 01 - light blue
  "text-[#FEF5E6]", // 02 - light orange
  "text-[#F2F3FE]", // 03 - light purple
  "text-[#FDF0F0]", // 04 - light red
  "text-[#ECF5F0]", // 05 - light green
];

export const SubFeaturesSection = ({
  title = "Sub-features",
  features = [],
}) => {
  if (!features || features.length === 0) return null;

  return (
    <Section noBg noBorder>
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-black text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div
            className={
              features.length === 4
                ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                : "flex flex-wrap justify-center gap-4"
            }
          >
            {features.map((feature, index) => {
              const numberColor = numberColors[index % numberColors.length];
              const number =
                feature.number || String(index + 1).padStart(2, "0");

              return (
                <div
                  key={feature.id || index}
                  className={`bg-white rounded-2xl p-6 relative overflow-hidden min-h-[230px] border border-[#E1E1E1] flex justify-center items-center ${
                    features.length === 4 ? "" : "flex-1 min-w-[310px]"
                  }`}
                >
                  {/* Background Number */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-[130px] md:text-[180px] font-semibold  ${numberColor} leading-none pointer-events-none`}
                  >
                    {number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl md:text-2xl font-medium text-black mb-3">
                      {feature.title}
                    </h3>
                    <p className=" leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
