"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Logo dark={!solid} />

        <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-[16px] font-bold transition-colors ${
                  active
                    ? "text-accent"
                    : solid
                      ? "text-primary hover:text-secondary"
                      : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${
              solid
                ? "bg-primary text-white hover:bg-primary-light"
                : "bg-accent text-primary hover:bg-accent-light"
            }`}
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden transition-colors ${
            solid ? "text-primary" : "text-white"
          }`}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-7 sm:px-8">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[20px] font-semibold ${
                  pathname === link.href ? "text-accent" : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white"
            >
              Book a Consultation
            </Link>
            <a href={COMPANY.phoneHref} className="text-[15px] text-muted">
              Call {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
