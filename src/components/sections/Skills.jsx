import Container from '../layout/Container'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80">
      <Container>
        <div className="max-w-xl space-y-12">
        <h2 className="text-slate-100 mb-12">
          Skills
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-6"
            >
              <h3 className="text-slate-100 text-lg font-semibold mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:border-accent/40 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </section>
  )
}
