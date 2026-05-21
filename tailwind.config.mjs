/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        momentum: {
          cream: "#f5f1eb",
          surface: "#ebe5dc",

          text: "#111111",
          softText: "#5f5a54",

          wine: "#6f1024",
          gold: "#c6a56d",
        },
      },

      fontFamily: {
        noir: ["Noir", "sans-serif"],
      },

      borderRadius: {
        momentum: "2rem",
      },

      boxShadow: {
        momentum:
          "0 10px 40px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};

export default config;