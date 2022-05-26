import { Button } from '@mui/material'
import React from 'react'

function ButtonFilledOutlined({background, children}) {
  return (
    <buton className={`customButton ${background === 'filled' ? 'filledButton' : 'outlinedButton'}`}>
      {children}
    </buton>
  )
}

export default ButtonFilledOutlined