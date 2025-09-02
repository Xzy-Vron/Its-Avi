"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

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
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const post = {
    title: "The Future of Web Development",
    excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
    date: "Dec 2024",
    readTime: "5 min",
  }

  return (
    <main className="max-w-4xl mx-auto px-8 lg:px-16">
      <section id="thoughts" ref={(el) => {sectionsRef.current[2] = el}} className="min-h-screen py-32 opacity-0">
        <div className="space-y-16">
          <h2 className="text-4xl font-light">Recent Thoughts</h2>

          <div className="gap-8">
            <article className="group p-8 transition-all duration-500 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          </div>

          {/* Add a full-width bottom row with a right-aligned "Go back" link styled like the home page "Read more" with arrow */}
          <div className="col-span-full w-full border-b border-border/50 hover:border-border">
            <div className="flex justify-start">
              <Link
                href="/blogs"
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
          {/* End of change */}
        </div>
      </section>
    </main>
  )
}
