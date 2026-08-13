import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-secondary py-20 text-white">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-7 text-center">
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Ready to take control of your financial journey?
            </h2>
            <p className="max-w-lg text-lg text-white/80">
              Small steps today, big freedom tomorrow. Let&apos;s build your plan together.
            </p>
            <Button href="/contact" variant="primary">
              Book a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
