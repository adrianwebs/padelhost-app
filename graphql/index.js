import './db.js';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import { ApolloServer } from "apollo-server-express";
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

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);

const startApolloServer = async(app, httpServer) => {
  const server = new ApolloServer({
    typeDefs: [ typeDefClubs, typeDefAuthor, typeDefReservation, typeDefPitches, typeDefChats],
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);

export default httpServer;