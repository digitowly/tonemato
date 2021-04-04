import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './type-graphql';
import { buildSchemaSync } from 'type-graphql';
import { PrismaClient } from '.prisma/client';

const port = 8080;
const app = express();
const prisma = new PrismaClient();

const server = new ApolloServer({
  schema: buildSchemaSync({ resolvers }),
  context: () => ({ prisma }),
});
server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('Hello tonemato!');
});

app.listen(port, () => {
  console.log('server is running on ', port);
});
