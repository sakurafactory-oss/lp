/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          primary: '#E73562',
          secondary: '#333333',
          accent: '#00A0E9',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}