import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
  { step: "01", title: "Understand", description: "We learn about your goals, timeline, and comfort with risk." },
  { step: "02", title: "Analyze", description: "We assess your current finances and identify the right opportunities." },
  { step: "03", title: "Strategize", description: "We build a plan combining mutual funds, SIP, and insurance as needed." },
  { step: "04", title: "Guide", description: "We stay with you, reviewing and adjusting the plan as life changes." },
];

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="A simple, guided process" />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-accent">{s.step}</span>
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="text-base leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
