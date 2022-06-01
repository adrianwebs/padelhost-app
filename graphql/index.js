import './db.js';
import { createServer } from 'http';
import express from 'express';

import { ApolloServer } from "apollo-server"
import { editPitch, findAvailablePitches, getClubPitches, typeDefPitches, addPitch, pitchCount } from "./models/pitch.js"
import { allUsers, findUser, createUser, editUser, deleteUser, countUsers, typeDefAuthor } from "./models/user.js"
import { allClubs, getClub, createClub, typeDefClubs } from "./models/clubs.js"
import { allReservations, getReservationPerClub, getReservationPerPlayer, createReservation, editReservation, deleteReservation ,typeDefReservation } from "./models/reservations.js"
import { typeDefChats, getRoom, getRooms, getRoomsUser ,addUserToRoom, createRoom, deleteRoom, sendMessage } from "./models/chat.js"

const resolvers = {
  Query: {
    getRoom,
    getRooms,
    getRoomsUser,
    pitchCount,
    findAvailablePitches,
    getClubPitches,
    allClubs,
    getClub,
    allReservations,
    getReservationPerClub,
    getReservationPerPlayer,
    allUsers,
    countUsers,
    findUser,
  },
  Mutation: {
    createRoom,
    deleteRoom,
    addUserToRoom,
    sendMessage,
    createClub,
    editPitch,
    addPitch,
    createReservation,
    editReservation,
    deleteReservation,
    createUser,
    deleteUser,
    editUser,
  }
}

const startServer = async () => { 
  const app = express()
  const httpServer = createServer(app)

  const apolloServer = new ApolloServer({
    typeDefs: [ typeDefClubs, typeDefAuthor, typeDefReservation, typeDefPitches, typeDefChats],
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
      app,
      path: '/api'
  })

  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  )
}

startServer()