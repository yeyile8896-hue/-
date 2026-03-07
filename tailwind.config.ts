import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        fire: {
          100: "#fff2db",
          200: "#ffd89c",
          300: "#ffb765",
          400: "#fb8f3c",
          500: "#eb5e28"
        }
      },
      fontFamily: {
        sans: [
          "\"Aptos\"",
          "\"Segoe UI\"",
          "\"PingFang SC\"",
          "\"Microsoft YaHei\"",
          "sans-serif"
        ],
        display: [
          "\"Palatino Linotype\"",
          "\"Noto Serif CJK SC\"",
          "\"Source Han Serif SC\"",
          "Georgia",
          "serif"
        ]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(234, 88, 12, 0.18)",
        card: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(circle at top, rgba(251, 146, 60, 0.14), transparent 42%), radial-gradient(circle at 85% 20%, rgba(234, 88, 12, 0.12), transparent 26%)"
      }
    }
  },
  plugins: []
};

export default config;
