import type { Config } from "tailwindcss";
import tailwindCSSAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shakeit 1s infinite ease-in-out",
        coin: "coin 1s infinite linear",
      },
      keyframes: {
        coin: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg)" },
        },
        shakeit: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "33%": { transform: "rotate(2deg)" },
          "66%": { transform: "rotate(-2deg)" },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [tailwindCSSAnimate],
};
export default config;
