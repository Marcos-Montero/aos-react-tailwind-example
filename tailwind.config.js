import inview from 'tailwind-inview';
import tailwindCSSAnimate from 'tailwindcss-animated';

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shakeit 1s 1 ease-in-out",
        coin: "coin 1s 1 linear",
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
  plugins: [tailwindCSSAnimate, inview],
};
export default config;
