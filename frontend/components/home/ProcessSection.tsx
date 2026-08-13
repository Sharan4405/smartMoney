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
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="A simple, guided process" />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-extrabold text-accent">{s.step}</span>
                <h3 className="text-[16px] font-bold text-primary">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
