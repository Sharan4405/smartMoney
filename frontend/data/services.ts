export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  points: string[];
  detail: string;
};

export const SERVICES: Service[] = [
  {
    slug: "mutual-funds-sip",
    title: "Mutual Funds & SIP",
    shortDescription:
      "Disciplined, goal-based investing through Systematic Investment Plans built around your timeline and risk appetite.",
    image: "/services/mutual-funds-sip.svg",
    points: [
      "Start small with SIP and build wealth over the long term",
      "Professional fund management by experienced teams",
      "Diversification across sectors to manage risk",
      "Liquidity and flexibility to invest and redeem as needed",
    ],
    detail:
      "A Systematic Investment Plan lets you invest a fixed amount regularly, building the habit of disciplined investing while benefiting from the power of compounding over time. We help you choose funds aligned to your goals, time horizon, and risk comfort.",
  },
  {
    slug: "fd-vs-mutual-funds",
    title: "FD vs Mutual Funds Guidance",
    shortDescription:
      "Understand how fixed deposits and mutual funds differ so you can choose the right mix for your goals.",
    image: "/services/fd-vs-mutual-funds.svg",
    points: [
      "Fixed deposits offer fixed, low but predictable returns",
      "Mutual funds are market-linked with potentially higher long-term growth",
      "Mutual funds are designed to beat inflation over time",
      "Compare tax efficiency and liquidity before you decide",
    ],
    detail:
      "Fixed deposits offer safety and certainty, while mutual funds are built for growth and can be more tax-efficient over the long term. We walk you through the trade-offs so your money is working as hard as you are.",
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription:
      "Protect your family's health and finances with the right coverage for hospitalisation and medical emergencies.",
    image: "/services/health-insurance.svg",
    points: [
      "Covers hospitalisation and major medical expenses",
      "Cashless treatment at a wide network of hospitals",
      "Tax benefits under Section 80D",
      "Individual and family floater options available",
    ],
    detail:
      "A single health emergency can undo years of savings. We help you find health insurance plans that protect your family while making the most of available tax benefits.",
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription:
      "Secure your loved ones' future with a protection plan that covers life's uncertainties.",
    image: "/services/life-insurance.svg",
    points: [
      "Provides financial security to your family in your absence",
      "Helps cover debts, expenses, and future goals",
      "Complements mutual funds as part of a balanced financial plan",
      "Peace of mind that your loved ones are protected",
    ],
    detail:
      "Life insurance and mutual funds work together as two pillars of a strong financial plan — one protects, the other grows. We help you build both into a single, balanced strategy.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
