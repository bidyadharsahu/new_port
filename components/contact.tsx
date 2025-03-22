"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTheme } from "next-themes"

export default function Contact() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const content = {
    en: {
      title: "Contact Me",
      description: "Have a question or want to work together? Feel free to reach out!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      address: "Bhubaneswar, Odisha, India",
      phone: "+91 9876543210",
      email_address: "contact@bidyadharsahu.tech",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
    },
    od: {
      title: "ମୋ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
      description: "ଏକ ପ୍ରଶ୍ନ ଅଛି କିମ୍ବା ଏକାଠି କାମ କରିବାକୁ ଚାହୁଁଛନ୍ତି? ଯୋଗାଯୋଗ କରିବାକୁ ସ୍ୱାଧୀନ ଅନୁଭବ କରନ୍ତୁ!",
      name: "ନାମ",
      email: "ଇମେଲ୍",
      message: "ମେସେଜ୍",
      send: "ମେସେଜ୍ ପଠାନ୍ତୁ",
      address: "ଭୁବନେଶ୍ୱର, ଓଡିଶା, ଭାରତ",
      phone: "+୯୧ ୯୮୭୬୫୪୩୨୧୦",
      email_address: "contact@bidyadharsahu.tech",
      namePlaceholder: "ଆପଣଙ୍କ ନାମ",
      emailPlaceholder: "ଆପଣଙ୍କ ଇମେଲ୍",
      messagePlaceholder: "ଆପଣଙ୍କ ମେସେଜ୍",
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900 min-h-screen">
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                {language === "en" ? "Get in Touch" : "ଯୋଗାଯୋଗରେ ରୁହନ୍ତୁ"}
              </h3>

              <div className="space-y-6">
                <Card className={`border-none shadow-md ${theme === "light" ? "bg-white" : "bg-slate-800"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-blue-900"}`}>
                        <MapPin className={`h-6 w-6 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {language === "en" ? "Address" : "ଠିକଣା"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">{content[language].address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-none shadow-md ${theme === "light" ? "bg-white" : "bg-slate-800"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-blue-900"}`}>
                        <Mail className={`h-6 w-6 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {language === "en" ? "Email" : "ଇମେଲ୍"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">{content[language].email_address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-none shadow-md ${theme === "light" ? "bg-white" : "bg-slate-800"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-blue-900"}`}>
                        <Phone className={`h-6 w-6 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {language === "en" ? "Phone" : "ଫୋନ୍"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">{content[language].phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className={`border-none shadow-lg ${theme === "light" ? "bg-white" : "bg-slate-800"}`}>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                      {content[language].name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={content[language].namePlaceholder}
                      required
                      className={`${theme === "light" ? "border-slate-300" : "border-slate-700"}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                      {content[language].email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={content[language].emailPlaceholder}
                      required
                      className={`${theme === "light" ? "border-slate-300" : "border-slate-700"}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                      {content[language].message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={content[language].messagePlaceholder}
                      required
                      className={`min-h-[150px] ${theme === "light" ? "border-slate-300" : "border-slate-700"}`}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Send className="mr-2 h-4 w-4" />
                    {content[language].send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

