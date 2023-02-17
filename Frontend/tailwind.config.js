/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--bg-primary)",
        "secondary": "var(--bg-secondary)",
        "third": "var(--bg-third)",
        "forth": "var(--bg-forth)",
        "primary-color": "var(--color-primary)",
        "secondary-color": "var(--color-secondary)",
        "divider": "var(--divider)",
        "dark-primary": "var(--dark-bg-primary)",
        "dark-secondary": "var(--dark-bg-secondary)",
        "dark-third": "var(--dar-bg-third)",
        "dark-color-primary": "var(--dark-color-primary)",
        "dark-color-secondary": "var(--dark-color-secondary)",
        "blue-color": "var(--blue-color)",
        "green-color": "var(--green-color)",
        "light-blue-color": "var(--light-blue-color)",
        "border-color": "var(--border-color)",
        "shadow-1": "var(--shadow-1)",
        "shadow-2": "var(--shadow-2)",
        "shadow-3": "var(--shadow-3)",
        "shadow-inset": "var(--shadow-inset)",
        "blur": "var(--blur)",
      },
      backgroundImage: {
        'Error' : "url('../public/icons/icons10.png')",
      }
    },
  },
  plugins: [],
}