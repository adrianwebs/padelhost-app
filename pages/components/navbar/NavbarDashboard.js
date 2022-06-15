import React, {useState} from 'react'
import Avatar from '../Avatar/Avatar'

import styles from './styles.module.css'

import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import {signOutUser} from '../../../firebase/client'

import { motion } from 'framer-motion'

const pages = ['Dashboard', 'Pitches', 'Matches', 'Tournaments', 'Leaderboard']

function HomeNavbar ({name}) {

  const handleSignOut = () => {
    signOutUser()
  }

  return (
    <>
      <motion.div className={styles.navbar_dashboard}
        animate={{opacity: [0, 1], y:[-100, 0]}}
        initial={{opacity: 0}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <Navbar className='primary-gradient shadow-sm' variant='dark' fixed='top' expand="lg">
          <Container>
            <Navbar.Brand href="#Home">PADELHOST</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center justify-content-center align-items-center ">
                {
                  pages.map((page) => (
                    <div key={page}>
                      <Nav.Link href={"#"+page}>{page}</Nav.Link>
                    </div>
                  ))
                }
              </Nav>
              
              <div className='d-flex justify-content-center align-items-center '>
                  <button onClick={handleSignOut}>Logout</button>
                  <Nav.Link className='mx-2 text-white'>{name}</Nav.Link>
                </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>

    </>
  )
}

export default HomeNavbar