"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", label: "English" },
    { code: "od", label: "ଓଡ଼ିଆ" },
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className={`${
          theme === "light"
            ? "bg-slate-200 border-slate-300 text-slate-900 hover:bg-slate-300"
            : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4 mr-2" />
        {language === "en" ? "English" : "ଓଡ଼ିଆ"}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 right-0 rounded-lg shadow-lg overflow-hidden z-50 ${
              theme === "light"
                ? "bg-white border border-slate-200"
                : "bg-slate-800 border border-white/20 backdrop-blur-sm"
            }`}
          >
            <div className="p-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  whileHover={{
                    backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm ${
                    language === lang.code
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : theme === "light"
                        ? "text-slate-900"
                        : "text-white"
                  }`}
                  onClick={() => {
                    setLanguage(lang.code as "en" | "od")
                    setIsOpen(false)
                  }}
                >
                  {lang.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

