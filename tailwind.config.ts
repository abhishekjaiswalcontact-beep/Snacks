import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turmeric: {
          50: "#FCF8EC",
          100: "#F9F0D2",
          200: "#F4E1A6",
          300: "#EFD079",
          400: "#E9B949", // Brand primary
          500: "#DC9F2B",
          600: "#BA7C1B",
          700: "#8E5B15",
          800: "#603D2A",
        },
        saffron: {
          50: "#FDF5ED",
          100: "#FBE7D4",
          200: "#F6CFA9",
          300: "#F0B47E",
          400: "#E9A15A", // Brand primary saffron
          500: "#DE7B2C",
          600: "#BA5B1B",
          700: "#924316",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FFFDF9",
          200: "#FFF8E9", // Brand soft cream
          300: "#FBF0D5",
          400: "#F4E3BA",
          500: "#E8CF96",
        },
        earth: {
          50: "#F6F1ED",
          100: "#E8DDD4",
          200: "#D3BEB0",
          300: "#B89985",
          400: "#8F674E",
          500: "#603D2A", // Brand deep earthy brown
          600: "#4D3020",
          700: "#3B2418",
          800: "#291910",
          900: "#1A0F0A",
        },
        olive: {
          50: "#F4F6F0",
          100: "#E5E9DB",
          200: "#CBD5B8",
          300: "#ADBD90",
          400: "#8DA26A",
          500: "#66734B", // Brand muted olive green
          600: "#505C38",
          700: "#3C4529",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "rangoli-pattern": "radial-gradient(#E9B949 0.75px, transparent 0.75px), radial-gradient(#603D2A 0.75px, #FFF8E9 0.75px)",
      },
    },
  },
  plugins: [],
};
export default config;
