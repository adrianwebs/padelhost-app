import React from 'react'

const navbarReducer = (state = 'General', action) => {
  if (action.type === '@navbar/changed') {
    return action.payload
  }
  return (
    state
  )
}

export default navbarReducer