import React, {useState, useEffect} from 'react'

import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import UserChat from '../../../components/Messages/UserChat'
import ChatFeed from '../../../components/Messages/ChatFeed'
import { getRoom } from '../../../../services/messageService'

function Messages({variants}) {
  const [roomChats, setRoomChats] = useState([])
  const [playerChats, setPlayerChats] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(null)

  useEffect(() => {
    getRoom("62977b9b07bb6e7fdacae575").then(res => setSelectedRoom(res))
  }, [])
  

  const userFeed = null
  return (
    <motion.div
    variants={variants}
    animate='visible'
    initial='hidden'
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    >
        <Box sx={{width: '100%'}}>
          <h3><strong>Mis Mensajes</strong></h3>
          <Box width='100%' display='flex' flexDirection='row'>
            <Box width='25%' height='660px'>
              <Box height='100%' sx={{
              display: 'flex', justifyContent:'center', flexDirection: 'column',
              '& > *': {
                margin: '1rem', flex:'1', borderRadius:'10px', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.25)' 
              }}}>
                <Box overflow='auto' className='hide-scrollbar'>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                      return <UserChat
                      key={index}
                      image={userFeed ? userFeed.image : 'Avatar'} 
                      user={userFeed ? userFeed.user : 'John Doe'} 
                      message={userFeed ? userFeed.message : 'Hacer el Chat asdfasdfasdgasdfgasfdgasfsd'} 
                      time={userFeed ? userFeed.time : '09:00'} 
                      active={userFeed ? userFeed.active : false} 
                      unread={userFeed ? userFeed.noread : '5'}
                    />
                    })
                  }
                </Box>
                <Box  overflow='auto' className='hide-scrollbar'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                      return <UserChat
                      key={index}
                      image={userFeed ? userFeed.image : 'Avatar'} 
                      user={userFeed ? userFeed.user : 'Escuela de Padel'} 
                      message={userFeed ? userFeed.message : 'Hacer el Chat asdfasdfasdgasdfgasfdgasfsd'} 
                      time={userFeed ? userFeed.time : '09:00'} 
                      active={userFeed ? userFeed.active : false} 
                      unread={userFeed ? userFeed.noread : '5'} 
                    />
                    })
                  }
                </Box>
              </Box>
            </Box>
            <Box width='75%' height='630px' margin='1rem 0' overflow='hidden' borderRadius='15px' boxShadow='0 2px 4px rgba(0, 0, 0, 0.25)'>
              <ChatFeed room={ selectedRoom ? selectedRoom : null} />
            </Box>
          </Box>
        </Box>
    </motion.div>
  )
}

export default Messages