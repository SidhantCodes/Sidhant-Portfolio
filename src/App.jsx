import React from 'react'
import { Hero, Navbar, Socials, Projects, Skills, Contact, Footer } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Socials/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
