import { ApolloClient, InMemoryCache } from '@apollo/client';

// CREATE NEW APOLLO CLIENT INSTANCE
const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/mimic-fi/v3-mainnet/',
  cache: new InMemoryCache(),
});

export default client;

