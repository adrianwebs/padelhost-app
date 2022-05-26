import React from 'react'

import {signOutUser} from '../../../../firebase/client'
import { Typography, Button, FormGroup, FormControlLabel, Switch, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'

function Notifications() {
  const handleSignOut = () => {
    signOutUser()
  }
  return (
    <div>
      <Typography fontSize={20}>Choose when and how to be notified</Typography>
      <Typography paddingBottom='1rem'>Select push and email notifications you'd like to receive</Typography>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch name="browserNots" />
          }
          label="Get notifications in this browser"/>
        <FormControlLabel
          control={
            <Switch name="jason" />
          }
          label="Tournaments announcements which I am suscribed to"
        />
        <FormControlLabel
          control={
            <Switch name="antoine" />
          }
          label="Recommended Tournaments"
        />
        <FormControlLabel
          control={
            <Switch name="antoine" />
          }
          label="Activity of my Matches"
        />
        <FormControlLabel
          control={
            <Switch name="antoine" />
          }
          label="Reviews"
        />
        <FormControlLabel
          control={
            <Switch name="antoine" />
          }
          label="Chat Messages"
        />
        <FormControlLabel
          control={
            <Switch name="antoine" />
          }
          label="Friend Requests"
        />
        Language
        <FormControl variant="filled" sx={{ m: 1, width: '10%' }}>
          <InputLabel id="demo-simple-select-filled-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={'Spanish'}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Spanish</MenuItem>
            <MenuItem value={30}>French</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <Button color='secondary' onClick={handleSignOut}>Cerrar Sesión</Button>

    </div>
  )
}

export default Notifications