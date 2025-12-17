import { Container } from "../../../components/common/Container";
import { Button } from "../../../components/common/Button";
import heroBg from "../../../assets/images/hero-section-bg.png";
import logo from "../../../assets/images/logo-icon.png";

export const HeroSection = ({
  waitlistEmail,
  setWaitlistEmail,
  handleWaitlistSubmit,
}) => {
  return (
    <section
      className="relative flex items-center justify-center md:rounded-[48px] overflow-hidden h-[750px] border border-[#E1E1E1]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <Container className="relative z-10 text-center">
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
        <p className="text-xl md:text-[24px] text-black mb-8 max-w-2xl mx-auto">
          Finably is almost here. Join the waitlist to get priority access when
          we launch.
        </p>

        {/* Waitlist Form */}
        <form
          onSubmit={handleWaitlistSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="example@gmail.com"
            value={waitlistEmail}
            onChange={(e) => setWaitlistEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-[#E1E1E1] focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
          />
          <Button
            type="ani1"
            variant="primary"
            className="px-8 py-3 whitespace-nowrap  "
          >
            Join Waitlist
          </Button>
        </form>
      </Container>
    </section>
  );
};
