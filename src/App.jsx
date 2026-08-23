import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page-bg relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
