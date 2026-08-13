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
        <span className="text-[14px] font-extrabold uppercase tracking-[2px] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary max-w-3xl leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-2xl text-[14.5px] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
