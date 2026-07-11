import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/config/home-data";

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Module 12"
          title="Blog"
          description="Insights on product development, design, and operational scale."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {post.publishedAt} · {post.readTime}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
