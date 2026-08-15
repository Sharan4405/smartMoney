import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full bg-bg-alt">
        <Image
          src={service.image}
          alt={`${service.title} illustration`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 pt-7 px-7.5 pb-9">
        <h3 className="text-[20px] font-bold text-primary">{service.title}</h3>
        <p className="text-[14px] leading-relaxed text-muted">{service.shortDescription}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-bold text-secondary group-hover:gap-2 transition-all">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
