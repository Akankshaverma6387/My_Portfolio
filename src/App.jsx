import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Skills from './components/Skills'

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Achievements/>
    </>
  )
}

export default App
