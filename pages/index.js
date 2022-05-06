import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Adb from '@mui/icons-material/Adb'
import EventNote from '@mui/icons-material/EventNote'
import Timer from '@mui/icons-material/Timer'
import Place from '@mui/icons-material/Place'
import Mood from '@mui/icons-material/Mood'
import Assignment from '@mui/icons-material/Assignment'
import AccessAlarm from '@mui/icons-material/AccessAlarm'

import { Button } from 'react-bootstrap'

import NavbarHome from './components/navbar/NavbarHome.js'

import LinkA from 'next/link'


export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <body className='app_body'>
        <NavbarHome />
        
        <header id='Home' className='header-bg'>
          <div className='row align-center text-center justify-content-center g-0'>
              <div className='p-6 mt-5 col-sm-5 align-items-start text-start text-white'>
                <h1 className='my-3'>Managing <strong>Padel Reservations</strong> has never been that easy!</h1>
                <h4 className='fw-light'>Padelhost is an easy-to-use app that offers you one-click bookings to the best padel locations. Find players to play with or reserve your pitch! Check your timetable at any time and enjoy your favorite sport.</h4>
                <div className='d-flex flex-row align-items-center'>
                  <Button className='btn-light m-2 px-4'>
                    <PlayArrowIcon className='me-2'/>
                    Play Store
                  </Button>
                  <a href='#' className='text-light'>
                    <Adb className='m-2 fs-1'/>                    
                  </a>
                </div>
              </div>
              <div className='col-sm-3 py-5 mt-5 align-items-center justify-content-center'>
                <img className='h-75 w-auto' src='/images/Mobil.png' alt='Mobile App'/>
              </div>
            </div>
        </header>
        <div className='waves'></div>
        <main className='min-vh-500 p-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-sm-6 col-md-4 px-0 text-center features m-3 bg-light h-100'>
                <div className='p-4'>
                  <Mood className='text-gradient-primary fs-1' />
                  <h3 className='fs-5 my-2'>Easy To Use</h3>
                  <span>Padelhost is a mobile and web app that makes it easy for you to book your padel matches,
                      keep track of them and find players to play with.</span>
                </div>
                <div className='line mt-4'></div>
              </div>
              <div className='col-sm-6 col-md-4 px-0 text-center features m-3 bg-light h-100'>
                <div className='p-4'>
                  <AccessAlarm className='text-gradient-primary fs-1' />
                  <h3 className='fs-5 my-2'>Notify Matches</h3>
                  <span>Once you have made your booking,
                      you will be able to get reminders of all the matches you have booked before they start.</span>
                </div>
                <div className='line mt-4'></div>
              </div>
              <div className='col-sm-6 col-md-4 px-0 text-center features m-3 bg-light h-100'>
                <div className='p-4'>
                  <Place className='text-gradient-primary fs-1' />
                  <h3 className='fs-5 my-2'>Play Anywhere</h3>
                  <span>We allow you to choose among a lot of locations in your area,
                    so that you can find the best place,
                    or discover a new location.</span>
                </div>
                <div className='line mt-4'></div>
              </div>
              <div className='col-sm-6 col-md-4 px-0 text-center features m-3 bg-light h-100'>
                <div className='p-4'>
                  <Assignment className='text-gradient-primary fs-1' />
                  <h3 className='fs-5 my-2'>Leaderboard</h3>
                  <span>You can also play in a competitive leaderboard
                    against other players or clubs and being at the top of the game.</span>
                </div>
                <div className='line mt-4'></div>
              </div>
            </div>
          </div>
        </main>
        <section id='Features' className='min-vh-50 w-100 h-100 bg-light p-5'>
          <div className='container'>
            <div className='row justify-content-center text-center'>
              <h3 className='text-title'>PadelHost Features</h3>
              <span className='w-75 m-3'>Padelhost is a social media app that makes it easy to find the perfect padel court for your next game. With Padelhost, you can pick from a variety of locations and book your court in just one click.</span>
            </div>
          </div>
        </section>
        <section id='Pricing' className='min-vh-50 w-100 p-5'>
          <div className='container'>
            <div className='row justify-content-center text-center'>
              <h3 className='text-title'>Pitch Manager Pricing</h3>
              <span className='w-75 m-3'>We allow clubs and places to manage their reservations, letting them post their pitches for players to book in any type of court.</span>
            </div>
          </div>
        </section>
        <section id='Faq' className='min-vh-50 w-100 p-5 bg-light'>
          <div className='container'>
            <div className='row justify-content-center text-center'>
              <h3 className='text-title'>Frequented Asked Questions</h3>
              <span className='w-75 m-3'>Be sure you understand how we work and fix all your doubts here with the questions the clients usually have or contact us!</span>
            </div>
          </div>
        </section>
        <section id='Reviews' className='min-vh-50 w-100 p-5'>
          <div className='container'>
            <div className='row justify-content-center text-center'>
              <h3 className='text-title'>Players & Clubs Trust Us</h3>
              <span className='w-75 m-3'>We place huge value on strong relationships and have seen the benefit they brings to our business. Customer feedback is vital in helping us to get it right.</span>
            </div>
          </div>
        </section>
        <section id='Reviews' className='min-vh-50 w-100 p-5'>
          <div className='container'>
            <div className='row justify-content-center text-center'>
              <h3 className='text-title'>Contact Us</h3>
              <span className='w-75 m-3'>It's very easy to get in touch with us. Just use the contact form or send an email for any inquiry</span>
            </div>
          </div>
        </section>
        <footer class="footer-section bg-secondary ptb-60">
          <div class="footer-wrap">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <div class="footer-single-col text-center">
                    <img alt="" src="/img/logo-color.png"></img>
                    <div class="footer-social-list">
                      <ul class="list-inline">
                        <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="/"> <i class="fa fa-twitter"></i></a></li>
                        <li><a href="/"> <i class="fa fa-linkedin"></i></a></li>
                        <li><a href="/"> <i class="fa fa-google-plus"></i></a></li>
                        <li><a href="/"> <i class="fa fa-youtube"></i></a></li>
                      </ul>
                    </div>
                    <div class="copyright-text">
                      <p>© copyright <a href="apetech">ApeTech</a>
                      Software Template By <a href="https://themeforest.net/user/htmllover/portfolio" target="_blank" rel="noopener noreferrer">HtmlLover</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  )
}
