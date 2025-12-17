import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { ArrowUpRight } from "lucide-react";
import dataProtectionBg from "../../../assets/images/blog-bg.png";

export const DataProtectionSection = () => {
  return (
    <Section backgroundImage={dataProtectionBg}>
      <Container>
        {/* Content */}
        <div className="relative z-10 text-center space-y-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
            Your data protected
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600   leading-relaxed">
            We use bank-level encryption in transit and at rest. You can
            disconnect accounts or delete your data anytime.
          </p>

          {/* Learn More Link */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn More About Data Protection
              <ArrowUpRight size={18} className="text-primary" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
