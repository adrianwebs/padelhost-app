import React from 'react'
import { createStore } from 'redux'
import Head from 'next/head'
import useUser from '../../hooks/user/useUser'

import General from './General/general'
import Reservar from './Reservar/reservar'
import Partidos from './Partidos/partidos'
import Torneos from './Torneos/torneos'
import Clasificacion from './Clasificacion/Clasificacion'
import NavbarDashboard from '../components/navbar/NavbarDashboard'
import { useSelector } from 'react-redux'


import { addUser, findUser } from '../../services/userService'

function Home() {
  const user = useUser()
  const navbarSelected = useSelector(state => state)

  const getContent = () => {
    switch (navbarSelected) {
      case 'General':
        return <General key='General'/>
      case 'Reservar':
        return <Reservar key='Reservar'/>
      case 'Partidos':
        return <Partidos key='Partidos'/>
      case 'Torneos':
        return <Torneos key='Torneos'/>
      case 'Clasificiación':
        return <Clasificacion key='Clasificacion'/>
      default:
        break;
    }
  }

  return (
    <>
      <Head>
          <title>Dashboard - PadelHost</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user && 
        <NavbarDashboard name={user.name} />
      }
      <div className='d-flex flex-direction-row w-100'>
          <img src='images/waveDashboard.png' className='shadow-waves position-absolute w-100'/>
          {
            getContent()
          }
      </div>
    </>
  )
}

export default Home