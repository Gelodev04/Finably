import { useNavigate } from "react-router-dom";
import { HeroSection } from "../../../components/common/HeroSection";
import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { Button } from "../../../components/common/Button";
import { article } from "./data/article";
import heroBg from "../../../assets/images/blog-image.png";

export const BlogArticlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection
        label={article.category}
        title={article.title}
        backgroundImage={heroBg}
        backdropBlur={true}
        textWhite={true}
      />

      {/* Article Content */}
      <Section noBorder>
        <Container>
          <div className="max-w-2xl mx-auto space-y-10 text-center">
            {/* Introduction */}
            <p className="text-lg text-black leading-relaxed">
              {article.introduction}
            </p>

            {/* Numbered Tips List */}
            <div className="space-y-10">
              {article.tips.map((tip, index) => (
                <div key={tip.id} className="space-y-4">
                  <h3 className="text-2xl font-medium text-black">
                    {index + 1}. {tip.title}
                  </h3>
                  <p className="text-lg text-black leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Takeaway Section */}
            <div className="space-y-3">
              <h3 className="text-2xl font-medium text-primary">
                {article.takeaway.title}
              </h3>
              <p className="text-lg text-black leading-relaxed">
                {article.takeaway.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      {/* Back To Blog Button */}
      <div className="flex justify-center pt-8">
        <Button
          variant="primary"
          className="py-3 px-6"
          onClick={() => navigate("/blog")}
        >
          Back To Blog
        </Button>
      </div>
    </div>
  );
};
