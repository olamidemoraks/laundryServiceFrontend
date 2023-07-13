/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#111111",
        "mid-black": "#1e1e1e",
        "secondary-black": "#3c3c3c",
        "light-gold": "#ffcf3f",
        "dark-gold": "#bf9b30",
      },
    },
  },
  plugins: [],
};
