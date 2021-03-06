import '../styles/globals.css'
import '../styles/globals.scss'


import { createTheme, ThemeProvider } from '@mui/material/styles'

import Head from 'next/head'

import { ApolloClient, HttpLink, gql, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  cache: new InMemoryCache
})


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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Padelhost - Social Padel App</title>
          <meta name="description" content="Padelhost is the app that makes you save time, money and effort. It helps you easily reserve a court, find players to play with and locate the best places to play in your city. Want to book a court? Just open the app and reserve it with one click. Don't have a partner? Find one in the app, wherever you are. Are you traveling to another city? Find the best place to play there and make new friends!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
