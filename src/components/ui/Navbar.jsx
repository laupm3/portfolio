import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../layout/Container'
import { profile } from '../../data/profile'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-20" aria-label="Navegación principal">
          {/* Logo / Nombre - Cyber Style */}
          <a
            href="#"
            className="text-xl font-bold tracking-tighter text-foreground group"
          >
            <span className="text-primary">&lt;</span>
            {profile.name.split(' ')[0]}
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Links - visible en desktop */}
          <ul className="hidden sm:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wide hover:underline decoration-primary decoration-2 underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <div className="w-px h-6 bg-border mx-2"></div>
            </li>
            <li>
              <LanguageToggle />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Botón hamburger - solo móvil */}
          <div className="flex items-center gap-3 sm:hidden">
            <LanguageToggle />
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
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg text-[15px] font-medium transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
