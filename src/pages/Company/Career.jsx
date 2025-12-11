import { Section } from "../../components/common/Section";
import { LabelPill } from "../../components/common/LabelPill";
import { HeroSection } from "../../components/common/HeroSection";
import { IconGrid, CTASection, TextSection } from "../../components/common";
import { Container } from "../../components/common/Container";
import { cultureValues, jobOpenings } from "./data/career";
import { ArrowUpRightIcon, Search } from "lucide-react";
import heroBg from "../../assets/images/company/about-us/hero-bg.png";
import { useSearchAndFilter } from "../../hooks/useSearchAndFilter";

export const CareerPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    filterValue: selectedDepartment,
    setFilterValue: setSelectedDepartment,
    filteredItems: filteredJobs,
    availableFilterOptions: departments,
  } = useSearchAndFilter(jobOpenings, {
    searchField: "title",
    filterField: "department",
  });

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection
        label="Company"
        title="Career"
        description="Join our mission to make money management proactive, not reactive"
        backgroundImage={heroBg}
        buttonText="See Open Positions"
      />

      <TextSection
        className="pb-0!"
        description="We're a small, focused team building tools that help people plan with clarity."
      />
      {/* Culture Values Section */}
      <Section noBg noBorder>
        <Container>
          <IconGrid items={cultureValues} />
        </Container>
      </Section>

      {/* Open Roles Section */}
      <Section noBg noBorder>
        <Container>
          <div className="text-center mb-12">
            <LabelPill>Open Roles</LabelPill>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            {/* Department Dropdown */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-0 border rounded-xl">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4 border-[#E1E1E1]  border-b last:border-b-0"
                >
                  <div className="flex items-center gap-5">
                    <div className="bg-gray-100 rounded-md p-4 ">
                      <img
                        src={job.icon}
                        alt={job.department}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-black">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {job.department} · {job.type}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary hover:underline">
                    View
                    <ArrowUpRightIcon size={16} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-600">
                No job openings found at this time.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Don't See Your Role?"
        description="Send us your resume and a short note - we review every application."
        buttonText="See Open Roles"
        buttonText2="Contact Us"
      />
    </div>
  );
};
