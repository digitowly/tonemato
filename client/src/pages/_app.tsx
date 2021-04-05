import '../styles/globals.scss';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../apollo/apolloClient';

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
