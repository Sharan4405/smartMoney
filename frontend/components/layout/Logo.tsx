import Link from "next/link";
import { Icon } from "@/components/shared/Icon";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
        <Icon name="shield" className="w-7 h-7" />
      </span>
      <span className={`flex flex-col leading-tight ${dark ? "text-white" : "text-primary"}`}>
        <span className="text-[18px] font-bold tracking-tight">Smart Money</span>
        <span
          className={`text-[12px] font-medium uppercase tracking-[0.18em] ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          Consultancy
        </span>
      </span>
    </Link>
  );
}
