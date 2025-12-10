import { Section } from "../../components/common/Section";
import { HeroSection } from "../../components/common/HeroSection";
import { Container } from "../../components/common/Container";
import { ContactForm } from "../../components/common/ContactForm";
import heroBg from "../../assets/images/company/about-us/hero-bg.png";
import handsImage from "../../assets/images/team-building.png";
import { CTASection } from "../../components/common";

export const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call, email service, etc.
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <HeroSection
        label="Company"
        title="We'd Love To Hear From You"
        description="Questions about Finably, partnerships, press, or careers? Send us a note — our team is happy to help."
        backgroundImage={heroBg}
        buttonText="Send A Message"
      />

      {/* Two Column Section */}
      <Section noBg noBorder>
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
            {/* Left Card: For Career Contact */}
            <div className="border rounded-xl p-4 md:p-8 bg-white lg:w-2/3 flex flex-col">
              <div className="mb-4 md:mb-6">
                <img
                  src={handsImage}
                  alt="Career contact"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center border rounded-xl flex flex-col justify-center items-center flex-1 p-3 md:p-4 cursor-pointer">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">
                  For Career Contact
                </h2>
                <p className="text-base md:text-lg">Add your CV</p>
              </div>
            </div>

            {/* Right Card: Message Us Form */}
            <div className="border rounded-xl p-4 md:p-8 bg-white w-full">
              <h2 className="text-2xl md:text-4xl font-medium text-black mb-4 md:mb-6 text-center">
                Message Us
              </h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Don’t see your role?"
        description="Send us your resume and a short note - we review every application."
        buttonText="Contact Us"
      />
    </div>
  );
};
