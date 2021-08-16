import { compare, hash } from 'bcryptjs';
import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from '../auth';
import { User } from '../entities/UserEntity';
import { isAuth } from '../middleware/isAuth';
import { AppContext } from '../types';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  secretConent(@Ctx() { payload }: AppContext) {
    return 'this is a secret!' + payload.userId;
  }

  // REVOKE REFRESH TOKENS
  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, 'tokenVersion', 1);

    return true;
  }

  // LOGIN
  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: AppContext
  ) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(`user with mail ${email} not found`);
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new Error('invalid password');
    }

    sendRefreshToken(res, user);

    res.cookie('jid', createRefreshToken(user), { httpOnly: true });

    return {
      accessToken: createAccessToken(user),
    };
  }

  // REGISTER
  @Mutation(() => Boolean)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    if (email) {
      const user = await User.findOne({ where: { email } });
      if (user) throw new Error('user already exists');
    } else {
      throw new Error('no email');
    }
    if (password) {
      const hashedPassword = await hash(password, 15);
      User.insert({
        email,
        password: hashedPassword,
      });
      return true;
    } else {
      throw new Error('bad password');
    }
  }

  // REMOVE USER
  @Mutation(() => Boolean)
  async remove(@Arg('id') id: number) {
    const userToRemove = await User.findOne({ where: { id } });
    try {
      const removedUser = await User.remove(userToRemove);
      console.log(`removed ${removedUser.email} from database`);
      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
