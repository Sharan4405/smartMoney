import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.6fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo dark />
            <p className="text-[15px] leading-7 text-white/70">{COMPANY.tagline}</p>
            <p className="text-[15px] leading-7 text-white/70">Director: {COMPANY.director}</p>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Smart Money Consultancy on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Smart Money Consultancy on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="14" height="14" viewBox="6 5 11 17" fill="currentColor" stroke="none">
                  <path d="M14.5 8.5H16V6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V12H7v2.8h2.3V21h2.9v-6.2H14.6l.4-2.8h-2.7v-1.4c0-.8.2-1.4 1.2-1.4z" />
                </svg>
              </a>
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Smart Money Consultancy on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <rect x="4" y="9" width="3" height="11" />
                  <circle cx="5.5" cy="5.5" r="1.8" />
                  <path d="M10 9h3v1.6c.6-1 1.7-1.9 3.4-1.9 3.1 0 4.1 2 4.1 4.9V20h-3v-5.7c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.8h-3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-accent">Quick Links</h4>
            <div className="grid grid-flow-col grid-rows-6 gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[15px] text-white/75 hover:text-white">
                {link.label}
              </Link>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-accent">Services</h4>
            <div className="grid grid-flow-col grid-rows-6 gap-x-6 gap-y-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-[15px] text-white/75 hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-accent">Contact</h4>
            <p className="text-[14px] text-white/75">
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
              <br />
              {COMPANY.address.line3}
            </p>
            <a href={COMPANY.phoneHref} className="text-[14px] text-white/75 hover:text-white">
              {COMPANY.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-sm leading-relaxed text-white/50">{COMPANY.disclaimer}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/50">{COMPANY.insuranceDisclaimer}</p>
          <p className="mt-4 text-sm text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
