import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-white pt-9.25 px-7.5 pb-10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent">
        <Icon name={service.icon} className="w-6 h-6" />
      </span>
      <h3 className="text-[20px] font-bold text-primary">{service.title}</h3>
      <p className="text-[14px] leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-bold text-secondary group-hover:gap-2 transition-all">
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
