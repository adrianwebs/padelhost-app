import '../styles/globals.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E26C69',
        contrastText: '#fff'
      },
      secondary: {
        main: '#69DFE2',
        contrastText: '#000'
      },
      darkblue: {
        main: '#22356D',
        contrastText: '#fff'
      },
      success: {
        main: '#95D704',
        contrastText: '#fff'
      },
      error: {
        main: '#E80278'
      },
      white: {
        main: '#fff',
        contrastText: '#000'
      },
      black: {
        main: '#000',
        contrastText: '#fff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
