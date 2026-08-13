import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="w-fit rounded-full bg-bg-alt px-3 py-1 text-sm font-semibold uppercase tracking-wide text-secondary">
        {post.category}
      </span>
      <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
      <p className="text-base leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-base font-semibold text-accent group-hover:gap-2 transition-all">
        Read more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
