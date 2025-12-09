import { Section } from "../../components/common/Section";
import { LabelPill } from "../../components/common/LabelPill";
import heroBg from "../../assets/images/company/about-us/hero-bg.png";
import teamImage from "../../assets/images/company/about-us/people.png";
import quoteBg from "../../assets/images/company/about-us/quote-bg.png";
import { Button } from "../../components/common/Button";
import { Link } from "react-router-dom";
import { HeroSection } from "../../components/common/HeroSection";
import { missionAndBuilding, values, milestones } from "./data/aboutUs";
import { ArrowUpRightIcon } from "lucide-react";
import { CTASection } from "../../components/common";

export const AboutUsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <HeroSection
        label="Company"
        title="About Us"
        description="We're on a mission to help people decide where their money goes — before they spend it"
        backgroundImage={heroBg}
      />

      {/* Team Section */}
      <div className="container mx-auto ">
        <div className="border rounded-xl md:rounded-4xl p-2 md:p-6">
          <img
            src={teamImage}
            alt="Team"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Mission & What We're Building Section */}
      <div className="container mx-auto   ">
        <div className="grid md:grid-cols-2 gap-4">
          {missionAndBuilding.map((item) => (
            <div key={item.id} className="border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-medium text-black mb-4">
                {item.title}
              </h2>
              <p className="text-lg  leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <Section backgroundImage={quoteBg}>
        <div className="container mx-auto ">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-6">
              <div className="shrink-0">
                {/* Quotation mark icon placeholder */}
                <img src="/icons/quote.svg" alt="Quote" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6 italic">
                  We started Finably after years of "tracking after spending"
                  that never changed outcomes. We wanted a tool that nudges you
                  before you tap "pay," helps you fund priorities first, and
                  makes the right choice the easy one.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary text-xl">
                    Nate Surname
                  </p>
                  <p className="text-gray-600 text-base">Founder of Finably</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section noBg noBorder>
        <div className="container mx-auto ">
          <div className=" mx-auto">
            <div className="text-center mb-12">
              <LabelPill>Our values</LabelPill>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="space-y-5 border p-8 text-center rounded-xl"
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="size-22 mx-auto"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium text-black">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Milestones Section */}
      <Section>
        <div className="container mx-auto ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <LabelPill>Milestones</LabelPill>
            </div>
            <div className="grid md:grid-cols-2 gap-4 px-4">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="space-y-4 border bg-white rounded-xl p-4 text-center"
                >
                  <p className="text-primary text-lg font-medium">
                    {milestone.date}
                  </p>
                  <h3 className="text-2xl font-medium text-black">
                    {milestone.title}
                  </h3>
                  <p className="text-lg  leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Data Protection Section */}
      <Section backgroundImage={quoteBg}>
        <div className="container mx-auto ">
          <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 font-medium">
              <span>GDPR/PSD2-aware practices</span>
              <span>•</span>
              <span>SOC 2/ISO-alighned infrastructure</span>
              <span>•</span>
              <span>Delete data anytime</span>
            </div>
            <Link
              to="/data-protection"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Learn More About Data Protection
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <CTASection
        title="Want To Build With Us?"
        buttonText="See Open Roles"
        buttonText2="Contact Us"
      />
    </div>
  );
};
