import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import ResumeDownload from "@/components/resume-download"
import LoadingAnimation from "@/components/loading-animation"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSwitcher />
        <ResumeDownload />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}

