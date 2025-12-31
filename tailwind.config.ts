import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./translations/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0a0a0a",
        gold: {
          DEFAULT: "#c9a227",
          soft: "#f3d37a",
          deep: "#7a5a13"
        },
        alert: "#ef4444"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201,162,39,.25), 0 10px 30px rgba(0,0,0,.5)"
      }
    }
  },
  plugins: []
} satisfies Config;
