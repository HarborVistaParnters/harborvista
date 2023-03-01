/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      brand: {
        300: "#CFE9FF",
        400: "#0066BC",
        500: "#12558D",
        600: "#0F4C7F",
        700: "#063963",
      },
      neutral: {
        100: "#F5FAFF",
        400: "#B0C0CD",
        500: "#5a7a90",
        600: "#60798e",
        700: "#4B6378", //#516B81
      },
      accent: "#A3D614",
    },
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
