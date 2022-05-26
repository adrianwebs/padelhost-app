import React from 'react'

import { motion } from 'framer-motion'

function EditProfile({variants}) {
  
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    >
        Edit Profile
    </motion.div>
  )
}

export default EditProfile