import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import NavbarDashboard from '../components/navbar/NavbarDashboard'

import useUser from '../../hooks/user/useUser'

function Dashboard() {
  const user = useUser()
  
  return (
    <>
      <Head>
          <title>Dashboard - PadelHost</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {
              user && 
              <NavbarDashboard username={user.username} />
              
          }
      <div className='d-flex flex-direction-row w-100'>
          <img src='images/waveDashboard.png' className='shadow-md position-absolute w-100'/>
          <div className='w-25  bg-light-dark min-vh-100'>

          </div>
          <div className='w-100 bg-white min-vh-100'>

          </div>
      </div>
    </>
  )
}

export default Dashboard