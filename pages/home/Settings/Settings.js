import React from 'react'

import { motion } from 'framer-motion'

function Settings({variants}) {
  
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    >
        Settings
    </motion.div>
  )
}

export default Settings