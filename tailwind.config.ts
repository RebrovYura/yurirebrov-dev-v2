import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#1E1E1E",
        tertiary: "#FFC107",
        accent: "#4CE0B3",
        warning: "#ED6A5E",
      },
      fontSize: {
        h1: "40px",
        h2: "36px",
        h3: "32px",
        h4: "28px",
        h5: "24px",
        h6: "20px",
      },
      boxShadow: {
        custom: "0px 0px 56px -15px rgba(30,30,30,1)",
        button: "0 4px 4px 1px rgba(74, 222, 160, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
