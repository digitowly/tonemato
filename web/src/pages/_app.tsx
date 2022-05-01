import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo/client';
import Layout from '../components/Layout/Layout';

function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps);

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default App;
