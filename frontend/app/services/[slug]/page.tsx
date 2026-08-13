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
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-7">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-accent">
                <Icon name={service.icon} className="w-8 h-8" />
              </span>
              <p className="text-lg leading-relaxed text-muted">{service.detail}</p>

              <ul className="flex flex-col gap-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base text-ink">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-5 rounded-lg border border-border bg-bg-alt p-8">
              <h3 className="text-lg font-semibold text-primary">Talk to us about this</h3>
              <p className="text-base text-muted">
                Book a free consultation to see how {service.title.toLowerCase()} fits your
                broader financial plan.
              </p>
              <Button href="/contact" variant="secondary">
                Book a Free Consultation
              </Button>
              <a href={COMPANY.phoneHref} className="text-base font-medium text-secondary">
                Or call {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
