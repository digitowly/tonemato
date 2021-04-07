import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      // TODO: check if user exists
      if (isSignIn) {
        const response = await axios({
          url: process.env.GRAPHQL_API_DOCKER,
          method: 'post',
          data: {
            query: `
                mutation CreateUser {
                    createUser(
                        data: { 
                            name: "${user.name}", 
                            email: "${user.email}", 
                            image: "${user.image}" 
                        }
                    ) {
                        id
                        name
                        email
                      }
                  }
                `,
          },
        });

        const data = await response.data;
        token.jwt = data.jwt;
        token.id = data.id;
      }
      return Promise.resolve(token);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
