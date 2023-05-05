/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        prue :'Inconsolata, monospace',
        prue2 :'Open Sans, sans-serif',
        textis: 'Permanent Marker, cursive',
        textes: 'Open Sans, sans-serif',
        nuevo: 'Courgette, cursive'
      },
    }
  },
  plugins: [],
}

