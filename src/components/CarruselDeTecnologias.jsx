import { useEffect, useState } from "react";

export default function CarruselDeTecnologias() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    fetch("/data/tecnologias.json")
      .then((res) => res.json())
      .then(setTecnologias)
      .catch((err) => console.error("Error:", err));
  }, []);

  if (!tecnologias.length) return null;

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...tecnologias, ...tecnologias].map((tec, i) => (
          <div
            key={i}
            className="h-36 w-36 flex-shrink-0 content-center rounded-xl bg-white/10 p-4 text-center shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
          >
            <img
              src={tec.logo}
              alt={tec.nombre}
              className="mx-auto mb-2 h-14 w-14"
            />
            <p>{tec.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
