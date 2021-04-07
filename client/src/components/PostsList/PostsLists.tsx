import { useQuery } from '@apollo/client';
import React from 'react';
import { ListPostsQuery } from '../../generated/types';
import LISTS_POSTS from '../../graphql/queries/ListPosts.graphql';
import Post from '../Post/Post';

const PostsList: React.FC = () => {
  const { data } = useQuery<ListPostsQuery>(LISTS_POSTS);
  return (
    <>
      {data?.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
        />
      ))}
    </>
  );
};

export default PostsList;
