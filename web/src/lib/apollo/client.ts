import { useMemo } from 'react';
import merge from 'deepmerge';
import cookie from 'cookie';
import type { GetServerSidePropsContext } from 'next';
import type { IncomingMessage } from 'http';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-unfetch';
import typeDefs from './typeDefs.graphql';
import { cache } from './cache';

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = '__APOLLO_STATE__';
export const COOKIES_TOKEN_NAME = 'jid';

const getToken = (req?: IncomingMessage) => {
  const parsedCookie = cookie.parse(
    req ? req.headers.cookie ?? '' : document.cookie
  );

  return parsedCookie[COOKIES_TOKEN_NAME];
};

const isServer = () => typeof window === 'undefined';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const httpLink = new HttpLink({
    uri:
      typeof window === 'undefined'
        ? process.env.NEXT_PUBLIC_GRAPHQL_API_CONTAINER
        : process.env.NEXT_PUBLIC_GRAPHQL_API,
    credentials: 'include',
  });

  const authLink = setContext(async (_, { headers }) => {
    // Get the authentication token from cookies
    const refreshToken = getToken(ctx?.req);

    let accessToken = '';
    if (isServer()) {
      try {
        const result = await fetch(
          process.env.NEXT_PUBLIC_API_CONTAINER_REFRESH_TOKEN,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              cookie: 'jid=' + refreshToken,
            },
          }
        );
        const data = await result.json();
        accessToken = data.accessToken ? data.accessToken : '';
      } catch (err) {
        console.log(err.message);
      }
    } else {
      try {
        const result = await fetch(process.env.NEXT_PUBLIC_API_REFRESH_TOKEN, {
          method: 'POST',
          credentials: 'include',
        });
        const data = await result.json();
        accessToken = data.accessToken ? data.accessToken : '';
      } catch (err) {
        console.log(err.message);
      }
    }

    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache,
    typeDefs,
  });
};

export function initializeApollo(initialState = null, ctx = null) {
  const client = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();

    // Merge the existing cache into data passed from
    // getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    client.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return client;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: PageProps
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
}
