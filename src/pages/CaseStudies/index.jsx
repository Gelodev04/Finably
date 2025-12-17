import { HeroSection } from "../../components/common/HeroSection";
import { Section } from "../../components/common/Section";
import { Container } from "../../components/common/Container";
import { CTASection } from "../../components/common/CTASection";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, metrics } from "./data/caseStudies";
import heroBg from "../../assets/images/blog-bg.png";

export const CaseStudiesPage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <HeroSection
        label="Resources"
        title="Real Stories. Real Results."
        description="See how teams like yours moved from reactive tracking to proactive planning with Finably."
        backgroundImage={heroBg}
      />

      {/* Case Studies Section */}
      <Section noBg noBorder>
        <Container>
          <div className="space-y-5  max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border rounded-xl p-6 bg-white flex flex-col md:flex-row gap-7"
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-48 md:h-auto shrink-0 bg-gray-200 rounded-lg">
                  {/* <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-lg"
                  /> */}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-3">
                      {study.company}
                    </p>
                    <h3 className="text-lg  font-medium text-black mb-3">
                      {study.title}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-[#46A26F1A] text-[#46A26F] text-sm font-medium px-3 py-1 rounded-full">
                        {study.highlight}
                      </span>
                    </div>
                    <p className="text-base  leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-600 text-base font-medium"
                    >
                      Read Full
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Metrics Section */}
      <Section noBg noBorder>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-[#DBEFFF] rounded-xl p-6 text-center space-y-3"
              >
                <p className="text-2xl md:text-4xl font-medium text-black">
                  {metric.value}
                </p>
                <span className="">
                  {metric.text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready To Be Our Next Success Story?"
        description="Talk to our team or jump into a quick demo."
        buttonText="Get Started"
        buttonText2="Contact Us"
        onButton2Click={() => (window.location.href = "/contact")}
        href="/join-waitlist"
      />
    </div>
  );
};
