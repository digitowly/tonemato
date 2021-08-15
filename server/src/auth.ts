import { Response } from 'express';
import { sign } from 'jsonwebtoken';
import { User } from './entities/UserEntity';

export const createAccessToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '15m',
    }
  );
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
};

export const sendRefreshToken = (res: Response, user: User) =>
  res.cookie('jid', createRefreshToken(user), { httpOnly: true });
