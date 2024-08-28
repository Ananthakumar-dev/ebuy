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
      colors: {
        transparent: "transparent",
        primary: {
          color: "#131921",
          alt: "#004B91",
        },
        secondary: {
          color: "#232f3e",
          alt: "#131A22",
        },
        gray: {
          DEFAULT: "#c0ccda",
          dark: "#3c4858",
          darkest: "#1f2d3d",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        btn: "#ff7519",
      },
    },
  },
  plugins: [],
};
export default config;
