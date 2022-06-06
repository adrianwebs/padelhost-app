import axios from 'axios';


function clientService(query) {
  const url = 'https://padelhost-web.herokuapp.com'
  
  axios.post(url, query, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    console.log(response.data)
  }).catch(error => {
    console.log(error)
  })

  return null
}

export default clientService