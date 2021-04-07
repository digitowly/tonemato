import { useQuery } from '@apollo/client';
import React from 'react';
import { ListPostsQuery } from '../../generated/types';
import LISTS_POSTS from '../../graphql/queries/ListPosts.graphql';
import Post from '../Post/Post';

const PostsList: React.FC = () => {
  const { data } = useQuery<ListPostsQuery>(LISTS_POSTS);
  return (
    <div>
      <h1>Posts</h1>
      {data?.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default PostsList;
