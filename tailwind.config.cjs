// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(120px, -80px) scale(1.15)" },
          "66%": { transform: "translate(-100px, 60px) scale(0.9)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(-140px, 100px) scale(1.1)" },
          "66%": { transform: "translate(90px, -120px) scale(0.95)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(150px, 40px) scale(1.12)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.25, filter: "blur(40px)" },
          "50%": { opacity: 0.45, filter: "blur(28px)" },
        },
      },
      animation: {
        "blob-1": "blob1 20s ease-in-out infinite",
        "blob-2": "blob2 24s ease-in-out infinite",
        "blob-3": "blob3 28s ease-in-out infinite",
        "pulse-soft": "pulseSoft 14s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
