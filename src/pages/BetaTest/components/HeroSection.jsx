import { Container } from "../../../components/common/Container";
import bgImage from "../../../assets/images/beta-test-bg.png";

export const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative border border-[#E1E1E1] md:rounded-[48px] overflow-hidden bg-[#FAFAFA] bg-cover bg-center"
    >
      <Container className="relative z-10 py-16 md:py-60 ">
        <div className="space-y-6 max-w-2xl ">
          {/* Beta Access Tag */}
          <div className="inline-flex items-center gap-2 bg-white px-5 shadow-lg py-3 rounded-full border border-[#E1E1E1]">
            <span className="text-primary font-medium text-xl">
              Beta access
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-black leading-normal">
            Be Part Of Our Earliest Users
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl relaxed">
            Join the closed beta and get early access to Finably.
          </p>
        </div>
      </Container>
    </section>
  );
};
