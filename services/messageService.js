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