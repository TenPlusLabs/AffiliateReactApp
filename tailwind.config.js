module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  
    extend: {
      colors:{
        primary: "#1F4395",
        danger: "#F44B18",
        ntext: "#484848",
        light: "#C4C4C4",
        nborder: "#BFBFBF",
        divider: "#E0E1E2",
        lprimary: "#29AAE2",
        dprimary: "#011E4A",
        vlprimary: "#E5E5E5"
      },
      fontFamily: {
        popins:['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
