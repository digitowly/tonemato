import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { MusicianPost, Post } from '../entities/PostEntitiy';
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
        @Arg('authorId') authorId: number
    ) {
        try {
            const author = await User.findOne(authorId);
            const post = new MusicianPost();
            post.title = title;
            post.body = body;
            post.author = author;
            await MusicianPost.insert(post);
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
