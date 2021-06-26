import { useQuery } from '@apollo/client';
import React from 'react';
import { ListPostsQuery } from '../../generated/types';
import LIST_POSTS from '../../graphql/queries/ListPosts.graphql';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import Post from '../Post/Post';
import BandPostsList from './BandPostsList';
import style from './PostsList.module.scss';

const PostsList: React.FC = () => {
  const { data } = useQuery<ListPostsQuery>(LIST_POSTS);
  return (
    <div className={style['posts-list']}>
      <div className={style['posts-list__header']}>
        <h1>Posts</h1>
        <PrimaryButton label='create' />
      </div>
      {data?.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
        />
      ))}
      <BandPostsList />
    </div>
  );
};

export default PostsList;
