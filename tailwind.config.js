/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'primary-color': '#F8F7F9',
				  'secondary-color': '#2A1E5C',
				  'accent' :'#F06449',
				  
			},
    },
  },
  plugins: [],
}

