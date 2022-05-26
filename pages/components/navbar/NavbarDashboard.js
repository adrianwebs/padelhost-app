import React, {useState} from 'react'
import Avatar from '../Avatar/Avatar'

import styles from './styles.module.css'

import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const pages = ['General', 'Reservar', 'Partidos', 'Torneos', 'Clasificación']

function HomeNavbar ({username}) {
  const dispatch = useDispatch()
  const navbarSelected = useSelector(state => state)

  const handleNavbar = (page) => {
    dispatch({
      type: '@navbar/changed',
      payload: page
    })
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
                      <Nav.Link onClick={() => handleNavbar(page)} className={navbarSelected === page ? 'active' : ''}>{page}</Nav.Link>
                    </div>
                  ))
                }
              </Nav>
              
              <div className='d-flex justify-content-center align-items-center '>
                  
                  <Nav.Link className='mx-2 text-white'>{username}</Nav.Link>
                </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>

    </>
  )
}

export default HomeNavbar