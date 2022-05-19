import { gql } from "apollo-server"

export const users = [{
  name: "Adrian",
  description: "Hola soy Adri",
  phone: "1234124312",
  location: "Albacete",
  email: "adrygoleador@gmail.com",
  password: "adfasdf",
  category: "5ª",
  rank: "1567",
  id: '1432531243'
},{
  name: "Escuela de Padel Albacete",
  description: "Hola soy un club",
  phone: "1234124312asdf",
  location: "Albacete",
  email: "epa@gmail.com",
  password: "asdfasdf",
},{
  name: "Juan",
  description: "Hola soy asdfs",
  phone: "123412431asdf2",
  location: "Bdl",
  email: "joan@gmail.com",
  password: "adfasdfasdf",
  category: "5ª",
  rank: "1567",
  id: 'saafsdasdf'
}]

export const teams = [{
  firstPlayer: {
    name: "Adrian",
    description: "Hola soy Adri",
    phone: "1234124312",
    location: "Albacete",
    email: "adrygoleador@gmail.com",
    password: "adfasdf",
    category: "5ª",
    rank: "1567",
    id: '41341534'
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
}]

export const typeDefAuthor = gql`
  type User {
    id: ID!
    name: String!
    description: String
    phone: String!
    location: String!
    email: String!
    password: String!
    category: String
    rank: Int
  }

  type Query {
    allUsers: [User!]
    findUser(id: ID!): User
  }
`

export const allUsers = () => {
  return users
}

export const findUser = (root, args) => {
  return users.find(user => user.id === args.id)
}
