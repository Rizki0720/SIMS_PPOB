/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-saldo':"url('/images/Background_Saldo.png')"
      },
      fontFamily:{
         text: ['Open Sans']
      }
    },
  },
  plugins: [],
}

