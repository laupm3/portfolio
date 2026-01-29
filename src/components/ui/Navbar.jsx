import Container from '../layout/Container'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
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

          {/* Menú móvil */}
          <div className="flex sm:hidden items-center gap-3">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-slate-100 text-sm font-medium py-2 px-1"
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="text-accent p-2 -m-2 rounded-sm hover:text-accent-hover" aria-label="Contacto">
              ✉
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
