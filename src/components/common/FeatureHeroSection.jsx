import { Section } from "./Section";
import { LabelPill } from "./LabelPill";

export const FeatureHeroSection = ({
  label,
  title,
  description,
  backgroundImage,
}) => {
  return (
    <Section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 ">
        <div className="max-w-4xl mx-auto text-center space-y-10 ">
          {/* Label */}
          <LabelPill>{label}</LabelPill>

          {/* Title */}
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-center ">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-black ">{description}</p>
          )}
        </div>
      </div>
    </Section>
  );
};
