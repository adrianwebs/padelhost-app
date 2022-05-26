import React from 'react'

import {motion, AnimatePresence} from 'framer-motion'
import { Box } from '@mui/material'
import styles from './styles.module.css'
import MatchReservation from '../../../components/Profile/MatchReservation'

function dashboard({variants}) {
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    className='d-flex flex-rows w-100'
    >
        <Box sx={{width: '65%'}}>
          <h3><strong>Mis Reservas</strong></h3>
          <Box boxShadow='0 8px 12px -12px rgba(0, 0, 0, 0.5)' sx={{width: '95%',backgroundColor: 'rgba(255, 255, 255, .5)' , borderBottom:'solid 1px #EDEDED', display: 'flex', flexDirection: 'row', mx: '1.5rem'}}>
            <span className='me-4 fs-5 border-bottom-active'><strong>Activas</strong></span>
            <span className='me-4 fs-5'>Pasadas</span>
            <span className='me-3 fs-5'>Canceladas</span>
            <span className='me-3 fs-5'>Resultados</span>
          </Box>
          <Box maxHeight='600px' overflow='auto' className='hide-scrollbar'>
            <AnimatePresence exitBeforeEnter>
              <MatchReservation key='1' variants={variants} index='0'/>
              <MatchReservation key='2' variants={variants} index='1'/>
              <MatchReservation key='3' variants={variants} index='2'/>
              <MatchReservation key='4' variants={variants} index='3'/>
              <MatchReservation key='5' variants={variants} index='4'/>
            </AnimatePresence>
          </Box>
        </Box>
        <Box sx={{width: '35%'}}>
          <Box sx={{height: '100', display: 'flex', flexDirection: 'column'}}>
            
          </Box>
        </Box>
    </motion.div>
  )
}

export default dashboard