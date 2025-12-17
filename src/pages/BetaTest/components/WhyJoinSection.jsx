import { Section } from "../../../components/common/Section";
import { Container } from "../../../components/common/Container";
import { LabelPill } from "../../../components/common/LabelPill";
import { IconGrid } from "../../../components/common/IconGrid";
import { whyJoin } from "../data";

export const WhyJoinSection = () => {
  return (
    <Section noBg noBorder className="pt-0!">
      <Container>
        <div className="text-center mb-12">
          <LabelPill>Why Join the Beta</LabelPill>
        </div>
        <IconGrid items={whyJoin} />
      </Container>
    </Section>
  );
};
