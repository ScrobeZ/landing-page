import React from "react";
import CarruselDeTecnologias from "./CarruselDeTecnologias";

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-900 px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">Sobre mí</h2>
        <p className="text-justify text-lg text-gray-200">
          Soy un desarrollador apasionado por crear interfaces intuitivas y
          responsivas. Me especializo en Flutter y React, con un fuerte enfoque
          en el desarrollo frontend, pero también tengo interés en roles
          fullstack. He trabajado en proyectos personales utilizando tecnologías
          backend como Spring Boot y .NET Core, junto con bases de datos como
          MySQL y SQL Server. Me gusta aprender constantemente nuevas
          herramientas y actualmente busco oportunidades para seguir creciendo
          como desarrollador frontend o fullstack.
        </p>
        <br />
        <h3 className="mb-4 text-xl font-semibold">Tecnologías que utilizo</h3>
        <CarruselDeTecnologias />
      </div>
    </section>
  );
}
