import { useEffect, useState } from "react";

export default function CarruselDeTecnologias() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    fetch("/data/tecnologias.json")
      .then(res => res.json())
      .then(setTecnologias)
      .catch(err => console.error("Error:", err));
  }, []);

  if (!tecnologias.length) return null;

  return (
    <div className="marquee-container flex">
      <div className="fade-edge left" />
      {[0, 1].map((_, row) => (
        <div
          key={row}
          className={`marquee-row${row === 1 ? ' delay' : ''}`}
        >
          {tecnologias.map((tec, i) => (
            <div
              key={i}
              className="flex-shrink-0 content-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl shadow-md p-4 w-36 h-36 text-center transition hover:scale-105"
            >
              <img src={tec.logo} alt={tec.nombre} className="w-14 h-14 mx-auto mb-2" />
              <p className="text-sm font-semibold">{tec.nombre}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="fade-edge right" />
    </div>
  );
}
