import Container from "../layout/Container"
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <motion.section
      className="py-20 sm:py-24 lg:py-32"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-2xl">
        <motion.p
          variants={item}
          className="text-muted-foreground text-lg sm:text-xl mb-3 tracking-wide"
        >
          Hola, soy
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight leading-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-accent-foreground font-semibold mb-8 tracking-tight"
        >
          {profile.role}
        </motion.p>
        <motion.p
          variants={item}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-12 max-w-xl"
        >
          Desarrollo interfaces modernas, accesibles y optimizadas,
          usando tecnologías como JavaScript, React y Tailwind CSS.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent-foreground hover:bg-accent-foreground/90 text-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-input text-foreground hover:bg-accent hover:text-accent-foreground font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Contacto
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
