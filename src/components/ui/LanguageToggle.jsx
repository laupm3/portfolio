import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'es', label: 'Español' },
        { code: 'en', label: 'English' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    // Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 md:px-3 md:py-2.5 rounded-full md:rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                aria-label="Select language"
            >
                <Languages className="w-4 h-4" />
                <span className="text-xs font-bold uppercase hidden md:inline">
                    {currentLanguage.code}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-36 py-2 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-[100]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full px-4 py-2 text-sm flex items-center justify-between transition-colors
                                    ${i18n.language === lang.code
                                        ? 'text-primary bg-primary/5 font-bold'
                                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                                    }`}
                            >
                                {lang.label}
                                {i18n.language === lang.code && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
