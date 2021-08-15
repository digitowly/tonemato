import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.get('/', (_req, res) => {
    res.send('hello');
  });

  app.listen(8080, () => {
    console.log('🚀 tonemato server is running! 🍅');
  });
})();
