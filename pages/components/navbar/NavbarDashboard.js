import React, {useState} from 'react'
import Avatar from '../Avatar/Avatar'

import styles from './styles.module.css'

import {signOutUser} from '../../../firebase/client'

import { motion } from 'framer-motion'

function HomeNavbar ({username, avatar}) {

  const handleSignOut = () => {
    signOutUser()
  }

  return (
    <>
      <motion.div className={styles.navbar_container}
        animate={{opacity: [0, 1], y:[-100, 0]}}
        initial={{opacity: 0}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <div className={styles.navbar_topnav}>
          <div className={styles.navbar_title}>
            <h2>PADELHOST</h2>
            <span>/</span>
            <strong>{username}</strong>
          </div>
          <div className={styles.navbar_actions}>
            <button>Feedback</button>
            <select>
              <option hidden selected>Language</option>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
              <option value='ger'>German</option>
              <option value='fr'>French</option>
            </select>
            <select>
              <option hidden selected>Theme</option>
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
            </select>
            <button>Help</button>
            <button onClick={handleSignOut}>Logout</button>
            <Avatar src={avatar} alt={username} />
          </div>
        </div>
        <div className={styles.navbar_botnav}>
          <button>Overview</button>
          <button>Templates</button>
          <button>Changes</button>
          <button>Planning</button>
          <button>Settings</button>
        </div>
      </motion.div>
    </>
  )
}

export default HomeNavbar