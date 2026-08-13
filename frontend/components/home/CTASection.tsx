import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-secondary py-16 text-white">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-xl text-[28px] md:text-[36px] font-extrabold leading-tight tracking-tight">
              Ready to take control of your financial journey?
            </h2>
            <p className="max-w-md text-[14.5px] text-white/80">
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
