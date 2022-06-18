import React from 'react'

import {motion} from 'framer-motion'
import { Avatar, Box, Typography } from '@mui/material'
import useUser from '../../../hooks/user/useUser'

function UserChat({image, user, message, messageUser, time, active, unread}) {
  var date = time ? new Date(0, 0, 0, 0, 0, 0, time) : null
  const userMe = useUser()
  return (
    <div
    
    >
      <Box display='flex' flexDirection='row' width='100%' backgroundColor='#fff' padding='1rem'
        sx={{
          position: 'relative',
          '&:hover': {backgroundColor: '#f9f9f9', cursor: 'pointer'},
          '&:before': {content: '""', position: 'absolute', left: '12.5%', bottom: '0', width: '75%', borderBottom: 'solid 1px #EDEDED'}
        }}
      >
        <Avatar src={image}/>
        <Box display='flex' flexDirection='column' width='80%' paddingLeft='1rem' >
          <Box flex='1' display='flex' flexDirection='row'  justifyContent='space-between' alignItems='center'>
            <Typography fontWeight='700' fontSize={14}><span className='color-primary'>· </span> {user}</Typography>
            <Typography fontWeight='600' fontSize={14}>{date && date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })}</Typography>
          </Box>
          <Box flex='1' maxWidth='100%' display='flex' flexDirection='row' alignItems='center'>
            <Typography fontSize={14} color='#b4b4b4' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'><strong>{userMe && messageUser === userMe.name ? 'Me: ' : ''}</strong>{message}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default UserChat