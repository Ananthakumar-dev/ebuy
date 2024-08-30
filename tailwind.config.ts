import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "2.25rem",
      },
      colors: {
        transparent: "transparent",
        gray: {
          DEFAULT: "#c0ccda",
          dark: "#3c4858",
          darkest: "#1f2d3d",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        header: "rgb(17, 17, 16)",
        btn: "#f60",
      },
    },
  },
  plugins: [],
};
export default config;
