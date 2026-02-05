import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import Container from '../layout/Container'

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-wider mb-2"
            >
              HOLA, SOY
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 leading-tight"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-foreground/80 font-medium mb-6"
            >
              Y soy <span className="text-primary font-bold">{profile.role}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Me apasiona crear sitios web hermosos y responsivos. Especializado en tecnologías web modernas como React y CSS avanzado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Ver Proyectos
              </a>
              <div className="flex gap-4 items-center justify-center">
                {/* Social Icons mimics */}
                <a href={profile.social.github} target="_blank" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 4 1 9 5 0 0 1-5.3-2.7 15.6 15.6 0 0 0-5.3 0 5 0 0 1-5.3 2.7c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a href={profile.social.linkedin} target="_blank" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image / Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/30 p-2">
              <div className="w-full h-full rounded-full bg-muted overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                {/* Placeholder image logic: If no image specifically set, use a generic dev avatar or just a gradient div */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={profile.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Orbiting element decoration */}
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
