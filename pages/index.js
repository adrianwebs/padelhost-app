import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from '../assets/images/logoblanco.png'

import Navbar from './components/Navbar'

import Link from 'next/link'


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Padelhost - Social Padel App</title>
        <meta name="description" content="Padelhost is the app that makes you save time, money and effort. It helps you easily reserve a court, find players to play with and locate the best places to play in your city. Want to book a court? Just open the app and reserve it with one click. Don't have a partner? Find one in the app, wherever you are. Are you traveling to another city? Find the best place to play there and make new friends!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='app_body'>
        <Navbar />
        
        <header>
            <Link href='/login'><a>Login</a></Link>

        </header>
        <main className={styles.main}>
          <h1 className={styles.title}>
            
          </h1>

          <nav>
          </nav>
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
