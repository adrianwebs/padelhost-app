import { gql } from "apollo-server"

export 
const pitches = [{
  id: 'asdfasdfasdfasdfasdf',
  club: 'Escuela de Padel Albacete',
  name: 'nº 6',
  city: 'albacete',
  street: 'campollano',
  type: 'doubles',
  timezones: [{
    price: '2.50€',
    timestart: '8:00',
    timeend: '14:00'
  },{
    price: '4.50€',
    timestart: '14:00',
    timeend: '17:00'
  }]
  
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
},{
  id: 'asdfasdfasdfasdfasdfa',
  club: {
    user: {
      name: "+ Que Padel",
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
      }
    ]
  },
  name: 'nº 6',
  city: 'albacete',
  street: 'campollano',
  type: 'doubles',
  price: '4.50€',
  timestart: '17:00',
  timeend: '20:00'
}]

export const timezones = [{
  price: '2.50€',
  timestart: '8:00',
  timeend: '14:00'
},{
  price: '4.50€',
  timestart: '14:00',
  timeend: '17:00'
},{
  price: '5.50€',
  timestart: '17:00',
  timeend: '20:00'
}]

export const typeDefPitches = gql`
  type Pitch {
    id: ID!
    club: Club!
    name: String!
    city: String
    street: String
    type: String!
    timezones: [Timezone]
  }

  type Timezone {
    timestart: String!
    timeend: String!
    price: String!
  }

  input TimezoneInput {
    timestart: String
    timeend: String
    price: String
  }

  type Query {
    findAvailablePitches(
      city: String!
      type: String!
      timestart: String!
      timeend: String!
    ): Pitch
    getClubPitches(id: ID!): [Pitch]
  }

  type Mutation {
    editPitch(
      id: ID!
      name: String
      timezones: [TimezoneInput]
    ): Pitch
  }
`

export const findAvailablePitches = (root, args) => {
  return pitches
}

export const getClubPitches = (root, args) => {
  return pitches.filter(pitch => pitch.club.id === args.id)
}

export const editPitch = (root, args) => {
  const pitchIndex = pitches.findIndex(pitch => pitch.id === args.id)
  if (pitchIndex === -1 ) {return null}

  const pitch = pitches[pitchIndex]
  const updatedPitch = {...pitch, name: args.name, timezones: args.timezones}
  pitches[pitchIndex] = updatedPitch
  
  return updatedPitch
}