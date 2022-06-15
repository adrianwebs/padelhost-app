import clientService from "./clientService";

function getRoomById(id) {
  const query = {
    query: `
      query getRoomById($id: ID!) {
        room(id: $id) {
          id
          name
          messages {
            id
            content
            createdAt
            user {
              id
              name
            }
          }
        }
      }
    `,
    variables: {
      id
    }
  }
}

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
