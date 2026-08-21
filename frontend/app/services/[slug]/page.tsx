import type { Metadata } from "next";
import Link from "next/link";
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

      <section className="py-14 sm:py-20">
        <Container>
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-1.5 text-[13px] font-bold text-secondary hover:text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to all Services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <p className="border-l-4 border-accent pl-5 text-[17px] leading-relaxed text-ink sm:text-[19px]">
                  {service.detail}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3.5 rounded-lg border border-border bg-bg-alt p-5 transition-colors hover:border-secondary/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="pt-1 text-[14.5px] leading-snug text-ink">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex flex-col gap-5 rounded-lg border border-border bg-bg-alt p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-accent">
                  <Icon name="handshake" className="h-5 w-5" />
                </span>
                <h3 className="text-[17px] font-bold text-primary">Talk to us about this</h3>
                <p className="text-[14px] leading-relaxed text-muted">
                  Book a free consultation to see how {service.title.toLowerCase()} fits your
                  broader financial plan.
                </p>
                <Button href="/contact" variant="secondary">
                  Book a Free Consultation
                </Button>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-secondary hover:text-primary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.44.57 3.55a1 1 0 01-.25 1.03L6.6 10.8z" />
                  </svg>
                  Or call {COMPANY.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
