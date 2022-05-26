import React from 'react'
import { Send, EmojiEmotions, MoreVert} from '@mui/icons-material'
import { Box, Paper, IconButton, InputBase, Divider, Avatar, Typography } from '@mui/material'
import useUser from '../../../hooks/user/useUser'

function ChatFeed() {
  const user = useUser()
  return (
    <>
      <Box height='100%' maxHeight='100%' width='100%' display='flex' flexDirection='column' justifyContent='center'>
        <Box width='100%' maxHeight='100%' justifySelf='start' display='flex' flexDirection='row'>
          <Box
            sx={{ p: '0 1rem', display: 'flex', alignItems: 'center', justifyContent:'space-between', width: '100%', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            <Box display='flex' alignItems='center'>
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <Avatar />
              </IconButton>
              <Typography fontWeight={700} p='0.5rem'>John Doe</Typography>
            </Box>
            
            <IconButton aria-label="directions" justifySelf='end'>
              <MoreVert />
            </IconButton>
          </Box>
        </Box>
        <Box flexGrow='1' padding='2rem' overflow='auto' maxHeight='100%' display='flex' flexDirection='column' className='hide-scrollbar'>
          <Message 
            time='00:00' 
            text='hi everyone how are you?' 
            type='match' 
            avatar='null' 
            me={user ? user.username : null} 
            player='Jessie Woo' 
          />
          <Message 
            time='00:00' 
            text='hi everyone how are you?' 
            type='match'
            avatar='null' 
            me={user ? user.username : null} 
            player={user ? user.username : 'someone'} 
          />
        </Box>
        <Box width='100%' padding='2rem' justifySelf='end' display='flex' flexDirection='row' boxShadow='0 -1px 4px rgba(0,0,0,0.25)'>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <EmojiEmotions />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Escribe algo que enviar.."
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px', color:"#69DFE2" }} aria-label="directions">
              <Send />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default ChatFeed


export const Message = ({time, text, avatar, player, me, type}) => {
  return (
    <div>
      <Box display='flex' alignItems='center' flexDirection={player === me ? 'row-reverse' : 'row'} width='100%'>
        
        {type === 'match' && 
          <Box textAlign='center'>
            <Avatar />
            <Typography fontSize={12} margin='0.5rem 0'>{time}</Typography>
          </Box>
        }
        <Box p='10px' m='10px' backgroundColor={player === me ? '#69DFE222' : ''} boxShadow='0 2px 4px rgba(0, 0, 0, 0.2)' borderRadius={player === me ? '15px 0 15px 15px' : '0 15px 15px 15px'}>
          <Box display='flex' flexDirection={player === me ? 'row-reverse' : 'row'} justifyContent='space-between' alignItems='center'>
            <Typography fontWeight={600} fontSize={16}>{player} </Typography>
            <Typography fontWeight={500} fontSize={12} m={player === me ? '0 1rem 0 0' : '0 0 0 1rem'}>{type === 'player' ? time : ''}</Typography>
          </Box>
          <Typography>{text}</Typography>
        </Box>
      </Box>
    </div>
  )
}