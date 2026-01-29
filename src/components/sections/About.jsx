import Container from '../layout/Container'
export default function About() {
  const skills = [
    'JavaScript',
    'React',
    'Tailwind CSS',
    'HTML & CSS',
    'Vite',
    'Git',
  ]

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80">
      <Container>
      <div className="max-w-2xl">
        <h2 className="text-slate-100 mb-6">
          Sobre mí
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
          Me dedico al desarrollo frontend con foco en interfaces claras, accesibles y rápidas.
          Me gusta aprender nuevas herramientas y trabajar en equipo para llevar ideas al producto.
        </p>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            Disfruto transformar diseños en interfaces funcionales, optimizadas y accesibles, y seguir aprendiendo nuevas herramientas del ecosistema frontend.
        </p>
        <div>
          <h3 className="text-slate-100 text-lg font-semibold mb-4">
            Tecnologías
          </h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-block px-4 py-2 rounded-lg bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-700/80">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Container>
    </section>
  )
}
