import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {  
        mmbg: "#290b4b",  
        secondary: "#10B981",  
      }, 
      fontFamily: {  
        sans: ["Inter", "sans-serif"],  
        time : ["Abril Fatface"],
        title : ["Montserrat"]
      }, 
    },
  },
  plugins: [flowbite.plugin()],
};
