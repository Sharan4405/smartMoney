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
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
