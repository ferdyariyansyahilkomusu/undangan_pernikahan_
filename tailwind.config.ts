import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF6EE",
          dark: "#F3EAD9",
        },
        sage: {
          50: "#F1F3EE",
          100: "#DFE4D6",
          300: "#AFBBA0",
          500: "#7C8B6F",
          600: "#647159",
          700: "#4E5945",
          900: "#333A2D",
        },
        gold: {
          100: "#F3E7C9",
          300: "#E4CB94",
          500: "#C9A15A",
          600: "#AD843F",
          700: "#8A6A31",
        },
        charcoal: "#3A362F",
        blush: "#EFE3D3",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A15A, transparent)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
