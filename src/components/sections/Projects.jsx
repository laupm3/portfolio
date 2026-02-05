import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Container from '../layout/Container';

const Projects = () => {
  const { t } = useTranslation();

  // Define projects with translation keys and original data
  const projects = [
    {
      id: 1,
      titleKey: 'projects.items.rrhh.title',
      descriptionKey: 'projects.items.rrhh.description',
      tags: ['React', 'Tailwind CSS', 'Laravel'],
      demo: '#',
      github: 'https://github.com/laupm3/React-Inertia-Breeze-Tailwind',
      image: '/RRHH.png',
    },
    {
      id: 2,
      titleKey: 'projects.items.weather.title',
      descriptionKey: 'projects.items.weather.description',
      tags: ['Angular', 'CSS', 'API Integration'],
      demo: '#',
      github: 'https://github.com/laupm3',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      titleKey: 'projects.items.portfolio.title',
      descriptionKey: 'projects.items.portfolio.description',
      tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      demo: '#',
      github: 'https://github.com/laupm3/portfolio',
      image: '/portfolio.png',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider text-sm uppercase block mb-2"
          >
            {t('projects.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            {t('projects.title')} <span className="text-primary">{t('projects.titleHighlight')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,234,255,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,234,255,0.15)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-secondary/20">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-foreground rounded-full border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.viewDemo')}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border hover:border-primary/50 hover:bg-primary/10 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="sr-only">{t('projects.viewCode')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 'View All' Button (Optional) */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/laupm3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-300 group"
          >
            <span>{t('projects.viewMore')}</span>
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
