import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogCard } from "@/components/shared/BlogCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/data/blog";

export function BlogPreview() {
  return (
    <section className="bg-bg-alt py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <SectionHeading eyebrow="Insights" title="From our blog" align="left" />
            <Button href="/blog" variant="secondary">
              View all posts
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
