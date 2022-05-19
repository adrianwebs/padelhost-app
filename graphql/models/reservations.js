import { gql } from "apollo-server"

export const reservations = [{
  id: "asdfasdfadsa",
  price: "4.50€",
  timestart: "17:30",
  timeend: "19:00",
  teams: [{
    firstPlayer: {
      name: "Adrian",
      description: "Hola soy Adri",
      phone: "1234124312",
      location: "Albacete",
      email: "adrygoleador@gmail.com",
      password: "adfasdf",
      category: "5ª",
      rank: "1567",
      id: "143253124332"
    },
    secondPlayer: {
      name: "Juan",
      description: "Hola soy asdfs",
      phone: "123412431asdf2",
      location: "Bdl",
      email: "joan@gmail.com",
      password: "adfasdfasdf",
      category: "5ª",
      rank: "1567",
      id: "1432531243"
    }
  }],
  status: "Uncompleted",
  pitch: {
    id: 'asdfasdfasdfasd',
    club: {
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
        }
      ]
    },
    name: 'nº 6',
    city: 'albacete',
    street: 'campollano',
    type: 'doubles',
    price: '4.50€',
    timestart: '14:00',
    timeend: '17:00'
  },
}]

export const typeDefReservation = gql`
  type Reservation {
    id: ID!
    price: String!
    timestart: String!
    timeend: String!
    teams: [Team!]
    status: String!
    pitch: Pitch!
  }

  type Query {
    allReservations: [Reservation!]
    getReservationPerClub(id: ID!): [Reservation!]
    getReservationPerPlayer(id: ID!): [Reservation]
  }
`

export const getReservationPerClub = () => {

}

export const getReservationPerPlayer = (root, args) => {
  return reservations.filter(book => book.teams.map((team) => {
    if (team.firstPlayer.id === args.id || team.secondPlayer.id === args.id) {
      return book
    }
  }))
}

export const allReservations = () => {
  return reservations
}