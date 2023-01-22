/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          bgPr: () => { return `var(--color-bg-primay)` },
          bgSe: () => { return `var(--color-bg-secondary)` },
          textPr: () => { return `var(--color-text-primary)` },
          textSe: () => {return `var(--color-text-secondary)`}
        }
      }
    }
  },
  plugins: []
}
