/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#140738",
        'card-background': "#2C185A",
        'text': "#FCF4F4",
        'border-color': "#E6D9D6",
        'selected-item': "#FCF4F4",
        'toggle-background': "#142A9A",
      },
      fontFamily: {},
      backgroundImage: {
        'sidebar-desktop': "url('/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/bg-sidebar-mobile.svg')",
      },
      screens: {
        'xs': "550px",
      },
      
    },
  },
  plugins: [],
}