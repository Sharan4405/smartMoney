import Link from "next/link";
import { Icon } from "@/components/shared/Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-5 rounded-lg border border-border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-accent">
        <Icon name={service.icon} className="w-7 h-7" />
      </span>
      <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
      <p className="text-base leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-base font-semibold text-secondary group-hover:gap-2 transition-all">
        Learn more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
