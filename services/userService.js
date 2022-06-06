import axios from 'axios';

import clientService from './clientService';

export function userService({...args}) {
  const query = {
    query: `
      mutation addUser($name: String!, $phone: String, $location: String, $email: String!, $password: String!, $avatar: String!, $type: Type!) {
        createUser(name: $name, phone: $phone, location: $location, email: $email, password: $password, avatar: $avatar, type: $type) {
          name
          email
          description
          avatar
          location
          type
        }
      }
    }
    `,
    variables: {
      ...args
    }
  }
  clientService(query)
}

export function findUser({...args}) {
  const query = {
    query: `
      query findUserByID($findUserId: ID!) {
        findUser(id: $findUserId) {
          name
          email
          description
          avatar
          category
          rank
        }
      }
    `,
    variables: {
      ...args
    }
  }
  clientService(query)
}