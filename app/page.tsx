"use client"

import { useEffect, useRef } from "react"
import LoadingAnimation from "@/components/loading-animation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import SideNavigation from "@/components/side-navigation"
import LanguageSwitcher from "@/components/language-switcher"
import ThemeToggle from "@/components/theme-toggle"
import ResumeDownload from "@/components/resume-download"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificatesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update URL without full page reload
            const id = entry.target.id
            if (id) {
              window.history.pushState(null, "", `#${id}`)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observe all section refs
    if (aboutRef.current) observer.observe(aboutRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)
    if (certificatesRef.current) observer.observe(certificatesRef.current)
    if (contactRef.current) observer.observe(contactRef.current)

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current)
      if (skillsRef.current) observer.unobserve(skillsRef.current)
      if (projectsRef.current) observer.unobserve(projectsRef.current)
      if (certificatesRef.current) observer.unobserve(certificatesRef.current)
      if (contactRef.current) observer.unobserve(contactRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ResumeDownload />
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <SideNavigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="certificates" ref={certificatesRef}>
        <Certificates />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </main>
  )
}

