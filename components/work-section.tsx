"use client"

interface Experience {
  year : string
  roleName : string
  link? : string
  isDeployed: {
    status : boolean,
    message? : string,
    statusColor? : string
  }
  companySubtitle : string
  description : string
  tech : string[]
}

export function WorkSection({
  sectionRef,
}: {
  sectionRef: (el: HTMLElement | null) => void
}) {

  const experiences : Experience[] = [
                {
                  year: "Present",
                  roleName: "Should I Bunk?",
                  link: "https://github.com/Xzy-Vron/bunc",
                  companySubtitle: "Full Stack MERN Project",
                  description:
                    "Creating a web application that provide students with detailed analysis of their attendance and lecture summaries provided by students, for students.",
                  isDeployed: {
                    status: false,
                    message: "Not yet Deployed",
                    statusColor: "bg-red-500"
                  },
                  tech: ["React", "Express", "MongoDB", "Node.js", "Recharts"],
                },
                {
                  year: "2025",
                  roleName: "Whispr",
                  link: "https://whispr.vercel.app/",
                  companySubtitle: "Full Stack Next.js Project",
                  description:
                    "Built a Full-stack web application that enables users to share and receive honest, anonymous feedback through secure links. Built with modern web technologies, intuitive design, and seamless user experience.",
                  isDeployed: {
                    status: true,
                  },
                  tech: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "MongoDB",
                    "NextAuth",
                    "Resend",
                    "Shadcn"
                  ],
                },
                {
                  year: "2025",
                  roleName: "CamScape",
                  link: "https://camp-scape.vercel.app/",
                  companySubtitle: "Backend Project",
                  description:
                    "Built a web application where users can explore, create, and review campgrounds. Implemented user authentication, CRUD operations, and interactive map integration to deliver a real-world marketplace experience.",
                  isDeployed: {
                    status: true,
                  },
                  tech: [
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                    "REST API",
                    "Maptiler",
                    "Passport",
                  ],
                },
                {
                  year: "2024",
                  roleName: "Creative Portfolio",
                  link: "https://xzy-vron.github.io/creative-portfolio-demo/",
                  companySubtitle: "Frontend UI/UX Design",
                  description:
                    "Developed an animated portfolio design.",
                  isDeployed: {
                    status: true,
                  },
                  tech: ["GSAP", "JavaScript"],
                },
              ]
  return (
    <section id="work" ref={sectionRef} className="min-h-screen py-32 opacity-0">
      <div className="space-y-16">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-light">Experience</h2>
          <div className="text-sm text-muted-foreground font-mono">2023 — 2025</div>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <a href={experience.link} key={index}>
            <div
              className="group grid lg:grid-cols-12 gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {experience.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-xl font-medium">{experience.roleName}</h3>
                  <div className="text-muted-foreground">{experience.companySubtitle}{" "}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{experience.description}</p>
                {!experience.isDeployed.status && (
                          <>
                            <div className="flex items-center justify-start pt-1 gap-2">
                              <div className={`w-2 h-2 ${experience.isDeployed.statusColor} rounded-full animate-pulse`}></div>
                              <span className="text-xs text-muted-foreground">
                                {experience.isDeployed.message}
                              </span>
                            </div>
                          </>
                        )}
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </section>
  )
}
