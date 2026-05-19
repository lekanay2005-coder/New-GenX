
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#07030f",
        panel: "#0f0521",
        glow: "#9f7bff",
        accent: "#7c3aed",
        muted: "#9ca3af"
      },
      boxShadow: {
        glow: "0 25px 80px -30px rgba(124, 58, 237, 0.75)"
      },
      backgroundImage: {
        radial: "radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 42%)",
        grid: "radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 25%), linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
