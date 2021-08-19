import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../apollo/apolloClientTest';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
