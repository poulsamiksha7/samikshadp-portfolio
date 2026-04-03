"use client"

import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "./components/project-card"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const projects = [
  {
     title: "AI Video Maker",
     description: "AI-powered video generator that converts images and audio into dynamic videos with automatic captions.",
     tags: ["Flask", "MySQL", "Whisper", "MoviePy", "JavaScript"],
     imageUrl: "/projects/portfolio(2).png",
     projectUrl: "https://github.com/poulsamiksha7/ai_video_maker.git",
  },
  {
    title: "E-Pharmacy Website",
    description:
      "Developed a full-stack e-commerce pharmacy platform with secure authentication, product catalog management, and end-to-end order processing.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "SQL"],
    imageUrl: "/projects/pharmacy.png",
    projectUrl: "https://github.com/poulsamiksha7/helPharma.git",
  },
  {
    title: "21 Days 21 Python Projects",
    description:
      "Engineered 21 Python applications including ATM simulation, authentication modules, and recommendation systems demonstrating backend logic design.",
    tags: ["Python", "OOP", "File Handling", "GitHub"],
    imageUrl: "/projects/python.png",
    projectUrl:
      "https://github.com/poulsamiksha7/21_Days_21_Python_Projects.git",
  },
  {
    title: "MealsPoint – Food Ordering Web App",
    description:
      "Built a dynamic meal ordering experience with interactive menu selection, real-time order tracking concepts, and a responsive, user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript", "Backend Workflow Logic"],
    imageUrl: "/projects/mealspoint.png",
    projectUrl:
      "https://github.com/poulsamiksha7/HTML-CSS-Websites.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Crafted a responsive portfolio with a PHP + MySQL backend via XAMPP for dynamic project showcase and content management.",
    tags: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
    imageUrl: "/projects/portfolio.png",
    projectUrl:
      "https://github.com/poulsamiksha7/HTML-CSS-Websites/tree/main/Personal%20Portfolio%20Websites",
  },
]

const sectionFade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function PortfolioPage() {
  return (
    <main
      className={`${inter.className} min-h-screen w-full`}
      style={{ backgroundColor: "#F9F8F6", color: "#1A1A1A" }}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-10 sm:px-6 md:px-8 md:py-14">

        {/* Prologue */}
        <motion.section
          variants={sectionFade}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 border-b border-[rgba(0,0,0,0.08)] pb-10 md:mb-16 md:pb-14"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.3em]"
            style={{ color: "rgba(26,26,26,0.6)" }}
          >
            Prologue
          </p>

          <h1
            className={`${playfair.className} text-3xl leading-tight sm:text-4xl md:text-[2.75rem]`}
          >
            Samiksha Poul
          </h1>

          <p
            className="mt-2 text-sm sm:text-base"
            style={{ color: "rgba(26,26,26,0.8)" }}
          >
            Python Backend Developer | MCA Student
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

            <a
              href="https://github.com/poulsamiksha7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-[rgba(26,26,26,0.04)]"
              style={{ borderColor: "rgba(26,26,26,0.18)" }}
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>

            <a
              href="https://linkedin.com/in/samiksha-poul"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "#1A1A1A",
                borderColor: "#1A1A1A",
                color: "#F9F8F6",
              }}
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>

            <a
              href="mailto:samikshapoul@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-[rgba(26,26,26,0.04)]"
              style={{ borderColor: "rgba(26,26,26,0.18)" }}
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="/Samiksha_Poul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-[rgba(26,26,26,0.04)]"
              style={{ borderColor: "rgba(26,26,26,0.18)", color: "#1A1A1A" }}
            >
              View Resume
            </a>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={sectionFade}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mb-12 border-b border-[rgba(0,0,0,0.06)] pb-10 md:mb-16 md:pb-14"
        >
          <h2 className={`${playfair.className} text-xl sm:text-2xl mb-6`}>
            Selected Projects
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          variants={sectionFade}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mb-10 md:mb-14"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.3em]"
            style={{ color: "rgba(26,26,26,0.6)" }}
          >
            About the Author
          </p>

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-start">

            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative aspect-[3/4] w-40 sm:w-48 md:w-56 overflow-hidden rounded-sm">
                <Image
                  src="/projects/samiksha.jpg"
                  alt="Samiksha Poul"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-sm leading-relaxed">

              <p>
                I am pursuing a Master of Computer Applications with a strong
                focus on Python backend development, databases, and clean
                software architecture.
              </p>

              <p>
                I am actively seeking a Python Developer internship where I can
                contribute to production-grade systems while continuing to
                sharpen my problem-solving and design skills.
              </p>

            </div>

          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t pt-6 text-sm">

          <p>
            Open to Python backend and software engineering internship
            opportunities.
          </p>

        </footer>

      </div>
    </main>
  )
}
