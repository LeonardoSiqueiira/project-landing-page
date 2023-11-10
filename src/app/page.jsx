import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import About from "../components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#d49696] ">
    <NavBar /> 
    <div className="container mt-24 mx-auto px-12 p-4">
     <HeroSection />
     <About />
     <Projects />
     <Contact />
     <Footer/>
     </div>
    </main>
  )
}
