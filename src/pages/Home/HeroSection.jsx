import heroBg from "../../assets/images/hero-section-bg.png";
import { Button } from "../../components/common/Button";
import logo from "../../assets/images/logo-icon.png";
import { Container } from "../../components/common/Container";

export const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center rounded-[48px] overflow-hidden  h-[750px] border border-[#E1E1E1]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <Container className="relative z-10  text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex items-center justify-center">
          <div className="bg-white p-3 rounded-3xl">
            <img
              src={logo}
              alt="finablylogo"
              className="size-[96px] object-contain"
            />
          </div>
        </div>

        {/* Main Slogan */}
        <h1 className="text-5xl md:text-[72px] font-medium mb-4">
          <span className="text-black">Stop Tracking.</span>{" "}
          <span className="text-primary">Start Planning.</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-[24px] text-black mb-8">
          Know where your money goes—before you spend it.
        </p>

        {/* CTA Button */}
        <Button
          variant="primary"
          className="text-[20px] w-full max-w-[300px] py-3 rounded-4xl"
        >
          Get Started
        </Button>
      </Container>
    </section>
  );
};
