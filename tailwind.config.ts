import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          surface: '#1A1A1A',
          border: '#2A2A2A',
        },
        primary: {
          DEFAULT: '#00D4FF',
          dark: '#0099CC',
          light: '#66E5FF',
        },
        cyber: {
          green: '#00FF41',
          purple: '#B44DFF',
          red: '#FF0044',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config