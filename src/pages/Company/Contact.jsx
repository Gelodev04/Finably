import { Section } from "../../components/common/Section";
import { HeroSection } from "../../components/common/HeroSection";
import { Container } from "../../components/common/Container";
import { ContactForm } from "../../components/common/ContactForm";
import heroBg from "../../assets/images/company/about-us/hero-bg.png";
import handsImage from "../../assets/images/team-building.png";

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
          <div className="flex gap-4 max-w-7xl mx-auto">
            {/* Left Card: For Career Contact */}
            <div className="border rounded-xl p-8 bg-white w-2/3">
              <div className="mb-6">
                <img
                  src={handsImage}
                  alt="Career contact"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center  border  flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-medium text-black mb-2">
                    For Career Contact
                  </h2>
                  <p className="text-lg text-gray-600">Add your CV</p>
              </div>
            </div>

            {/* Right Card: Message Us Form */}
            <div className="border rounded-xl p-8 bg-white w-full">
              <h2 className="text-4xl font-medium text-black mb-6 text-center">
                Message Us
              </h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
