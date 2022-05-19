import { gql, UserInputError, ApolloServer } from "apollo-server"
import { editPitch, findAvailablePitches, getClubPitches, typeDefPitches } from "./models/pitch.js"
import { allUsers, findUser, typeDefAuthor } from "./models/user.js"
import { clubs } from "./models/clubs.js"
import { allReservations, getReservationPerClub, getReservationPerPlayer, typeDefReservation } from "./models/reservations.js"
import v1 from 'uuid'

const typeDefs = gql`
  type Club {
    user: User!
    pitches: [Pitch!]
  }
  
  type Team {
    firstPlayer: User!
    secondPlayer: User
  }

  type Query {
    pitchCount: Int!
    allPitches: [Pitch!]
    findPitchClub(club: String!): [Pitch]
    allClubs: [Club!]
    getClub(clubname: String!): Club
  }

  type Mutation {
    addPitch(
      name: String!
      city: String
      street: String
      type: String!
      price: String!
      timestart: String!
      timeend:String!
    ): Pitch
    editDescription (
      name: String!
      description: String!
    ) : User
  }
`

const resolvers = {
  Query: {
    findAvailablePitches,
    getClubPitches,
    allClubs: () => clubs,
    getClub: (prev, args) => {
      const {clubname} = args
      return clubs.find(club => club.user.name === clubname)
    },
    allReservations,
    getReservationPerClub,
    getReservationPerPlayer,
    allUsers,
    findUser,
  },
  Mutation: {
    editPitch,
    addPitch: (root, args) => {
      if (pitches.find(pitch => pitch.name === args.name)) {
        throw new UserInputError('Pitch name must be unique', {
          invalidArgs: args.name
        })
      }
      const pitch = {...args,club: {
        user: {
          name: "Escuela de Padel Albacete",
          description: "Hola soy un club",
          phone: "1234124312asdf",
          location: "Albacete",
          email: "epa@gmail.com",
          password: "asdfasdf",
        },
        pitches: [
          {
            id: 'asdfasdfasdfasdfasdf',
            club: 'Escuela de Padel Albacete',
            name: 'nº 6',
            city: 'albacete',
            street: 'campollano',
            type: 'doubles',
            price: '2.50€',
            timestart: '8:00',
            timeend: '14:00'
          },{
            id: 'asdfasdfasdfasd',
            club: 'Escuela de Padel Albacete',
            name: 'nº 6',
            city: 'albacete',
            street: 'campollano',
            type: 'doubles',
            price: '4.50€',
            timestart: '14:00',
            timeend: '17:00'
          }]
        },
        id: v1()}
      pitches.push(pitch)
      return pitch
    },
    editDescription: (root, args) => {
      const userIndex = users.findIndex(user => user.name === args.name)
      if (userIndex === -1) {
        return null
      }

      const user = users[userIndex]
      const updatedUser = {...user, description: args.description}
      users[userIndex] = updatedUser
      return updatedUser
    }
  }
}

const server = new ApolloServer({
  typeDefs: [ typeDefs, typeDefAuthor, typeDefReservation, typeDefPitches],
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`)
})