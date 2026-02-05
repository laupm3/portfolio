import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2.5 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
            aria-label="Toggle language"
        >
            <Languages className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">
                {i18n.language === 'es' ? 'EN' : 'ES'}
            </span>
        </button>
    );
}
