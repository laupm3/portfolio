import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LanguageToggle from '../components/ui/LanguageToggle'

// Mock i18next to avoid real translations loading issues in test
vi.mock('react-i18next', async () => {
    const actual = await vi.importActual('react-i18next');
    return {
        ...actual,
        useTranslation: () => ({
            t: (key) => key,
            i18n: {
                changeLanguage: vi.fn(),
                language: 'es'
            }
        })
    };
});

describe('LanguageToggle', () => {
    it('renders correctly', () => {
        render(<LanguageToggle />)
        // Check if the button exists
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
})
