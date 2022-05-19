import React from 'react'

import { motion } from 'framer-motion'

function Transactions({variants}) {
  
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    >
        Transactions
    </motion.div>
  )
}

export default Transactions