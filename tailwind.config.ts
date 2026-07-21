import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        pink: "#ff3258",
        cream: "#f0e9f2",
        muted: "#e5e5e6da",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      fontSize: {
        huge: "clamp(4.5rem, 13vw, 11rem)",
      },
    },
  },
  plugins: [],
};

export default config;
