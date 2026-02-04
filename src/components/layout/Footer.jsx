import Container from '../layout/Container'
import { profile } from '../../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} {profile.name}. Todos los derechos reservados.
          </p>

          <ul className="flex items-center gap-6">
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-accent transition-colors text-sm"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-500 hover:text-accent transition-colors text-sm"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
