/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js"],
  
  theme: {
    extend: {},
  },
  
  theme: {
    extend: {
      // extend base Tailwind CSS utility classes
    }
  },
  plugins: [require("daisyui"),
  ]
}
