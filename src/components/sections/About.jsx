import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Terminal, Cpu } from 'lucide-react';
import Container from '../layout/Container';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-primary font-medium tracking-wider text-sm uppercase block mb-2"
            >
              {t('about.title')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6">
              {t('about.title')} <span className="text-primary">{t('about.subtitle')}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('about.description')}
            </p>

            {/* Tech Stack / Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="font-medium">Frontend Dev</span>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="font-medium">Modern Tech</span>
              </div>
            </div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full max-w-md md:max-w-none relative"
          >
            {/* Glassmorphic Card */}
            <div className="relative z-10 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -z-10" />

              {/* Code Snippet Decoration */}
              <div className="font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{'{'}</span></p>
                  <p className="pl-4">name: <span className="text-green-400">'Laura Prieto'</span>,</p>
                  <p className="pl-4">role: <span className="text-green-400">'Frontend Developer'</span>,</p>
                  <p className="pl-4">skills: <span className="text-yellow-400">['React', 'Vite', 'Tailwind']</span>,</p>
                  <p className="pl-4">hardWorker: <span className="text-orange-400">true</span>,</p>
                  <p className="pl-4">quickLearner: <span className="text-orange-400">true</span></p>
                  <p><span className="text-yellow-400">{'}'}</span>;</p>
                </div>
              </div>
            </div>

            {/* Decoration blob behind */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
