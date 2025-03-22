"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function About() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  const content = {
    en: {
      title: "About Me",
      bio: [
        "I'm a passionate Full Stack Developer with expertise in building modern web applications that solve real-world problems.",
        "With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that are both functional and visually appealing.",
        "I'm constantly learning and exploring new technologies to stay at the forefront of web development.",
      ],
      experience: "Years of Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
    },
    od: {
      title: "ମୋ ବିଷୟରେ",
      bio: [
        "ମୁଁ ଜଣେ ଉତ୍ସାହୀ ଫୁଲ୍ ଷ୍ଟାକ୍ ଡେଭେଲପର୍ ଯିଏ ବାସ୍ତବ-ବିଶ୍ୱ ସମସ୍ୟାଗୁଡ଼ିକୁ ସମାଧାନ କରୁଥିବା ଆଧୁନିକ ୱେବ୍ ଆପ୍ଲିକେସନ୍ ନିର୍ମାଣରେ ବିଶେଷଜ୍ଞତା ରଖେ।",
        "ଫ୍ରଣ୍ଟଏଣ୍ଡ ଏବଂ ବ୍ୟାକଏଣ୍ଡ ଟେକ୍ନୋଲୋଜିରେ ଏକ ଶକ୍ତିଶାଳୀ ଭିତ୍ତି ସହିତ, ମୁଁ ନିର୍ବାଧ ଡିଜିଟାଲ୍ ଅନୁଭୂତି ସୃଷ୍ଟି କରେ ଯାହା କାର୍ଯ୍ୟକ୍ଷମ ଏବଂ ଦୃଶ୍ୟ ଆକର୍ଷଣୀୟ ଅଟେ।",
        "ମୁଁ ନିରନ୍ତର ଶିଖୁଛି ଏବଂ ୱେବ୍ ବିକାଶର ଅଗ୍ରଭାଗରେ ରହିବା ପାଇଁ ନୂତନ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଅନ୍ୱେଷଣ କରୁଛି।",
      ],
      experience: "ବର୍ଷର ଅନୁଭୂତି",
      projects: "ପ୍ରୋଜେକ୍ଟ ସମ୍ପୂର୍ଣ୍ଣ",
      clients: "ଖୁସି ଗ୍ରାହକ",
    },
  }

  const stats = [
    { value: "5+", label: content[language].experience },
    { value: "30+", label: content[language].projects },
    { value: "15+", label: content[language].clients },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">{content[language].title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Bidyadhar Sahu"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600 rounded-full z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              {content[language].bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-3 gap-4 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-white dark:bg-slate-800 shadow-lg"
                  >
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

