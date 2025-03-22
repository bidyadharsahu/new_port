"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "next-themes"

export default function ResumeDownload() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  const content = {
    en: "Resume",
    od: "ରିଜ୍ୟୁମ୍",
  }

  const handleDownload = () => {
    // In a real implementation, this would be the path to your actual resume
    const resumeUrl = "/resume.pdf"

    // Create a link element
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Bidyadhar_Sahu_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`${
        theme === "light"
          ? "bg-slate-200 border-slate-300 text-slate-900 hover:bg-slate-300"
          : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
      }`}
      onClick={handleDownload}
    >
      <Download className="h-4 w-4 mr-2" />
      {content[language]}
    </Button>
  )
}

