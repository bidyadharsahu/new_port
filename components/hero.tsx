"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Hero() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Bidyadhar Sahu",
      title: "Full Stack Developer",
      description: "I build exceptional digital experiences that make an impact",
      cta: "View My Work",
    },
    od: {
      greeting: "ନମସ୍କାର, ମୁଁ",
      name: "ବିଦ୍ୟାଧର ସାହୁ",
      title: "ଫୁଲ୍ ଷ୍ଟାକ୍ ଡେଭେଲପର୍",
      description: "ମୁଁ ଅସାଧାରଣ ଡିଜିଟାଲ୍ ଅନୁଭୂତି ତିଆରି କରେ ଯାହା ପ୍ରଭାବ ପକାଏ",
      cta: "ମୋର କାମ ଦେଖନ୍ତୁ",
    },
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-white dark:from-black dark:to-slate-900 text-slate-900 dark:text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Interactive light effect following cursor */}
      {!isMobile && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      )}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-blue-600 dark:text-blue-400"
          >
            {content[language].greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400"
          >
            {content[language].name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400"
          >
            {content[language].title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-700 dark:text-slate-300"
          >
            {content[language].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg"
              onClick={() => scrollToSection("projects")}
            >
              {content[language].cta}
            </Button>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://github.com/bidyadharsahu" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 dark:border-white/20 bg-white/5 backdrop-blur-sm"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/bidyadharsahu" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 dark:border-white/20 bg-white/5 backdrop-blur-sm"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/bidyadharsahu" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 dark:border-white/20 bg-white/5 backdrop-blur-sm"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-700 dark:text-white"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="h-8 w-8" />
        </Button>
      </motion.div>
    </section>
  )
}

