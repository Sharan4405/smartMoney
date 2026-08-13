import { Container } from "@/components/shared/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-primary text-white">
      <Container className="flex flex-col gap-4 py-16 sm:py-20">
        {eyebrow && (
          <span className="text-[14px] font-extrabold uppercase tracking-[2px] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-[15px] md:text-base text-white/75">{description}</p>
        )}
      </Container>
    </section>
  );
}
