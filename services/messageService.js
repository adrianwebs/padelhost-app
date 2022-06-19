import subscriptionService from "./clientService"
import clientService from "./clientService";
import { gql } from "@apollo/client";

export const getRoomById = gql`
  query getRoomById($getRoomsUserId: ID!) {
    getRoomsUser(id: $getRoomsUserId) {
      id
      name
      type
      users {
        id
        name
        avatar
      }
      messages {
        user {
          name
          avatar
        }
        text
        createdAt
      }
    }
  }
`


export async function getRoom(roomId) {
  const query = {
    query: `
      query getRoom($getRoomId: ID!) {
        getRoom(id: $getRoomId) {
          id
          name
          messages {
            text
            user {
              name
              avatar
            }
            createdAt
          }
          type
          users {
            id
            name
            category
            rank
            email
            avatar
          }
        }
      }
    `,
    variables: {
      getRoomId: roomId
    }
  }
  return await clientService(query).then(function(response) {
    return response.getRoom
  })
}

export async function sendMessageToRoom(roomId, message) {
  const query = {
    query: `
      mutation sendMessage($roomid: ID!, $message: MessageInput!) {
        sendMessage(id: $roomid, message: $message) { 
          id
          messages {
            text
            user {
              name
              avatar
            }
            createdAt
          }
          type
          users {
            name
            category
            rank
            email
            avatar
          }
        }
      }
    `,	
    variables: {
      roomid: roomId,
      message: message
    }
  }
  return await clientService(query).then(function(response) {
    return response.sendMessage
  })
}

export const GET_UPDATED_ROOMS = gql`
  subscription messageAdded {
    messageAdded {
      id
      name
      type
      users {
        id
        name
        avatar
      }
      messages {
        text
        createdAt
        user {
          name
          avatar
        }
      }
    }
  }
`