import React from 'react'
import { Typography } from '@mui/material'

function NavTabButton({action, children, active}) {
  return (
    <Typography onClick={action} flex='1' flexGrow='0' className={`pe-3 fs-5 ${active ? 'border-bottom-active': ''}`}>
      {children}
    </Typography>
  )
}

export default NavTabButton