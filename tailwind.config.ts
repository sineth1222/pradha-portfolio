import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tylon: {
          primary: "#ffffff",
          secondary: "#141412",
          card: "#1A1A17",
          border: "#d4af37",
          muted: "#6B6B60",
          bg: "#0D0D0B",
        },
        gold: "#d4af37",
        "gold-dark": "#b8922a",
        cream: "#f5f2ec",
        gl: "#e8e5df",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
