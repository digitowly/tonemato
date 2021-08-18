import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../apollo/apolloClient';
import { useEffect, useState } from 'react';
import { setAccessToken } from '../accessToken';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetch('http://localhost:8080/refresh_token', {
        method: 'POST',
        credentials: 'include',
      });
      const {accessToken} = await result.json();
      setAccessToken(accessToken);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
