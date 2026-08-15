import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mutual funds, SIP, health insurance, and life insurance guidance from Smart Money Consultancy Private Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Guidance for every stage of your financial journey"
        description="From building wealth with mutual funds to protecting what matters most, here's how we help."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
