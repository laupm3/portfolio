import Container from '../layout/Container'
import { profile } from '../../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 border-t border-border/40">
      <Container>
        <div className="max-w-xl">
          <h2 className="text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            Si quieres hablar de un proyecto o colaborar, escríbeme. Respondo en cuanto pueda.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm"
            >
              {profile.email}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition"
            >
              LinkedIn
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
