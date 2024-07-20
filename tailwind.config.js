/** @type {import('tailwindcss').Config} */
export default {
  modules: {
    animations: true,
  },
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  input: "./src/styles.css",
  output: "./dist/output.css",
};
