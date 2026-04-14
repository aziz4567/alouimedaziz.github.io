import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'
import  Contact  from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default App
