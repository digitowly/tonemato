import { Arg, Mutation, Query } from 'type-graphql';
import { Connection } from 'typeorm';
import { Post } from '../entities/PostEntitiy';
import { User } from '../entities/UserEntity';

export class PostResolver {
  //ALL POSTS
  @Query(() => [Post])
  async posts() {
    return Post.find();
  }

  //CREATE POST
  @Mutation(() => Boolean)
  async createPost(
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Arg('authorId') authorId: number
  ) {
    try {
      const author = await User.findOne(authorId);
      await Post.insert({ title, body, authorId });
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
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
