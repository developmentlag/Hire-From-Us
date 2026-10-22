/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dim: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a5f6',
          500: '#0c87eb',
          600: '#026bc9',
          700: '#0355a3',
          800: '#074886',
          900: '#0c3d6f',
          950: '#082649',
        },
        brand: {
          navy: '#0b192c',
          royal: '#1e40af',
          blue: '#2563eb',
          sky: '#0284c7',
          light: '#e0f2fe',
          ice: '#f0f9ff',
          surface: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 10px 30px -10px rgba(37, 99, 235, 0.25)',
        'blue-card': '0 4px 20px -2px rgba(14, 165, 233, 0.1)',
        'blue-hover': '0 20px 35px -5px rgba(30, 64, 175, 0.15)',
      }
    },
  },
  plugins: [],
}
