import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-3/5 items-center justify-between bg-black px-4 text-center text-orange-600"
    >
      <div>
        <h1 className="mb-4 text-5xl font-bold">Hola, soy Jorge L. Nieto</h1>
        <p className="mb-6 w-150 text-xl text-gray-300">
          Ingeniero en Sistemas | Frontend con React & Flutter | Interés en
          Fullstack (Spring Boot / .NET Core).
        </p>
      </div>
      <div className="min-h-52 min-w-52 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 p-[3px]">
        <img
          src="/assets/foto-graduacion-cuadro.jpeg"
          alt="Jorge L. Nieto"
          className="oobject-cover h-100 w-100 rounded-lg"
        />
      </div>
    </section>
  );
}
