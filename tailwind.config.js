/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8bbf43',   // Deep Ocean Blue
        secondary: '#22C55E', // Forest Green
        accent: '#F472B6',    // Sunset Coral
        light: '#1E293B',     // Slate Gray
        dark: '#0F172A',      // Deep Navy
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#2563EB",
          secondary: "#22C55E",
          accent: "#F472B6",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#38BDF8",
          success: "#84CC16",
          warning: "#FACC15",
          error: "#F87171",
        },
      },
    ],
  },
};
