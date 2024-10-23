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
        "color-one": "#686868",
        "color-two": "#230B34",
        "color-three": "#532F82",
        "color-four": "#1E1E4B",
        "color-five": "#603F8B",
        "color-six": "#B6B6E5",
        "color-seven": "#63428E"
      },
    },
  },
  plugins: [],
};
export default config;
