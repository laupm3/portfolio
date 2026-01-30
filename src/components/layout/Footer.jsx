import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 py-8 mt-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {year} Laura Prieto</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/laupm3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/laura-prieto-merino"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
