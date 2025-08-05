import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <button
          className="text-3xl text-orange-600 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <ul
          className={`gap-6 text-xl text-white md:flex ${menuOpen ? "absolute top-16 left-0 flex w-full flex-col bg-black p-4" : "hidden"} md:static md:flex-row`}
        >
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
