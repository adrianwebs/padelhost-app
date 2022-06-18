import axios from 'axios';

import clientService from './clientService';

export async function addUser({...args}) {
  const query = {
    query: `
      mutation addUser($id: ID!, $name: String!, $phone: String, $location: String, $email: String!, $password: String, $avatar: String, $type: Type) {
        createUser(id: $id, name: $name, phone: $phone, location: $location, email: $email, password: $password, avatar: $avatar, type: $type) {
          name
          email
          description
          avatar
          location
          type
        }
      }
    `,
    variables: {
      ...args
    }
  }
  return await clientService(query).then(function(response) {
    return response.createUser
  })
}

export async function findUser({...args}) {
  const query = {
    query: `
      query findUserByID($findUserId: ID!) {
        findUser(id: $findUserId) {
          id
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
  return await clientService(query).then(function(response) {
    return response.findUser
  })
}