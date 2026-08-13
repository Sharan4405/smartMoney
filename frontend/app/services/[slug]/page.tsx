import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { COMPANY } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.shortDescription} />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-accent">
                <Icon name={service.icon} className="w-7 h-7" />
              </span>
              <p className="text-[14.5px] leading-relaxed text-muted">{service.detail}</p>

              <ul className="flex flex-col gap-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14px] text-ink">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-bg-alt p-8">
              <h3 className="text-[16px] font-bold text-primary">Talk to us about this</h3>
              <p className="text-[14px] text-muted">
                Book a free consultation to see how {service.title.toLowerCase()} fits your
                broader financial plan.
              </p>
              <Button href="/contact" variant="secondary">
                Book a Free Consultation
              </Button>
              <a href={COMPANY.phoneHref} className="text-[14px] font-medium text-secondary">
                Or call {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
