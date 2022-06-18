import { ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
})

const wslink = 
  typeof window !== "undefined" ? new GraphQLWsLink(createClient({
  url: 'ws://localhost:5000/graphql',
})) : null;

const splitLink = 
  typeof window !== "undefined" && wslink != null ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wslink,
  httpLink,
) : httpLink;


export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql',
});
