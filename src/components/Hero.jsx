import React from 'react'

export default function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-500 to-gray-800 text-orange-600 px-4">
            <h1 className="text-5xl font-bold mb-4">Hola, soy Jorge L. Nieto</h1>
            <p className="text-xl mb-6">Desarrollador Frontend | React | Flutter</p>
            <a href="#projects" className="bg-white text-blue-700 px-6 py-2 rounded hover:bg-blue-200 transition">
                Ver proyectos
            </a>
        </section>
    )
}
