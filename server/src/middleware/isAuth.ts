import { verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';
import { AppContext } from '../types';

export const isAuth: MiddlewareFn<AppContext> = ({ context }, next) => {
  // bearer jajshdlsa(token)

  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error('no authorization');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
    context.payload = payload;
  } catch (err) {
    throw new Error(err.message);
  }

  return next();
};
