import { useState } from "react";
import GithubIcon from "/src/assets/github.svg?react";
import LinkedInIcon from "/src/assets/linkedin.svg?react";

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
        <ul className="flex min-w-20 justify-between">
          <li>
            <a
              href="https://github.com/ScrobeZ"
              target="_blank"
              className="text-white transition hover:text-orange-500"
            >
              <GithubIcon className="h-9 w-9 fill-current" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jorge-l-nieto-9929a4230"
              target="_blank"
              className="text-white transition hover:text-orange-500"
            >
              <LinkedInIcon className="h-9 w-9 fill-current" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
