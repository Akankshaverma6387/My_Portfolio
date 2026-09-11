import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Education/>
     <Achievements/>
     <Contact/>
    </>
  )
}

export default App
