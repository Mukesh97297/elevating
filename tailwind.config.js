/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-us": "url('/images/layout2.png')",
        "about-us1": "url('/images/layout4.png')",
        "comunity-bg": "url('/images/layout1.png')",
        "events-bg": "url('/images/events.png')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      fontFamily: {
        "TT-Black": ['"TT Firs Neue Trial Black"', "sans-serif"],
        "TT-Black Italic": ['"TT Firs Neue Trial Black Italic"', "sans-serif"],
        "TT-Bold": ['"TT Firs Neue Trial Bold"', "sans-serif"],
        "TT-Bold Italic": ['"TT Firs Neue Trial Bold Italic"', "sans-serif"],
        "TT-semibold": ['"TT Firs Neue Trial semibold"', "sans-serif"],
        "semibold-italic": [
          '"TT Firs Neue Trial semibold Italic"',
          "sans-serif",
        ],
        "TT-ExtraBold": ['"TT Firs Neue Trial ExtraBold"', "sans-serif"],
        "extrabold-italic": [
          '"TT Firs Neue Trial ExtraBold Italic"',
          "sans-serif",
        ],
        "TT-extralight": ['"TT Firs Neue Trial ExtraLight"', "sans-serif"],
        "extralight-italic": [
          '"TT Firs Neue Trial ExtraLight Italic"',
          "sans-serif",
        ],
        "TT-italic": ['"TT Firs Neue Trial Italic"', "sans-serif"],
        "TT-light": ['"TT Firs Neue Trial Light"', "sans-serif"],
        "light-italic": ['"TT Firs Neue Trial Light Italic"', "sans-serif"],
        "TT-medium": ['"TT Firs Neue Trial Medium"', "sans-serif"],
        "medium-italic": ['"TT Firs Neue Trial Medium Italic"', "sans-serif"],
        regular: ['"TT Firs Neue Trial Regular"', "sans-serif"],
        "TT-thin": ['"TT Firs Neue Trial Thin"', "sans-serif"],
        "thin-italic": ['"TT Firs Neue Trial Thin Italic"', "sans-serif"],
        "var-italic": ['"TT Firs Neue Trial Var Italic"', "sans-serif"],
        "var-roman": ['"TT Firs Neue Trial Var Roman"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
