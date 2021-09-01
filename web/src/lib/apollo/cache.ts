import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        displayPostCreator: {
          read() {
            return displayPostCreatorVar();
          },
        },
        backdrop: {
          read() {
            return backdropVar();
          },
        },
      },
    },
  },
});

export const displayPostCreatorVar = makeVar<Boolean>(false);
export const backdropVar = makeVar<Boolean>(false);
