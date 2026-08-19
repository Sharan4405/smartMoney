export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  points: string[];
  detail: string;
  featured?: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    slug: "personal-loans",
    title: "Personal Loans",
    shortDescription:
      "Quick, unsecured funding for your immediate needs — from medical expenses to weddings and travel.",
    image: "/services/personal-loans.svg",
    points: [
      "Collateral-free funding processed quickly",
      "Flexible tenure and repayment options",
      "Competitive interest rates matched to your profile",
      "Minimal documentation, fast approvals",
    ],
    detail:
      "Whether it's a medical emergency, a wedding, or consolidating other debts, a personal loan gives you quick access to funds without pledging collateral. We help you compare lenders and find terms that fit your repayment capacity.",
  },
  {
    slug: "home-loan",
    title: "Home Loan",
    shortDescription:
      "Turn your dream home into reality with financing structured around your income and repayment comfort.",
    image: "/services/home-loan.svg",
    points: [
      "Loans for purchase, construction, or renovation",
      "Attractive interest rates and long repayment tenures",
      "Tax benefits under Sections 24(b) and 80C",
      "Guidance on eligibility and documentation",
    ],
    detail:
      "Buying a home is one of life's biggest financial decisions. We help you compare home loan offers, understand eligibility, and structure EMIs that comfortably fit your monthly budget — so you can move in with confidence, not stress.",
  },
  {
    slug: "business-loans",
    title: "Business Loans",
    shortDescription:
      "Fuel your business's growth, working capital, or expansion plans with the right financing.",
    image: "/services/business-loans.svg",
    points: [
      "Working capital and expansion funding options",
      "Both secured and unsecured loan structures",
      "Tailored to your business's cash flow cycle",
      "Support with documentation and lender matching",
    ],
    detail:
      "Growing a business often means bridging a funding gap — whether for inventory, equipment, or expansion. We help you identify the right loan structure and lender so your business keeps moving without cash flow strain.",
  },
  {
    slug: "mortgage-loans",
    title: "Mortgage Loans",
    shortDescription:
      "Unlock the value of your property with a loan against property for major expenses or business needs.",
    image: "/services/mortgage-loans.svg",
    points: [
      "Borrow against residential or commercial property",
      "Higher loan amounts at lower interest than unsecured credit",
      "Longer repayment tenures ease your monthly outflow",
      "Funds usable for business, education, or personal needs",
    ],
    detail:
      "A loan against property lets you unlock the value of an asset you already own, often at more favourable terms than unsecured borrowing. We help you evaluate whether this route makes sense for your goals.",
  },
  {
    slug: "general-insurance",
    title: "General Insurance",
    shortDescription:
      "Protect your vehicle, home, and valuables against accidents, theft, and unforeseen damage.",
    image: "/services/general-insurance.svg",
    points: [
      "Motor insurance for cars and two-wheelers",
      "Home and property protection against damage or theft",
      "Fast, hassle-free claim support",
      "Coverage options tailored to your assets",
    ],
    detail:
      "From your vehicle to your home, general insurance protects the everyday assets you rely on. We help you choose coverage that matches what you own, so an accident or mishap doesn't turn into a financial setback.",
  },
  {
    slug: "lic-credit-card",
    title: "LIC Credit Card",
    shortDescription:
      "A credit card designed around everyday spending, rewards, and added financial flexibility.",
    image: "/services/lic-credit-card.svg",
    points: [
      "Reward points on everyday spends",
      "Added financial flexibility for planned and unplanned expenses",
      "Assistance with application and eligibility",
      "Complements your broader financial planning",
    ],
    detail:
      "The right credit card adds flexibility to your monthly finances when used responsibly. We help you understand the LIC Credit Card's features and whether it fits well alongside your existing financial plan.",
  },
  {
    slug: "bank-credit-cards",
    title: "All Bank Credit Cards",
    shortDescription:
      "Compare and apply for credit cards across leading banks, matched to your spending habits and eligibility.",
    image: "/services/bank-credit-cards.svg",
    points: [
      "Access to cards across multiple leading banks",
      "Comparison based on rewards, fees, and eligibility",
      "Guidance on the best fit for your spending pattern",
      "Support through the application process",
    ],
    detail:
      "With so many credit cards on the market, picking the right one comes down to your spending habits, income, and what rewards actually matter to you. We help you compare options across banks and apply for the card that fits best.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
