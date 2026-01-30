import { useState } from 'react'
import Container from '../layout/Container'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-[4.25rem]" aria-label="Navegación principal">
          {/* Logo / Nombre */}
          <a
            href="#"
            className="text-slate-100 font-semibold text-lg tracking-tight hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950 rounded-sm"
          >
            Laura Prieto
          </a>

          {/* Links - visible en desktop */}
          <ul className="hidden sm:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium focus:outline-none focus:text-slate-100 rounded-sm"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-accent hover:text-accent-hover transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950 rounded-sm"
                aria-label="Contacto"
              >
                ✉
              </a>
            </li>
          </ul>

          {/* Botón hamburger - solo móvil */}
          <button
            type="button"
            className="sm:hidden p-2 -m-2 rounded-lg text-slate-100 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            {menuOpen ? (
              <span className="relative flex w-6 h-6" aria-hidden>
                <span className="absolute inset-0 m-auto w-5 h-0.5 bg-current rounded rotate-45" />
                <span className="absolute inset-0 m-auto w-5 h-0.5 bg-current rounded -rotate-45" />
              </span>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-current rounded" />
                <span className="block w-6 h-0.5 bg-current rounded mt-1.5" />
                <span className="block w-6 h-0.5 bg-current rounded mt-1.5" />
              </>
            )}
          </button>
        </nav>
      </Container>

      {/* Panel móvil desplegable */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-slate-800/80 bg-slate-950/95 py-4 px-4">
          <ul className="flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-2.5 px-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center gap-2 py-2.5 px-3 text-accent hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors"
              >
                ✉ Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
