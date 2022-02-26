import { compare, hash } from 'bcryptjs';
import { verify } from 'jsonwebtoken';
import {
    Arg,
    Ctx,
    Field,
    Float,
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
import { Instrument } from '../entities/InstrumentEntity';
import { User } from '../entities/UserEntity';
import { isAuth } from '../middleware/isAuth';
import { AppContext } from '../types';

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;

    @Field(() => User)
    user: User;
}

@Resolver()
export class UserResolver {
    //USERS
    @Query(() => [User])
    users() {
        return User.find({ relations: ['musician_posts', 'instruments'] });
    }

    //AUTHED USER
    @Query(() => User, { nullable: true })
    authedUser(@Ctx() context: AppContext) {
        const authorization = context.req.headers.authorization;

        if (!authorization) {
            console.log('failed auth');
            return null;
        }

        try {
            const token = authorization.split(' ')[1];
            const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET);
            return User.findOne(payload.userId, { relations: ['instruments'] });
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }

    // TEST SECRET
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

        sendRefreshToken(res, createRefreshToken(user));

        res.cookie('jid', createRefreshToken(user), { httpOnly: true });

        return {
            accessToken: createAccessToken(user),
            user,
        };
    }

    // LOGOUT
    @Mutation(() => Boolean)
    async logout(@Ctx() { res }: AppContext) {
        sendRefreshToken(res, '');
        return true;
    }

    // REGISTER
    @Mutation(() => Boolean)
    async register(
        @Arg('email') email: string,
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        if (email) {
            try {
                const user = await User.findOne({ where: { email } });
                if (user) throw new Error('user already exists');
            } catch (e) {
                console.log(e);
            }
        } else {
            throw new Error('no email');
        }
        if (password && username) {
            try {
                const hashedPassword = await hash(password, 15);
                User.insert({
                    username,
                    email,
                    password: hashedPassword,
                });
                return true;
            } catch (e) {
                console.log('kinda bad stuff happend: ', e);
            }
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

    // UPDATE USERNAME
    @Mutation(() => User)
    async updateUsename(
        @Arg('newUsername') newUsername: string,
        @Arg('userId') userId: number
    ) {
        const nameExists = await User.findOne({
            where: { username: newUsername },
        });
        if (nameExists) {
            throw new Error('name already exists!');
        }
        try {
            const user = await User.findOne(userId);
            user.username = newUsername;
            user.save();
            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // UPDATE EMAIL
    @Mutation(() => User)
    async updateEmail(
        @Arg('newEmail') newEmail: string,
        @Arg('userId') userId: number
    ) {
        const emailExists = await User.findOne({ where: { email: newEmail } });
        if (emailExists) {
            throw new Error('email already in use!');
        }
        try {
            const user = await User.findOne(userId);
            user.email = newEmail;
            user.save();
            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // ADD INSTRUMENT
    @Mutation(() => Boolean)
    async addInstrument(
        @Arg('instrumentId') instrumentId: number,
        @Arg('userId') userId: number
    ) {
        try {
            const user = await User.findOne(userId);
            const newInstrument = await Instrument.findOne(instrumentId);
            if (user.instruments && !user.instruments.includes(newInstrument)) {
                user.instruments.push(newInstrument);
            } else {
                user.instruments = [newInstrument];
            }
            await user.save();
            return true;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // UPDATE INSTRUMENTS
    @Mutation(() => [Instrument])
    async updateInstruments(
        @Arg('updatedInstrumentIds', () => [Float])
        updatedInstrumentIds: number[],
        @Arg('userId') userId: number
    ) {
        try {
            const user = await User.findOne(userId);
            const newInstruments = await Instrument.findByIds(
                updatedInstrumentIds
            );
            user.instruments = newInstruments;
            await user.save();
            return newInstruments;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}
