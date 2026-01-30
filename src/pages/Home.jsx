// eslint-disable-next-line no-unused-vars -- motion used as motion.div in JSX
import { motion } from 'framer-motion'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

const sectionVariants = {
  offscreen: { opacity: 0, y: 24 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </main>
  )
}