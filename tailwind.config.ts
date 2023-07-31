export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: "#121212",
        },
        leaf: {
          500: "#6BDA69",
        },
      },
      fontFamily: {
        "custom-font": ['"IBM Plex Mono"', "monospace"]
      },
    },
  },
  plugins: [],
};
