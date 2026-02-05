import Container from '../layout/Container'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-muted flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {/* Dynamic Icon based on title logic could go here, for now generic Code Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {group.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm text-muted-foreground">
                      {skill}
                      {/* Add spacer dot except for last */}
                      <span className="mx-1 opacity-50">•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
