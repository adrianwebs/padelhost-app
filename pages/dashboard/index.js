import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import NavbarDashboard from '../components/navbar/NavbarDashboard'

import useUser from '../../hooks/user/useUser'

function index() {
  const user = useUser()
  
  return (
    <>
      <Head>
          <title>Dashboard - PadelHost</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
          {
              user && 
              <NavbarDashboard username={user.username} avatar={user.avatar} />
          }
      </div>
    </>
  )
}

export default index