import React from 'react'


export default function Header() {
    return (
        <header className="fixed bg-black w-full">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <ul className="flex gap-6 text-2xl">
                    <li><a href="#hero" >Inicio</a></li>
                    <li><a href="#about" >Sobre mí</a></li>
                </ul>
            </nav>
        </header>
    )
}