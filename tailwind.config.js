/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
			primary: "#03346E",
			secondary: "#ffffff",
		},
		extend: {
      width: {
        '128': '32rem', 
      },
    },
	},
  plugins: [],
}

