

export const userData = {
  name: "Avinash Ganore",
  email: "avinashganore@gmail.com",
  availability: {
    message: "Available for Work",
    color: "bg-green-500",
  },
  userlocation: "Pune, Maharashtra",
  technology_skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Java",
    "MongoDB",
    "GSAP",
    "Framer",
  ],

  experiences: [
    {
        year: "Present",
        role_Name: "Should I Bunk?",
        link: "https://github.com/Xzy-Vron/bunc",
        company_Subtitle: "Full Stack MERN Project",
        description:
          "Creating a web application that provide students with detailed analysis of their attendance and lecture summaries provided by students, for students.",
        deployment: {
          status: false,
          message: "Not yet Deployed",
          statusColor: "bg-red-500"
        },
        techUsed: ["React", "Express", "MongoDB", "Node.js", "Recharts"],
      },
      {
        year: "2025",
        role_Name: "Whispr",
        link: "https://whispr.vercel.app/",
        company_Subtitle: "Full Stack Next.js Project",
        description:
          "Built a Full-stack web application that enables users to share and receive honest, anonymous feedback through secure links. Built with modern web technologies, intuitive design, and seamless user experience.",
        deployment: {
          status: true,
        },
        techUsed: [
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
        role_Name: "CampScape",
        link: "https://camp-scape.vercel.app/",
        company_Subtitle: "Backend Project",
        description:
          "Built a web application where users can explore, create, and review campgrounds. Implemented user authentication, CRUD operations, and interactive map integration to deliver a real-world marketplace experience.",
        deployment: {
          status: true,
        },
        techUsed: [
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
        role_Name: "Creative Portfolio",
        link: "https://xzy-vron.github.io/creative-portfolio-demo/",
        company_Subtitle: "Frontend UI/UX Design",
        description:
          "Developed an animated portfolio design.",
        deployment: {
          status: true,
        },
        techUsed: ["GSAP", "JavaScript"],
      },
    ],

  currently: {
    role: "Electronics and Telecommunication Student",
    organisation: "Savitribai Phule Pune University",
  },

  socials: [
    { name: "GitHub", handle: "@Xzy-Vron", url: "https://github.com/Xzy-Vron" },
    { name: "Twitter", handle: "@XzyVron", url: "https://x.com/XzyVron" },
    { name: "LinkedIn", handle: "avinash-ganore", url: "https://www.linkedin.com/in/avinash-ganore/" },
    { name: "WhatsApp", handle: "+91 9284652931", url: "https://wa.me/9284652931" },
  ],

  blogs: [], // will be populated later
};
