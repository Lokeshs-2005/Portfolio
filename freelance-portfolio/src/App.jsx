import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Projects />
              <Process />
              <About />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
