import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'
import Container from '../layout/Container'

export default function Hero() {
  const { t } = useTranslation()

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
              {t('hero.greeting')}
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
              {t('hero.role')} <span className="text-primary font-bold">{profile.role}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.description')}
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
                {t('hero.cta')}
              </a>
              <div className="flex gap-4 items-center justify-center">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
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
                  src={profile.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
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
