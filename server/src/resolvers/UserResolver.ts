import { compare, hash } from 'bcryptjs';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entities/UserEntity';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  async login(@Arg('email') email: string, @Arg('password') password: string) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(`user with mail ${email} not found`);
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new Error('invalid password');
    }

    return user;
  }

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
