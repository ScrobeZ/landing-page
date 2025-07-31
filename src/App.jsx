import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-700 text-gray-900 scroll-smooth w-full'>
      <Header />
      <main className='w-3/5 flex-row items-center justify-self-center'>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
