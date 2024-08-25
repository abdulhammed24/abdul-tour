/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Smaller text
        paragraph: [
          "0.875rem",
          {
            lineHeight: "1.2",
            fontWeight: "400",
          },
        ],

        // Extra small text
        "fs-xs": [
          "clamp(1rem, 1vw + 0.5rem, 1.5rem)",
          {
            lineHeight: "1.2",
            fontWeight: "400",
          },
        ],
        // Small text
        "fs-sm": [
          "clamp(1.5rem, 1.5vw + 0.5rem, 2rem)",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        // Medium text
        "fs-md": [
          "clamp(2rem, 2vw + 0.75rem, 2.5rem)",
          {
            lineHeight: "1.2",
            fontWeight: "600",
          },
        ],
        // Large text
        "fs-lg": [
          "clamp(2.5rem, 2.5vw + 1rem, 3rem)",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        // Extra large text
        "fs-xl": [
          "clamp(3rem, 3vw + 1.25rem, 3.5rem)",
          {
            lineHeight: "1.2",
            fontWeight: "800",
          },
        ],
      },
      colors: {
         blue: {
          500: "#00a09a",
        },
      }
    },
  },
  plugins: [],
};
