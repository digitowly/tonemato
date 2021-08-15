import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../apollo/apolloClient';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
