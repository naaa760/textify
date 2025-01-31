/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F7FF",
          100: "#EBEFFF",
          500: "#4461F2",
          600: "#3D55D9",
          700: "#2B3D99",
        },
        accent: {
          purple: "#9D85D2",
          blue: "#6B77E5",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0E7C86",
          800: "#0A6670",
        },
        green: {
          50: "#F0FDF4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        "4xl": ["2.5rem", "1.2"],
        "5xl": ["3rem", "1.2"],
        "6xl": ["4rem", "1.2"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
