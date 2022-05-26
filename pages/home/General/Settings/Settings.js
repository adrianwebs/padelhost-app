import React, { useState } from 'react'
import Notifications from './Notifications'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import NavTabButton from '../../../components/Profile/NavTabButton'

function Settings({variants}) {
  const handleNav = (section) => {
    setNavSection(section)
  }

  const sections = ['Notifications', 'Privacy', 'Request','Advanced']
  const [navSection, setNavSection] = useState(sections[0])

  

  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    >
      <Box sx={{width: '100%'}}>
        <h3><strong>Configuración</strong></h3>
        <Box sx={{width: '95%', borderBottom:'solid 1px #EDEDED', mx: '1.5rem'}}>
          <Box width='50%' sx={{display: 'flex', flexDirection: 'row'}}>
            {
              sections.map((section) => {
                return <NavTabButton action={() => handleNav(section)} active={navSection === section}>{section}</NavTabButton>
              })
            }
          </Box> 
        </Box>
        <Box maxHeight='600px' padding='2rem' overflow='auto' className='hide-scrollbar'>
          <Notifications />
          Privacy
        </Box>
      </Box>
      <Box sx={{width: '35%'}}>
        <Box sx={{height: '100', display: 'flex', flexDirection: 'column'}}>
          
        </Box>
      </Box>
    </motion.div>
  )
}

export default Settings