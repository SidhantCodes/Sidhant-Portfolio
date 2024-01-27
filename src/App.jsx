import React from 'react'
import { Hero, Navbar, Socials, Projects, Skills, Contact } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Socials/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
