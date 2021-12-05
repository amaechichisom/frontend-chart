// const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {

  theme: {
    colors:{
      ...colors,
    },
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
      fontFamily: {
        title: ['gilroy-bold', 'sans-serif'],
        display: ['gilroy-medium', 'sans-serif'],
        body: ['gilroy-regular', 'sans-serif'],
        logo: ['hadfield', 'sans-serif'],
      },
      colors:{
        'primary-blue': '#299FF4',
        'primary-blue-light':'#F5FAFF',
        'primary-button-blue': '#38ACFF',
        'primary-white-light': '#F5F5F5',
        'grey-dark': '#707070',
        'footer-dark':'#0B0D17'

      },
      gridTemplateColumns: {
        // Simple 16 column grid
         'learning': 'minmax(500px, .5fr) minmax(900px, 1fr) minmax(500px, .5fr)',
         'side': 'minmax(150px, 400px) minmax(600px, 1fr)'
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      }
    }
  },
  variants: {},
  plugins: [],
  
}
