import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-primary hover:bg-accent-light shadow-md",
  secondary:
    "bg-primary text-white hover:bg-primary-light",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
