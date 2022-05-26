import React from 'react'
import { Box } from '@mui/material'
import FeatherIcon from 'feather-icons-react'
import ButtonFilledOutlined from '../ButtonFilledOutlined'
import {motion} from 'framer-motion'

function MatchReservation({variants, index}) {
  return (
    <motion.article
      variants={variants}
      animate='visible'
      initial='hidden'
      exit='hidden'
      transition={{duration: 1, delay: index * 0.4, ease: 'easeInOut'}}
      layoutId={index}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 0 4px rgba(0,0,0,0.25)',
        minHeight: '125px',
        borderRadius: '10px',
        margin: '2rem',
        maxWidth: '765px',
        transition: '.3s ease-in-out',
        '&:hover': {boxShadow: '0 0 10px rgba(0,0,0,0.35)'}
      }}>
        <Box display='flex' flexDirection='column' minHeight='100%' padding='.75rem' whiteSpace='nowrap' justifyContent='space-between'>
          <span><strong>Escuela de Padel Albacete</strong> - Nº6</span>
          <span><FeatherIcon icon='calendar' className='color-primary'/> 2022/05/17</span>
          <span><FeatherIcon icon='clock' className='color-primary'/> 17:30 - 19:00</span>
          <span><FeatherIcon icon='map-pin' className='color-primary'/> Albacete</span>
        </Box>
        <Box display='flex' flexDirection='column' minHeight='100%' width='100%' justifyContent='center' alignItems='center'>
          <strong>Partido Competitivo</strong>
          <span>5ª Categoria</span>
          <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' textAlign='center'>
            <span>Darlene Robertson<br /><span className='color-primary'>1567</span></span>
            <span>Kristin Watson<br /><span className='color-primary'>1567</span></span>
          </Box>
          <strong>VS</strong>
          <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' textAlign='center'>
            <span>Courtney Henry<br /><span className='color-primary text-end'>1567</span></span>
            <span>Brooklyn Simmons<br /><span className='color-primary text-end'>1567</span></span>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' minHeight='100%' padding='.75rem' whiteSpace='nowrap' alignItems='center' justifyContent='end' sx={{'& > *': {margin: '3px 0'}}}>
          <span><FeatherIcon icon='user' className='color-primary'/>4.50€</span>
          <ButtonFilledOutlined background='outlined'><span>Chat</span><FeatherIcon size='18' stroke-width='2.5' icon='message-square' /></ButtonFilledOutlined>
          <ButtonFilledOutlined background='filled'><span>Cancelar</span><FeatherIcon size='18' stroke-width='2.5' icon='alert-triangle' /></ButtonFilledOutlined>
        </Box>
      </Box>
    </motion.article>
  )
}

export default MatchReservation