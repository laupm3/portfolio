import Container from '../layout/Container'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 border-t border-border/40">
      <Container>
        <h2 className="text-foreground mb-12">
          Proyectos
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tech, href, repo }) => (
            <li key={title}>
              <article className="h-full flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors">
                <h3 className="text-card-foreground text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-accent-foreground bg-accent px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={href}
                    className="text-sm font-medium text-primary hover:underline transition-colors"
                  >
                    Ver proyecto →
                  </a>
                  <a
                    href={repo}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
