import Container from '../layout/Container'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Nombre */}
          <a
            href="#"
            className="text-slate-100 font-semibold text-lg hover:text-accent transition-colors"
          >
            Laura Prieto
          </a>

          {/* Links - visible en desktop */}
          <ul className="hidden sm:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-accent hover:text-accent-hover transition-colors"
                aria-label="Contacto"
              >
                ✉
              </a>
            </li>
          </ul>

          {/* Menú móvil (hamburger) - por ahora mismo contenido que desktop */}
          <div className="flex sm:hidden items-center gap-4">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-slate-100 text-sm"
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="text-accent" aria-label="Contacto">
              ✉
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
