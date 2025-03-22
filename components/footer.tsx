"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Home, User, Code, Award, Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const pathname = usePathname()
  const { language } = useLanguage()

  const navItems = [
    {
      name: language === "en" ? "Home" : "ହୋମ୍",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: language === "en" ? "About" : "ବିଷୟରେ",
      href: "/about",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: language === "en" ? "Skills" : "ଦକ୍ଷତା",
      href: "/skills",
      icon: <Code className="h-5 w-5" />,
    },
    {
      name: language === "en" ? "Projects" : "ପ୍ରୋଜେକ୍ଟ",
      href: "/projects",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: language === "en" ? "Certificates" : "ସାର୍ଟିଫିକେଟ୍",
      href: "/certificates",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: language === "en" ? "Contact" : "ଯୋଗାଯୋଗ",
      href: "/contact",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:block bg-white/10 backdrop-blur-lg rounded-t-xl border border-white/20">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="desktop-nav-indicator"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/bidyadharsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/bidyadharsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/bidyadharsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-t-xl border border-white/20">
          <div className="grid grid-cols-5 gap-1 p-2">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                  pathname === item.href ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="text-[10px] mt-1">{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/30 to-purple-600/30 -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

