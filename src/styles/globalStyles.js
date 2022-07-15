import { createGlobalStyle } from 'styled-components'

export const paletteColor = {
  //colors
  mainColor: '#2F97C1',
  darkMainColor: '#001E38',
  secondaryColor: '#E54C30',
  darkSecondaryColor: '#A5A5A5',
  //texts
  textMain: '#DCDCDC',
  textSecondary: '#303030',
  textWhite: '#FFFFFF',
  textBlack: '#110E0E',
  //buttons
  successColor: '#5CC12F',
  failedColor: '',
}

// export const lightTheme = {
//   body: '#fffff',
//   main: '#5C14DB',
//   mainColor: '#FFFFFF',
//   accent: '#E5DE17',
//   accentColor: '#161616',
//   secondary: '#FFFFFF',
//   secondaryColor: '#343434',
//   dullColor: '#343434',
//   ternary: '#000000',
//   codeColor: '#D121C5',
// }


export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
    background-color: ${paletteColor.darkMainColor};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    height: 100vh;
    margin: 0 auto;
    padding: 0 40px;
    overscroll-behavior: none;
    width: 100%;
    background-color: ${paletteColor.darkMainColor};
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
