import axios from 'axios';
import { SubscriptionClient} from 'graphql-subscriptions-client';

async function clientService(query) {
  const url = 'http://localhost:5000/graphql';
  
  return await axios.post(url, query, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function(response) {
    return response.data.data
  }).catch(error => error)
}

export default clientService

export async function subscriptionService(){
  
}