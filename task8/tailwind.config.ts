import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'fullScreen': '100vh',
      },
      colors: {
        'customBlue': '#4640DE',
        'customGray': '#515B6F',
        'customRose': '#4640DE',
        'customeDark': '#25324B',
        'lightGreen':'rgba(86, 205, 173, 0.1)',
        'textColor1': "#4640DE",
        'textColor2': "#FFB836",
        'textColor3': "#7C8493",
        'textColor4': "#25324B",
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'large':'32px',
        'normal': '16px',
        'header1':"32px",
        'header2':"24px",
        'header3':"20px",
        'small':"12px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config