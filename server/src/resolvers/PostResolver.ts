import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Post } from '../entities/PostEntitiy';
import { User } from '../entities/UserEntity';

@Resolver()
export class PostResolver {
  //ALL POSTS
  @Query(() => [Post])
  async posts() {
    return Post.find({ relations: ['author'] });
  }

  //CREATE POST
  @Mutation(() => Post)
  async createPost(
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Arg('authorId') authorId: number
  ) {
    try {
      const author = await User.findOne(authorId);
      const post = new Post();
      post.title = title;
      post.body = body;
      post.author = author;
      await Post.insert(post);
      return post;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  //DELETE POST
  @Mutation(() => Boolean)
  async deletePost(@Arg('postId') postId: number) {
    try {
      const postToRemove = await Post.findOne(postId);
      await Post.remove(postToRemove);
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }
}
