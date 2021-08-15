import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import { User } from './entities/UserEntity';
import { createAccessToken } from './auth';

(async () => {
  const app = express();

  app.use(cookieParser());

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.get('/', (_req, res) => {
    res.send('hello from tonemato');
  });

  app.post('/refresh_token', async (req, res) => {
    console.log(req.cookies);
    const token = req.cookies.jid;

    //check if cookie has valid refresh token
    if (!token) {
      res.send({ ok: false, accessToken: '' });
    }

    let payload = null;

    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      res.send({ ok: false, accessToken: '' });
      throw new Error(err.message);
    }

    // if valid refresh token
    // return new access token
    const user = await User.findOne({ id: payload.userId });

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  app.listen(8080, () => {
    console.log('🚀 tonemato server is running! 🍅');
  });
})();
