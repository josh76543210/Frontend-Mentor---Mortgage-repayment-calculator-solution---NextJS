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
        lime: "hsl(61, 70%, 52%)",
        limeT: "hsl(61, 70%, 92%)",
        limeH: "hsl(61, 70%, 72%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate100: "hsl(202, 86%, 94%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "hsl(200, 24%, 40%)",
        slate900: "hsl(202, 55%, 16%)",
        slate950: "hsl(202, 55%, 10%)",
      },
      screens: {
        "2sm": "550px",
        // => @media (min-width: 550px) { ... }
        "3sm": "400px",
        // => @media (min-width: 400px) { ... }
      },
      textDecorationThickness: {
        "1/2": "1.5px",
      },
      borderRadius: {
        xxl: "4rem",
      },
    },
    fontFamily: {
      PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
    },
  },
  plugins: [],
};
