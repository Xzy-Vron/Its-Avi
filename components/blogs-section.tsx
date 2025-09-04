"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatBlogDate } from "@/lib/format-blog-date"
import PageLoader from "./page-loader"


interface Blog {
  _id: string
  title: string
  subtitle: string
  createdAt: string
  readTime: string
}

export function BlogsSection({
  sectionRef,
  setLoading
}: {
  sectionRef: (el: HTMLElement | null) => void
  setLoading: (loading: boolean) => void
}) {

  const [data, setData] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/user-blogs");
        const data = response.data.blogs;
        setData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }finally {
        setLoading(false)
      }
    }
    fetchBlogs();
  }, []);

  if (!data) return <PageLoader />


  return (
    <section id="thoughts" ref={sectionRef} className="min-h-screen py-32 opacity-0">
      <div className="space-y-16">
        <h2 className="text-4xl font-light">Recent Blogs</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {data.map((blog, index) => (
            <Link href={`/blogs/${blog._id}`} key={index}>
            <article
              className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{formatBlogDate(blog.createdAt)}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{blog.subtitle}</p>

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
            </Link>
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
