import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Icon } from "@/components/shared/Icon";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name} to book a free consultation.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's plan your financial future"
        description="Reach out and we'll help you find the right starting point."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-6 rounded-lg border border-border bg-bg-alt p-8">
              <div className="flex items-start gap-3">
                <Icon name="shield" className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="text-[14px] font-semibold text-primary">Address</p>
                  <p className="text-[14px] text-muted">
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.line3}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="handshake" className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="text-[14px] font-semibold text-primary">Phone</p>
                  <a href={COMPANY.phoneHref} className="text-[14px] text-muted hover:text-secondary">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="compass" className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="text-[14px] font-semibold text-primary">Director</p>
                  <p className="text-[14px] text-muted">{COMPANY.director}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
