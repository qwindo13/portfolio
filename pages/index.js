import MainLayout from '@/layouts/MainLayout';
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects/Projects"
import Skills from "@/components/Sections/Skills"
import About from "@/components/Sections/About"

export default function Home() {

  return (
    <>
      <MainLayout
        title="Miguel Ferreira - Frontend Dev"
        className="relative main-container h-screen overflow-hidden"
      >
        <Hero />
        <Projects />
        <Skills />
        <About />
      </MainLayout>
    </>
  )
}
