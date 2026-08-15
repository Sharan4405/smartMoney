import Link from "next/link";
import Image from "next/image";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`flex shrink-0 items-center justify-center transition-colors ${
          dark ? "rounded-xl bg-white/95 p-1 shadow-sm ring-1 ring-white/30" : ""
        }`}
      >
        <Image
          src="/logo_transparent.svg"
          alt="Smart Money Consultancy Private Limited logo"
          width={508}
          height={491}
          priority
          className="h-12 w-auto"
        />
      </span>
      <span className={`flex flex-col leading-tight ${dark ? "text-white" : "text-primary"}`}>
        <span className="text-[18px] font-bold tracking-tight">Smart Money</span>
        <span
          className={`max-w-35 text-[10px] font-medium uppercase leading-snug tracking-[0.06em] sm:max-w-none sm:whitespace-nowrap ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          Consultancy Private Limited
        </span>
      </span>
    </Link>
  );
}
