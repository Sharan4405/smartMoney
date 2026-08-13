import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { BlogCard } from "@/components/shared/BlogCard";
import { Reveal } from "@/components/shared/Reveal";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on mutual funds, SIP, and insurance from Smart Money Consultancy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on smart, disciplined investing"
        description="Sample articles illustrating the kind of guidance we share — more insights coming soon."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
