export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-primary max-w-3xl leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-2xl text-lg sm:text-xl">{description}</p>
      )}
    </div>
  );
}
