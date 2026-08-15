import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { CTASection } from "@/components/shared/CTASection";
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

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.shortDescription} />

      <section className="pt-10">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-secondary hover:text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to all Services
          </Link>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="relative h-56 w-full overflow-hidden rounded-lg bg-bg-alt sm:h-72">
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
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

      <section className="bg-bg-alt py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <h2 className="text-[20px] font-bold text-primary">Other services</h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-[14px] font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
