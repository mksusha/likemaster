/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F4B310', // основной акцент
          hover: '#d99e0f',   // ховер-жёлтый (темнее)
        },
        darkAccent: {
          DEFAULT: '#2B272D', // тёмно-синий
          hover: '#39333a',   // ховер-синий (светлее)
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
