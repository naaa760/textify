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
        portal: {
          purple: {
            light: "#B292D6",
            DEFAULT: "#9D85D2",
            dark: "#8B7FD0",
          },
        },
        gray: {
          750: "#2F3545",
          850: "#1B2032",
          950: "#0B0F1A",
        },
        "purple-grey": {
          100: "#E9E7F3",
          200: "#D3CFE7",
          300: "#BDB7DB",
          400: "#A79FCF",
          500: "#8B7FD0",
          600: "#7365C4",
          700: "#5B4BB8",
          800: "#4A3D96",
          900: "#382E71",
        },
        "silver-purple": {
          50: "#F8F8FF", // Ghost White
          100: "#E6E6FA", // Lavender
          200: "#C5CAE9", // Light Steel Purple
          300: "#B0C4DE", // Light Steel Blue
          400: "#9FB6CD", // Light Steel Blue 3
          500: "#8B9DC3", // Light Steel Blue 4
        },
        "light-purple": {
          50: "#F0E6FF", // Lightest purple
          100: "#E6E6FA", // Lavender
          200: "#DCD0FF", // Light periwinkle
          300: "#D8BFD8", // Thistle
          400: "#CBC3E3", // Pale purple
          500: "#B19CD9", // Light pastel purple
        },
        dark: {
          DEFAULT: "#0A0A0B",
          50: "#2C2C35",
          100: "#1A1A1D",
        },
        dashboard: {
          light: "#D1C0B6",
          DEFAULT: "#8A6B55",
          dark: "rgba(33,33,37,0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        "4xl": ["2.5rem", "1.2"],
        "5xl": ["3rem", "1.2"],
        "6xl": ["4rem", "1.2"],
        "7xl": ["4.5rem", "1.1"],
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mix": "linear-gradient(130deg, var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
