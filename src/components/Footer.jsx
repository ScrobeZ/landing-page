import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-6xl mx-auto text-center text-sm">
                <p>© {new Date().getFullYear()} Jorge Luis Nieto Robles. Todos los derechos reservados.</p>
                <div className="flex justify-center gap-6 mt-2">
                    <a href="https://github.com/usuario" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
                    <a href="https://linkedin.com/in/usuario" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
