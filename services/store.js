import React from 'react'
import { createStore } from 'redux'
import navbarReducer from '../pages/components/navbar/navbarReducer'

export const store = createStore(navbarReducer)