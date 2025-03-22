"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

type Project = {
  id: number
  name: string
  description: string
  description_od: string
  image: string
  technologies: string[]
  github: string
  demo?: string
}

export default function Projects() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const content = {
    en: {
      title: "Projects",
      description: "Check out some of my recent work",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      loading: "Loading projects...",
    },
    od: {
      title: "ପ୍ରୋଜେକ୍ଟ",
      description: "ମୋର କିଛି ସାମ୍ପ୍ରତିକ କାମ ଦେଖନ୍ତୁ",
      viewCode: "କୋଡ୍ ଦେଖନ୍ତୁ",
      liveDemo: "ଲାଇଭ୍ ଡେମୋ",
      loading: "ପ୍ରୋଜେକ୍ଟ ଲୋଡ୍ ହେଉଛି...",
    },
  }

  // Simulating fetching projects from GitHub API
  useEffect(() => {
    // In a real implementation, you would fetch from GitHub API
    // For now, using mock data
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          name: "E-Commerce Platform",
          description:
            "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
          description_od: "ପ୍ରୋଡକ୍ଟ ମ୍ୟାନେଜମେଣ୍ଟ, କାର୍ଟ ଫଙ୍କସନାଲିଟି ଏବଂ ପେମେଣ୍ଟ ଇଣ୍ଟିଗ୍ରେସନ୍ ସହିତ ଏକ ପୂର୍ଣ୍ଣ-ବୈଶିଷ୍ଟ୍ୟଯୁକ୍ତ ଇ-କମର୍ସ ପ୍ଲାଟଫର୍ମ।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          github: "https://github.com/bidyadharsahu/ecommerce-platform",
          demo: "https://ecommerce-demo.example.com",
        },
        {
          id: 2,
          name: "Task Management App",
          description:
            "A collaborative task management application with real-time updates and team collaboration features.",
          description_od: "ରିଅଲ-ଟାଇମ୍ ଅପଡେଟ୍ ଏବଂ ଟିମ୍ ସହଯୋଗ ବୈଶିଷ୍ଟ୍ୟ ସହିତ ଏକ ସହଯୋଗୀ କାର୍ଯ୍ୟ ପରିଚାଳନା ଆପ୍ଲିକେସନ୍।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "Firebase", "Tailwind CSS"],
          github: "https://github.com/bidyadharsahu/task-management",
          demo: "https://task-app-demo.example.com",
        },
        {
          id: 3,
          name: "Portfolio Website",
          description: "A responsive portfolio website showcasing projects and skills with a modern design.",
          description_od: "ଏକ ଆଧୁନିକ ଡିଜାଇନ୍ ସହିତ ପ୍ରୋଜେକ୍ଟ ଏବଂ ଦକ୍ଷତା ପ୍ରଦର୍ଶନ କରୁଥିବା ଏକ ପ୍ରତିକ୍ରିୟାଶୀଳ ପୋର୍ଟଫୋଲିଓ ୱେବସାଇଟ୍।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["React", "Tailwind CSS", "Framer Motion"],
          github: "https://github.com/bidyadharsahu/portfolio",
          demo: "https://bidyadharsahu.tech",
        },
        {
          id: 4,
          name: "Weather Dashboard",
          description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
          description_od: "ଏକ ପାଣିପାଗ ଡ୍ୟାସବୋର୍ଡ ଯାହା ଏକାଧିକ ସ୍ଥାନ ପାଇଁ ସାମ୍ପ୍ରତିକ ଏବଂ ପୂର୍ବାନୁମାନିତ ପାଣିପାଗ ଡାଟା ପ୍ରଦର୍ଶନ କରେ।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
          github: "https://github.com/bidyadharsahu/weather-dashboard",
          demo: "https://weather-app-demo.example.com",
        },
        {
          id: 5,
          name: "Blog Platform",
          description: "A content management system for creating and managing blog posts with user authentication.",
          description_od: "ବ୍ୟବହାରକାରୀ ପ୍ରମାଣୀକରଣ ସହିତ ବ୍ଲଗ୍ ପୋଷ୍ଟ ସୃଷ୍ଟି ଏବଂ ପରିଚାଳନା ପାଇଁ ଏକ ବିଷୟବସ୍ତୁ ପରିଚାଳନା ପ୍ରଣାଳୀ।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "MongoDB", "NextAuth.js"],
          github: "https://github.com/bidyadharsahu/blog-platform",
          demo: "https://blog-demo.example.com",
        },
        {
          id: 6,
          name: "Chat Application",
          description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
          description_od: "ବ୍ୟକ୍ତିଗତ ମେସେଜିଂ, ଗ୍ରୁପ୍ ଚାଟ୍ ଏବଂ ଫାଇଲ୍ ସେୟାରିଂ କ୍ଷମତା ସହିତ ରିଅଲ୍-ଟାଇମ୍ ଚାଟ୍ ଆପ୍ଲିକେସନ୍।",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Socket.io", "React", "Express", "MongoDB"],
          github: "https://github.com/bidyadharsahu/chat-app",
          demo: "https://chat-app-demo.example.com",
        },
      ])
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{content[language].title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {content[language].description}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        {isLoading ? (
          <div className="text-center text-slate-600 dark:text-slate-400 text-lg">{content[language].loading}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none ${
                    theme === "light" ? "bg-white" : "bg-slate-800"
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{project.name}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {language === "en" ? project.description : project.description_od}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${theme === "light" ? "bg-blue-100 text-blue-800" : "bg-blue-900 text-blue-200"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {content[language].viewCode}
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {content[language].liveDemo}
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

