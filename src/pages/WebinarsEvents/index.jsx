import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeroSection,
  Section,
  Container,
  Button,
  CTASection,
} from "../../components/common";
import {
  Calendar,
  ArrowRight,
  Search,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import { upcomingWebinars, recordings } from "./data/webinars";
import heroBg from "../../assets/images/blog-bg.png";

export const WebinarsEventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection
        label="Resources"
        title="Webinars & Events"
        description="Join our upcoming sessions or watch recordings to get the most out of Finably."
        backgroundImage={heroBg}
      />

      {/* Upcoming Section */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">
            Upcoming
          </h2>

          {/* Webinar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8 max-w-7xl mx-auto">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-2xl border border-[#E1E1E1] overflow-hidden p-5 flex flex-col "
              >
                {/* Banner Image */}
                <div className="relative h-80">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Card Content */}
                <div className="pt-5 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-4">
                    {webinar.title}
                  </h3>

                  <div className="space-y-3 mb-6 flex flex-col items-start">
                    <div className="flex items-center gap-2  bg-[#DBEFFF] px-3 py-1 rounded-lg">
                      <Calendar color="#064ea2" size={18} />
                      <span className="text-sm font-medium">
                        {webinar.date}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-[#DBEFFF] px-3 py-1 rounded-lg">
                      <img
                        src="/icons/zoom.svg"
                        alt="zoom"
                        className="w-8 h-2"
                      />
                      <span className="text-sm font-medium">
                        {webinar.platform}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed flex-1">
                    {webinar.description}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-auto">
                    <Link to="/webinars/register">
                      <Button variant="primary">Register</Button>
                    </Link>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary-600  "
                    >
                      Add To Calendar
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See Calendar Link */}
          <div className="flex justify-center">
            <Link
              to="/webinars/calendar"
              className="flex items-center gap-2 text-primary hover:text-primary-600 text-xl"
            >
              See Calendar
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Recordings Section */}
      <Section noBg noBorder>
        <Container>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">
            Recordings
          </h2>

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Recording Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="bg-white rounded-2xl border border-[#E1E1E1] overflow-hidden p-5 flex flex-col"
              >
                {/* Banner Image */}
                <div className="relative h-70">
                  <img
                    src={recording.image}
                    alt={recording.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Card Content */}
                <div className="pt-5 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-4">
                    {recording.title}
                  </h3>

                  <div className="space-y-3 mb-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 bg-[#DBEFFF] px-3 py-1 rounded-lg">
                      <Circle color="#064ea2" size={18} fill="#064ea2" />
                      <span className="text-base font-medium">
                        {recording.date}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-base text-gray-500 font-medium">
                        {recording.duration}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed flex-1">
                    {recording.description}
                  </p>

                  <div className="mt-auto">
                    <Button variant="outline" className="w-full">
                      Watch Recording
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Link */}
          <div className="flex justify-center">
            <a
              href="#"
              className="flex items-center gap-2 text-primary hover:text-primary-600 font-medium"
            >
              Show More
            </a>
          </div>
        </Container>
      </Section>

      {/* Never Miss An Event Section */}
      <CTASection
        title="Never Miss An Event"
        description="Get invites and recordings straight to your inbox."
        buttonText2="Subscribe"
        showInput={true}
        inputPlaceholder="example@gmail.com"
        inputValue={email}
        onInputChange={(e) => setEmail(e.target.value)}
        onButtonClick={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};
