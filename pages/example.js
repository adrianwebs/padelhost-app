import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import EventNote from '@mui/icons-material/EventNote'
import Timer from '@mui/icons-material/Timer'
import Place from '@mui/icons-material/Place'

import { Box, Button } from '@mui/material'

import Navbar from './components/navbar/NavbarHome.js'

import LinkA from 'next/link'


export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <body className='app_body'>
        <Navbar />
        
        <header>
          <div className={styles.landing_head_container}>
            <div className={styles.landing_head_content}>
              <h1>Managing <strong>Padel Reservations</strong> has never been that easy!</h1>
              <h3>Padelhost is an easy-to-use app that offers you one-click bookings to the best padel locations. Find players to play with or reserve your pitch! Check your timetable at any time and enjoy your favorite sport.</h3>
              <div className={styles.landing_head_buttons}>
                <a href='#Features' className={styles.app_blue_rounded_button}>
                  Read More
                </a>
                <button className={styles.app_play_button}>
                  <PlayArrowIcon />
                </button>
                <span>See How It Works</span>
              </div>
            </div>
            <div className={styles.landing_head_image}>
              <img src='/images/Mobil.png' alt='Mobile App'/>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <section id='Features' className={styles.features_container}>
            <div className={styles.features_title}>
              <h2 className={styles.title}>
                Finding a padel pitch used to be so complicated
              </h2>
              <h3>
                Padelhost makes booking a padel pitch easy as pie! You can find your nearest club,
                see when their pitches are free, and reserve in just one click.
                And if your friend is busy, we will find someone for you to play with!
                You can also rate your matches and see how you stack up against other players on our leaderboard.
              </h3>
            </div>
            <Button variant='contained' color='primary'
            sx={{mx: 1, textTransform: 'none', boxShadow: '0 0 0', width: 'auto', paddingX: '40px'}}>
              <LinkA href='/login'><a>Book your Padel Pitch right now!</a></LinkA>
            </Button>
            <Box className={styles.features_content} sx={{flexDirection: {xs: 'column', md: 'column', lg: 'column', xl: 'row'} }}>
              <div className={styles.features_item}>
                <span>1</span>
                <div className={styles.features_icon}><EventNote fontSize='large' color='primary' /></div>
                <h3>Want to book a court?</h3>
                <h4>
                  Padelhost is a mobile and web app that makes it easy for you to book your padel matches,
                  keep track of them and find players to play with.
                </h4>
              </div>
              <div className={styles.features_item}>
                <span>2</span>
                <div className={styles.features_icon}><Timer fontSize='large' color='primary' /></div>
                <h3>Do you forget going to matches?</h3>
                <h4>
                  The app only takes one click to reserve your pitch. Once you have made your booking,
                  you will be able to get reminders of all the matches you have booked before they start.
                </h4>
              </div>
              <div className={styles.features_item}>
                <span>3</span>
                <div className={styles.features_icon}><Place fontSize='large' color='primary' /></div>
                <h3>Where to play your games?</h3>
                <h4>
                  We allow you to choose among a lot of locations in your area,
                  so that you can find the best place,
                  or discover a new location with excellent reviews where you can play.
                </h4>
              </div>
              
            </Box>
            <div className={styles.features_leaderboard}>
                <h2>That's not all! You can also play in a competitive leaderboard
                   against other players or clubs and being at the top of the game.</h2>
                <Button variant='contained' color='primary'
                sx={{mx: 1, textTransform: 'none', boxShadow: '0 0 0', width: 'auto', padding: '10px 40px'}}>
                  <LinkA href='/login'><a>Check It Out!</a></LinkA>
                </Button>
              </div>
          </section>
        </main>
        <section>
          
        </section>
      </body>
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
