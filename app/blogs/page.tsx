"use client"

import PageLoader from "@/components/page-loader"
import { formatBlogDate } from "@/lib/format-blog-date"
import axios from "axios"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Blog {
  _id: string
  title: string
  subtitle: string
  createdAt: string
  readTime: string
}

export default function page() {
  // const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const [data, setData] = useState<Blog[] | null>(null)
  const [loading, setLoading] = useState(true)

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

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", isDark)
  // }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [loading])

  // const toggleTheme = () => {
  //   setIsDark(!isDark)
  // }

  if(loading) return <PageLoader />
  if(!data) return <PageLoader />

  return (
    <main className="max-w-4xl mx-auto px-8 lg:px-16">
      <section id="thoughts" ref={(el) => {sectionsRef.current[2] = el}} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Blogs</h2>

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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
              <div className="col-span-full w-full border-b border-border/50 hover:border-border flex items-center justify-start">
                <div className="flex justify-start">
              <Link
                href="/"
                aria-label="Go back to blogs list"
                className="group flex items-center gap-2 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13 5l-5 5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Go back</span>
              </Link>
            </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
