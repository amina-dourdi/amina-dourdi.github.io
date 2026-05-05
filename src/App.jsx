import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${12 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 15}s`,
      size: `${2 + Math.random() * 3}px`,
      opacity: 0.15 + Math.random() * 0.25,
    }))
  }, [])

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow--purple"></div>
      <div className="bg-glow bg-glow--teal"></div>
      <div className="bg-glow bg-glow--pink"></div>
      <Particles />

      {/* Main Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
