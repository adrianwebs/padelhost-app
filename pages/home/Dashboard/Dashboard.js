import React from 'react'

import {motion} from 'framer-motion'

import styles from './styles.module.css'

function dashboard({variants}) {
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    layout
    transition={{duration: 1, ease: 'easeInOut'}}
    className='d-flex flex-rows w-100'
    >
        <div className='w-65'>
          <h3><strong>My Bookings</strong></h3>
          <div className='d-flex flex-row border-bottom mt-3 mx-3 '>
            <span className='me-4 fs-5 border-bottom-active'><strong>Current</strong></span>
            <span className='me-4 fs-5'>Past</span>
            <span className='me-3 fs-5'>Completed</span>
          </div>
          <div>
          </div>
        </div>
        <div className='w-35'>
          <div className='h-100 d-flex flex-column'>
            
          </div>
        </div>
    </motion.div>
  )
}

export default dashboard