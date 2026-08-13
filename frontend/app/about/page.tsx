import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name}, led by ${COMPANY.director}, and our approach to disciplined, goal-based financial planning.`,
};

const VALUES = [
  {
    icon: "compass" as const,
    title: "Personalised Approach",
    description: "No one-size-fits-all advice — every plan starts with your goals and comfort with risk.",
  },
  {
    icon: "handshake" as const,
    title: "Transparency",
    description: "Clear, honest guidance at every step, with nothing hidden in the fine print.",
  },
  {
    icon: "growth" as const,
    title: "Discipline First",
    description: "We believe consistent, long-term habits beat chasing short-term market moves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={COMPANY.name}
        description={COMPANY.tagline}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="flex flex-col gap-5">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary">Smart advice, built on discipline</h2>
              <p className="text-[14.5px] leading-relaxed text-muted">
                Smart Money Consultancy Pvt. Ltd. helps individuals and families grow their
                wealth through mutual funds and SIP-based investing, paired with practical
                health and life insurance guidance — all built around disciplined, goal-based
                planning rather than short-term speculation.
              </p>
              <p className="text-[14.5px] leading-relaxed text-muted">
                The firm is led by Director {COMPANY.director}, based in Vaishali Nagar, Jaipur.
              </p>
              <Button href="/contact" variant="secondary" className="w-fit">
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal className="rounded-lg bg-bg-alt p-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[14px] font-extrabold uppercase tracking-[2px] text-secondary">
                At a glance
              </h3>
              <dl className="flex flex-col gap-4">
                <div>
                  <dt className="text-[12px] text-muted">Company</dt>
                  <dd className="text-[14.5px] font-medium text-primary">{COMPANY.name}</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-muted">Director</dt>
                  <dd className="text-[14.5px] font-medium text-primary">{COMPANY.director}</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-muted">Address</dt>
                  <dd className="text-[14.5px] font-medium text-primary">
                    {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-alt py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary">What we stand for</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-4 rounded-lg bg-white pt-9.25 px-7.5 pb-10 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent">
                    <Icon name={value.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-[20px] font-bold text-primary">{value.title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
