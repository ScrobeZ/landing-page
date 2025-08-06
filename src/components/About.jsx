import useInView from "../hooks/useInView";
import CarruselDeTecnologias from "./CarruselDeTecnologias";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className={`animate-delay-600 w-full bg-gradient-to-b from-black from-0% to-gray-800 to-10% px-4 py-16 transition-opacity duration-600 ease-out md:to-15% ${
        inView ? "animate-fade-up" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 bg-gradient-to-r from-orange-600 from-5% to-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
          Sobre mí
        </h2>
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
