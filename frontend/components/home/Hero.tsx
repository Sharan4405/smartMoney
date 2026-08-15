import Link from "next/link";
import { Button } from "@/components/ui/Button";
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

      <div className="relative mx-auto flex min-h-[93.5vh] w-full max-w-7xl flex-col items-center justify-center gap-7 px-6 pb-30 pt-40 text-center sm:px-8 sm:pb-37 sm:pt-47 lg:px-12">
        <span
          className="hero-fade inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          style={{ animationDelay: "0.05s" }}
        >
          {COMPANY.tagline}
        </span>

        <h1
          className="hero-fade max-w-3xl text-[36px] font-extrabold leading-[1.12] tracking-tight md:text-[60px]"
          style={{ animationDelay: "0.16s" }}
        >
          SIP today, <span className="text-accent">smile forever.</span>
        </h1>

        <p
          className="hero-fade max-w-2xl text-[15px] leading-[1.8] text-white/75 md:text-[17px]"
          style={{ animationDelay: "0.28s" }}
        >
          Smart Money Consultancy helps you grow your wealth through mutual funds,
          SIPs, and insurance guidance built on disciplined, goal-based investing —
          not guesswork.
        </p>

        <div
          className="hero-fade mt-2 flex flex-wrap items-center justify-center gap-6"
          style={{ animationDelay: "0.4s" }}
        >
          <Button href="/contact" variant="primary">
            Book a Free Consultation
          </Button>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/80 transition-colors hover:text-accent"
          >
            Explore Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
