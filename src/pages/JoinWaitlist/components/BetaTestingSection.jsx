import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { Button } from "../../../components/common/Button";
import { Key } from "lucide-react";
import betaBg from "../../../assets/images/blog-bg.png";

export const BetaTestingSection = ({ handleBetaSubmit }) => {
  return (
    <Section backgroundImage={betaBg}>
      <Container>
        <div className="relative z-10 text-center space-y-6">
          {/* Beta Access Tag */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#DBEFFF] px-4 py-2 rounded-full">
              <Key size={16} className="text-primary" />
              <span className="text-primary font-medium text-sm">
                Beta access
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-medium text-primary">
            Want Early Access Before Everyone Else?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl  leading-relaxed ">
            Join our closed beta, help us test Finably, and get perks for your
            feedback.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button className="w-full lg:w-auto! mx-auto! hover:bg-white!" type="ani2" variant="outline" onClick={handleBetaSubmit}>
              Join Beta Testing
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
