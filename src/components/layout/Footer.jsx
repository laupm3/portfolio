import { useTranslation } from 'react-i18next';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import Container from '../layout/Container';
import { profile } from '../../data/profile';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md py-8 mt-auto relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> {t('footer.by')} {profile.name}
          </p>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
