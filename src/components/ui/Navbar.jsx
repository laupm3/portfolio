import { useState } from 'react'
import Container from '../layout/Container'
import { profile } from '../../data/profile'
import ThemeToggle from './ThemeToggle'

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
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-[4.25rem]" aria-label="Navegación principal">
          {/* Logo / Nombre */}
          <a
            href="#"
            className="text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm"
          >
            {profile.name}
          </a>

          {/* Links - visible en desktop */}
          <ul className="hidden sm:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:text-foreground rounded-sm"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                aria-label="Contacto"
              >
                ✉
              </a>
            </li>
          </ul>

          {/* Botón hamburger - solo móvil */}
          <div className="flex items-center gap-4 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 -m-2 rounded-lg text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
          </div>
        </nav>
      </Container>

      {/* Panel móvil desplegable */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-border bg-background py-4 px-4">
          <ul className="flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-2.5 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center gap-2 py-2.5 px-3 text-foreground hover:bg-accent rounded-lg text-sm font-medium transition-colors"
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
