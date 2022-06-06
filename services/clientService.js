import axios from 'axios';


async function clientService(query) {
  const url = 'https://padelhost-web.herokuapp.com'
  
  return await axios.post(url, query, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function(response) {
    return response.data.data
  }).catch(error => error)
}

export default clientService