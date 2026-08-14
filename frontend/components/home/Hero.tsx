import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/shared/Icon";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow-alt pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
        <span
          className="hero-fade inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          style={{ animationDelay: "0.05s" }}
        >
          {COMPANY.tagline}
        </span>

        <h1
          className="hero-fade max-w-3xl text-[32px] font-extrabold leading-[1.2] tracking-tight md:text-[54px]"
          style={{ animationDelay: "0.18s" }}
        >
          SIP today, <span className="text-accent">smile forever.</span>
        </h1>

        <p
          className="hero-fade max-w-2xl text-[15px] leading-[1.75] text-white/75 md:text-base"
          style={{ animationDelay: "0.31s" }}
        >
          Smart Money Consultancy helps you grow your wealth through mutual funds and
          insurance guidance built on disciplined, goal-based investing — not guesswork.
        </p>

        <div
          className="hero-fade flex flex-wrap gap-4"
          style={{ animationDelay: "0.44s" }}
        >
          <Button href="/contact" variant="primary">
            Book a Free Consultation
          </Button>
          <Button href="/services" variant="ghost">
            Explore Services
          </Button>
        </div>

        <div
          className="hero-fade mt-4 flex flex-wrap gap-8 text-[13px] text-white/70"
          style={{ animationDelay: "0.57s" }}
        >
          <span className="flex items-center gap-2">
            <Icon name="check" className="h-4 w-4 text-accent" />
            SEBI-aware, discipline-first guidance
          </span>
          <span className="flex items-center gap-2">
            <Icon name="check" className="h-4 w-4 text-accent" />
            Goal-based mutual fund planning
          </span>
        </div>
      </div>
    </section>
  );
}
