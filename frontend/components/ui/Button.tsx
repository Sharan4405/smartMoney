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
    "bg-accent text-primary hover:bg-accent-light shadow-md text-[15px] font-bold px-7.5 py-3.75",
  secondary:
    "bg-primary text-white hover:bg-primary-light text-[14px] font-semibold px-7 py-3.25",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 text-[15px] font-bold px-7.5 py-3.75",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
