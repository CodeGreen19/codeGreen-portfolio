/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Lobster Two", "sans-serif"],
        sofia: ["sofia", "sans-serif"],
        heading: ["Philosopher", "serif"],
      },
    },
  },
  plugins: [],
};
