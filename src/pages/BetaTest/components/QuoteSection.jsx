import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import quoteBg from "../../../assets/images/company/about-us/quote-bg.png";

export const QuoteSection = () => {
  return (
    <Section backgroundImage={quoteBg}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center gap-6">
            <div className="shrink-0">
              {/* Quotation mark icon placeholder */}
              <img src="/icons/quote.svg" alt="Quote" className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl text-black leading-relaxed mb-6 italic">
                We built Finably because we were tired of just tracking money
                after it was gone. Our goal is to help you plan ahead — and with
                your feedback, we'll make it even better.
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
      </Container>
    </Section>
  );
};
