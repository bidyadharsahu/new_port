import About from "@/components/about"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import ResumeDownload from "@/components/resume-download"
import LoadingAnimation from "@/components/loading-animation"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <LoadingAnimation />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSwitcher />
        <ResumeDownload />
      </div>
      <About />
      <Footer />
    </main>
  )
}

