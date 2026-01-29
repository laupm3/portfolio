/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidad visual del portfolio (usa en componentes: bg-background, text-primary, bg-accent...)
        background: {
          DEFAULT: '#0f172a', // slate-950
          light: '#1e293b',   // slate-800
        },
        primary: '#f1f5f9',   // texto principal (slate-100)
        muted: '#94a3b8',     // texto secundario (slate-400)
        accent: {
          DEFAULT: '#818cf8',   // indigo-400
          hover: '#6366f1',     // indigo-500
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      typography: {
        // Jerarquía clara de tipografía
        h1: {
          fontSize: '3rem',
          fontWeight: '700',
          lineHeight: '1.2',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: '600',
          lineHeight: '1.3',
        },
      },
    },
  },
  plugins: [],
}

