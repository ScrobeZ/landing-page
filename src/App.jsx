import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-black scroll-smooth w-full'>
      <Header />
      <main className='w-full flex-column items-center justify-items-center'>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
