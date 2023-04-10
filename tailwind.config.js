/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
          whitee:"hsl(var(--white))",
          whiteD:"hsl(var(--white-d))",
          bgHeadBtn:"rgba(var(--bg-d)/0.2)",
          orangeC:"hsl(var(--orange))",
          pinky:"hsl(var(--pinkie))",
          grayish:"hsl(var(--gray))",
          bluish:"hsl(var(--blue))",
          grayline:"hsl(var(--grayish))"

      },
      fontFamily: {
          fontInter:"'Inter', sans-serif",
          fontLekton:"'Lekton', sans-serif",
          fontLato: "'Lekton', sans-serif",
          fontPoppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

