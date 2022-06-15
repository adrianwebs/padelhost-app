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

function sendMessageToRoom(roomId, message) {
  const query = {
    query: `
      mutation sendMessage($roomid: ID!, $message: MessageInput!) {
        sendMessage(id: $roomid, message: $message) { 
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
