/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
],

    theme: {
    extend: {
      colors: {
        // your existing colors stay
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },

        // ✅ Add SageIQ brand colors
        siq: {
          white: "#FFFFFF",
          cyan: "#00D2FF",
          navy: "#00071F",
          main: "#0E0C15"
        },
      },

      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        heading: ["var(--font-zen-dots)", ...fontFamily.sans], // Zen Dots
        body: ["var(--font-inter)", ...fontFamily.sans],// Inter
        mono: ["var(--font-mono)", ...fontFamily.mono],// Geist Mono
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-heading font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply font-heading text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply font-heading text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply font-heading text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply font-heading text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-heading font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply font-body text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-body font-light text-[0.875rem] leading-6 md:text-base":
            {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-mono text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-mono text-xs font-bold uppercase tracking-wider": {},
        },
      });
    }),
  ],
};
