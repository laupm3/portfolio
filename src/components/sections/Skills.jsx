import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout, Palette, Zap } from 'lucide-react';
import Container from '../layout/Container';

// Map icon strings to components
const iconMap = {
  layout: Layout,
  palette: Palette,
  zap: Zap,
};

export default function Skills() {
  const { t } = useTranslation();

  // Define services structure with translation keys
  const services = [
    {
      titleKey: 'services.frontend.title',
      descriptionKey: 'services.frontend.description',
      icon: 'layout',
      tools: ['React', 'Tailwind', 'JavaScript', 'HTML/CSS']
    },
    {
      titleKey: 'services.uiux.title',
      descriptionKey: 'services.uiux.description',
      icon: 'palette',
      tools: ['Figma', 'Framer Motion', 'Responsive Design', 'Accessibility']
    },
    {
      titleKey: 'services.performance.title',
      descriptionKey: 'services.performance.description',
      icon: 'zap',
      tools: ['Vite', 'SEO', 'Performance', 'Clean Code']
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,234,255,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,234,255,0.15)]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-foreground rounded-full border border-border/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
