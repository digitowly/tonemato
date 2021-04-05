import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloDockerClient = new ApolloClient({
  uri: process.env.GRAPHQL_API_DOCKER,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default apolloDockerClient;
