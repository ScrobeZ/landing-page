import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-150 w-full flex-col items-center justify-center bg-black px-1 text-center text-orange-600 md:h-screen md:px-0 lg:w-4/5 lg:flex-row lg:justify-evenly"
    >
      <div className="min-w-75 lg:pr-2 xl:px-0">
        <h1 className="mb-4 text-2xl font-bold md:text-5xl">
          Hola, soy Jorge L. Nieto.
        </h1>
        <p className="mb-6 max-w-150 text-gray-300 md:text-xl">
          Ingeniero en Sistemas | Frontend con React & Flutter | Interés en
          Fullstack (Spring Boot / .NET Core).
        </p>
      </div>
      <div className="max-w-50 min-w-52 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 p-[3px] md:max-w-1/3">
        <img
          src="/assets/foto-graduacion-cuadro.jpeg"
          alt="Jorge L. Nieto"
          className="aspect-square h-full w-full rounded-lg"
        />
      </div>
    </section>
  );
}
