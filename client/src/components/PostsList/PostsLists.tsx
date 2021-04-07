import { useQuery } from '@apollo/client';
import React from 'react';
import { ListPostsQuery } from '../../generated/types';
import LISTS_POSTS from '../../graphql/queries/ListPosts.graphql';
import SubmitButton, { ButtonSize } from '../Buttons/SubmitButton/SubmitButton';
import Post from '../Post/Post';
import style from './PostsList.module.scss';

const PostsList: React.FC = () => {
  const { data } = useQuery<ListPostsQuery>(LISTS_POSTS);
  return (
    <div className={style['posts-list']}>
      <div className={style['posts-list__header']}>
        <h1>Posts</h1>
        <SubmitButton size={ButtonSize.large} value='create' />
      </div>
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
