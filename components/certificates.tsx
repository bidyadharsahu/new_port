"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Certificates() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  const content = {
    en: {
      title: "Certificates",
      description: "Professional certifications and achievements",
      viewCertificate: "View Certificate",
    },
    od: {
      title: "ସାର୍ଟିଫିକେଟ୍",
      description: "ପେଶାଦାର ପ୍ରମାଣପତ୍ର ଏବଂ ସଫଳତା",
      viewCertificate: "ସାର୍ଟିଫିକେଟ୍ ଦେଖନ୍ତୁ",
    },
  }

  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://example.com/certificate/1",
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      issuer: "Coursera",
      date: "2021",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://example.com/certificate/2",
    },
    {
      id: 3,
      title: "Advanced JavaScript Concepts",
      issuer: "freeCodeCamp",
      date: "2021",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://example.com/certificate/3",
    },
    {
      id: 4,
      title: "MongoDB Database Administration",
      issuer: "MongoDB University",
      date: "2020",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://example.com/certificate/4",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-slate-800 min-h-screen">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border ${
                  theme === "light" ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
                }`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900 dark:text-white">{certificate.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {certificate.issuer} • {certificate.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {content[language].viewCertificate}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

