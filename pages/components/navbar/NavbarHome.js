import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import { Navbar, Container, Nav, Button } from 'react-bootstrap'

import Link from 'next/dist/client/link'

const pages = ['Home', 'Features', 'Pricing', 'Faq', 'Reviews', 'Contact']

function NavbarHome() {
  return (
    <>
    <Navbar className='primary-gradient shadow-sm' variant='dark' fixed='top' expand="lg">
      <Container>
        <Navbar.Brand href="#Home">PADELHOST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center justify-content-center align-items-center ">
            {
              pages.map((page) => (
                <div key={page}>
                  <Nav.Link href={"#"+page}>{page}</Nav.Link>
                </div>
              ))
            }
            <Button className='mx-4 w-50 btn-light'><Link href='../login/'><a className='text-decoration-none text-black'>Member Area</a></Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarHome