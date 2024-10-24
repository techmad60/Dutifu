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
        //Used in Home Page
        "color-one": "#686868", //header navs and body
        "color-two": "#230B34", //headings
        "color-three": "#532F82", //footer bg-color
        "color-four": "#1E1E4B", //login text-color
        "color-five": "#603F8B", //signup border-color
        "color-six": "#B6B6E5", //footer navs
        "color-seven": "#63428E", //footer-border-color

        //Used in Signup Page
        "color-eight": "#B1BDCA" //Inactive-class
      },
    },
  },
  plugins: [],
};
export default config;
