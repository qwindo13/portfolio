import MainLayout from '@/layouts/MainLayout';
import { ModalProvider } from '@/context/ModalContext';
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects/Projects"
import Skills from "@/components/Sections/Skills"
import About from "@/components/Sections/About"

export default function Home() {

  return (

    <MainLayout
      title="Miguel Ferreira - Frontend Dev"
      className="relative main-container h-screen overflow-hidden"
    >
      <Hero />
      <Projects />
      <Skills />
      <About />
      <div className="fixed fill w-1/1 h-1/1  user-select-none pointer-events-none"><canvas id="webgl" data-engine="three.js r147" width="1920" height="945" ></canvas></div>
    </MainLayout>
  )
}
