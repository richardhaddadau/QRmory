const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./resources/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "0", max: "475px" },
        sm: { min: "476px" },
      },
      colors: {
        "qrmory-purple-100": "#F0D0F7",
        "qrmory-purple-200": "#DEA4F0",
        "qrmory-purple-300": "#B66FD2",
        "qrmory-purple-400": "#8444A6",
        "qrmory-purple-500": "#49176B",
        "qrmory-purple-600": "#39105C",
        "qrmory-purple-700": "#2A0B4D",
        "qrmory-purple-800": "#1E073E",
        "qrmory-purple-900": "#150433",
      },
      spacing: {
        4.5: "18px",
      },
      height: {
        hero: "850px",
        "qr-card": "660px",
      },
      width: {
        15: "3.85rem",
        "qr-preview": "350px",
      },
      minHeight: {
        "qr-card": "660px",
      },
      maxHeight: {
        "selector-window": "512px",
      },
      maxWidth: {
        "main-card": "1200px",
      },
      backgroundImage: {
        hero: "url('/img/header-bg.webp')",
      },
      backgroundSize: {
        hero: "cover",
      },
      backgroundPosition: {
        hero: "center",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sans: ["europa", ...defaultTheme.fontFamily.sans],
        header: ["marydale", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": [
          "2.5rem",
          {
            lineHeight: "1",
          },
        ],
      },
      fontWeight: {
        sans: "300",
      },
      translate: {
        '1.75': '0.4375rem'
      }
    }
    ,
  },
  plugins: [],
}