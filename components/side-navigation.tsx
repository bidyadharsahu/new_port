"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "next-themes"
import { Home, User, Code, Award, Mail } from "lucide-react"

export default function SideNavigation() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    {
      id: "home",
      name: language === "en" ? "Home" : "ହୋମ୍",
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: "about",
      name: language === "en" ? "About" : "ବିଷୟରେ",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "skills",
      name: language === "en" ? "Skills" : "ଦକ୍ଷତା",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "projects",
      name: language === "en" ? "Projects" : "ପ୍ରୋଜେକ୍ଟ",
      icon: <Award className="h-5 w-5" />,
    },
    {
      id: "certificates",
      name: language === "en" ? "Certificates" : "ସାର୍ଟିଫିକେଟ୍",
      icon: <Award className="h-5 w-5" />,
    },
    {
      id: "contact",
      name: language === "en" ? "Contact" : "ଯୋଗାଯୋଗ",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]")
      let currentSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop <= 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleResize()
    handleScroll()

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop Side Navigation */}
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <div
          className={`p-2 rounded-xl ${
            theme === "light"
              ? "bg-white/80 backdrop-blur-lg border border-slate-200"
              : "bg-black/30 backdrop-blur-lg border border-white/10"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? theme === "light"
                      ? "text-white"
                      : "text-white"
                    : theme === "light"
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-white/70 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span
                    className={`${activeSection === item.id ? "opacity-100" : "opacity-0"} max-w-0 overflow-hidden transition-all duration-300 ${activeSection === item.id ? "max-w-32" : ""}`}
                  >
                    {item.name}
                  </span>
                </div>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="desktop-nav-indicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div
          className={`${
            theme === "light"
              ? "bg-white/80 backdrop-blur-lg border-t border-slate-200"
              : "bg-black/30 backdrop-blur-lg border-t border-white/10"
          }`}
        >
          <div className="grid grid-cols-6 gap-1 p-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? theme === "light"
                      ? "text-blue-600"
                      : "text-white"
                    : theme === "light"
                      ? "text-slate-600"
                      : "text-white/70"
                }`}
              >
                {item.icon}
                <span className="text-[10px] mt-1">{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className={`absolute inset-0 rounded-lg ${
                      theme === "light" ? "bg-blue-100" : "bg-gradient-to-r from-blue-600/30 to-purple-600/30"
                    } -z-10`}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

