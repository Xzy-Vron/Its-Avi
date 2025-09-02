"use client"

import Link from "next/link"

export function BlogsSection({
  sectionRef,
}: {
  sectionRef: (el: HTMLElement | null) => void
}) {
  return (
    <section id="thoughts" ref={sectionRef} className="min-h-screen py-32 opacity-0">
      <div className="space-y-16">
        <h2 className="text-4xl font-light">Recent Thoughts</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              title: "The Future of Web Development",
              excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
              date: "Dec 2024",
              readTime: "5 min",
            },
            {
              title: "Design Systems at Scale",
              excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
              date: "Nov 2024",
              readTime: "8 min",
            },
            {
              title: "Performance-First Development",
              excerpt: "Why performance should be a first-class citizen in your development workflow.",
              date: "Oct 2024",
              readTime: "6 min",
            },
            {
              title: "The Art of Code Review",
              excerpt: "Building better software through thoughtful and constructive code reviews.",
              date: "Sep 2024",
              readTime: "4 min",
            },
          ].map((post, index) => (
            <article
              key={index}
              className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
          <div className="col-span-full w-full border-b border-border/50 hover:border-border flex items-center justify-end">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Read more blog posts"
            >
              <span>View all</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
