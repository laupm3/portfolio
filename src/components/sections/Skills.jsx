import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout, Palette, Zap } from 'lucide-react';
import Container from '../layout/Container';
import { services } from '../../data/skills';

// Map icon strings to components
const iconMap = {
  layout: Layout,
  palette: Palette,
  zap: Zap,
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <Container>
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider text-sm uppercase block mb-2"
          >
            {t('skills.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            {t('skills.title')} <span className="text-primary">{t('skills.titleHighlight')}</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,234,255,0.1)] flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10 w-16 h-16 mb-6 rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-primary transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,234,255,0.2)]">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="relative z-10 text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-auto">
                  {service.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs font-medium rounded-md bg-background/50 border border-border/30 text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
