import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/shared/Container";
import { COMPANY } from "@/lib/constants";

const FACTS = [
  { label: "Company", value: COMPANY.name },
  { label: "Director", value: COMPANY.director },
  { label: "Based in", value: "Vaishali Nagar, Jaipur" },
  { label: "Focus", value: "Mutual Funds, SIP & Insurance" },
];

export function TrustSection() {
  return (
    <section className="border-b border-border bg-bg-alt py-12">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wide text-muted">
                  {fact.label}
                </span>
                <span className="text-[14px] font-semibold text-primary">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
