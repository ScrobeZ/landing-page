import React from 'react'


export default function Header() {
    return (
        <header className="fixed bg-white w-full">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
                <ul className="flex gap-6 text-sm">
                    <li><a href="#hero" className="hover:text-blue-500">Inicio</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
                    <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
                </ul>
            </nav>
        </header>
    )
}