import Container from '../layout/Container'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80">
      <Container>
      <h2 className="text-slate-100 mb-12">
        Proyectos
      </h2>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tech, href, repo }) => (
          <li key={title}>
            <article className="h-full flex flex-col rounded-xl border border-slate-700/80 bg-slate-800/40 p-6 hover:border-slate-600/80 transition-colors">
              <h3 className="text-slate-100 text-xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={href}
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Ver proyecto →
                </a>
                <a
                  href={repo}
                  className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
                >
                  Repo
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
      </Container>
    </section>
  )
}
