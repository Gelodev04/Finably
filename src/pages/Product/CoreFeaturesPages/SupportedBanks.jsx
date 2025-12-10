import { Search } from "lucide-react";
import {
  HeroSection,
  TextSection,
  CTASection,
  Section,
  Container,
} from "../../../components/common";
import heroImage from "../../../assets/images/core-features-bg/supported-bg.png";
import { banks } from "./data/banks";
import { useSearchAndFilter } from "../../../hooks/useSearchAndFilter";

export const SupportedBanksPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredItems: filteredBanks,
  } = useSearchAndFilter(banks, {
    searchField: "name",
  });

  return (
    <>
      <HeroSection
        label="Integrations"
        title="Supported Banks & Institutions"
        description="Finably connects to thousands of banks and credit unions through secure open-banking technology."
        backgroundImage={heroImage}
      />
      <TextSection
        className="pb-0!"
        title=""
        description="Connections are powered by Quiltt and use industry-standard encryption. Finably never sees or stores your login credentials."
      />
      <Section noBg noBorder>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6 md:mb-8">
              <div className="relative max-w-lg mx-auto">
                <Search
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-white border border-[#E1E1E1] rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Bank Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {filteredBanks.map((bank) => (
                <div
                  key={bank.id}
                  className="bg-white rounded-xl p-3 md:p-3 px-4 md:px-10 flex items-center gap-3 md:gap-4 border border-[#E1E1E1]"
                >
                  {/* Bank Logo */}
                  <img
                    src="/icons/red-blue-box.svg"
                    alt={bank.name}
                    className="w-10 h-10 md:w-15 md:h-15 object-contain shrink-0"
                  />
                  {/* Bank Name */}
                  <span className="text-base md:text-lg font-semibold">
                    {bank.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Start planning today — connect your bank in minutes"
        buttonText="Connect Bank"
      />
    </>
  );
};
