"use client"

export function IntroSection({
  sectionRef,
}: {
  sectionRef: (el: HTMLElement | null) => void
}) {
  return (
    <header id="intro" ref={sectionRef} className="min-h-screen flex items-center opacity-0">
      <div className="grid lg:grid-cols-5 gap-16 w-full">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
            <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
              Avinash
              <br />
              <span className="text-muted-foreground">Ganore</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Result Driven Software Developer skilled in
              <span className="text-foreground"> {" "}
                    Full-Stack Web Development{" "}</span>,<span className="text-foreground">{" "}
                    Creative Development{" "}</span>and expertise in building
              <span className="text-foreground"> {" "}
                    Scalable Web Solutions</span>.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div>Pune, Maharashtra</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-foreground">Electronics and Telecommunications Engineeing Student</div>
              <div className="text-muted-foreground">@ Savitribai Phule Pune University</div>
              <div className="text-xs text-muted-foreground">2023 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {["React",
                    "TypeScript",
                    "Next.js",
                    "node.js",
                    "MERN Stack",
                    "JavaScript",
                    "Java",
                    "MongoDB",
                    "GSAP",
                    "Framer"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
