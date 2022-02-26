import { Arg, Float, Mutation, Query, Resolver } from 'type-graphql';
import { Genre } from '../entities/GenreEntity';
import { Instrument } from '../entities/InstrumentEntity';
import { MusicianPost } from '../entities/PostEntitiy';
import { User } from '../entities/UserEntity';

@Resolver()
export class PostResolver {
    //ALL POSTS
    @Query(() => [MusicianPost])
    async musicianPosts() {
        return MusicianPost.find({
            relations: ['author', 'author.instruments'],
        });
    }

    //CREATE POST
    @Mutation(() => MusicianPost)
    async createMusicianPost(
        @Arg('title') title: string,
        @Arg('body') body: string,
        @Arg('authorId') authorId: number,
        @Arg('instrumentIds', () => [Float]) instrumentIds: number[],
        @Arg('genreIds', () => [Float]) genreIds: number[]
    ) {
        try {
            const author = await User.findOne(authorId);
            const post = new MusicianPost();
            const instruments = await Instrument.findByIds(instrumentIds);
            const genres = await Genre.findByIds(genreIds);
            post.title = title;
            post.body = body;
            post.author = author;
            post.preferredGenres = genres;
            post.preferredInstruments = instruments;
            await MusicianPost.insert(post);
            await post.save();
            return post;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    //DELETE POST
    @Mutation(() => Boolean)
    async deletePost(@Arg('postId') postId: number) {
        try {
            const postToRemove = await MusicianPost.findOne(postId);
            await MusicianPost.remove(postToRemove);
            return true;
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }
}
