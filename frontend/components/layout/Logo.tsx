import Link from "next/link";
import { Icon } from "@/components/shared/Icon";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
        <Icon name="shield" className="w-6 h-6" />
      </span>
      <span className={`flex flex-col leading-tight ${dark ? "text-white" : "text-primary"}`}>
        <span className="text-lg font-bold tracking-tight">Smart Money</span>
        <span
          className={`text-xs font-medium uppercase tracking-[0.18em] ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          Consultancy
        </span>
      </span>
    </Link>
  );
}
