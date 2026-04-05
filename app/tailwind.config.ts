import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // DNA Warna dari Blog Lama Anda
        parabekGreen: '#1B4D3E',
        parabekGold: '#D4AF37',
        techDark: '#1e293b',
        waGreen: '#25D366',
        waDark: '#128C7E',
        darkBg: '#0f172a',
        darkCard: '#1e293b',
        darkText: '#e2e8f0',
      },
      fontFamily: {
        // Kita akan atur font ini nanti di layout.tsx
        sans: ['Inter', 'sans-serif'],
        serif: ['Amiri', 'serif'], 
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;