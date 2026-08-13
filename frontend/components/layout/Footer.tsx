import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo dark />
            <p className="text-[15px] leading-7 text-white/70">{COMPANY.tagline}</p>
            <p className="text-[15px] leading-7 text-white/70">Director: {COMPANY.director}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-accent">Quick Links</h4>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[15px] text-white/75 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-accent">Services</h4>
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
