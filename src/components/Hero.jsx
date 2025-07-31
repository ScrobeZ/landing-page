import React from 'react'

export default function Hero() {
    return (
        <section id="hero" className="h-screen w-3/5 flex justify-between items-center text-center bg-black text-orange-600 px-4">
            <div>
                <h1 className="text-5xl font-bold mb-4">Hola, soy Jorge L. Nieto</h1>
                <p className="text-xl text-gray-300 mb-6 w-150"> Ingeniero en Sistemas | Frontend con React & Flutter | Interés en Fullstack (Spring Boot / .NET Core).</p>
            </div>
            <div className="p-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl">
                <img
                    src="/assets/foto-graduacion-cuadro.jpeg"
                    alt="Jorge L. Nieto"
                    className="w-100 h-100 oobject-cover rounded-lg"
                />
            </div>
        </section>
    )
}
