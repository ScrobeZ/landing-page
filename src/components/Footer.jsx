import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 py-6 text-white">
      <div className="mx-auto max-w-6xl text-center text-sm">
        <p>
          © {new Date().getFullYear()} Jorge Luis Nieto Robles. Todos los
          derechos reservados.
        </p>
        <div className="mt-2 flex justify-center gap-6">
          <a
            href="https://github.com/ScrobeZ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jorge-l-nieto-9929a4230"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
