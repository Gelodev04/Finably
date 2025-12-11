import { HeroSection } from "../../components/common/HeroSection";
import { Section } from "../../components/common/Section";
import { Container } from "../../components/common/Container";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { categories, blogPosts } from "./data/blog";
import { useSearchAndFilter } from "../../hooks/useSearchAndFilter";
import heroBg from "../../assets/images/blog-bg.png";

export const BlogPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    filterValue: selectedCategory,
    setFilterValue: setSelectedCategory,
    filteredItems: filteredPosts,
  } = useSearchAndFilter(blogPosts, {
    searchField: (item) => `${item.title} ${item.description}`,
    filterField: "category",
    initialFilterValue: "All",
  });

  //   const handleCategoryChange = (category) => {
  //     setSelectedCategory(category);
  //   };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <HeroSection
        label="Resources"
        title="Welcome To The Finably Blog"
        description="Insights, stories, and expert tips to help you take control of your finances and reach your goals faster."
        backgroundImage={heroBg}
      />

      {/* Blog Navigation and Search */}
      <Section noBg noBorder>
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  //   onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : " border hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto lg:min-w-[500px]">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border rounded-xl p-4 bg-white flex flex-col md:flex-row gap-6"
              >
                {/* Thumbnail */}
                <div className="relative w-full md:w-48 h-32 md:h-32 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={post.thumbnail.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                  />
                  <div className="absolute top-0 left-0 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md-br">
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="max-w-8xl">
                    <h3 className="text-xl font-medium text-black mb-1">
                      {post.title}
                    </h3>
                    <p className="text-base  leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      {post.category} • {post.date} • {post.author}
                    </p>
                    <Link
                      to="/blog/articles"
                      className="flex items-center gap-2 text-primary hover:text-primary-600 text-base font-medium"
                    >
                      Read Full
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            <button className="text-primary hover:text-primary-600 font-medium">
              Show More
            </button>
          </div>
        </Container>
      </Section>
    </div>
  );
};
