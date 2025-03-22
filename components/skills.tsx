"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function Skills() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  const content = {
    en: {
      title: "Skills & Technologies",
      description: "These are the technologies I've been working with recently",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools & Others",
      },
    },
    od: {
      title: "ଦକ୍ଷତା ଏବଂ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା",
      description: "ଏଗୁଡ଼ିକ ହେଉଛି ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଯାହା ସହିତ ମୁଁ ସମ୍ପ୍ରତି କାମ କରୁଛି",
      categories: {
        frontend: "ଫ୍ରଣ୍ଟଏଣ୍ଡ",
        backend: "ବ୍ୟାକଏଣ୍ଡ",
        database: "ଡାଟାବେସ୍",
        tools: "ଟୁଲ୍ସ ଏବଂ ଅନ୍ୟାନ୍ୟ",
      },
    },
  }

  const skills = {
    frontend: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎸" },
      { name: "PHP", icon: "🐘" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
    ],
    tools: [
      { name: "Git", icon: "🔄" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Figma", icon: "🎨" },
      { name: "VS Code", icon: "💻" },
    ],
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-800 min-h-screen flex items-center">
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

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card
                className={`p-6 rounded-xl shadow-lg border-none overflow-hidden ${
                  theme === "light" ? "bg-slate-50" : "bg-slate-900"
                }`}
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                    {content[language].categories[category]}
                  </h3>

                  {/* Creative background element */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
                </div>

                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        className="group"
                      >
                        <Badge
                          className={`px-4 py-3 text-base shadow-sm transition-all duration-300 ${
                            theme === "light"
                              ? "bg-white hover:bg-blue-50 border border-slate-200 text-slate-800"
                              : "bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200"
                          }`}
                        >
                          <span className="mr-2 text-xl group-hover:scale-125 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

