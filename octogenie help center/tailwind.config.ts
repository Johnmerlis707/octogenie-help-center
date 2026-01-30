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
        primary: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
        teal: {
          light: "#E0F2FE",
        },
        purple: {
          light: "#F3E8FF",
        },
        blue: {
          light: "#DBEAFE",
        },
        orange: {
          light: "#FED7AA",
        },
        green: {
          light: "#D1FAE5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
