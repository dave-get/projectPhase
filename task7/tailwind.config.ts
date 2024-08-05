import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        epilogue: ['Epilogue', 'sans-serif']
      },
      fontSize:{
        header1:"32px",
        header2:"24px",
        header3:"20px",
        normal:"16px",
        small:"12px",
      },
      colors:{
        lightGreen:'rgba(86, 205, 173, 0.1)',
        textColor1: "#4640DE",
        textColor2: "#FFB836",
        textColor3: "#7C8493",
        textColor4: "#25324B",
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
      },
    },
  },
  plugins: [],
};
export default config;
