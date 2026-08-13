import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-9 lg:max-w-3xl">
          <Reveal>
            <span className="w-fit rounded-full bg-bg-alt px-3 py-1.5 text-sm font-semibold text-muted">
              Sample article — for illustration
            </span>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal>
            <Button href="/blog" variant="secondary" className="w-fit">
              Back to Blog
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
