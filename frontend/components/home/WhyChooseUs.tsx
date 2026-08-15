import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Icon, type IconName } from "@/components/shared/Icon";

const REASONS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "compass",
    title: "Expert Guidance",
    description: "Personalised financial advice suited to your goals and risk comfort.",
  },
  {
    icon: "scale",
    title: "Diversification",
    description: "Spread investments across sectors to build a balanced, resilient portfolio.",
  },
  {
    icon: "growth",
    title: "Better Returns",
    description: "Strategies designed for long-term growth over short-term speculation.",
  },
  {
    icon: "handshake",
    title: "Transparency & Trust",
    description: "Honest guidance at every step, with no hidden agendas.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-bg-alt py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Why Smart Money" title="Why choose Smart Money Consultancy Private Limited?" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-4 rounded-lg bg-white pt-9.25 px-7.5 pb-10 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon name={reason.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-[20px] font-bold text-primary">{reason.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
