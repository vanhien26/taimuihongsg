/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf6ff',
          100: '#dceeff',
          500: '#088edd',
          600: '#1e73be',
          700: '#1e73be',
          800: '#156fbf',
          900: '#0e4f8a',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        }
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        '2xs': '0 1px rgb(0 0 0 / 0.05)',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
    },
  },
  plugins: [],
}
