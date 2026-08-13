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
    <section className="border-b border-border bg-bg-alt py-14">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {fact.label}
                </span>
                <span className="text-base font-semibold text-primary sm:text-lg">
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
