import React, {useState, useEffect} from 'react'

import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import UserChat from '../../../components/Messages/UserChat'
import ChatFeed from '../../../components/Messages/ChatFeed'
import { getRoom } from '../../../../services/messageService'
import useUser from '../../../../hooks/user/useUser'

function Messages({variants, rooms}) {
  const [roomChats, setRoomChats] = useState([])
  const [playerChats, setPlayerChats] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(null)

  useEffect(() => {
    getRoom("62977b9b07bb6e7fdacae575").then(res => setSelectedRoom(res))
  }, [])

  useEffect(async () => {
    console.log(rooms)
    await setRoomChats(rooms.filter(room => room.type === 'match'))
    await setPlayerChats(rooms.filter(room => room.type === 'chat'))
    setSelectedRoom(rooms.find(room => room.id === '62977b9b07bb6e7fdacae575'))
  }, [rooms])
  
  const userMe = useUser()
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
                    userMe && playerChats.length != 0 ? playerChats.map((item, index) => {
                      return <UserChat
                      key={index}
                      image={item.users.find(user => user.id != userMe.id).avatar}
                      user={item.users.find(user => user.id != userMe.id).name}
                      message={item.messages.length != 0 ? item.messages[item.messages.length - 1].text : null}
                      messageUser={item.messages.length != 0 ? item.messages[item.messages.length - 1].user.name : null}
                      time={item.messages.length != 0 ? item.messages[item.messages.length - 1].createdAt : null} 
                      active={userFeed ? userFeed.active : false} 
                      unread={userFeed ? userFeed.noread : '5'}
                    />
                    })
                    :
                    <Box display='flex' flexDirection='row' alignItems='center' minWidth='100%' height='100%'>
                      <Box p='1rem' display='flex' alignItems='center' justifyContent='center' minWidth='100%'>
                        <Typography color='#c4c4c4' fontSize={12}>Empieza una conversación con un usuario</Typography>
                      </Box>
                    </Box>
                  }
                </Box>
                <Box  overflow='auto' className='hide-scrollbar'>
                  {
                    roomChats.length != 0 ? playerChats.map((item, index) => {
                      console.log(item)
                      return <UserChat
                      key={index}
                      image={item.avatar ? item.avatar : 'https://i.pravatar.cc/300'}
                      user={item.messages.length != 0 ? item.messages[item.messages.length - 1].user.name : null}
                      message={item.messages.length != 0 ? item.messages[item.messages.length - 1].text : null} 
                      time={item.messages.length != 0 ? item.messages[item.messages.length - 1].createdAt : null} 
                      active={userFeed ? userFeed.active : false} 
                      unread={userFeed ? userFeed.noread : '5'}
                    />
                    })
                    :
                    <Box display='flex' flexDirection='row' alignItems='center' minWidth='100%' height='100%'>
                      <Box p='1rem' display='flex' alignItems='center' justifyContent='center' minWidth='100%'>
                        <Typography color='#c4c4c4' fontSize={12}>Reserva una pista para empezar a chatear</Typography>
                      </Box>
                    </Box>
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