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
      <Container className="flex flex-col gap-5 py-20 sm:py-24">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-white/75 sm:text-xl">{description}</p>
        )}
      </Container>
    </section>
  );
}
