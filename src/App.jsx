import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import SidebarTracker from './components/SidebarTracker'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <SidebarTracker />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
