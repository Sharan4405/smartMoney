export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sip-small-steps-big-freedom",
    title: "SIP: Small Steps, Big Freedom",
    category: "Mutual Funds",
    excerpt:
      "Why starting small and staying consistent with a Systematic Investment Plan can matter more than timing the market.",
    content: [
      "A Systematic Investment Plan (SIP) is built on a simple idea: invest a fixed, manageable amount regularly instead of trying to time the market with a lump sum.",
      "Over the long term, this discipline lets compounding do the heavy lifting. Chhoti shuruaat, bade sapne — small beginnings can lead to big goals when given enough time and consistency.",
      "The key is patience: staying invested through market ups and downs, rather than reacting to short-term volatility, is usually what separates long-term wealth creation from short-term speculation.",
    ],
  },
  {
    slug: "fd-vs-mutual-funds-explained",
    title: "FD vs Mutual Funds: Two Paths, One Better Future",
    category: "Comparison",
    excerpt:
      "A closer look at how fixed deposits and mutual funds differ on returns, risk, taxation, and liquidity.",
    content: [
      "Fixed deposits are valued for their safety and predictability — your returns are fixed and guaranteed, which makes them useful for short-term goals and capital safety.",
      "Mutual funds, on the other hand, are market-linked. They carry more risk in the short term but are designed to beat inflation and build wealth over the long term through the power of compounding.",
      "Taxation also differs: FD interest is taxed as per your income slab, while equity mutual funds can offer more favourable long-term capital gains treatment. The right choice usually isn't 'either/or' — it's about using each for the goals they're best suited for.",
    ],
  },
  {
    slug: "why-health-insurance-is-true-wealth",
    title: "Why Health Insurance Is True Wealth",
    category: "Insurance",
    excerpt:
      "A single medical emergency can undo years of disciplined saving. Here's why health cover belongs in every financial plan.",
    content: [
      "It's easy to think of health insurance as an afterthought once your investments are in place. In practice, it's often the foundation that protects everything else you've built.",
      "A good health insurance plan covers hospitalisation and major medical expenses, offers cashless treatment at network hospitals, and comes with tax benefits under Section 80D.",
      "Good health is priceless, but health insurance is your safety net — small premium today, big savings and peace of mind tomorrow.",
    ],
  },
  {
    slug: "two-pillars-mutual-funds-life-insurance",
    title: "Two Pillars of a Strong Financial Plan",
    category: "Insurance",
    excerpt:
      "Mutual funds help your money grow. Life insurance protects the people who depend on you. A complete plan needs both.",
    content: [
      "It's tempting to treat investing and insurance as separate decisions, but they answer two different questions: mutual funds ask 'how do I grow my wealth?', while life insurance asks 'what happens to my family if I'm not around to keep growing it?'",
      "A term life insurance plan is designed to replace your income for your family — covering ongoing expenses, outstanding debts, and future goals like a child's education — for a relatively small premium.",
      "Neither pillar replaces the other. Growth without protection leaves your family exposed to risk; protection without growth leaves your money underworked. A balanced plan treats them as a pair, not a choice.",
    ],
  },
  {
    slug: "dont-put-all-your-eggs-in-one-basket",
    title: "Don't Put All Your Eggs in One Basket",
    category: "Mutual Funds",
    excerpt:
      "The simplest risk-management idea in investing is also one of the most overlooked: spreading your money across sectors, not concentrating it in one bet.",
    content: [
      "Diversification means spreading your investments across different sectors and asset types, so that a downturn in any single one doesn't derail your entire portfolio.",
      "This is one of the core reasons mutual funds work well for most investors — a single fund can hold dozens of companies across industries, giving you built-in diversification that would be difficult and expensive to replicate by picking individual stocks yourself.",
      "Diversification doesn't eliminate risk, and it doesn't guarantee returns — but it does mean your financial future isn't riding on any one company, sector, or decision going right.",
    ],
  },
  {
    slug: "power-of-compounding-start-early",
    title: "The Power of Compounding: Why Starting Early Matters",
    category: "Financial Planning",
    excerpt:
      "The biggest advantage in investing usually isn't a smarter strategy — it's time. Here's why starting today matters more than starting big.",
    content: [
      "Compounding means your returns start generating their own returns. Left undisturbed, a disciplined investment doesn't just grow — it grows faster the longer it stays invested.",
      "This is why time in the market tends to matter more than timing the market: an investor who starts small but starts early gives compounding far more room to work than one who waits for the 'right moment' to invest a larger amount later.",
      "Market up or down, the discipline of investing consistently and staying invested is what lets compounding do its job. Aaj plan kare, kal ka fayda — the earlier you start, the more time is on your side.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
