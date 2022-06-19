import React, {useState, useEffect} from 'react'
import FeatherIcon from 'feather-icons-react'
import useUser from '../../../hooks/user/useUser'
import Avatar from '../../components/Avatar/Avatar'

import Dashboard from './Dashboard/Dashboard'
import Messages from './Messages/Messages'
import EditProfile from './EditProfile/EditProfile'
import Settings from './Settings/Settings'

import { motion, AnimatePresence } from 'framer-motion'

import { Box } from '@mui/material'

import { getRoomById, GET_UPDATED_ROOMS } from '../../../services/messageService'

import { useLazyQuery, useQuery, useSubscription } from '@apollo/client' 

function general() {
  const user = useUser()
  const [dashboardTab, setDashboardTab] = useState('Dashboard')

  const getContent = () => {
    switch (dashboardTab) {
      case 'Dashboard':
        return <Dashboard key='Dashboard' variants={variants}/>
      case 'Messages':
        return <Messages key='Messages' variants={variants} rooms={rooms}/>
      case 'EditProfile':
        return <EditProfile key='EditProfile' variants={variants}/>
      case 'Settings':
        return <Settings key='Settings' variants={variants}/>
      default:
        break;
    }
  }

  useSubscription(GET_UPDATED_ROOMS, {
    onSubscriptionData: ({subscriptionData}) => {
      setRooms(subscriptionData.data.messageAdded)
    }
  })

  const [rooms, setRooms] = useState([])

  const [getRooms, {loading, data, error}] = useLazyQuery(getRoomById, {
    onCompleted: (data) => {
      setRooms(data.getRoomsUser)
    }
  })

  useEffect(() => {
    if (user){ 
      getRooms({variables: {
        getRoomsUserId: user.id
      }})
    }
  }, [user])
  


  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }
  return (
    <>
      <div className='w-35 bg-light-dark min-vh-100 d-flex flex-column justify-content-center align-items-center shadow-panel'>
        <div className=''>
          { <Avatar alt={user ? user.username : 'avatar'} src={user ? user.avatar : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'} /> }
        </div>
        <div className='my-5 min-height-description'>
          <h3>{user && <span>{user.username}</span>}</h3>
          <span>{ user && user.hasOwnProperty('description') ? user.description : 'Hola, ¡Soy nuevo usando Padelhost!'}</span>
        </div>
        <Box width='100%' p='0 1rem' display='grid' gridTemplateColumns='200px 200px' justifyContent='center' sx={{'& > *': {m: '10px'}}}>
          <div className='p-5 rounded-4 shadow-dashboard-buttons flex-column d-flex align-items-center bg-white' onClick={() => setDashboardTab('Dashboard')}>
            <FeatherIcon className={dashboardTab == 'Dashboard' ? 'color-primary featherIcon' : 'color-inherit' } size='35' icon='command'/>
            <span className='text-dark mt-2'>Dashboard</span>
          </div>
          <div className='p-5 rounded-4 shadow-dashboard-buttons flex-column d-flex align-items-center bg-white' onClick={() => setDashboardTab('Messages')}>
            <FeatherIcon className={dashboardTab == 'Messages' ? 'color-primary featherIcon' : 'color-inherit' } size='35' icon='message-circle' />
            <span className='text-dark mt-2'>Mensajes</span>
          </div>
          <div className='p-5 rounded-4 shadow-dashboard-buttons flex-column d-flex align-items-center bg-white' onClick={() => setDashboardTab('EditProfile')}>
            <FeatherIcon className={dashboardTab == 'EditProfile' ? 'color-primary featherIcon' : 'color-inherit' } size='35' icon='edit' />
            <span className='text-dark mt-2'>Perfil</span>
            </div>
          <div className='p-5 rounded-4 shadow-dashboard-buttons flex-column d-flex align-items-center bg-white' onClick={() => setDashboardTab('Settings')}>
            <FeatherIcon className={dashboardTab == 'Settings' ? 'color-primary featherIcon' : 'color-inherit' } size='35' icon='settings' />
            <span className='text-dark mt-2'>Configuración</span>
            </div>
        </Box>
      </div>
      <div className='w-100 bg-white'>
        <div className='h-100 min-vh-100 w-100'>
          <div className='separator'></div>
          <div className='mx-5 my-3 min-h-70'>
            <AnimatePresence exitBeforeEnter >
              {getContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default general