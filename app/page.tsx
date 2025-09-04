"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react"
import { IntroSection } from "@/components/intro-section"
import { ExperienceSection } from "@/components/experience-section"
import { BlogsSection } from "@/components/blogs-section"
import { ResumeSection } from "@/components/resume-section"
import { ConnectSection } from "@/components/connect-section"
import PageLoader from "@/components/page-loader"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const [introLoading, setIntroLoading] = useState(true)
  const [experienceLoading, setExperienceLoading] = useState(true)
  const [blogsLoading, setBlogsLoading] = useState(true)
  const [connectLoading, setConnectLoading] = useState(true)

  const sectionIds = useMemo(() => ["intro", "work", "thoughts", "Resume", "connect"], [])

  const sectionRefCallbacks = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (el: HTMLElement | null) => {
        sectionsRef.current[i] = el
      }),
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            const id = (entry.target as HTMLElement).id
            setActiveSection((prev) => (prev === id ? prev : id))
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [introLoading, experienceLoading, blogsLoading, connectLoading,])

  const onNavClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])


  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sectionIds.map((section) => (
            <button
              key={section}
              onClick={() => onNavClick(section)}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <IntroSection setLoading={setIntroLoading} sectionRef={sectionRefCallbacks[0]} />
        <ExperienceSection setLoading={setExperienceLoading} sectionRef={sectionRefCallbacks[1]} />
        <BlogsSection setLoading={setBlogsLoading} sectionRef={sectionRefCallbacks[2]} />
        <ResumeSection  sectionRef={sectionRefCallbacks[3]} />
        <ConnectSection setLoading={setConnectLoading} sectionRef={sectionRefCallbacks[4]} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
